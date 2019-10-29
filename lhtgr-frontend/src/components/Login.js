import React, { useState } from 'react'
import { Button, Divider, Segment, Grid, Form, Header} from 'semantic-ui-react';

export function Login(props) {
    console.log("hi!")

    const [ dm, changeDM ] = useState({
        username: '',
        password: ''
    })

    const [ player, changePlayer ] = useState({
        username: '',
        password: ''
    })

    function loginDM(e){
        e.preventDefault()
        fetch('http://localhost:3001/dm_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: dm.username,
                password: dm.password
            })
        }).then(response => response.json())
          .then(data => {
                console.log(data)
                if(data.success){
                    localStorage.setItem('token', data.token)
                    props.history.push(`/dungeon_masters/${data.id}`)
                }
          } )
    }

    function loginPlayer(e){
        e.preventDefault()
        fetch('http://localhost:3001/player_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: player.username,
                password: player.password
            })
        }).then(response => response.json())
          .then(data => {
              console.log(data)
              if(data.success){
                  localStorage.setItem('token', data.token)
                  props.history.push(`/players/${data.id}`)
              }
          })
       
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

