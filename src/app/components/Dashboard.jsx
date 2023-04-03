import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Edit from './Edit'
import Stats from './Stats'

const Dashboard = () => {
  return (
    // Stats будет открыватся по умолчанию
    
    <div>
        <ul>
            <li>
              <Link to='/dashboard/edit'>Edit</Link>
            </li>
            <li>
            <Link to='/dashboard'>Dashboard</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path='/dashboard/' component={Stats}/>
            <Route path='/dashboard/edit' component={Edit}/>
      </Switch>
    </div>
  )
}

export default Dashboard