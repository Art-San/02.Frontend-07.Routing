import NavBar from "./components/NavBar";
import { Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Posts from './components/Posts'
import Login from './components/Login'
import Home from './components/Home'


function App() {
  return (
     // Реализация Navbar
    <div>
      <NavBar/>
      <h1>App</h1>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/posts' component={Posts}/>
      <Route path='/login' component={Login}/>
      <Route path='/' component={Home}/>
    </div>
  );
}

export default App;
