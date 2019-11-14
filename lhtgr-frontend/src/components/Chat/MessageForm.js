import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

const MessageForm = (props) => {

    const [ message, setMessage ] = useState({ message: '' })

    const handleChange = e => {
        e.preventDefault()
        setMessage({ message: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3001/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: message.message,
            })
        })
            .then(response => response.json())
            // .then(data => console.log(data))
    }

    return(
       <Container fluid>
           <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Send a Message!</Form.Label>
                        <Form.Control type="text" onChange={handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Button type="submit">Send Message</Button>
           </Form>
       </Container> 
    )

}

export default MessageForm