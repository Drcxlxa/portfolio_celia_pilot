import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';

export const Projects = () => {
    const projects = [
        { id: 1, title: 'Intégration de contenus', category: 'Web Development', imageUrl: getImageUrl('projects/contenu.png') },
        { id: 2, title: 'Projets 3D', category: '3D Design', imageUrl: getImageUrl('projects/3D.png') },
        { id: 3, title: 'Traduction', category: 'Translation', imageUrl: getImageUrl('projects/traduction.png') },
        { id: 4, title: 'Customisation css', category: 'Web Development', imageUrl: getImageUrl('projects/css.jpeg') },
        { id: 5, title: 'Testing de site', category: 'Quality Assurance', imageUrl: getImageUrl('projects/testing.jpg') },
        { id: 6, title: 'Projet Frise Chronologique', category: 'Web Development', imageUrl: getImageUrl('projects/frise.png') },
        { id: 7, title: 'Serre Connectée', category: 'IoT', imageUrl: getImageUrl('projects/serreconnecte.png') },
        { id: 8, title: 'La vie est belle', category: 'Personal Projects', imageUrl: getImageUrl('projects/Lavieestbelle.png') },
        { id: 9, title: 'Mon portfolio', category: 'Personal Projects', imageUrl: getImageUrl('projects/portfolio.png') },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Web Development', '3D Design', 'Translation', 'Quality Assurance', 'IoT', 'Personal Projects'];

    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Mes projets</h2>
            <p className={styles.description}>
                Durant mes 3 années d'études, j'ai eu la possibilité de participer à la réalisation de nombreux projets. Vous trouverez ci-dessous des projets personnels, des projets de cours mais aussi des missions effectuées en alternance.
            </p>
            <div className={styles.categoryFilter}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? styles.activeCategory : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.projects}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className={styles.project} style={{ backgroundImage: `url(${project.imageUrl})` }}>
                        <Link to={`/project/${project.id}`}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                        </Link>
                    </div>
                ))}
                <img src={getImageUrl("projects/Tortue2.png")} alt="Hero myself" className={styles.tortue2} />
                <img src={getImageUrl("projects/Tortue4.png")} alt="Hero myself" className={styles.tortue4} />
            </div>
        </section>
    );
};