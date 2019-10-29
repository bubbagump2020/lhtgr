import React from 'react'
import { Button, Container, Divider, Segment, Grid, Form, Header} from 'semantic-ui-react';

class Login extends React.Component {
    render(){
        return(
            <Segment>
                <Grid columns={2} relaxed="very">
                    <Grid.Column>
                        <Form>
                            <Header as="h1">Dungeon Master Login</Header>
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