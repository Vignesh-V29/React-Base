import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  return (     
    <Provider store={store}>
    <div className="App">
    <Header/>
    <Counter name="React-Redux"/>  
    <Footer/>           
    </div>
    </Provider>
  );
}

export default App;
