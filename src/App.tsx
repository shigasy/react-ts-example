import React from 'react';
import './App.css';
import Main from './Main';
import Counter from './Counter';
import Timer from './Timer';
import { CharacterListFC, CounterFC, TimerFC } from './components/index';
import { Character } from './types/character';
import TimerContainerForm from './formal/container/TimerContainerForm';

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

const App = () => (
  <div className="App">
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
  </div>
);

export default App;
