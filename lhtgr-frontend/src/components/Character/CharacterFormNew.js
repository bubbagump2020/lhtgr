import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { 
    characterName,
    characterClass,
    characterRace,
    addToCharacterArray,
    selectCampaign, 
    incrementStr,
    incrementDex,
    incrementCon,
    incrementInt,
    incrementWis,
    incrementCha,
    decrementStr,
    decrementDex,
    decrementCon,
    decrementInt,
    decrementWis,
    decrementCha
} from '../../redux/actions/index'
import { Container, Form, Button, Col } from 'react-bootstrap';

const CharacterForm = (props) => {
    const { character } = useSelector(state => ({ character: state.character }) )
    const campaigns = props.campaigns
    let { thisCampaign } = useSelector(state => ({ thisCampaign: state.campaign }) )

    const dispatch = useDispatch()

    const classes = [
        { key: 'barb', text: 'Barbarian', value: 'barbarian' },
        { key: 'Bard', text: 'Bard', value: 'bard' },
        { key: 'cler', text: 'Cleric', value: 'cleric' },
        { key: 'drui', text: 'Druid', value: 'druid' },
        { key: 'figh', text: 'Fighter', value: 'fighter' },
        { key: 'monk', text: 'Monk', value: 'monk' },
        { key: 'paly', text: 'Paladin', value: 'paladin' },
        { key: 'rang', text: 'Ranger', value: 'ranger' },
        { key: 'rogu', text: 'Rogue', value: 'rogue' },
        { key: 'sorc', text: 'Sorcerer', value: 'sorcerer' },
        { key: 'wiza', text: 'Wizard', value: 'wizard' }
    ]

    const races = [
        { key: 'dwar', text: 'Dwarf', value: 'dwarf'},
        { key: 'elf', text: 'Elf', value: 'elf'},
        { key: 'gnom', text: 'Gnome', value: 'gnome'},
        { key: 'hael', text: 'Half Elf', value: 'half elf'},
        { key: 'haor', text: 'Half Orc', value: 'half orc'},
        { key: 'half', text: 'Halfling', value: 'halfling'},
        { key: 'huma', text: 'Human', value: 'human'}
    ]

    const selectedCampaign = () => {
        campaigns.map(campaign => {
            if(campaign.name === thisCampaign){
                thisCampaign = campaign
                dispatch(selectCampaign(thisCampaign))
            }
        })
        
        return thisCampaign.id;
    }

    const incrementDecrementStr = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = character.str
            attribute++;
            dispatch(incrementStr(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = character.str
            attribute--
            dispatch(decrementStr(attribute))
            return attribute;
        }
    }

    const incrementDecrementDex = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = character.dex
            attribute++;
            dispatch(incrementDex(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = character.dex
            attribute--
            dispatch(decrementDex(attribute))
            return attribute;
        }
    }

    const incrementDecrementCon = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = character.con
            attribute++;
            dispatch(incrementCon(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = character.con
            attribute--
            dispatch(decrementCon(attribute))
            return attribute;
        }
    }

    const incrementDecrementInt = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = character.int
            attribute++;
            dispatch(incrementInt(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = character.int
            attribute--
            dispatch(decrementInt(attribute))
            return attribute;
        }
    }

    const incrementDecrementWis = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = character.wis
            attribute++;
            dispatch(incrementWis(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = character.wis
            attribute--
            dispatch(decrementWis(attribute))
            return attribute;
        }
    }

    const incrementDecrementCha = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = character.cha
            attribute++;
            dispatch(incrementCha(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = character.cha
            attribute--
            dispatch(decrementCha(attribute))
            return attribute;
        }
    }

    const createCharacter = (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        console.log(token)
        fetch(`http://localhost:3001/players/${props.selectedPlayer.id}/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                player_id: props.selectedPlayer.id,
                campaign_id: selectedCampaign(),
                name: character.name,
                primary_class: character.primary_class,
                race: character.race,
                level: 1,
                str: character.str,
                dex: character.dex,
                con: character.con,
                int: character.int,
                wis: character.wis,
                cha: character.cha
            })
        })
            .then(response => response.json())
            .then(character => {
                dispatch(addToCharacterArray(character))
            })
    }

    return(
        <Container fluid>
            <Form  align="center" onSubmit={createCharacter}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Adventurer Name</Form.Label>
                        <Form.Control type="text" placeholder="Adventurer Name" onChange={e => dispatch(characterName(e.target.value))}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Adventurer Race</Form.Label>
                        <Form.Control  as="select" onChange={e => dispatch(characterRace(e.target.value))}>
                            <option>Select Race</option>
                            {races.map(race => {
                                return(
                                    <option key={race.key}>{race.text}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Adventure</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(selectCampaign(e.target.value))}>
                            <option>Select Adventure</option>
                            {campaigns.map(campaign => {
                                return(
                                    <option key={campaign.id}>{campaign.name}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Adventurer Class</Form.Label>
                        <Form.Control as="select" onChange={e =>dispatch(characterClass(e.target.value))}>
                            <option>Select Class</option>
                            {classes.map(thisClass => {
                                return(
                                    <option key={thisClass.key}>{thisClass.text}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Strength</h4></Form.Label>
                            <h4>{character.str}</h4>
                            <Button onClick={e => incrementDecrementStr(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementStr(e)}><h4>-</h4></Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Dexterity</h4></Form.Label>
                            <h4>{character.dex}</h4>
                            <Button onClick={e => incrementDecrementDex(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementDex(e)}><h4>-</h4></Button>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Constitution</h4></Form.Label>
                            <h4>{character.con}</h4>
                            <Button onClick={e => incrementDecrementCon(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementCon(e)}><h4>-</h4></Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Intelligence</h4></Form.Label>
                            <h4>{character.int}</h4>
                            <Button onClick={e => incrementDecrementInt(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementInt(e)}><h4>-</h4></Button>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Wisdom</h4></Form.Label>
                            <h4>{character.wis}</h4>
                            <Button onClick={e => incrementDecrementWis(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementWis(e)}><h4>-</h4></Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Charisma</h4></Form.Label>
                            <h4>{character.cha}</h4>
                            <Button onClick={e => incrementDecrementCha(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementCha(e)}><h4>-</h4></Button>
                    </Form.Group>
                </Form.Row>
                <Button type="submit">Create Character</Button>
            </Form>
        </Container>
    )
}

export default CharacterForm;