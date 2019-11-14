import React from 'react';
import { Container, Col,
    Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { 
    character,
    updatedCharacter,
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
    decrementCha,
} from '../../redux/actions/index'

export function EditCharacter (props){
    const { thisCharacter } = useSelector(state => ({ thisCharacter: state.character }) )
    const { characters } = useSelector(state => ({ characters: state.characters }) )
    const { thisCampaign } = useSelector(state => ({ thisCampaign: state.campaign }) )
    const { currentPlayer } = useSelector(state => ({ currentPlayer: state.selectedPlayer }) )
    const dispatch = useDispatch()

    const levels = [
        { key: 1, text: 1, value: 'lvl 1' },
        { key: 2, text: 2, value: 'lvl 2' },
        { key: 3, text: 3, value: 'lvl 3' },
        { key: 4, text: 4, value: 'lvl 4' },
        { key: 5, text: 5, value: 'lvl 5' },
        { key: 6, text: 6, value: 'lvl 6' },
        { key: 7, text: 7, value: 'lvl 7' },
        { key: 8, text: 8, value: 'lvl 8' },
        { key: 9, text: 9, value: 'lvl 9' },
        { key: 10, text: 10, value: 'lvl 10' },
        { key: 11, text: 11, value: 'lvl 11' },
        { key: 12, text: 12, value: 'lvl 12' },
        { key: 13, text: 13, value: 'lvl 13' },
        { key: 14, text: 14, value: 'lvl 14' },
        { key: 15, text: 15, value: 'lvl 15' },
        { key: 16, text: 16, value: 'lvl 16' },
        { key: 17, text: 17, value: 'lvl 17' },
        { key: 18, text: 18, value: 'lvl 18' },
        { key: 19, text: 19, value: 'lvl 19' },
        { key: 20, text: 20, value: 'lvl 20' }
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
            let attribute = thisCharacter.str
            attribute++;
            dispatch(incrementStr(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = thisCharacter.str
            attribute--
            dispatch(decrementStr(attribute))
            return attribute;
        }
    }

    const incrementDecrementDex = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = thisCharacter.dex
            attribute++;
            dispatch(incrementDex(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = thisCharacter.dex
            attribute--
            dispatch(decrementDex(attribute))
            return attribute;
        }
    }

    const incrementDecrementCon = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = thisCharacter.con
            attribute++;
            dispatch(incrementCon(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = thisCharacter.con
            attribute--
            dispatch(decrementCon(attribute))
            return attribute;
        }
    }

    const incrementDecrementInt = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = thisCharacter.int
            attribute++;
            dispatch(incrementInt(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = thisCharacter.int
            attribute--
            dispatch(decrementInt(attribute))
            return attribute;
        }
    }

    const incrementDecrementWis = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = thisCharacter.wis
            attribute++;
            dispatch(incrementWis(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = thisCharacter.wis
            attribute--
            dispatch(decrementWis(attribute))
            return attribute;
        }
    }

    const incrementDecrementCha = (event) => {
        event.preventDefault()
        if(event.target.innerText === '+'){
            let attribute = thisCharacter.cha
            attribute++;
            dispatch(incrementCha(attribute))
            return attribute;
        }
        if(event.target.innerText === '-'){
            let attribute = thisCharacter.cha
            attribute--
            dispatch(decrementCha(attribute))
            return attribute;
        }
    }

    const editCharacter = (event) => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3001/players/${props.selectedPlayer.id}/characters/${thisCharacter.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                player_id: currentPlayer.id,
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
            .then(response => response.headers)
            .then(character => {
                characters.map(editedCharacter => {
                    if(editedCharacter.id === character.id){

                        editedCharacter = character
                        dispatch(updatedCharacter(editedCharacter))
                    }
                })
            })
    }

    return(
        <Container fluid>
            <Form align="center" onSubmit={e => editCharacter(e)}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Select Adventurer</Form.Label>
                        <Form.Control as="select" value={-1} onChange={e => dispatch(character(selectedCharacter(e.target.value)))}>
                            <option disabled value={-1} key={-1}>Select Adventurer</option>
                            {characters.map(selectCharacter => {
                                if(selectCharacter.player_id === props.selectedPlayer.id){
                                    return(
                                        <option key={selectCharacter.id}>{selectCharacter.name}</option>
                                    )
                                }
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Adventurer Name</Form.Label>
                        <Form.Control type="text" placeholder={thisCharacter.name} onChange={e => dispatch(characterName(e.target.value))} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Adventurer Class</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(characterClass(e.target.value))}>
                            <option >Select Class</option>
                            {classes.map(selectedClass => {
                                return(
                                    <option key={selectedClass.key}>{selectedClass.text}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Adventurer Level</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(characterLevel(e.target.value))}>
                            <option >Select Level</option>
                            {levels.map(selectedClass => {
                                return(
                                    <option key={selectedClass.key}>{selectedClass.text}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Strength</h4></Form.Label>
                            <h4>{thisCharacter.str}</h4>
                            <Button onClick={e => incrementDecrementStr(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementStr(e)}><h4>-</h4></Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Dexterity</h4></Form.Label>
                            <h4>{thisCharacter.dex}</h4>
                            <Button onClick={e => incrementDecrementDex(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementDex(e)}><h4>-</h4></Button>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Constitution</h4></Form.Label>
                            <h4>{thisCharacter.con}</h4>
                            <Button onClick={e => incrementDecrementCon(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementCon(e)}><h4>-</h4></Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Intelligence</h4></Form.Label>
                            <h4>{thisCharacter.int}</h4>
                            <Button onClick={e => incrementDecrementInt(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementInt(e)}><h4>-</h4></Button>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Wisdom</h4></Form.Label>
                            <h4>{thisCharacter.wis}</h4>
                            <Button onClick={e => incrementDecrementWis(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementWis(e)}><h4>-</h4></Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label><h4>Charisma</h4></Form.Label>
                            <h4>{thisCharacter.cha}</h4>
                            <Button onClick={e => incrementDecrementCha(e)}><h4>+</h4></Button><Button onClick={e => incrementDecrementCha(e)}><h4>-</h4></Button>
                    </Form.Group>
                </Form.Row>
                <Button type="submit">Edit Character</Button>
            </Form>
        </Container>
    )
}