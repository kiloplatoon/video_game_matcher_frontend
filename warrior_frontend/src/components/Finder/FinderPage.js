import React, { Component } from 'react'
import FinderList from './FinderList'
import UserAPI from '../../api/UserAPI'
import { CardDeck, CardColumns } from 'react-bootstrap'


class FinderPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    UserAPI.fetchAllProfiles()
      .then((apiResponseJSON) => {
        this.setState({
          profiles: apiResponseJSON
        })
      }
      )
  }

  render() {
    console.log('State:', this.state.profiles)
    return (
      <div>
        <h1>Buddy Finder Page</h1>
        <br />
        <CardColumns>
          <CardDeck>
            <FinderList profiles={this.state.profiles} />
          </CardDeck>
        </CardColumns>
      </div>
    )
  }
}




export default FinderPage;