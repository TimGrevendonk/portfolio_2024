import { Link } from 'react-router-dom';
import GeneralNavigation from '../../components/general/navigation/navigation';
import './homepage.css';

const GeneralHomepage = () => {
  return (
    <div className="GeneralHomepage">
      <h1>GeneralHomepage</h1>
      <GeneralNavigation/>
    </div>
  );
}

export default GeneralHomepage;