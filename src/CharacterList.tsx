import React, { Component } from 'react';

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[];
}

class CharacterList extends Component<CharacterListProps> {
  render() {
    const { school, characters } = this.props;

    return (
      <>
        <h2>{school}</h2>
        {characters.map(c => (
          <div key={c.id}>
            <h3>{c.name}</h3>
            <h3>{c.age}</h3>
            <h3>{c.height ? c.height : '???'}</h3>
          </div>
        ))}
      </>
    );
  }
}

export default CharacterList;
