import React from "react";

import styles from "./Footer.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
            <nav className={styles.navbar}>
                <div className={styles.menu}>
                    <ul className={styles.menu2}>
                        <li>
                            <a href="#apropos">A propos de moi</a>
                        </li>
                        <li>
                            <a href="#projects">Mes projets</a>
                        </li>
                        <li>
                            <a href="#contact">Contactez-moi</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
};
