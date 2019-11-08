import React from 'react'
import { Button, Form, Container, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { currentPlayerName,
    currentPlayerPassword,
    currentPlayerId,
    currentDmName,
    currentDmPassword,
    currentDmId
} from '../redux/actions/index'

export function Login(props) {

    const dispatch = useDispatch()
    const { currentPlayer } = useSelector(state => ({ currentPlayer: state.currentPlayer }))
    const { dm } = useSelector( state =>({ dm: state.currentDm }))

    function loginDM(e){
        e.preventDefault()
        fetch('http://localhost:3001/dm_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: dm.dmName,
                password: dm.dmPassword
            })
        }).then(response => response.json())
          .then(data => {
                if(data.success){
                    document.cookie = data.id
                    localStorage.setItem('token', data.token)
                    props.history.push(`/dungeon_masters/${data.id}`)
                    dispatch(currentDmId(data.id))
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
        <Container fluid>
             <Col xs={12}>
                 <Row>
                    <Form onSubmit={loginDM}>
                        <Form.Group>
                            <Form.Label>DM Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={e => dispatch(currentDmName(e.target.value))}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => dispatch(currentDmPassword(e.target.value))}/>
                        </Form.Group>
                        <Button type="submit">DM Login</Button>
                    </Form>
                 </Row>
                 <Row>
                    <Form onSubmit={loginPlayer}>
                        <Form.Group>
                            <Form.Label>Player Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={e => dispatch(currentPlayerName(e.target.value))}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => dispatch(currentPlayerPassword(e.target.value))}/>
                        </Form.Group>
                        <Button type="submit">Player Login</Button>
                    </Form>
                 </Row>
             </Col>
        </Container>        
    )
}