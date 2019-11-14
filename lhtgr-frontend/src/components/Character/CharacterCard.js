import React from 'react';
import {
    Card,
    Col,
    Container,
    Row
} from 'react-bootstrap';

export function CharacterCard(props){
    const character = props.character
    return(
        <Card border="dark" align="center">
            <Card.Header>{character.name}</Card.Header>
            <Card.Body>
                <Card.Text tag="h4">{character.race}</Card.Text>
                <Card.Text tag="h4">{character.primary_class}, {character.level}</Card.Text>
                <Container fluid align="center">
                    <Row>
                        <Col>
                            Strength<br></br>
                            {character.str}
                        </Col>
                        <Col>
                            Dexterity<br></br>
                            {character.dex}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Constitution<br></br>
                            {character.con}
                        </Col>
                        <Col>
                            Intelligence<br></br>
                            {character.int}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Wisdom<br></br>
                            {character.wis}
                        </Col>
                        <Col>
                            Charisma<br></br>
                            {character.cha}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}