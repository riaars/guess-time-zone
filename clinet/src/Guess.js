import React, {Component} from 'react';

class Guess extends Component {
  state = {
    guess: '',
  };

  onChange = e => {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.checkGuess(this.state.guess);
    console.log('guess number ' + this.state.guess);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
          <div></div>

          <input
            type="number"
            name="guess"
            value={this.state.guess}
            placeholder="Put your guess..."
            style={{flex: '10', padding: '5px'}}
            onChange={this.onChange}
          />

          <input
            type="submit"
            value="Submit"
            onSubmit={this.onSubmit}
            className="btn btn-info"
            style={{flex: '1'}}
          />
        </form>
      </div>
    );
  }
}

export default Guess;
