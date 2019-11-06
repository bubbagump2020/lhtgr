import React from 'react'
import { CharacterCard } from './CharacterCard'
import { Card, Spinner } from 'reactstrap'

export function CharacterCollection(props){

    const createCharacterCards = () => {
        if(props.characters.length === 0){
            return(
                <Spinner color="primary" />
            )
        } else {
            return props.characters.map(character => {
                if(character.player.id === props.currentPlayer){
                    return(
                        <Card key={character.id}>
                            {console.log(character)}
                            <CharacterCard character={character}/>
                        </Card>
                    )
                }
            })
        }
    }

    return(
        <div>
            {createCharacterCards()}
        </div>
    )

}