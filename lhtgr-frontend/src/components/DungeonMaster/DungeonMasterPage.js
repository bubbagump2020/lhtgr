import React, { useEffect } from 'react';
import {
    Accordion,
    Button,
    Card,
    Col,
    Container,
    Form,
    Navbar,
    Nav,
    Row
} from 'react-bootstrap';
import { PlayerCard } from '../Player/PlayerCard'
import { CampaignCard } from '../Campaign/CampaignCard'
import { useSelector, useDispatch } from 'react-redux'
import { addToPlayerArray, addToCampaignArray, playerArray, campaignArray, playerName, playerPassword, campaign, dungeon_master } from '../../redux/actions/index'


const DungeonMasterPage = (props) => {
    const { player } = useSelector(state => ({ player: state.player }))
    const { players } = useSelector(state => ({ players: state.players}))
    const { newCampaign } = useSelector(state => ({ newCampaign: state.campaign }))
    const { campaigns } = useSelector(state => ({ campaigns: state.campaigns}))
    const { dm } = useSelector(state => ({ dm: state.dungeonMaster }))

    const dispatch = useDispatch()
    
    useEffect(() => {
        const dmId = parseInt(props.match.params.id)
        fetch(`http://localhost:3001/players`)
            .then(response => response.json())
            .then(players => dispatch(playerArray(players)))
        fetch(`http://localhost:3001/campaigns`)
            .then(response => response.json())
            .then(campaigns => dispatch(campaignArray(campaigns)))
        fetch('http://localhost:3001/dungeon_masters')
            .then(response => response.json())
            .then(dungeonMaster => {
                dungeonMaster.map(thisDm => {
                    if(thisDm.id === dmId){
                        dispatch(dungeon_master(thisDm))
                    }
                })
            })
    }, [])

    const handlePlayerCreation = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/players`,{
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
          .then(player => {
              dispatch(addToPlayerArray(player))
            })
    }

    const handleCampaignCreation = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dungeon_master_id: dm.dmId,
                name: newCampaign
            })
        }).then(response => response.json())
          .then(campaign => {
              dispatch(addToCampaignArray(campaign))
            })
    }
    
        return(
            <Container fluid>
                <Navbar bg="light" expand="lg">
        <Navbar.Brand>{`Welcome Back, Dungeon Master ${dm.username}`}</Navbar.Brand>
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
                                        <Form onSubmit={handleCampaignCreation}>
                                            <Form.Group>
                                                <Form.Label>Campaign Name</Form.Label>
                                                <Form.Control type="text" placeholder="Campaign Name" onChange={e => dispatch(campaign(e.target.value))}/>
                                                <Form.Text>We're going on an adventure!</Form.Text>
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