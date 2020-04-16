import React, { Component } from 'react'
import FinderList from './FinderList'
import UserAPI from '../../api/UserAPI'
import { CardDeck, CardColumns } from 'react-bootstrap'
import './Finder.css'


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
      <div className='container finder'>
        <div className="filter">
          <div onChange={this.platformRadioChangeHandler.bind(this)} className='form'>
            <h3>Platform:</h3>
            <input type="radio" value="PC" name="platform" className="input" />  PC
            <br />
            <input type="radio" value="PS4" name="platform" className="input" /> PS4
            <br />
            <input type="radio" value="Xbox One" name="platform" className="input" /> Xbox One
            <br />
            <input type="radio" value="Switch" name="platform" className="input" /> Switch
          </div>
          <div onChange={this.gameRadioChangeHandler.bind(this)} className='form'>
            <h3>Game:</h3>
            <input type="radio" value="Smite" name="game" className="input"/> Smite
            <br />
            <input type="radio" value="Overwatch" name="game" className="input"/> Overwatch
            <br />
            <input type="radio" value="Call of Duty Warzone" name="game" className="input"/> Call of Duty Warzone
            <br />
            <input type="radio" value="Rocket League" name="game" className="input"/> Rocket League
            <br />
            <input type="radio" value="Fortnite" name="game" className="input"/> Fortnite
          </div>  
          <div onChange={this.difficultyRadioChangeHandler.bind(this)} className='form'>
            <h3>Gaming Style:</h3>
            <input type="radio" value="Casual" name="difficulty" className="input"/> Casual
            <br />
            <input type="radio" value="Competitive" name="difficulty" className="input"/> Competitive
          </div>
        </div> {/* END OF FINDER DIV */}

        <div className="cards">
          <CardColumns>
              <FinderList profiles={this.state.profiles} platform={this.state.platform} game={this.state.game} difficulty={this.state.difficulty} />
          </CardColumns>
        </div>
      </div>
    )
  }
}




export default FinderPage;