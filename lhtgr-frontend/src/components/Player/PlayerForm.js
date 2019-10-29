import React from 'react'
import { Form, Header, Button } from 'semantic-ui-react'


class PlayerForm extends React.Component{

    render(){
        return(
            <Form>
                <Header as="h3">Player Creation</Header>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder="Username" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder="Password" type="password" />
                </Form.Field>
                <Button type="submit">Create Player</Button>
            </Form>
        )
    }

}

export default PlayerForm;