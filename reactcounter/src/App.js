import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className="App">
        <Header/>
        <Counter/>
        <Footer/>
    </div>
  );
}

export default App;
