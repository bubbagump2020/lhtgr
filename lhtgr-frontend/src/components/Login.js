import React, { useState } from 'react'
import { Button, Divider, Segment, Grid, Form, Header} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux'
import { currentPlayerName, currentPlayerPassword, currentPlayerId } from '../redux/actions/index'

export function Login(props) {
    const [ dm, changeDM ] = useState({
        username: '',
        password: ''
    })

    const dispatch = useDispatch()
    const { currentPlayer } = useSelector(state => ({ currentPlayer: state.currentPlayer }))

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
                if(data.success){
                    document.cookie = data.id
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
                username: currentPlayer.currentPlayerName,
                password: currentPlayer.currentPlayerPassword
            })
        }).then(response => response.json())
          .then(data => {
              if(data.success){
                  document.cookie = data.id
                  localStorage.setItem('token', data.token)
                  props.history.push(`/players/${data.id}`)
                  dispatch(currentPlayerId(data.id))
              }
          })
       
    }

    return(
        <Segment>
            <Grid columns={2} relaxed="very">
                <Grid.Column>
                    <Form onSubmit={loginDM} success warning>
                        <Header as="h1">Dungeon Master Login</Header>
                        <Form.Field label="Username" />
                        <Form.Input placeholder="Username" type="text" value={dm.username} onChange={ e => changeDM({ ...dm, username: e.target.value })} />
                        <Form.Field label="Password" />
                        <Form.Input placeholder="Password" type="password" value={dm.password} onChange={ e => changeDM({ ...dm, password: e.target.value })} />
                        <Button type="submit">Login</Button>
                    </Form>
                </Grid.Column>
                <Grid.Column>
                    <Form onSubmit={loginPlayer} success warning>
                        <Header as ="h1">Player Login</Header>
                        <Form.Field label="Username" />
                        <Form.Input placeholder="Username" type="text" value={currentPlayer.currentPlayerName} onChange={ e => dispatch(currentPlayerName(e.target.value))} />
                        <Form.Field label="Password" />
                        <Form.Input placeholder="Password" type="password" value={currentPlayer.currentPlayerPassword} onChange={ e => dispatch(currentPlayerPassword(e.target.value))} />
                        <Button type="submit">Login</Button>
                    </Form>
                </Grid.Column>
            </Grid>
            <Divider vertical/>
        </Segment>
    )
    
}

