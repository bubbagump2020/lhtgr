import React, { useState } from 'react'
import { Button, Divider, Segment, Grid, Form, Header} from 'semantic-ui-react';

export function Login(props) {

    const [ dm, changeDM ] = useState({
        username: '',
        password: ''
    })

    const [ player, changePlayer ] = useState({
        username: '',
        password: ''
    })

    async function loginDM(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3001/dm_login', {
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

    async function loginPlayer(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3001/player_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: player.username,
                password: player.password
            })
        })
        let { success, id, token } = await response.json()
        if(success){
            localStorage.setItem('token', token)
            props.history.push(`/players/${id}`)
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
                    <Form onSubmit={loginPlayer}>
                        <Header as ="h1">Player Login</Header>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder="Username" type="text" value={player.username} onChange={ e => changePlayer({ ...player, username: e.target.value })} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder="Password" type="password" value={player.password} onChange={ e => changePlayer({ ...player, password: e.target.value })} />
                        </Form.Field>
                        <Button type="submit">Login</Button>
                    </Form>
                </Grid.Column>
            </Grid>
            <Divider vertical/>
        </Segment>
    )
    
}

