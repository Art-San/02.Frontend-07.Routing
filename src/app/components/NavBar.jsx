import React from 'react'
import { Link } from 'react-router-dom'
// ul>(li>a)*4
// Link
const NavBar = () => {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/posts">Posts</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
    </ul>
  )
}

export default NavBar

// Если после добавления компонента Link на 02:38 у тебя не происходит 
// переход на другой роут, то необходимо в index.js компонент React.StrictMode 
// переместить внутрь компонента BrowserRouter таким образом:

// {/* <BrowserRouter>
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// </BrowserRouter> */}