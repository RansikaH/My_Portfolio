import React from 'react';

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:r.heshanee@gmail.com">Email       </a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/ransika-heshanee-7a223823b/">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github Icon" />
                <a href="https://github.com/RansikaH">Github</a>
            </li>
        </ul>
    </footer>
  )
}


