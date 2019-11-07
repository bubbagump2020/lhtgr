import React from 'react'
import NewConversationForm from './NewConversationForm'
import Cable from './Cable'
import MessagesArea from './MessagesArea'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { Button, Fade, Card, CardGroup, CardBody, CardTitle, Collapse } from 'reactstrap'

export default class ConversationsList extends React.Component {

    state = {
        fadeIn: false,
        isOpen: false,
        conversations: [],
        activeConversation: null
    }

    toggle = () => {
      if(this.state.fadeIn === false){
        this.setState({ fadeIn: true })
      }
      if(this.state.fadeIn === true){
        this.setState({ fadeIn: false })
      }
    }

    toggleOpen = () => {
      if(this.state.isOpen === false){
        this.setState({ isOpen: true})
      }
      if(this.state.isOpen === true){
        this.setState({ isOpen: false})
      }
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/conversations')
            .then(response => response.json())
            .then(conversations => this.setState({ conversations }))
    }

    handleClick = id => {
        console.log(id)
        this.setState({ activeConversation: id})
    }

    handleReceivedConversation = response => {
        const { conversation } = response
        this.setState({
            conversations: [...this.state.conversations, conversation]
        })
    }

    handleReceivedMessage = response => {
        const { message } = response
        console.log(message)
        const conversations =[...this.state.conversations]
        const conversation = conversations.find( conversation => conversation.id === message.conversation_id)
        conversation.messages = [...conversation.messages, message]
        this.setState({ conversations })
    }

    render = () => {
        const { conversations, activeConversation } = this.state;
        return (
          <div className="conversationsList">
            <ActionCableConsumer
              channel={{ channel: 'ConversationsChannel' }}
              onReceived={this.handleReceivedConversation}
            />
            {this.state.conversations.length ? (
              <Cable
                conversations={conversations}
                handleReceivedMessage={this.handleReceivedMessage}
              />
            ) : null}
            <Button onClick={this.toggleOpen}>See Conversations List</Button>
            <Collapse isOpen={this.state.isOpen}>
              {mapConversations(conversations, this.handleClick)}
              <NewConversationForm />
            </Collapse>
            {activeConversation ? (
              <MessagesArea
                conversation={findActiveConversation(
                  conversations,
                  activeConversation
                )}
              />
            ) : null}
          </div>
        );
      };
    }

const findActiveConversation = (conversations, activeConversation) => {
    return conversations.find(
        conversation => conversation.id === activeConversation
    )
}

const mapConversations = (conversations, handleClick) => {
    return conversations.map(conversation => {
        return(
            <Card key={conversation.id} onClick={() => handleClick(conversation.id)}>
                <CardBody>
                  <CardTitle>{conversation.title}</CardTitle>
                </CardBody>
            </Card>
        )
    })
}