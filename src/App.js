// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NavBar from './Components/Navbar/navBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
      <Routes>
        <Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
