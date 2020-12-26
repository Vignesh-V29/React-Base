import './App.css';
import Counter from './Components/UsingHooks/Counter';
import ClassCounter from './Components/UsingClass/Counter'
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Counter name="Hooks"/>
        <ClassCounter name="Class"/>
        <Footer/>
    </div>
  );
}

export default App;
