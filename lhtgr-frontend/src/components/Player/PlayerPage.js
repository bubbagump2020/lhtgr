import React, { useEffect, useState } from 'react'
import {
    Button,
    Collapse,
    Container,
    Col,
    Row,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'
import ConversationList from '../Chat/ConversationList'
import { CharacterCollection } from '../Character/CharacterCollection'
import { useSelector, useDispatch } from 'react-redux'
import { campaignArray, currentPlayerId, characterArray } from '../../redux/actions'

const PlayerPage = (props) => {
    const { characters } = useSelector (state => ({ characters: state.characters }) )
    const { currentPlayer } = useSelector (state => ({ currentPlayer: state.currentPlayer }) )
    const [ isOpen, setIsOpen ] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen)

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
            .then( characters => dispatch(characterArray(characters)))
        fetch(`http://localhost:3001/campaigns`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then( response => response.json() )
            .then( campaigns => dispatch(campaignArray(campaigns)))
    }, [props, dispatch])

    return(
        <div>
            <Navbar color="secondary" light expand="md">
                <NavbarBrand className="text-white">{`Welcome ${currentPlayer.currentPlayerName}`}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="text-white" tag={Link} to="/characters/new">Character Creation</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" tag={Link} to="/characters/edit">Edit Character</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/" className="text-white">Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col>
                        <Button onClick={toggle}>Characters</Button>
                        <Collapse isOpen={isOpen}>
                            <CharacterCollection characters={characters} currentPlayerId={currentPlayer.currentPlayerId}/>
                        </Collapse>
                    </Col>
                    <Col>
                        <ConversationList />
                    </Col>
                    <Col>
                        <h1>Column 3</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PlayerPage;