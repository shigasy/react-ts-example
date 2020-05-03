import React, { FC } from 'react';
import { Character } from '../types/character';

interface CharacterListProps {
  school: string;
  characters: Character[];
}

const CharacterListFC: FC<CharacterListProps> = ({
  school = '校名不明',
  characters,
}) => (
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

export default CharacterListFC;
