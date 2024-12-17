import React from 'react'
import skil from './Skills.module.css'
import { assets, skills } from '../../assets/assets'



const Skills = () => {
  return (
    <div className={skil.body}>
      <div className={skil.top}>
        <div className={skil.left}>
            <p>SKILLS</p>
        </div>
        <div className={skil.right}>
        <i class="fa-solid fa-book"></i>
        </div>
      </div>
      <div className={skil.bottom}>
            <ul >
                {skills.map((item,index)=>(
                    <li key={index} className={skil.item}>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
      </div>

    </div>
  )
}

export default Skills