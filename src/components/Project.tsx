import React, { useState } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import yapa from '../assets/images/yapa.png';

import '../assets/styles/Project.scss';

function Project() {

    type ProjectType = {
        title: string;
        company: string;
        image: string;
        link: string;
        shortDesc: string;
        fullDesc: string[];
        technologies: string[];
    };

    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    const projects: ProjectType[] = [
        {
            title: "YaPa for Outlook",
            company: "Team Project — Cadmus Data Science",
            image: yapa,
            link: "https://www.cadmusdatascience.com/installation-of-today-add-in/",
            shortDesc: "AI-assisted Outlook productivity Add-in designed to help users prioritize, organize, and classify emails using machine learning-driven recommendations.",
            fullDesc: [
                "Enhanced frontend functionality for the Outlook Add-in",
                "Developed Android mobile application from scratch",
                "Integrated backend APIs and Microsoft Graph API",
                "Implemented mobile UI updates based on designer specifications"
            ],
            technologies: ["ASP.NET", "Android (Kotlin/Java)", "REST APIs", "Microsoft Graph API", "Retrofit", "Python APIs"]
        },
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Professional Projects</h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        className="project"
                        key={index}
                        onClick={() => {
                            console.log(project);
                            setSelectedProject(project);
                        }}
                    >
                        <img
                            src={project.image}
                            className="zoom"
                            alt={project.title}
                            width="100%"
                        />

                        <h2>{project.title}</h2>

                        <span className="project-tag">
                            {project.company}
                        </span>

                        <p>{project.shortDesc}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="project-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setSelectedProject(null)}
                        >
                            ×
                        </button>

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="modal-image"
                        />

                        <h2>{selectedProject.title}</h2>

                        <span className="project-tag modal-tag">
                            {selectedProject.company}
                        </span>

                        <ul className="project-list">
                            {selectedProject.fullDesc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <div className="modal-section">
                            <h3>Technologies</h3>

                            <div className="tech-stack">
                                {selectedProject.technologies.map((tech, i) => (
                                    <span key={i} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noreferrer"
                            className="visit-btn"
                        >
                            Visit Project
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;