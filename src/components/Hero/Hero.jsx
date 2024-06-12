import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { ImMail4 } from "react-icons/im";
import { IoArrowDownCircle } from "react-icons/io5";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Celia Pilot</h1>
                <p className={styles.description}>
                Bienvenue sur mon portfolio !
                </p>
                <div className={styles.containerBtn}>
                    <a href="mailto:celia19.pilot01@gmail.com" className={styles.contactBtn}><ImMail4 className={styles.icon2} /></a>
                    <a href="#experience" className={styles.contactBtn2}><IoArrowDownCircle className={styles.icon2} /></a>
                </div>
            </div>
            <img src={getImageUrl("hero/tortue1.png")} alt="Hero myself" className={styles.tortue1}></img>
            {/* <img src={getImageUrl("about/vague3.png")} alt="Me" className={styles.vague3} /> */}
        </section>
    );
};
