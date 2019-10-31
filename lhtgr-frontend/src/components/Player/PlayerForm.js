import React from 'react'
import { Form, Header, Button } from 'semantic-ui-react'


class PlayerForm extends React.Component{

    render(){
        return(
            <Form onSubmit={this.props.playerCreation}>
                <Header as="h3">Player Creation</Header>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder="Username" type="text" onChange={e => this.props.playerName(e)} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder="Password" type="password" onChange={e => this.props.playerPassword(e)} />
                </Form.Field>
                <Button type="submit">Create Player</Button>
            </Form>
        )
    }

}

export default PlayerForm;