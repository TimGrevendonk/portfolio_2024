import './App.css';
// ! Lookup what it means to have { } or not around the imports. 
import SnubString from './utils/helpers/snubString.ts';

function App() {
  return (
    <div className="App">
      <p>helloz?</p>
      <p>{ SnubString("this here is a long text that should be snubbed", 20) }</p>
    </div>
  );
}

export default App;
