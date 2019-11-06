import React, { useState } from 'react';
import { Card, CardText, CardBody, CardTitle,
    CardLink, Button, CardDeck } from 'reactstrap';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom'
import { CardHeader, CardGroup } from 'semantic-ui-react';
import { useDispatch } from 'react-redux'
import {  characterName,
    characterClass } from '../../redux/actions/index'

export function CharacterCard(props){
    
    const dispatch = useDispatch()

    let [ open, setOpen ] = useState(false)

    return(
        <CardDeck>
            <Card className="text-center" outline color="secondary">
                <CardBody>
                    <CardTitle tag="h3"><strong>{props.character.name}</strong></CardTitle>
                    <CardText tag="h4">{props.character.race}</CardText>
                    <CardText tag="h4">{props.character.primary_class}, {props.character.level}</CardText>
                    <CardLink to={`/characters/${props.character.id}/edit`} tag={Link} >Edit Character</CardLink>
                </CardBody>
            </Card>
        </CardDeck>
    )
}