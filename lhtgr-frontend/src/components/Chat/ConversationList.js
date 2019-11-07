import React from 'react'
import NewConversationForm from './NewConversationForm'
import Cable from './Cable'
import MessagesArea from './MessagesArea'
import { ActionCableConsumer } from 'react-actioncable-provider'

export default class ConversationsList extends React.Component {
    state = {
        conversations: [],
        activeConversation: null
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
        // let selectedConversation = []
        // conversations.map( conversation => {
        //     conversation.messages.map(messages => {
        //         if(conversation.id === messages.conversation_id){
        //             console.log(messages)
        //         }
        //     })
        //     // console.log(message.conversation.id)
        //     // if(conversation.id === message.conversation.id)
        //     console.log(conversation)
        //     // selectedConversation = conversation
        //     // console.log(selectedConversation)
        // })
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
            <h2>Conversations</h2>
            <ul>{mapConversations(conversations, this.handleClick)}</ul>
            <NewConversationForm />
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
            <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
                {conversation.title}
            </li>
        )
    })
}