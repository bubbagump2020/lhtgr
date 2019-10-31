import React from 'react'

class PlayerPage extends React.Component {

    componentDidMount = () => {
        fetch('http://localhost:3001/characters')
            .then(response => response.json())
            .then(data => console.log(data))
    }


    render(){
        return(
            <div>
                <h1>PlayerPage Component</h1>
            </div>
        )
    }
}

export default PlayerPage;