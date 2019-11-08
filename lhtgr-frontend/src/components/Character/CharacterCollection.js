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

    const { changedCharacter } = useSelector(state => ({changedCharacter: state.character}))
    console.log(changedCharacter)

    const createCharacterCards = () => {
        if(props.characters.length === 0){
            return(
                <Spinner animation="grow"/>
            )
        } else {
            return props.characters.map(character => {
                if(character.player.id === props.currentPlayerId){
                    return(
                        <Container fluid>
                            <Card key={character.id}>
                                <CharacterCard character={character}/>
                            </Card>
                        </Container>
                    )
                } else if (character.id === changedCharacter.id){
                    return(
                        <Container fluid>
                            <Card key={character.id}>
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