import './App.css';
import GeneralNavigation from './components/general/navigation/navigation.js';
import Routing from '../routes/routing.js';
// import SnubString from './utils/helpers/snubString.ts';

// * The app file is for conditions and rendering priority.
const App = () => {
  return (
    <>
      <Routing></Routing>
    </>
  );
}

export default App;
