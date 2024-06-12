import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            {/* <a  href="/"> <img src={getImageUrl("nav/celiapilot.png")} className={styles.logocelia}></img>
            </a> */}
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#experience">A propos de moi</a>
                    </li>
                    <li>
                        <a href="#projects">Mes réalisations</a>
                    </li>
                    <li>
                        <a href="#contact">Contactez-moi</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
