import React from 'react'

const Navbar = () => {
  return (
    <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/login">Вход</a></li>
        <li><a href="/posts">Посты</a></li>
        <li><a href="/dashboard">Дашбоард</a></li>
    </ul>
  )
}

export default Navbar