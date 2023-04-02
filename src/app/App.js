import NavBar from "./components/NavBar"
import { Route, Switch } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Posts from './components/Posts'
import Login from './components/Login'
import Home from './components/Home'
import Stats from "./components/Stats"

// :postId?  Опциональный параметр
// {/* <Route path='/posts/:postId?/:display?' component={Posts} /> */}
// можно передавать несколько параметров 1.:postId? 2.:display? и т.д

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/dashboard/stats' component={Stats}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>
        {/* <Route path='/posts/:postId?' component={Posts} /> */}
        <Route path='/posts/:postId?/:display?' component={Posts} />
        {/* <Route 
            path='/posts/:postId?'
            render={(props) => <Posts {...props}/>} 
          /> */}
      </Switch>
    </div>
  )
}

export default App
