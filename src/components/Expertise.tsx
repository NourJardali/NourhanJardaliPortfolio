import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Laravel",
    "PHP",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "REST APIs",
    "Firebase",
    "Flutter",
    'Git'
];

const labelsSecond = [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "Tailwind CSS",
    "Figma (UI implementation)",
    "Responsive Design",
    "Material UI"
];

const labelsThird = [
    "Laravel Architecture",
    "API Design (REST)",
    "Microservices",
    "MySQL",
    "Redis",
    "Odoo Integration",
    "Git & Version Control",
    "System Design",
    "Cloud Deployment (Azure / basic AWS exposure)",
    "ERP / CRM Systems"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Business Systems Development</h3>
                    <p>I specialize in building complete business platforms from scratch, including ERP systems, SaaS platforms, ecommerce solutions, and POS systems. My focus is on designing scalable architectures that connect frontend, backend, and databases into one unified system that solves real operational problems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Front-End Engineering & UI Systems</h3>
                    <p>I build responsive and user-friendly interfaces for dashboards, admin panels, and customer-facing applications. I focus on turning complex business logic into clean, usable UI that improves user experience and performance across devices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>System Architecture, APIs & Digital Transformation</h3>
                    <p>I design and implement backend systems, APIs, and workflows that support scalable digital products. I’ve led the development of systems that integrate multiple services (payments, inventory, CRM, bookings) and help businesses digitize and automate their operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;