import React from 'react'
import land from './Landing.module.css'
import { assets } from '../../assets/assets'
const Landing = () => {
  return (
    <div className={land.body}>
        <div className={land.top}>
            <div className={land.left}>
                <p className={land.Name}>Pranesh</p>
                <p className={land.subName}>MERN Developer</p>
            </div>
            <div className={land.right}>
                <img src={assets.backround_img} alt="" />
                </div>
        </div>
        <div className={land.bottom}>
          <p className={land.bottom_head}>Hi</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et, at explicabo quae exercitationem velit adipisci possimus tempore impedit minus corrupti a? Rem corporis, dicta est dolorem labore porro veritatis?
            Beatae, minus nostrum! Provident eligendi veritatis porro iste at doloribus iusto necessitatibus a! Libero nisi explicabo repellat voluptatem, aliquid obcaecati labore eaque accusantium sed itaque quo cumque dolor aspernatur enim.</p>
        </div>
    </div>
    
  )
}

export default Landing