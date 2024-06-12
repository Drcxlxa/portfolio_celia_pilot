import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contactez-moi</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:celia19.pilot01@gmail.com">celia19.pilot01@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/celiapilot/">linkedin.com/in/celiapilot</a>
                </li>
            </ul>
            <img src={getImageUrl("contact/flamantros3.png")} className={styles.flamantros3}>
            </img>
        </footer>
    );
};