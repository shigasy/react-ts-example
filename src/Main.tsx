import React, { Component } from 'react';
import CharacterList, { Character } from './CharacterList';

class Main extends Component {
  render() {
    const Characters: Character[] = [
      {
        id: 1,
        name: '名前1',
        age: 16,
        height: 151,
      },
      {
        id: 2,
        name: '名前2',
        age: 20,
      },
    ];

    return (
      <div>
        <h1>test</h1>
        <CharacterList school="スクール" characters={Characters} />
      </div>
    );
  }
}

export default Main;
