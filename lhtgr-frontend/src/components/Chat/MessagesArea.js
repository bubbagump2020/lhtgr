import React from 'react'
import NewMessagesForm from './NewMessageForm'
import { ListGroup, ListGroupItem } from 'reactstrap'

const MessagesArea = ({ conversation: { id, title, messages}}) => {
    return(
        <div>
            <h2>{title}</h2>
            <ListGroup>{orderedMessages(messages)}</ListGroup>
            <NewMessagesForm conversation_id={id} />
        </div>
    )
}

export default MessagesArea

const orderedMessages = messages => {
    const sortedMessages = messages.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map(message => {
        return <ListGroupItem key={message.id}>{message.text}</ListGroupItem>
    })
}