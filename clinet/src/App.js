import React, {Component} from 'react';
import './App.css';
import Guess from './Guess';
class App extends Component {
  state = {
    currentCity: [],
    displayMessage: '',
    city: [
      {
        id: 1,
        city: 'Stockholm',
        utc: 2,
        selected: false,
      },
      {
        id: 2,
        city: 'New York',
        utc: -4,
        selected: false,
      },
      {
        id: 3,
        city: 'Riga',
        utc: 1,
        selected: false,
      },
    ],
  };

  componentDidMount() {
    // console.log('start fetch');
    // fetch('http://worldtimeapi.org/api/timezone/Europe')
    //   .then(res => res.json())
    //   .then(city => this.setState({city}, () => console.log(city)));
  }

  onChange = e => {
    console.log(e.target.value);
    var id = e.target.value;
    this.state.currentCity = this.state.city.find(item => item.id == id);
    console.log(this.state.currentCity);
  };

  // this.state.city.find(x => x.id === e.target.value).city;

  // console.log(currentCity);
  // this.setState({
  //   city: this.state.city.map(city => {
  //     if (city.id === id) {
  //       city.selected = !city.selected;
  //     }
  //     return city;
  //   }),
  // });

  checkGuess = guessNumber => {
    if (guessNumber > this.state.currentCity.utc) {
      this.setState({displayMessage: 'Too High, try Again'});
    } else if (guessNumber < this.state.currentCity.utc) {
      this.setState({displayMessage: 'Too Low, try Again'});
    } else {
      this.setState({displayMessage: 'You are genius'});
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Guess City Time</h2>
        <div className="drop-down">
          <select onChange={this.onChange.bind(this)}>
            {this.state.city.map(city => {
              return (
                <option key={city.id} value={city.id}>
                  {city.city}
                </option>
              );
            })}
          </select>
        </div>

        <Guess checkGuess={this.checkGuess} />
        <p>{this.state.displayMessage}</p>
      </div>
    );
  }
}

export default App;
