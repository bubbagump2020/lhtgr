import React from 'react'
import { CharacterCard } from './CharacterCard'
import {
    Container,
    CardGroup,
    Spinner
} from 'react-bootstrap'

import { useSelector } from 'react-redux'

const scrollBox = {
    overflow: 'auto',
    height: '400px'
}

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
                            <Container key={character.id} fluid >
                                <CharacterCard character={character} /><br></br>
                            </Container>
                        )
                    }

                })
            }
        }
    }

    return(
        <Container fluid style={{backgroundColor: "cadetblue", scrollBox}}>
            <CardGroup>
                {createCharacterCards()}
            </CardGroup>
        </Container>
    )

}