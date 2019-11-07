import React from 'react'

export default class NewConversationForm extends React.Component {

    state = {
        title: ''
    }

    handleChange = e => {
        this.setState({ title: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3001/conversations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        this.setState({ title: '' })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Conversation</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }


}