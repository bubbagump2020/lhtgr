import React, { useEffect } from 'react'
import { Card, Segment, Header, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Logout } from '../Logout'
import CharacterForm from '../Character/CharacterForm'
import { CharacterCard } from '../Character/CharacterCard'
import { useSelector, useDispatch } from 'react-redux'
import { campaignArray } from '../../redux/actions'


const PlayerPage = (props) => {
    const { character } = useSelector(state => ({ character: state.character }))
    const { campaign } = useSelector(state => ({ campaign: state.campaign}))
    const campaigns = useSelector(state => state)
    const dispatch = useDispatch()

    let campaignID = 0;
    if(campaigns === undefined){
        return(
            <div>
                Loading
            </div>
        )
    } else {
        if(campaigns.campaigns.campaigns !== undefined){
            campaigns.campaigns.campaigns.map(selectedCampaign => {
                if(campaign === undefined){
                    return(
                        <div>
                            Loading
                        </div>
                    )
                } else {
                    if( selectedCampaign.name === campaign.value){
                        campaignID = selectedCampaign.id
                    }
                }
            })
        }
    }


    const createCharacter = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                player_id: document.cookie,
                campaign_id: campaignID,
                name: character.characterName,
                primary_class: character.characterClass.value,
                str: character.characterAttributes.str,
                dex: character.characterAttributes.dex,
                con: character.characterAttributes.con,
                int: character.characterAttributes.int,
                wis: character.characterAttributes.wis,
                cha: character.characterAttributes.cha
            })
        }).then(response => response.json())
          .then(data => console.log(data))
    }

    
    return(
        <Container fluid>
            <Segment textAlign="center">
                <Header as="h1">Welcome Back!</Header>
                <Link to="/"><Logout /></Link>
            </Segment>
            <Segment>
                <CharacterForm createCharacter={createCharacter}/>
            </Segment>
            <Segment>
                <Card.Group>
                    <CharacterCard />
                </Card.Group>
            </Segment>
        </Container>
    )

}

export default PlayerPage;