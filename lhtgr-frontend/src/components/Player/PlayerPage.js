import React, { useEffect, useState } from 'react'
import {
    Accordion,
    Button,
    Card,
    Col,
    Container,
    Nav,
    Navbar,
    Row
    
} from 'react-bootstrap'
import CharacterFormNew from '../Character/CharacterFormNew'
import { CharacterCollection } from '../Character/CharacterCollection'
import { useSelector, useDispatch } from 'react-redux'
import { campaignArray, currentPlayerId, characterArray, playerArray, player } from '../../redux/actions'
import { EditCharacter } from '../Character/CharacterFormEdit'
import MessageWindow from '../Chat/MessageWindow'
import MessageForm from '../Chat/MessageForm'


const PlayerPage = (props) => {
    const { characters } = useSelector (state => ({ characters: state.characters }) )
    const { campaigns } = useSelector (state => ({ campaigns: state.campaigns }))
    const { players } = useSelector(state => ({ players: state.players}))
    const { currentPlayer } = useSelector (state => ({ currentPlayer: state.selectedPlayer }) )

    const dispatch = useDispatch()

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`)
    }

    useEffect(() => {
        const playerId = parseInt(props.match.params.id)
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3001/players/${props.match.params.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( response => response.json() )
            .then( player => dispatch(currentPlayerId(player.id)))
        fetch(`http://localhost:3001/players/${props.match.params.id}/characters`)
            .then( response => response.json() )
            .then( characters => {
                dispatch(characterArray(characters))
            })
        fetch(`http://localhost:3001/campaigns`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( response => response.json() )
            .then( campaigns => dispatch(campaignArray(campaigns)))
        fetch('http://localhost:3001/players', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch(playerArray(data))
                data.map(thisPlayer => {
                    if(thisPlayer.id === playerId){
                        dispatch(player(thisPlayer))
                    }
                })
            })
    }, [])

    return(
        <Container fluid align="center">
            <Navbar style={{backgroundColor: "mediumseagreen"}} expand="lg">
                <Navbar.Brand style={{color: "bisque"}}>{`Welcome ${currentPlayer.username}`}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" navbar>
                        <Nav.Link  href="/" >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar><br></br>
            <Row>
                <Col>
                    <Accordion>
                        <Card style={{backgroundColor: "cadetblue"}} border="dark">
                            <Card.Header style={{backgroundColor: "darkcyan"}}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "bisque"}}>
                                    <h3>Create Character</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{color: "bisque"}}>
                                    <h4><CharacterFormNew campaigns={campaigns} selectedPlayer={currentPlayer} /></h4>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card style={{backgroundColor: "cadetblue"}} border="dark">
                            <Card.Header style={{backgroundColor: "darkcyan"}}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "bisque"}}>
                                    <h3>Edit Character</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body style={{color: "bisque"}}>
                                    <h4><EditCharacter selectedPlayer={currentPlayer}/></h4>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion>
                        <Card style={{backgroundColor: "darkcyan"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "bisque"}}>
                                    <h3>Characters</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{color: "bisque", backgroundColor: "cadetblue"}} border="dark">
                                    <CharacterCollection characters={characters} players={players} selectedPlayer={currentPlayer} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion>
                        <Card style={{backgroundColor: "darkcyan"}}>
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "bisque"}}>
                                    <h3>Chat</h3>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body style={{color: "bisque", backgroundColor: "cadetblue"}}>
                                        <MessageWindow />
                                        <Row>
                                            <h4><MessageForm /></h4>
                                        </Row>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}

export default PlayerPage;