import React, { useEffect, useState } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { Container, Card, Row } from 'react-bootstrap'
import MessageForm from './MessageForm'

const windowScrollBox = {
    overflow: 'auto',
    height: '400px'
}

class MessageWindow extends React.Component {
    constructor(){
        super()
        this.state = {
            messages: []
        }
    }

    componentDidMount= () => {
        fetch('http://localhost:3001/messages')
            .then(response => response.json())
            .then(messages => {
                this.setState({ messages: messages })
            })
    }

    handleReceivedMessage = message => {
        console.log(message)
        this.setState({ messages: [...this.state.messages, message ]})
    }

    showMessages = () => {
        if(this.state.messages.length === 0){
            return(
                <Container fluid>
                    Loading Messages
                </Container>
            )
        } else {
            return this.state.messages.map( message => {
                return(
                    <Container fluid width="">
                        <Card key={message.id} border="dark" >
                            <Card.Body style={{color: "bisque", backgroundColor: "cadetblue"}}>
                                <Card.Title>{message.text}</Card.Title>
                            </Card.Body>
                        </Card><br></br>
                    </Container>
                )
            })
        }
    }

    render(){
        return(
            <div id="" style={windowScrollBox}>
                <ActionCableConsumer channel={{ channel: "MessagesChannel"}} onReceived={this.handleReceivedMessage}>
                    <Row>
                        {this.showMessages()}
                    </Row>
                </ActionCableConsumer>
            </div>
        )
    }
}

export default MessageWindow