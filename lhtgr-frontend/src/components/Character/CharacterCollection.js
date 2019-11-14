import React from 'react'
import { CharacterCard } from './CharacterCard'
import {
    Container,
    Card,
    CardGroup,
    Spinner
} from 'react-bootstrap'

import { useSelector } from 'react-redux'

export function CharacterCollection(props){
    const { characters } = useSelector(state => ({ characters: state.characters }))
    const createCharacterCards = () => {
        if(characters.length === 0){
            return(
                <Spinner animation="grow"/>
            )
        } else {
            if(props.players.length === 0){
                return(
                    <Spinner animation="grow" />
                )
            } else{
                return characters.map(character => {
                    if(character.player_id === props.selectedPlayer.id){
                        return(
                            <Container key={character.id} fluid>
                                <CharacterCard character={character} />
                            </Container>
                        )
                    }

                })
            }
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