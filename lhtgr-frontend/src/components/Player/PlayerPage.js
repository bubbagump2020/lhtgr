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
import { Widget } from 'react-chat-widget'
import ConversationList from '../Chat/ConversationList'
import CharacterFormNew from '../Character/CharacterFormNew'
import { CharacterCollection } from '../Character/CharacterCollection'
import { useSelector, useDispatch } from 'react-redux'
import { campaignArray, currentPlayerId, characterArray, player } from '../../redux/actions'
import { EditCharacter } from '../Character/CharacterFormEdit'

const PlayerPage = (props) => {
    const [ charactersState, setCharactersState ] = useState()
    const { characters } = useSelector (state => ({ characters: state.characters }) )
    const { campaigns } = useSelector (state => ({ campaigns: state.campaigns }))
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
        fetch(`http://localhost:3001/characters`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( response => response.json() )
            .then( characters => {
                // console.log(characters)
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
                data.map(thisPlayer => {
                    if(thisPlayer.id === playerId){
                        dispatch(player(thisPlayer))
                    }
                })
            })
    }, [])

    return(
        <Container fluid>
            <Navbar bg="light"expand="lg">
                <Navbar.Brand >{`Welcome ${currentPlayer.username}`}</Navbar.Brand>
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
                                    <CharacterFormNew campaigns={campaigns} selectedPlayer={currentPlayer} />
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
                                    <CharacterCollection characters={characters} selectedPlayer={currentPlayer} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    {/* <Widget handleNewUserMessage={handleNewUserMessage}/> */}
                </Col>
            </Row>
        </Container>
    )
}

export default PlayerPage;