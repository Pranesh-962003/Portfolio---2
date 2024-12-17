import React from 'react'
import nav from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={nav.body}>
        <div className={nav.left}>
          <p>P</p>
        </div>
        <div className={nav.right}>
          <ul>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
            <li>Projects</li>
            </a>
            <li>Experience</li>
            <li>Contacts</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar