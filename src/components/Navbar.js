import React from 'react'
import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import { useMatch } from 'react-router-dom'
import Search from './Navbar/Search'



function Navbar() {
//React router useMatch ile verdiğimiz url etkinse bu duruma göre renderlama işlemi yapabiliyoruz.
  const searchRoute = useMatch("/search")

  return (
    <div className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation/>
      {
        searchRoute && <Search />
      }
      <Auth/>
    </div>
  )
}

export default Navbar