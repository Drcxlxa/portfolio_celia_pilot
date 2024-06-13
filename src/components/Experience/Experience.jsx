import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container} id="apropos">
            <div className={styles.contenu}>
                <img src={getImageUrl("about/flamantrose1.png")} className={styles.flamantrose1}></img>
                {/* <img src={getImageUrl("about/vague3.png")} className={styles.vague5}> */}
                {/* </img> */}
                <h2 className={styles.title}>A propos de moi</h2>
                <h3 className={styles.description}>Salut ! Je m'appelle Célia Pilot et je suis en troisième année de BUT MMI, à Chambéry. Etant curieuse et envieuse de tout découvrir depuis toute petite, le monde du multumédia me permet aujourd'hui de toucher à tout et de développer mes compétences dans de nombreux domaines variés. </h3>
            </div>
        </section>
    );
};
