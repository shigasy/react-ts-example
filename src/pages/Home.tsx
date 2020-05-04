import React from 'react';
import TimerContainerForm from '../formal/container/TimerContainerForm';
import { CharacterListFC, CounterFC, TimerFC } from '../components';
import { Character } from '../types/character';
import Main from '../Main';
import Counter from '../Counter';
import Timer from '../Timer';

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

const Home = () => (
  <>
    <h1>FC container</h1>
    <TimerContainerForm />
    <h1>Functional Components</h1>
    <CharacterListFC characters={Characters} school="これ" />
    <CounterFC />
    <TimerFC />

    <h1>class Components</h1>
    <Main />
    <Counter />
    <Timer />
  </>
);

export default Home;
