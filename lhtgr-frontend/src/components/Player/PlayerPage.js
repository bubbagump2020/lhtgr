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
import { Link } from 'react-router-dom'
import ConversationList from '../Chat/ConversationList'
import CharacterFormNew from '../Character/CharacterFormNew'
import { CharacterCollection } from '../Character/CharacterCollection'
import { useSelector, useDispatch } from 'react-redux'
import { campaignArray, currentPlayerId, characterArray } from '../../redux/actions'
import { EditCharacter } from '../Character/CharacterFormEdit'

const PlayerPage = (props) => {
    const [ charactersState, setCharactersState ] = useState()
    const { characters } = useSelector (state => ({ characters: state.characters }) )
    const { campaigns } = useSelector (state => ({ campaigns: state.campaigns }))
    const { currentPlayer } = useSelector (state => ({ currentPlayer: state.currentPlayer }) )

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3001/players/${props.match.params.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( response => response.json() )
            .then( player => dispatch(currentPlayerId(player.id)))
        fetch(`http://localhost:3001/characters`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
    }, [props, dispatch])

    return(
        <Container fluid>
            <Navbar bg="light"expand="lg">
                <Navbar.Brand >{`Welcome ${currentPlayer.currentPlayerName}`}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" navbar>
                        <Nav.Link  href="/" >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row>
                <Col>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Create Character
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <CharacterFormNew campaigns={campaigns} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Edit Character
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <EditCharacter />
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Characters
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <CharacterCollection characters={characters} currentPlayerId={currentPlayer.currentPlayerId} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    <h1>Chat</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default PlayerPage;