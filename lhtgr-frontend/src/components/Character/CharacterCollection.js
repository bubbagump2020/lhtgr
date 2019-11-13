import React from 'react'
import { CharacterCard } from './CharacterCard'
import {
    Card,
    CardGroup,
    Spinner
} from 'react-bootstrap'
import { Container } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export function CharacterCollection(props){
    // console.log(props)
    const { characters } = useSelector(state => ({ characters: state.characters }))
    const { changedCharacter } = useSelector(state => ({changedCharacter: state.character}))
    console.log(characters)
    const createCharacterCards = () => {
        if(characters.length === 0){
            return(
                <Spinner animation="grow"/>
            )
        } else {
            return characters.map(character => {
                // console.log(character)
                if(character.player_id === props.selectedPlayer.id){
                    return(
                        <Container key={character.name} fluid>
                            <Card>
                                <CharacterCard character={character}/>
                            </Card>
                        </Container>
                    )
                } else if (character.id === changedCharacter.name){
                    return(
                        <Container key={character.id} fluid>
                            <Card>
                                <CharacterCard changedCharacter={changedCharacter} />
                            </Card>
                        </Container>
                    )
                }
            })
        }
    }

    return(
        <Container fluid>
            <CardGroup>
                {createCharacterCards()}
            </CardGroup>
        </Container>
    )

}