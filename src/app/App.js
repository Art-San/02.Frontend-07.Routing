import NavBar from "./components/NavBar"
import { Route, Switch } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
// import Posts from './components/Posts'
import Login from './components/Login'
import Home from './components/Home'
import Stats from "./components/Stats"
import PostsList from "./components/PostsList"
import Post from "./components/Post"

const posts = [ // Параметры и свойства Route
  {id: 1, label: 'post 1'},
  {id: 2, label: 'post 2'},
  {id: 3, label: 'post 3'},

]

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
        <Route 
            path='/posts/:postId'
            render={(props) => <Post posts={posts} {...props}/>} // Параметры и свойства Route
          />
        <Route 
            path='/posts'
            render={(props) => <PostsList posts={posts} {...props}/>} // Параметры и свойства Route
          />

      </Switch>
    </div>
  );
}

export default App;
