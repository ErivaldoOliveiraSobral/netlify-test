import logo from '../../app/assets/logo.svg';
import './styles.css';

const WIPMessage = () => {
  return (
    <div>
      <div>Em desenvolvimento!</div>
      <pre>Hostname: {window?.location?.hostname ?? ''}</pre>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WIPMessage />
      </header>
    </div>
  );
}

export default Placeholder;
