import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Teachers from './pages/Teachers';
import Groups from './pages/Groups';

function App() {
  return (
    <HashRouter>
      <Route exact path='/'>
        <HomePage></HomePage>
      </Route>
      <Route exact path='/login'>
         <Login></Login>
      </Route>
      <Route exact path='/signup'>
        <Signup></Signup>
      </Route>
      <Route exact path='/teachers'>
        <Teachers></Teachers>
      </Route>
      <Route exact path='/groups'>
       <Groups></Groups>
      </Route>

    
    </HashRouter>
  );
}

export default App;
