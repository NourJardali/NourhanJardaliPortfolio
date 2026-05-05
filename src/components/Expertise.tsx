import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Laravel",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "TypeScript",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "REST APIs",
    "Microservices",
    "Docker",
    "AWS (EC2, S3, Lambda, RDS)",
    "Azure",
    "Git"
];

const labelsSecond = [
    "React.js",
    "Next.js",
    "Flutter",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Firebase",
    "Responsive Design",
    "Figma Implementation"
];

const labelsThird = [
    "AWS Architecture",
    "CI/CD Pipelines",
    "Docker",
    "System Design",
    "REST API Architecture",
    "Microservices",
    "Cloud Deployment",
    "IIS & Nginx",
    "Git & Version Control",
    "ERP / CRM Systems",
    "Workflow Automation",
    "Agile / Scrum",
    "Technical Mentorship"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Cloud & Enterprise System Engineering</h3>
                    <p>I design and build scalable SaaS, ERP, ecommerce, and enterprise systems with strong focus on cloud architecture, API integrations, and production reliability. Experienced in leading full-stack development across distributed systems, operational platforms, and high-traffic business applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Full-Stack Product Engineering</h3>
                    <p>I build responsive web and mobile applications with focus on performance, scalability, and clean user experience. Experienced in developing dashboards, operational systems, ecommerce platforms, and cross-platform mobile applications used in real production environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Solution Architecture & Technical Leadership</h3>
                    <p>I lead technical delivery from architecture and planning to deployment and client handover. Experienced in managing engineering teams, designing scalable system architectures, implementing CI/CD workflows, and translating business requirements into secure and maintainable technical solutions.</p>
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