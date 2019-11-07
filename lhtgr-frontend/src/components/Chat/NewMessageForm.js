import React from 'react'

export default class NewMessageForm extends React.Component {
    state = {
        text: '',
        conversation_id: this.props.conversation_id
    }

    componentWillReceiveProps = nextProps => {
        this.setState({ conversation_id: nextProps.conversation_id })
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3001/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        this.setState({ text: '' })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Message:</label>
                    <br />
                    <input value={this.state.text} type="text" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }

}