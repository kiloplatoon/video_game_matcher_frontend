import React, { Component } from 'react'
import FinderList from './FinderList'
import UserAPI from '../../api/UserAPI'
import { CardDeck, CardColumns } from 'react-bootstrap'


class FinderPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [],
      platform: "",
      game: "",
      difficulty: ""

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

  platformRadioChangeHandler = (event) => {
    this.setState({
      platform: event.target.value
    });
  }

  gameRadioChangeHandler = (event) => {
    this.setState({
      game: event.target.value
    });
  }

  difficultyRadioChangeHandler = (event) => {
    this.setState({
      difficulty: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="filter">
          <div onChange={this.platformRadioChangeHandler.bind(this)}>
            <h3>Platform</h3>
            <input type="radio" value="PC" name="platform" /> PC
            <input type="radio" value="PS4" name="platform" /> PS4
            <input type="radio" value="Xbox One" name="platform" /> Xbox One
            <input type="radio" value="Xbox One" name="platform" /> Switch
          </div>
          <div onChange={this.gameRadioChangeHandler.bind(this)}>
            <h3>Game</h3>
            <input type="radio" value="Smite" name="game" /> Smite
            <input type="radio" value="Overwatch" name="game" /> Overwatch
            <input type="radio" value="Call of Duty Warzone" name="game" /> Call of Duty Warzone
            <input type="radio" value="Rocket League" name="game" /> Rocket League
            <input type="radio" value="Fortnite" name="game" /> Fortnite
          </div>  
          <div onChange={this.difficultyRadioChangeHandler.bind(this)}>
            <h3>Casual or Competitive</h3>
            <input type="radio" value="Casual" name="difficulty" /> Casual
            <input type="radio" value="Competitive" name="difficulty" /> Competitive
          </div>
        </div>
        <br />
        <div className="cards">
        <CardColumns>
          <CardDeck>
            <FinderList profiles={this.state.profiles} platform={this.state.platform} game={this.state.game} difficulty={this.state.difficulty} />
          </CardDeck>
        </CardColumns>
        </div>
      </div>
    )
  }
}




export default FinderPage;