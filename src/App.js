import React, {Component} from 'react';
import Swapper from './swapper';
import './App.css';
import {addToArray, removeFromArray} from './array-util';

class App extends Component {
  state = {
    availableFlavors: [
      'butter pecan', 'chocolate', 'chocolate chip', 'chocolate mint',
      'cookie dough', 'neapolitan', 'rainbow sherbet',
      'raspberry', 'strawberry', 'vanilla'
    ],
    likedFlavors: []
  };

  onLike = flavor => {
    this.setState(state => {
      const availableFlavors = removeFromArray(state.availableFlavors, flavor);
      const likedFlavors = addToArray(state.likedFlavors, flavor);
      return {availableFlavors, likedFlavors};
    });
  };

  onUnlike = flavor => {
    this.setState(state => {
      const availableFlavors = addToArray(state.availableFlavors, flavor);
      const likedFlavors = removeFromArray(state.likedFlavors, flavor);
      return {availableFlavors, likedFlavors};
    });
  };

  render() {
    const {availableFlavors, likedFlavors} = this.state;
    return (
      <div className="App">
        <h1>Favorite Ice Cream Flavors</h1>
        <Swapper
          leftItems={availableFlavors}
          rightItems={likedFlavors}
          onMoveLeft={this.onUnlike}
          onMoveRight={this.onLike}
          size={5}
        />
      </div>
    );
  }
}

export default App;
