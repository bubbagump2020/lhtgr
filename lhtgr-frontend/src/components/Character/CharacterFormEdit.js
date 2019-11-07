import React from 'react';
import { Container, Row, Col,
    Form, Button, ButtonGroup, Input, FormGroup, FormText, Label } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { 
    character,
    characterName,
    characterClass,
    characterLevel,
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

export function EditCharacter (props){
    const { thisCharacter } = useSelector(state => ({ thisCharacter: state.character }) )
    const { characters } = useSelector(state => ({ characters: state.characters }) )
    const { thisCampaign } = useSelector(state => ({ thisCampaign: state.campaign }) )
    const { currentPlayer } = useSelector(state => ({ currentPlayer: state.currentPlayer }) )

    const dispatch = useDispatch()

    const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ]

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

    const selectedCharacter = (event) => {
        let character = {}
        characters.map(selectedCharacter => {
            if(selectedCharacter.name === event){
                character = selectedCharacter
                console.log(character)
            }
        })
        return character
    }

    const incrementDecrementStr = (event) => {
        console.log(event.target.innerText)
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

    const editCharacter = (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        console.log(token)
        fetch(`http://localhost:3001/characters/${thisCharacter.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: thisCharacter.name,
                primary_class: thisCharacter.primary_class,
                level: thisCharacter.level,
                str: thisCharacter.str,
                dex: thisCharacter.dex,
                con: thisCharacter.con,
                int: thisCharacter.int,
                wis: thisCharacter.wis,
                cha: thisCharacter.cha
            })
        })
            .then(response => response.json())
    }

    return(
        <Container>
            <Row>
                <Form onSubmit={e => editCharacter(e)}>
                    <Col>
                        <FormGroup>
                            <Label for="Selected Character" tag="h3">Select Character</Label>
                            <Input type="select" name="select" bsSize="lg" id="Selected Character"onChange={e => dispatch(character(selectedCharacter(e.target.value)))}>
                                {characters.map(character => {
                                    return(
                                        <option key={character.id}>{character.name}</option>
                                    )
                                })}
                            </Input>
                            <Label for="Character Name" tag="h3">Character Name</Label>
                            <Input type="text" placeholder={`Character Name`} bsSize="lg" onChange={e => dispatch(characterName(e.target.value))}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Character Class" tag="h3">Character Class</Label>
                            <Input type="select" bsSize="lg" onChange={e => dispatch(characterClass(e.target.value))}>
                                {classes.map(selectedClass => {
                                    return(
                                        <option key={selectedClass.key}>{selectedClass.text}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Character Level" tag="h3">Character Level</Label>
                            <Input type="select" bsSize="lg" onChange={e => dispatch(characterLevel(e.target.value))}>
                                {levels.map(level => {
                                    return(
                                        <option key={level}>{level}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup inline>
                            <Label for="strength" tag="h4">Strength</Label>
                            <Label for="strength value" tag="h4">{thisCharacter.str}</Label>
                            <ButtonGroup>
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
                            </ButtonGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="strength" tag="h4">Dexterity</Label>
                            <Label for="strength value" tag="h4">{thisCharacter.dex}</Label>
                            <ButtonGroup>
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
                            </ButtonGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="strength" tag="h4">Constitution</Label>
                            <Label for="strength value" tag="h4">{thisCharacter.con}</Label>
                            <ButtonGroup>
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
                            </ButtonGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="strength" tag="h4">Intelligence</Label>
                            <Label for="strength value" tag="h4">{thisCharacter.int}</Label>
                            <ButtonGroup>
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
                            </ButtonGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="strength" tag="h4">Wisdom</Label>
                            <Label for="strength value" tag="h4">{thisCharacter.wis}</Label>
                            <ButtonGroup>
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
                            </ButtonGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="strength" tag="h4">Charisma</Label>
                            <Label for="strength value" tag="h4">{thisCharacter.cha}</Label>
                            <ButtonGroup>
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
                            </ButtonGroup>
                        </FormGroup>
                    </Col>
                    <Button>Edit!</Button>
                </Form>
            </Row>
        </Container>
    )

}