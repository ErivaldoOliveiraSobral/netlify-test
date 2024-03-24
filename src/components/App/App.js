import logo from '../../app/assets/logo.svg';
import './App.css';

const HelloWorld = () => {
  return (
    <div>
      <div>Em desenvolvimento!</div>
      <pre>Hostname: {window?.location?.hostname ?? ''}</pre>
    </div>
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
