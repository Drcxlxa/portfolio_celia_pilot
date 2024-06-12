import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';

export const Projects = () => {
    const projects = [
        // { id: 1, title: 'SITE WEB', imageUrl: getImageUrl('projects/project.png') },
        // { id: 2, title: 'Projet 2', imageUrl: getImageUrl('projects/project.png') },
        // { id: 3, title: 'SITE WEB', imageUrl: getImageUrl('projects/project.png') },
        // { id: 4, title: 'Projet 2', imageUrl: getImageUrl('projects/project.png') },
        // { id: 5, title: 'SITE WEB', imageUrl: getImageUrl('projects/project.png') },
        // { id: 6, title: 'Projet 2', imageUrl: getImageUrl('projects/project.png') },
        // { id: 7, title: 'Projet 2', imageUrl: getImageUrl('projects/project.png') },
        // { id: 8, title: 'SITE WEB', imageUrl: getImageUrl('projects/project.png') },
        // { id: 9, title: 'Projet 2', imageUrl: getImageUrl('projects/project.png') },
        { id: 1, title: 'Intégration de contenus' },
        { id: 2, title: 'Projets 3D' },
        { id: 3, title: 'Traduction' },
        { id: 4, title: 'Customisation css' },
        { id: 5, title: 'Testing de site' },
        { id: 6, title: 'Projet Frise Chronologique' },
        // Ajoutez d'autres projets ici
    ];

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Mes projets</h2>
            <p className={styles.description}>Durant mes 3 années d'études, j'ai eu la possibilité de participer à la réalisation de nombreux projets. Vous trouverez ci-dessous des projets personnels, des projets de cours mais aussi des missions effectuées en alternance.</p>
            <div className={styles.projects}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.project}>
                        <Link to={`/project/${project.id}`}>
                            {/* <img src={project.imageUrl} alt={project.title} className={styles.image} /> */}
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                        </Link>
                    </div>
                ))}
                <img src={getImageUrl("projects/Tortue2.png")} alt="Hero myself" className={styles.tortue2}></img>
                <img src={getImageUrl("projects/Tortue4.png")} alt="Hero myself" className={styles.tortue4}></img>
            </div>
        </section>
    );
};