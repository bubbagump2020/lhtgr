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
        <Card border="dark" align="center" style={{backgroundColor: "cadetblue", fontSize: "20px"}} >
            <Card.Header style={{backgroundColor: "darkcyan", fontSize: "24px"}}>
                {character.name}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                   {character.race}
                </Card.Text>
                <Card.Text>
                    {`${character.primary_class}`}
                </Card.Text>
                <Card.Text>
                    {`Level: ${character.level}`}
                </Card.Text>
                <Container fluid align="center">
                    <Row>
                        <Col>
                            <Card.Text>
                                Strength
                            </Card.Text>
                            <Card.Text>
                                {`${character.str}`}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                Dexterity
                            </Card.Text>
                            <Card.Text>
                                {`${character.dex}`}
                            </Card.Text>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            <Card.Text>
                                Constitution
                            </Card.Text>
                            <Card.Text>
                                {`${character.con}`}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                Intelligence
                            </Card.Text>
                            <Card.Text>
                                {`${character.int}`}
                            </Card.Text>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            <Card.Text>
                                Wisdom
                            </Card.Text>
                            <Card.Text>
                                {`${character.wis}`}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                Charisma
                            </Card.Text>
                            <Card.Text>
                                {`${character.cha}`}
                            </Card.Text>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}