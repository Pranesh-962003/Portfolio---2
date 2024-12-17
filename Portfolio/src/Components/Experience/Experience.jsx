import React from 'react'
import exp from './Experience.module.css'
import { experience } from '../../assets/assets'

const Experience = () => {
  return (
    <div className={exp.body}>
      <div className={exp.top}>
          <div className={exp.left}>
              <p>Experience</p>
          </div>
          <div className={exp.right}>
          <i class="fa-solid fa-e"></i>
          </div>
      </div>
      <div className={exp.bottom}>
          <ul className={exp.items}>
            {experience.map((ex,index)=>(
              <li key={index}>
                <p>{ex.Company}</p>
                <p>{ex.role}</p>
                <p>{ex.description}</p>
                <p>Date: {ex.date} to {ex.end}</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Experience