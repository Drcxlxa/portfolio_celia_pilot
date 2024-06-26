import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import { getImageUrl } from '../../utils';
import styles from './ProjectDetail.module.css';
import { GoArrowLeft } from "react-icons/go";
import { IoArrowDownCircle } from "react-icons/io5";


import 'swiper/css';
import 'swiper/css/effect-fade';

export const ProjectDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const projectId = parseInt(id, 10);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // Trouvez le projet correspondant à l'ID
    const project = projectsData.find((project) => project.id === projectId);

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <div className={styles.container1}>
            <button onClick={() => navigate('/#projects')} className={styles.backButton}> <GoArrowLeft className={styles.icon} /> Retour </button>
            <div className={styles.containertitle}>
                <h1 className={styles.title}>{project.title}</h1>
                <h2 className={styles.title2}>{project.title2}</h2>
                <a href="#objectif" className={styles.boutondiscover}> <IoArrowDownCircle /></a>
                <img src={getImageUrl("projects/Tortue2.png")} alt="Hero myself" className={styles.tortue2} />
                <img src={getImageUrl("projects/Tortue4.png")} alt="Hero myself" className={styles.tortue4} />
            </div>



            <section className={styles.container2} id="objectif">
                <swiper-container style={{ "--swiper-navigation-color": "#C0A997", "--swiper-pagination-color": "#C0A997" }} pagination-clickable="true" navigation="true">
                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle1}</h3>
                                <p className={styles.description}>{project.description1}</p>
                            </div>
                            <div className={styles.containerimage}>
                                {project.imageUrl.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                                {project.imageUrls.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle2}</h3>
                                <p className={styles.description}>{project.description2}</p>
                            </div>
                            <div className={styles.containerimage}>
                                {project.imageUrl2.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                                {project.imageUrls2.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle3}</h3>
                                <p className={styles.description}>{project.description3}</p>
                            </div>
                            <div className={styles.containerimage}>
                                {project.imageUrl3.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                                {project.imageUrls3.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle4}</h3>
                                <p className={styles.description}>{project.description4}</p>
                            </div>
                            <div className={styles.containerimage}>
                                {project.imageUrl4.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                                {project.imageUrls4.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle5}</h3>
                                <p className={styles.description}>{project.description5}</p>
                            </div>
                            <div className={styles.containerimage}>
                                {project.imageUrl5.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                                {project.imageUrls5.map((url, index) => (
                                    <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                                ))}
                            </div>
                        </div>
                    </swiper-slide>


                </swiper-container>
            </section>



            <section className={styles.container3}>
                <button onClick={() => navigate('/#projects')} className={styles.backButton}> <GoArrowLeft className={styles.icon} /> Retour </button>
                <div className={styles.containeroutils}>
                    <h3 className={styles.competence}>{project.competence}</h3>
                    <p className={styles.competences}>{project.competence1}</p>
                    <p className={styles.competences}>{project.competence2}</p>
                    <p className={styles.competences}>{project.competence3}</p>
                    <p className={styles.competences}>{project.competence4}</p>
                </div>
            </section>

        </div>
    );
};












