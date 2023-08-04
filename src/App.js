import logo from './logo.svg';
import './App.css';

const HelloWorld = () => {

  return (
    <div>Hello World! Netlify test in {window?.location?.href ?? ''}</div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
