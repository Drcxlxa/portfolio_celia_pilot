import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';

export const Projects = () => {
    const projects = [
        { id: 1, title: 'Intégration de contenus', title2: 'Alternance', categories: ['Alternance'], imageUrl: getImageUrl('projects/contenu.png') },
        { id: 2, title: 'Projets 3D', title2: 'Alternance', categories: ['Alternance', 'Design'], imageUrl: getImageUrl('projects/3D.png') },
        { id: 3, title: 'Traduction de sites', title2: 'Alternance', categories: ['Alternance'], imageUrl: getImageUrl('projects/traduction.png') },
        { id: 4, title: 'Customisation css', title2: 'Alternance', categories: ['Alternance','Développement web'], imageUrl: getImageUrl('projects/css.jpeg') },
        { id: 5, title: 'Testing de site', title2: 'Alternance', categories: ['Alternance'], imageUrl: getImageUrl('projects/testing.jpg') },
        { id: 6, title: 'Frise Chronologique', title2: 'Alternance', categories: ['Alternance', 'Développement web'], imageUrl: getImageUrl('projects/frise.png') },
        { id: 7, title: 'Serre Connectée', title2: 'Projet Universitaire', categories: ['Développement web'], imageUrl: getImageUrl('projects/serreconnecte.png') },
        { id: 8, title: 'La vie est belle', title2: 'Projet Universitaire', categories: ['Développement web'], imageUrl: getImageUrl('projects/Lavieestbelle.png') },
        { id: 9, title: 'Mon portfolio', title2: 'Projet Universitaire', categories: ['Développement web'], imageUrl: getImageUrl('projects/portfolio.png') },
        { id: 10, title: 'Maquette de site', title2: 'Projet personnel', categories: ['Design', 'Projets Personnels'], imageUrl: getImageUrl('projects/maquetteirene.png') },
        { id: 11, title: 'API Rest', title2: 'Projet Universitaire', categories: ['Développement web'], imageUrl: getImageUrl('projects/meteo.png') },
        { id: 12, title: 'Jeu vidéo', title2: 'Projet Universitaire', categories: ['Développement web'], imageUrl: getImageUrl('projects/serpomme.png') },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Alternance', 'Développement web', 'Design', 'Projets Personnels'];

    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.categories.includes(selectedCategory));

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
                        <h4 className={styles.projectTitle2}>{project.title2}</h4>
                    </div>
                ))}
                <img src={getImageUrl("projects/Tortue2.png")} alt="Hero myself" className={styles.tortue2} />
                <img src={getImageUrl("projects/Tortue4.png")} alt="Hero myself" className={styles.tortue4} />
            </div>
        </section>
    );
};