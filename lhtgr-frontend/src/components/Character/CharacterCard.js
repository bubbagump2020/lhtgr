import React from 'react';
import {
    Accordion,
    Button,
    Card,
    Col,
    Container,
    Row
} from 'react-bootstrap';

export function CharacterCard(props){
    const character = props.character

    return(
        <Card border="dark">
            <Card.Header>{character.name}</Card.Header>
            <Card.Body>
                <Card.Text tag="h4">{character.race}</Card.Text>
                <Card.Text tag="h4">{character.primary_class}, {character.level}</Card.Text>
            </Card.Body>
        </Card>
    )
}