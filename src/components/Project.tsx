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
        fullDesc: string;
        technologies: string[];
        role: string;
    };

    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    const projects: ProjectType[] = [
        {
            title: "YaPa for Outlook",
            company: "Team Project — Cadmus Data Science",
            image: yapa,
            link: "https://www.cadmusdatascience.com/installation-of-today-add-in/",
            shortDesc: "AI-assisted Outlook productivity Add-in.",
            fullDesc:
                "AI-assisted Outlook productivity Add-in designed to help users prioritize, organize, and classify emails using machine learning-driven recommendations.",
            technologies: ["React", "Machine Learning", "Outlook Add-in", "Python"],
            role: "Full-Stack Developer",
        },
        {
            title: "High Speed Chase",
            company: "Team Project — Cadmus Data Science",
            image: mock09,
            link: "https://yujisatojr.itch.io/highspeedchase",
            shortDesc: "3D multiplayer racing game.",
            fullDesc:
                "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. Available on Itch.io for gamers worldwide.",
            technologies: ["Unity", "C#", "Multiplayer"],
            role: "Game Developer",
        },
        {
            title: "Astro Raiders",
            company: "Team Project — Cadmus Data Science",
            image: mock08,
            link: "https://yujisatojr.itch.io/spacecraft",
            shortDesc: "2D shooting game.",
            fullDesc:
                "Developed and released a 2D shooting game using C# and Unity and published it on Itch.io.",
            technologies: ["Unity", "C#", "2D Game Development"],
            role: "Game Developer",
        },
        {
            title: "Datum: Integrated Learning Platform",
            company: "Team Project — Cadmus Data Science",
            image: mock07,
            link: "https://www.datumlearn.com/",
            shortDesc: "Educational learning platform.",
            fullDesc:
                "Built a complete online educational platform from scratch using Ruby on Rails focused on data science education in Japanese.",
            technologies: ["Ruby on Rails", "PostgreSQL", "JavaScript"],
            role: "Full-Stack Developer",
        },
        {
            title: "WeManage",
            company: "Team Project — Cadmus Data Science",
            image: mock06,
            link: "http://www.wemanage.jp/",
            shortDesc: "Real estate asset management app.",
            fullDesc:
                "Developed a real estate asset management application allowing Japanese realtors to manage properties and analyze future income predictions.",
            technologies: ["Ruby on Rails", "JavaScript"],
            role: "Software Engineer",
        },
        {
            title: "COVID-19 Case Management",
            company: "Team Project — Cadmus Data Science",
            image: mock05,
            link: "https://www.byuh.edu/covid-19-case-management",
            shortDesc: "COVID tracking dashboard.",
            fullDesc:
                "Built official COVID/vaccination tracking charts for university leadership using JavaScript and Google Sheets API v4.",
            technologies: ["JavaScript", "Google Sheets API"],
            role: "Frontend Developer",
        },
        {
            title: "Multiple Regression Property Analysis",
            company: "Team Project — Cadmus Data Science",
            image: mock04,
            link: "https://github.com/yujisatojr/multi-reg-analysis",
            shortDesc: "Real estate market prediction analysis.",
            fullDesc:
                "Analyzed Japanese real estate markets and predicted property prices using OLS and multi-regression analysis.",
            technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
            role: "Data Analyst",
        },
        {
            title: "Programs of Study",
            company: "Team Project — Cadmus Data Science",
            image: mock03,
            link: "https://holokai.byuh.edu/programs-of-study",
            shortDesc: "CMS custom component.",
            fullDesc:
                "Designed and developed a custom Brightspot CMS component allowing students to browse majors and programs.",
            technologies: ["Java", "Handlebars", "LESS"],
            role: "Software Engineer",
        },
        {
            title: "Transfer Evaluation Matrix",
            company: "Team Project — Cadmus Data Science",
            image: mock02,
            link: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix",
            shortDesc: "Interactive CSV table generator.",
            fullDesc:
                "Created an interactive CSV table generator helping transfer students identify eligible credits efficiently.",
            technologies: ["Java", "Handlebars", "LESS"],
            role: "Software Engineer",
        },
        {
            title: "Submeowrine",
            company: "Team Project — Cadmus Data Science",
            image: mock01,
            link: "https://github.com/yujisatojr/submeowrine",
            shortDesc: "Android 2D shooting game.",
            fullDesc:
                "Built and released an Android mobile game using Java and Android Studio.",
            technologies: ["Java", "Android Studio"],
            role: "Android Developer",
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

                        <p>{selectedProject.fullDesc}</p>

                        <div className="modal-section">
                            <h3>Role</h3>
                            <p>{selectedProject.role}</p>
                        </div>

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