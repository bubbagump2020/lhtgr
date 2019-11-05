import React, { useEffect } from 'react'
import { Segment, Header, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Logout } from '../Logout'
import { CharacterCard } from '../Character/CharacterCard'
import { useSelector, useDispatch } from 'react-redux'
import { campaignArray, currentPlayerId, characterArray } from '../../redux/actions'

const PlayerPage = (props) => {
    const { characters } = useSelector (state => ({ characters: state.characters }) )
    
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
        <Container fluid>
            <Segment textAlign="center">
                <Header as="h1">Welcome Back!</Header>
                <Link to="/characters/new">Create a Character!</Link>
                <Link to="/"><Logout /></Link>
            </Segment>
            <Segment>
                <CharacterCard characters={characters}/>
            </Segment>
        </Container>
    )
}

export default PlayerPage;