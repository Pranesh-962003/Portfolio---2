import React from 'react'
import Pro from "./Project.module.css"
import { projects } from '../../assets/assets'
const Project = () => {
  return (
    <div id='projects' className={Pro.body}>
        <div className={Pro.top}>
            <div className={Pro.left}>
                <p>Projects</p>
            </div>
            <div className={Pro.right}>
                <i class="fa-solid fa-building"></i>
                </div>
        </div>

        <div className={Pro.bottom}>
        {projects.map((item, index)=>(
          index%2==1?
          <div className={Pro.items} key={index}>
            <div className={Pro.btm_img}>
              <img src={item.image} alt="fun" />
            </div>
            <div className={Pro.btm_contents}>
              <p className={Pro.text_size}><span className={Pro.text_size}>0{index + 1}</span> {item.title}</p>
              <p>{item.des}</p>
              <ul className={Pro.skills}>skills: {item.skills.map((skills,key)=>(
                <li key={key}>
                  {skills},
                </li>
              ))}</ul>
              <div className={Pro.btn}>
          <button>Subs</button>
          <button>Linkedin</button>
        </div>
            </div>
          </div>
          :
          <div className={Pro.items} key={index}>
          <div className={Pro.btm_contents}>
          <p className={Pro.text_size}><span className={Pro.text_size}>0{index + 1}</span> {item.title}</p>
            <p>{item.des}</p>
            <ul className={Pro.skills}>skills {item.skills.map((skills,key)=>(
              <li key={key}>
                {skills}
              </li>
            ))}</ul>
            
          <div className={Pro.btn}>
          <button>Subs</button>
          <button>Linkedin</button>
        </div>
          </div>
          <div className={Pro.btm_img}>
            <img src={item.image} alt="" />
          </div>
        </div>
          
        ))}
        
        </div>



    </div>
  )
}

export default Project