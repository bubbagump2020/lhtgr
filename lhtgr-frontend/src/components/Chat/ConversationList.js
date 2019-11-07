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
            .then(conversations => this.setState({ conversations: conversations }))
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
        const conversations =[...this.state.conversations]
        const conversation = conversations.find(
            conversation => conversation.id === message.conversation.id
        )
        conversation.messages = [...conversation.messages, message]
        this.setState({ conversations })
    }

    render(){
        return(
            <div>
                <ActionCableConsumer channel={{ channel: 'ConversationsChannel' }} handleReceived={this.handleReceievedConversation}/>
                {this.state.conversations.length ? (
                    <Cable 
                        conversations={this.state.conversations}
                        handleReceivedMessage={this.handleReceivedMessage}
                    />
                ) : null}
                <h2>Conversations</h2>
                <ul>{mapConversations(this.state.conversations, this.handleClick)}</ul>
                <NewConversationForm />
                {this.state.activeConversation ? (
                    <MessagesArea 
                        conversation={findActiveConversations(this.state.conversations, this.state.activeConversation)}
                    />
                ) : null}
            </div>
        )
    }
}

const findActiveConversations = (conversations, activeConversation) => {
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