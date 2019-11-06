import React from 'react';
import { Form, Header, Button, Grid, Segment } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    characterName,
    characterClass,
    characterRace,
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

const CharacterForm = (props) => {
    const { character } = useSelector(state => ({ character: state.character }) )
    const { campaigns } = useSelector(state => ({ campaigns: state.campaigns }) )
    const { thisCampaign } = useSelector(state => ({ thisCampaign: state.campaign }) )
    const { currentPlayer } = useSelector(state => ({ currentPlayer: state.currentPlayer }) )

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

    const listCampaigns = () => {
        let campaignArray = []
        campaigns.map(campaign=> {
            campaign.key = campaign.name
            campaign.text = campaign.name
            campaign.value = campaign.name
            campaignArray.push(campaign)
        })
        return campaignArray
    }

    const selectedCampaign = () => {
        let campaignId = 0
        campaigns.map(campaign => {
            if(campaign.name === thisCampaign.value){
                campaignId = campaign.id
            }
        })
        return campaignId;
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
        console.log(event)
        fetch('http://localhost:3001/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                player_id: currentPlayer.currentPlayerId,
                campaign_id: selectedCampaign(),
                name: character.name,
                primary_class: character.primary_class.value,
                race: character.race.value,
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
            .then(data => console.log(data))
    }

    return(
        <Grid divided columns="equal" textAlign="center" divided columns={2}>
            <Grid.Row stretched>
                <Grid.Column width="4">
                    <Header as="h1">Character Creation</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Form onSubmit={e => createCharacter(e)} success>
                    <Grid.Column>
                        <Form.Group widths="equal">
                            <Segment.Group horizontal>
                                <Segment raised>
                                    <Form.Input label="Character Name" placeholder="Character Name" type="text" onChange={e => dispatch(characterName(e.target.value))} />
                                </Segment>
                                <Segment raised>
                                    <Form.Select label="Adventure" placeholder="Adventures" options={listCampaigns()} onChange={e => dispatch(selectCampaign({value: e.target.innerText}))} />
                                </Segment>
                                <Segment raised>
                                    <Form.Select label="Race" placeholder="Race" options={races} onChange={e => dispatch(characterRace({value: e.target.innerText}))}/>
                                </Segment>
                                <Segment raised>
                                    <Form.Select label="Class" placeholder="Class" options={classes} onChange={e => dispatch(characterClass({value: e.target.innerText}))}/>
                                </Segment>
                            </Segment.Group>
                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group>
                            <Segment.Group horizontal>
                                <Segment raised>
                                    <Header as="h3" textAlign="center">Strength</Header>
                                    <Header as="h3" textAlign="center">{character.str}</Header>
                                    <Button.Group>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementStr(e)
                                            }
                                        }>
                                            +
                                        </Button>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementStr(e)
                                            }
                                        }>
                                            -
                                        </Button>
                                    </Button.Group>
                                </Segment>
                                <Segment raised>
                                    <Header as="h3" textAlign="center">Dexterity</Header>
                                    <Header as="h3" textAlign="center">{character.dex}</Header>
                                    <Button.Group>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementDex(e)
                                            }
                                        }>
                                            +
                                        </Button>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementDex(e)
                                            }
                                        }>
                                            -
                                        </Button>
                                    </Button.Group>
                                </Segment>
                                <Segment raised>
                                    <Header as="h3" textAlign="center">Constitution</Header>
                                    <Header as="h3" textAlign="center">{character.con}</Header>
                                    <Button.Group>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementCon(e)
                                            }
                                        }>
                                            +
                                        </Button>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementCon(e)
                                            }
                                        }>
                                            -
                                        </Button>
                                    </Button.Group>
                                </Segment>
                                <Segment raised>
                                    <Header as="h3" textAlign="center">Intelligence</Header>
                                    <Header as="h3" textAlign="center">{character.int}</Header>
                                    <Button.Group>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementInt(e)
                                            }
                                        }>
                                            +
                                        </Button>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementInt(e)
                                            }
                                        }>
                                            -
                                        </Button>
                                    </Button.Group>
                                </Segment>
                                <Segment raised>
                                    <Header as="h3" textAlign="center">Wisdom</Header>
                                    <Header as="h3" textAlign="center">{character.wis}</Header>
                                    <Button.Group>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementWis(e)
                                            }
                                        }>
                                            +
                                        </Button>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementWis(e)
                                            }
                                        }>
                                            -
                                        </Button>
                                    </Button.Group>
                                </Segment>
                                <Segment raised>
                                    <Header as="h3" textAlign="center">Charisma</Header>
                                    <Header as="h3" textAlign="center">{character.cha}</Header>
                                    <Button.Group>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementCha(e)
                                            }
                                        }>
                                            +
                                        </Button>
                                        <Button onClick={
                                            e => {
                                                e.preventDefault()
                                                incrementDecrementCha(e)
                                            }
                                        }>
                                            -
                                        </Button>
                                    </Button.Group>
                                </Segment>
                            </Segment.Group>
                        </Form.Group>
                    </Grid.Column>
                    <Button type="submit">Create!</Button>
                </Form>
            </Grid.Row>
        </Grid>
    )
}

export default CharacterForm;