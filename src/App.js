import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Learn React</h1>
          <p>Thank you Heroku!</p>
          <Clock/>
        </div>
        
       
      </header>
    </div>
  );
}

export default App;
