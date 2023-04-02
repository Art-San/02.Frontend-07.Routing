import NavBar from "./components/NavBar";
import { Route, Switch } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Posts from './components/Posts'
import Login from './components/Login'
import Home from './components/Home'
import Stats from "./components/Stats";

// <Route path='/' exact component={Home}/> - первый вариант 

// <Route 
// path='/dashboard'
// render={(props) => <Dashboard isAdmin={false} {...props}/>} = 

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/dashboard/stats' component={Stats}/>
        {/* <Route path='/dashboard' component={Dashboard}/> */}
        <Route
          path='/dashboard'
          render={(props) => {
            return false && <Dashboard isAdmin={false} {...props}/>
        }}
          />
        <Route path='/posts' component={Posts}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
