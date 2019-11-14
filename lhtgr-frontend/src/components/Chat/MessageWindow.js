import React, { useEffect, useState } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { Container } from 'react-bootstrap'

const MessageWindow = props => {

    const [ messages, setMessages ] = useState({ messages: [] })

    useEffect(() => {
        fetch('http://localhost:3001/messages')
            .then(response => response.json())
            .then(messages => setMessages(messages))
    }, [])

    const handleReceivedMessage = message => {
        setMessages({ messages: [...messages, message ]})
    }

    return(
        <Container>
            <ActionCableConsumer channel={{ channel: "MessagesChannel"}} onReceived={handleReceivedMessage}>

            </ActionCableConsumer>
        </Container>
    )

}

export default MessageWindow