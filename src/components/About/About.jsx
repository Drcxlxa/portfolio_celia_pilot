import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FaHeart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaSmileBeam } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import { PiEyesBold } from "react-icons/pi";
import { VscChecklist } from "react-icons/vsc";

export const About = () => {
    return (

        <section className={styles.container} id="apropos">
            {/* <img src={getImageUrl("about/flamantrose1.png")} className={styles.flamantrose1}></img> */}
            {/* <img src={getImageUrl("about/vague3.png")} className={styles.vague5}> */}
            {/* </img> */}
            {/* <h2 className={styles.title}>A propos de moi</h2>
            <h3 className={styles.description}>J'ai 21 ans et je suis en 3e (et dernière !) année de BUT MMI (Métiers du Multimédia et de l'Internet) à Chambéry. J'arrive à la fin de mon cursus, mais ça n'a pas étanché ma soif d'apprendre !Pour moi, la création a débuté depuis très jeune, et elle continue de rythmer mon quotidien encore aujourd'hui. Et ce, peu importe le domaine. Mélangez curiosité et envie de créer, et me voilà ! Enfin, pas besoin d'en dire plus, vous pouvez découvrir mes réalisations plus bas. J'espère que ma patte vous plaira !</h3> */}
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3><FaHeart className={styles.iconheart} />Empathique</h3>
                            <p>Je suis une grande empathique, appréciant aider, écouter et comprendre les gens et les choses qui m'entourent.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>

                        <div className={styles.aboutItemText}>
                            <h3><PiEyesBold className={styles.iconheart} />Curieuse</h3>
                            <p>Ma curiosité me fera peut-être défaut un jour ! En attendant c'est ce qui me permet aujourd'hui d'être motivée à apprendre  et découvrir énormément de choses !</p>
                        </div>
                    </li>
                </ul>
                <img src={getImageUrl("hero/heroImage.png")} alt="Hero myself" className={styles.aboutImage}></img>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3><FaSmileBeam className={styles.iconheart}/>Joyeuse</h3>
                            <p>J'ai toujours le sourir et je suis toujours la première à vouloir m'amuser et rigoler. Mais je sais être sérieuse quand il le faut !</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3><VscChecklist className={styles.iconheart} />Ordonnée</h3>
                            <p>Pour ne pas dire maniaque, j'ai cherché un terme plus positif et je peux donc affirmer que je suis une personne très organisée <FaRegSmileWink /></p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
