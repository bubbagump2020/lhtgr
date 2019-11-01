import React from 'react'
import { Card, Segment, Header, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Logout } from '../Logout'
import CharacterForm from '../Character/CharacterForm'
import { CharacterCard } from '../Character/CharacterCard'
class PlayerPage extends React.Component {

    componentDidMount = () => {
        fetch('http://localhost:3001/characters')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    handleCharacterCreation = (e) => {
        e.preventDefault()
    }

    render(){
        return(
           <Container fluid>
               <Segment textAlign="center">
                   <Header as="h1">Welcome Back!</Header>
                   <Link to="/"><Logout /></Link>
               </Segment>
               <Segment>
                   <CharacterForm createCharacter={e => this.handleCharacterCreation(e)}/>
               </Segment>
           </Container>
        )
    }
}

export default PlayerPage;