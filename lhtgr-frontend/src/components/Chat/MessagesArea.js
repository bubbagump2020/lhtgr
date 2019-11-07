import React from 'react'
import NewMessagesForm from './NewMessageForm'

const MessagesArea = ({ conversation: { id, title, messages}}) => {
    return(
        <div>
            <h2>{title}</h2>
            <ul>{orderedMessages(messages)}</ul>
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
        return <li key={message.id}>{message.text}</li>
    })
}