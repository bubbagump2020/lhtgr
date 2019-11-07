import React from 'react'
import NewMessagesForm from './NewMessageForm'

const MessagesArea = ({ conversation: { id, title, messages}}) => {
    return(
        <div>
            <h2>{title}</h2>
            <ul></ul>
            <NewMessagesForm conversation_id={id} />
        </div>
    )
}

export default MessagesArea