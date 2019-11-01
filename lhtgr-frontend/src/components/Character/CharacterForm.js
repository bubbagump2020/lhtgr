import React from 'react';
import { Form, Header, Button, Segment, Container } from 'semantic-ui-react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { characterName, characterClass } from '../../redux/actions/index'



const CharacterForm = ({props}) => {
    const {character} = useSelector(state => ({character: state.character}))
    const dispatch = useDispatch()

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
                <Form>
                    <Header as="h3" align="center">Character Creation</Header><br></br>
                    <Form.Group>
                        <Segment>
                            <Header as="h4">Name,  Class,  Race</Header>
                            <Form.Field>
                                <Form.Input fluid label="Character Name" placeholder="Character Name" type="text" onChange={e => dispatch(characterName(e.target.value))} /><br></br>
                                <Form.Select fluid label="Character Primary Class" options={coreClasses} placeholder="Character's Primary Class" onChange={e => dispatch(characterClass({value: e.target.innerText}))}/><br></br>
                                <Form.Select label="Character Race" options={coreRaces} placeholder="Character Race" onChange={e => dispatch()} /><br></br>
                                <Form.Input label="Custom Character Race" placeholder="Custom Character Race" /><br></br>
                                <Form.Input label="Custom Character Class" placeholder="Custom Character Class" />
                            </Form.Field>
                        </Segment>
                        <Segment>
                            {character.characterAttributes[0].str}<br></br>
                            {character.characterAttributes[1].dex}<br></br>
                            {character.characterAttributes[2].con}<br></br>
                            {character.characterAttributes[3].int}<br></br>
                            {character.characterAttributes[4].wis}<br></br>
                            {character.characterAttributes[5].cha}
                        </Segment>
                    </Form.Group>
                    <Button type="submit">Create!</Button>
                </Form>
            </Segment>
        </Container>
    )
}



export default CharacterForm;