import React, {useState} from "react";
import styles from "./Navbar.module.css";

import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false);

    return (
        <nav className={styles.navbar}>
            <a href="" className={styles.title}>
                Ransika
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src={menuOpen? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                 alt="menu btn" onClick={()=> setMenuOpen(!menuOpen)} hidden/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}