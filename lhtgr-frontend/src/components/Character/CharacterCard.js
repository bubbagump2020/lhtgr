import React from 'react';
import { Card } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux'

export function CharacterCard(){
    const { characters } = useSelector(state => ({ characters: state.characters}))
    const { players } = useSelector(state => ({ players: state.players}))

    const myCharacters = []

    if ( characters === undefined){
        return(
            <di>
                Loading
            </di>
        )
    } else {
        if(characters.characters !== undefined){
            characters.characters.characters.map(character => {
                myCharacters.push(character)
            })
        }
    }

    

    return(
        <Card.Group>
            {console.log(players.players)}
        </Card.Group>
    )
}