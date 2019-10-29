import React, { useState } from 'react'
import { Button, Container, Divider, Segment, Grid, Form, Header} from 'semantic-ui-react';

export function Login(props) {

    const [ dm, changeDM ] = useState({
        username: '',
        password: ''
    })

    // async function loginDM(e) {
    //     e.preventDefault()
    //     let response = fetch('http://localhost:3001/dm_login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: dm.username,
    //             password: dm.password
    //         })
    //     })
    //     let { success, id, token } = await response.json()
    //     if(success){
    //         localStorage.setItem('token', token)
    //         props.history.push(`/dungeon_masters/${id}`)
    //     }
    // }

    async function loginDM(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: dm.username,
                password: dm.password
            })
        })
        let { success, id, token } = await response.json()
        if(success){
            localStorage.setItem('token', token)
            props.history.push(`/dungeon_masters/${id}`)
        }
    }

    return(
        <Segment>
            <Grid columns={2} relaxed="very">
                <Grid.Column>
                    <Form onSubmit={loginDM}>
                        <Header as="h1">Dungeon Master Login</Header>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder="Username" type="text" value={dm.username} onChange={ e => changeDM({ ...dm, username: e.target.value })} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder="Password" type="password" value={dm.password} onChange={ e => changeDM({ ...dm, password: e.target.value })} />
                        </Form.Field>
                        <Button type="submit">Login</Button>
                    </Form>
                </Grid.Column>
                <Grid.Column>
                    <Form>
                        <Header as ="h1">Player Login</Header>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder="Username" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder="Password" />
                        </Form.Field>
                        <Button type="submit">Login</Button>
                    </Form>
                </Grid.Column>
            </Grid>
            <Divider vertical/>
        </Segment>
    )
    
}

