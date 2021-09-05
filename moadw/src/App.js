
import './App.css';
import Routes from './Routes';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className={"content"}>
      <div className="circulo"></div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
