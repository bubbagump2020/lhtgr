import React, { useState } from 'react'
import { Button, Container, Divider, Segment, Grid, Form, Header} from 'semantic-ui-react';

class Login extends React.Component {

    loginDM = (e) => {
        fetch('http://localhost:3001')
    }


    render(){
        return(
            <Segment>
                <Grid columns={2} relaxed="very">
                    <Grid.Column>
                        <Form onSubmit={e => console.log(e)}>
                            <Header as="h1">Dungeon Master Login</Header>
                            <Form.Field>
                                <label>Username</label>
                                <input placeholder="Username" type="text" />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder="Password" type="password" />
                            </Form.Field>
                            <Button type="submit">Login</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Form>
                            <Header as ="h1">Player Login</Header>
                            <Form.Field>
                                <label>Username</label>
                                <input placeholder="Username" />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder="Password" />
                            </Form.Field>
                            <Button type="submit">Login</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
                <Divider vertical/>
            </Segment>
        )
    }
}

export default Login