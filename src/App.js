import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";

class App extends Component {

  state = {
    friends,
    score: 0,
    highScore: 0,
    clicked: []
  };

  handleClick = id => {
    // check to see if user clicked the image before
    if (!(this.state.clicked.indexOf(id) === -1)) {
      // if so, reset game
      this.resetGame();
    } else {
      // if not add id of clicked image to clicked array, add score, randomize list
      this.state.clicked.push(id);
      this.addScore();
      this.randomizeFriends();
    }
  };

  addScore = () => {
    // add to score, if score is higher than high score, update high score
    if (this.state.score >= this.state.highScore) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
        highScore: prevState.score + 1
      }));
    } else {
      this.setState((prevState) => ({
        score: prevState.score + 1
      }));
    }
  };

  resetGame = () => {
    // set score to 0 and reset clicked
    this.setState({
      score: 0,
      clicked: []
    })
    // reset friends list to original order
    this.resetFriends();
  };

  randomizeFriends = () => {
    // This randomizes any array you send it
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    // Randomizes the friends list and sets it to state
    this.setState(shuffle(this.state.friends));
  };

  resetFriends = () => {
    // Orders Friends back to normal and resets State.
    this.setState(this.state.friends.sort(function (a, b) { return a.id - b.id }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Guessing Game</h1>

        </header>
        <Wrapper>
          <Title score={this.state.score}
            highScore={this.state.highScore}></Title>
          {this.state.friends.map(friend => (
            <FriendCard
              randomizeFriends={this.randomizeFriends}
              resetFriends={this.resetFriends}
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
