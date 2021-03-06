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
import MessageWindow from '../Chat/MessageWindow'
import MessageForm from '../Chat/MessageForm'
import { 
    addToPlayerArray, 
    addToCampaignArray, 
    playerArray, 
    campaignArray, 
    playerName, 
    playerPassword, 
    campaign, 
    dungeon_master 
} from '../../redux/actions/index'


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
            <Container fluid align="center">
                <Navbar style={{backgroundColor: "mediumseagreen"}} expand="lg">
                    <Navbar.Brand style={{color: "bisque"}}>{`Welcome Back, Dungeon Master ${dm.username}`}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar><br></br>
                <Row>
                    <Col>
                        <Accordion>
                            <Card style={{backgroundColor: "cadetblue"}} border="dark">
                                <Card.Header style={{backgroundColor: "darkcyan"}}>
                                    <Accordion.Toggle as ={Button} variant="link" eventKey="0" style={{color: "bisque"}}>
                                        <h3>Create New Player</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body style={{color: "bisque"}}>
                                        <Form onSubmit={handlePlayerCreation}>
                                            <Form.Group>
                                                <Form.Label><h4>Player Name</h4></Form.Label>
                                                <Form.Control type="text" placeholder="Player Name" onChange={e => dispatch(playerName(e.target.value))}/>
                                                <Form.Text>A new adventurer joins the party</Form.Text>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label><h4>Player Password</h4></Form.Label>
                                                <Form.Control type="password" placeholder="Player Password" onChange={e => dispatch(playerPassword(e.target.value))}/>
                                                <Form.Text>Make a ridculously hard password!</Form.Text>
                                            </Form.Group>
                                            <Button type="submit">Create Player</Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{backgroundColor: "cadetblue"}} border="dark">
                                <Card.Header style={{backgroundColor: "darkcyan"}}>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "bisque"}}>
                                        <h3>Create New Campaign</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body style={{color: "bisque"}}>
                                        <Form onSubmit={handleCampaignCreation}>
                                            <Form.Group>
                                                <Form.Label><h3>Campaign Name</h3></Form.Label>
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
                            <Card style={{backgroundColor: "cadetblue"}} border="dark">
                                <Card.Header style={{backgroundColor: "darkcyan"}}>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "bisque"}}>
                                        <h3>Current Players</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body style={{color: "bisque"}}> 
                                        <PlayerCard players={players}/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card style={{backgroundColor: "cadetblue"}} border="dark">
                                <Card.Header style={{backgroundColor: "darkcyan"}}>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "bisque"}}>
                                        <h3>Campaigns</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body style={{color: "bisque"}}>
                                            < CampaignCard campaigns={campaigns}/>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card.Header>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col>
                        <Accordion>
                            <Card style={{backgroundColor: "cadetblue"}} border="dark">
                                <Card.Header style={{backgroundColor: "darkcyan"}}>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "bisque"}}>
                                        <h3>Chat</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{color: "bisque"}}>
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

export default DungeonMasterPage;

