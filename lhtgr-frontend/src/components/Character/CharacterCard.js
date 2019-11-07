import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardDeck } from 'reactstrap';

export function CharacterCard(props){

    return(
        <CardDeck>
            <Card className="text-center" outline color="secondary">
                <CardBody>
                    <CardTitle tag="h3"><strong>{props.character.name}</strong></CardTitle>
                    <CardText tag="h4">{props.character.race}</CardText>
                    <CardText tag="h4">{props.character.primary_class}, {props.character.level}</CardText>
                </CardBody>
            </Card>
        </CardDeck>
    )
}