import React, { useEffect } from 'react';
import {
    Accordion,
    Button,
    Card,
    CardDeck,
    CardGroup,
    Col,
    Container,
    Navbar,
    Nav,
    Row,
    Form
} from 'react-bootstrap';
import { PlayerCard } from '../Player/PlayerCard'
import { Link } from 'react-router-dom'
import PlayerForm from '../Player/PlayerForm'
import ConversationList from '../Chat/ConversationList'
import { CampaignCard } from '../Campaign/CampaignCard'
import { useSelector, useDispatch } from 'react-redux'
import { createPlayer, playerArray, campaignArray, playerName, playerPassword } from '../../redux/actions/index'


const DungeonMasterPage = (props) => {
    const { player } = useSelector(state => ({ player: state.player }))
    const { players } = useSelector(state => ({ players: state.players}))
    const { campaign } = useSelector(state => ({ campaign: state.campaign.value }))
    const { campaigns } = useSelector(state => ({ campaigns: state.campaigns}))

    const dispatch = useDispatch()
    
    useEffect(() => {
        fetch(`http://localhost:3001/dungeon_masters/${props.match.params.id}/players`)
            .then(response => response.json())
            .then(players => dispatch(playerArray(players)))
        fetch(`http://localhost:3001/dungeon_masters/${props.match.params.id}/campaigns`)
            .then(response => response.json())
            .then(campaigns => dispatch(campaignArray(campaigns)))
    }, [])

    const handlePlayerCreation = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/dungeon_masters/${props.match.params.id}/players`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dungeon_master_id: document.cookie,
                username: player.name,
                password: player.password
            })
        }).then(response => response.json())
          .then(data => console.log(data))
    }

    
        return(
            <Container fluid>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Dungeon Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    <Col>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as ={Button} variant="link" eventKey="0">
                                        Create New Player
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form onSubmit={handlePlayerCreation}>
                                            <Form.Group>
                                                <Form.Label>Player Name</Form.Label>
                                                <Form.Control type="text" placeholder="Player Name" onChange={e => dispatch(playerName(e.target.value))}/>
                                                <Form.Text>A new adventurer joins the party</Form.Text>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Player Password</Form.Label>
                                                <Form.Control type="password" placeholder="Player Password" onChange={e => dispatch(playerPassword(e.target.value))}/>
                                                <Form.Text>Make a ridculously hard password!</Form.Text>
                                            </Form.Group>
                                            <Button type="submit">Create Player</Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Create New Campaign
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Campaign Name</Form.Label>
                                                <Form.Control type="text" placeholder="Campaign Name" />
                                                <Form.Text>We're going on an adventure!</Form.Text>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Campaign Description</Form.Label>
                                                <Form.Control as="textarea" rows="3" />
                                                <Form.Text>Campaign Description, please!</Form.Text>
                                            </Form.Group>
                                            <Button type="submit">Create Campaign</Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Current Players
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> 
                                        <PlayerCard players={players}/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Campaigns
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            < CampaignCard campaigns={campaigns}/>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card.Header>
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

export default DungeonMasterPage;