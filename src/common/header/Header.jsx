import React from 'react'
import './Header.css'
import Head from './Head'
import NavBar from './Navbar'
import Search from './Search'

const Header = () => {
  return (
    <>
        <Head/>
        <Search/>
        <NavBar/>
    </>
  )
}

export default Header