import React from 'react';
import './App.css';
import Counter from './Components/UsingHooks/Counter';
import HookCounter from './Components/UsingClass/Counter'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CounterState from './Context/CounterState';

const App = () => {

  return (     
    
    <div className="App">
    <Header/>
    <Counter name="ReducerHooks" value="5"/>

    <CounterState>
      <HookCounter name="ContextApiWithReducer"/>
    </CounterState>

    <Footer/>           
    </div>
    
  );
}

export default App;
