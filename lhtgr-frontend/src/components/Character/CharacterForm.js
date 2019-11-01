import React from 'react';
import { Form, Header, Button, Segment, Container } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { characterName, characterClass, characterRace, campaign } from '../../redux/actions/index'

const CharacterForm = (props) => {
    const {character} = useSelector(state => ({character: state.character}))
    const campaigns = useSelector(state => state)
    const dispatch = useDispatch()

    let campaignArray = []
    if(campaigns === undefined){
        return(
            <div>
                Loading
            </div>
        )
    } else {
        if(campaigns.campaigns.campaigns !== undefined){
            campaigns.campaigns.campaigns.map(campaign => {
                campaign.key = campaign.name
                campaign.text = campaign.name
                campaign.value = campaign.name
                campaignArray.push(campaign)
            })
        }
    }

    const coreClasses = [
        { key: 'barb', text: 'Barbarian', value: 'barbarian'},
        { key: 'bard', text: 'Bard', value: 'bard'},
        { key: 'cler', text: 'Cleric', value: 'cleric'},
        { key: 'drui', text: 'Druid', value: 'druid'},
        { key: 'figh', text: 'Fighter', value: 'fighter'},
        { key: 'monk', text: 'Monk', value: 'monk'},
        { key: 'paly', text: 'Paladin', value: 'paladin'},
        { key: 'rang', text: 'Ranger', value: 'ranger'},
        { key: 'rogu', text: 'Rogue', value: 'rogue'},
        { key: 'sorc', text: 'Sorcerer', value: 'sorcerer'},
        { key: 'wiza', text: 'Wizard', value: 'wizard'}
    ]

    const coreRaces = [
        { key: 'dwar', text: 'Dwarf', value: 'dwarf' },
        { key: 'elf', text: 'Elf', value: 'elf'},
        { key: 'gnom', text: 'Gnome', value: 'gnome'},
        { key: 'hael', text: 'Half Elf', value: 'half-elf'},
        { key: 'haor', text: 'Half Orc', value: 'half-orc'},
        { key: 'half', text: 'Halfling', value: 'halfling'},
        { key: 'huma', text: 'Human', value: 'human'}
    ]

    return(
        <Container fluid>
            <Segment>
                <Form onSubmit={e => props.createCharacter(e)}>
                    <Header as="h3" align="center">Character Creation</Header><br></br>
                    <Form.Group>
                        <Segment>
                            <Header as="h4">Name,  Class,  Race</Header>
                            <Form.Field>
                                <Form.Input fluid label="Character Name" placeholder="Character Name" type="text" onChange={e => dispatch(characterName(e.target.value))} /><br></br>
                                <Form.Select fluid label="Campaign" options={campaignArray} placeholder="Campaign" onChange={e => dispatch(campaign({value: e.target.innerText}))}/>
                                <Form.Select fluid label="Character Primary Class" options={coreClasses} placeholder="Character's Primary Class" onChange={e => dispatch(characterClass({value: e.target.innerText}))}/><br></br>
                                <Form.Select label="Character Race" options={coreRaces} placeholder="Character Race" onChange={e => dispatch(characterRace({value: e.target.innerText}))} /><br></br>
                                <Form.Input label="Custom Character Race" placeholder="Custom Character Race" /><br></br>
                                <Form.Input label="Custom Character Class" placeholder="Custom Character Class" />
                            </Form.Field>
                        </Segment>
                        <Segment>
                            {character.characterAttributes.str}<br></br>
                            {character.characterAttributes.dex}<br></br>
                            {character.characterAttributes.con}<br></br>
                            {character.characterAttributes.int}<br></br>
                            {character.characterAttributes.wis}<br></br>
                            {character.characterAttributes.cha}
                        </Segment>
                    </Form.Group>
                    <Button type="submit">Create!</Button>
                </Form>
            </Segment>
        </Container>
    )
}



export default CharacterForm;