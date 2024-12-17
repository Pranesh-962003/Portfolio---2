import React from "react";
import { assets } from "../../assets/assets";
import abt from './About.module.css'
const About = () => {
    return (
        <div className={abt.body} id="about">
            <div className={abt.top}>
                <div className={abt.left}>
                    <img src={assets.backround_img} alt="" />
                </div>
                <div className={abt.right}>
                    <p>ABOUT</p>
                </div>
            </div>
            <div className={abt.bottom}>
                <div className={abt.image_container}>
                    <img src={assets.backround_img} alt="" />
                </div>
                <div className={abt.para}>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eaque quam repellendus quidem, illum consequuntur repudiandae tempore ipsum, soluta commodi nisi, autem perferendis. Eligendi esse vero aperiam possimus, sequi quo!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt temporibus consequatur commodi dolore sunt architecto impedit fugit, voluptatibus doloribus obcaecati soluta odit natus rerum assumenda incidunt cum ipsa eos sit?
                </p>
                </div>
            </div>
        </div>
    );
};

export default About;
