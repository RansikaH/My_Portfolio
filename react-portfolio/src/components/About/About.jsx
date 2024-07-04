import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.aboutme}>
            <p>I am an undergraduate student at the University of Kelaniya pursuing BICT (Honours)
                            with specialization in Software Systems Technology in the Faculty of Computing and Technology.
                            As a dedicated front-end developer, I bring excellent problem-solving skills to the table,
                            excelling in teamwork, leadership and positive thinking. My commitment to continuous learning
                            and effective collaboration with diverse teams equips me to meet the challenges of the ICT industry.
                            I'm passionate about creating dynamic and interactive user experiences, and I'm excited to showcase my
                            projects and skills on this portfolio.</p>

            </div>
            <div className={styles.content}>
                <img src={getImageUrl("about/Ransi_About.jpg")} alt="Ransika Img" className={styles.aboutImg} />

                <ul className={styles.aboutItems}>
                    
                    <li className={styles.aboutItemTitle}>
                        <h3>Education</h3>

                    </li>
                    <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/University-of-Kelaniya-Logo.png")} alt="University of kelaniya Logo" className={styles.aboutItemImg}/>
                            <div className={styles.aboutItemText}>
                                <h4>University of Kelaniya <span className={styles.year}> (2021-2025)</span></h4>
                                <p>BICT(Honours) degree with a Specialization in
                                    Software Systems Technology</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/sitc-logo.jpeg")} alt="University of kelaniya Logo" className={styles.aboutItemImg}/>
                            <div className={styles.aboutItemText}>
                                <h4>SITC campus <span> (2023-2024)</span></h4>
                                <p>Diploma in Human Resource Management and
                                    Diploma in English</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/thanamalwila_school.jpeg")} alt="University of kelaniya Logo" className={styles.aboutItemImg} />
                            <div className={styles.aboutItemText}>
                                <h4>Mo/Thanamalwila National School <span> (2011-2019)</span></h4>
                                <p>Ordinary Level(O/L) and Advanced Level (A/L) exams completed </p>
                            </div>
                        </li>
                </ul>
            </div>
        </section>
    );
};


