import React from 'react';
import { getImageUrl } from '../../utils';
import skills from "../../data/skills.json";
import styles from "./Skills.module.css"

export const Skills = () => {
  return (
    <section className={styles.container} id='Skills'>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>

            {skills.map((skill,id)=> {
                return(
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImgContainer} >
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}  />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                );
            })}
        </div>
    </section>
  )
}


