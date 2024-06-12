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
            </div>



            <section className={styles.container2} id="objectif">
                <swiper-container style={{ "--swiper-navigation-color": "#C0A997", "--swiper-pagination-color": "#C0A997" }} pagination-clickable="true" navigation="true">
                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle1}</h3>
                                <p className={styles.description}>{project.description1}</p>
                            </div>
                            {project.imageUrls.map((url, index) => (
                                <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                            ))}
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle2}</h3>
                                <p className={styles.description}>{project.description2}</p>
                            </div>
                            {project.imageUrls.map((url, index) => (
                                <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                            ))}
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle3}</h3>
                                <p className={styles.description}>{project.description3}</p>
                            </div>
                            {project.imageUrls.map((url, index) => (
                                <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                            ))}
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle4}</h3>
                                <p className={styles.description}>{project.description4}</p>
                            </div>
                            {project.imageUrls.map((url, index) => (
                                <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                            ))}
                        </div>
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <div className={styles.containeretape} id="objectif">
                            <div className={styles.containertexte}>
                                <h3 className={styles.soustitle}>{project.soustitle5}</h3>
                                <p className={styles.description}>{project.description5}</p>
                            </div>
                            {project.imageUrls.map((url, index) => (
                                <img key={index} src={getImageUrl(url)} className={styles.image} alt={`Project ${index}`} />
                            ))}
                        </div>
                    </swiper-slide>


                </swiper-container>
            </section>



            <section className={styles.container3}>
                <div className={styles.containeroutils}>
                    <h3 className={styles.soustitle}>{project.soustitle3}</h3>
                    <div>
                        {project.imageUrl2.map((url, index) => (
                            <img src={getImageUrl(url)} className={styles.image2} />
                        ))}
                        {project.imageUrl3.map((url, index) => (
                            <img src={getImageUrl(url)} className={styles.image3} />
                        ))}
                    </div>
                </div>
                <div className={styles.containeroutils}>
                    <h3 className={styles.soustitle}>{project.soustitle4}</h3>
                    <p className={styles.description}>{project.description4}</p>
                </div>
            </section>

        </div>
    );
};












