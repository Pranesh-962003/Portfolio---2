import React from 'react'
import foo from './Footer.module.css'
const Footer = () => {
  return (
    <div className={foo.body}>
         <div className={foo.top}>
         <i class="fa-solid fa-message"></i>
         </div>
         <div className={foo.bottom}>
          <div className={foo.btm_left}>
            <p>Let's Work <br /> together</p>
          </div>
          <div className={foo.btm_right}>
            <div className={foo.btm_wrapper}>
              <div className={foo.btm_curve_top}>
              <i class="fa-regular fa-envelope"></i>
              </div>
              <div className={foo.btm_middle}>
              <i class="fa-brands fa-telegram"></i>
              <p>+</p>
              <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <div className={foo.btm_last}>
              <i class="fa-solid fa-cat"></i>
              </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Footer