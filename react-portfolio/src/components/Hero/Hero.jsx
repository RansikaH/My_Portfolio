import React from 'react';

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id='home'>
        <div className={styles.content}>
            <h2 className={styles.title1}> Hello,</h2>
            <h1 className={styles.title2}> I'm Ransika Heshanee </h1>
            <span className={styles.jobRole}>Frontend Developer</span>
            <p className={styles.description}>As a front-end developer, I specialize in creating visually appealing and user-friendly web interfaces.
                 With a keen eye for design and a focus on usability, I bring web designs to life.</p>
            <div>
            <a className={`${styles.primary} ${styles.btn}` }   href="mailto:r.heshanee@gmail.com">Contact Me</a>
            <a className={`${styles.secondary} ${styles.btn}`} href={getImageUrl("hero/Ransika_CV.pdf")} download="Ransika_CV.pdf">Download CV</a>
            </div>
            
        </div>
        <img src={getImageUrl("hero/Ransi_Hero.jpg")} alt="My hero img" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}






