import React, { useState } from "react";
import saas from '../assets/images/saas.png';
import event from '../assets/images/event.png';
import ubc from '../assets/images/ubc.png';
import bocabilla from '../assets/images/bocabilla.png';
import twe from '../assets/images/twe.png';
import hildens from '../assets/images/hildens.png';
import vative from '../assets/images/vative.png';
import slickey from '../assets/images/slickey.png';
import general from '../assets/images/general.png';
import rascals from '../assets/images/rascals.png';
import tayibat from '../assets/images/tayibat.png';
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

    const [visibleProjects, setVisibleProjects] = useState(4);

    const projects: ProjectType[] = [
        {
            title: "Multi-Tenant SaaS Platform on AWS",
            company: "Cloud Architecture / SaaS Platform",
            image: saas,
            link: "#",
            shortDesc: "Designed and led development of a scalable multi-tenant SaaS platform for SME operational management, including inventory tracking, analytics dashboards, and reporting workflows. Built with cloud-native architecture focused on scalability, tenant isolation, and production reliability.",
            fullDesc: [
                "Led a team of 3–5 engineers across backend, frontend, and deployment workflows",
                "Designed AWS-based architecture using ECS Fargate, RDS PostgreSQL, S3, CloudFront, and Application Load Balancer",
                "Implemented tenant isolation and scalable API architecture for multi-client environments",
                "Led sprint planning, code reviews, and technical decision-making",
                "Built CI/CD pipelines using GitHub Actions and Terraform",
                "Implemented monitoring, logging, and observability using CloudWatch and OpenTelemetry",
                "Established security best practices using IAM roles, Secrets Manager, and environment isolation",
                "Scaled platform to support 10k+ users with optimized API performance",
                "Reduced deployment time through automated CI/CD workflows",
                "Improved system reliability through centralized monitoring and alerting",
                "Enabled onboarding of multiple tenants with minimal operational downtime"
            ],
            technologies: [
                "AWS ECS",
                "Fargate",
                "RDS PostgreSQL",
                "S3",
                "CloudFront",
                "Terraform",
                "Docker",
                "Node.js",
                "React.js",
                "GitHub Actions"
            ]
        },
        {
            title: "Event-Driven Microservices Platform",
            company: "Distributed Systems / Cloud Infrastructure",
            image: event,
            link: "#",
            shortDesc: "Developed a distributed event-driven microservices platform for real-time order processing and operational workflows. Focused on scalability, fault isolation, asynchronous communication, and infrastructure automation.",
            fullDesc: [
                "Designed distributed microservices architecture using AWS Lambda and SQS/SNS",
                "Separated core services into independent domains including orders, notifications, and processing services",
                "Implemented API Gateway authentication and secure service communication",
                "Led infrastructure provisioning using Terraform and Infrastructure as Code practices",
                "Implemented retry logic, queue monitoring, and fault-tolerant processing patterns",
                "Led technical planning, architecture discussions, and team execution",
                "Improved scalability through event-driven asynchronous architecture",
                "Reduced service failure impact through microservices isolation",
                "Enabled reliable high-volume event processing workflows",
                "Achieved near real-time processing and improved operational resilience"
            ],
            technologies: [
                "AWS Lambda",
                "SQS",
                "SNS",
                "DynamoDB",
                "API Gateway",
                "Terraform",
                "Node.js",
                "Docker",
                "CloudWatch"
            ]
        },
        {
            title: "UBC Food Enterprise Ecosystem",
            company: "Enterprise Systems / Cloud Infrastructure",
            image: ubc,
            link: "https://www.cadmusdatascience.com/installation-of-today-add-in/",
            shortDesc: "Led technical delivery and maintenance of a large-scale enterprise ecosystem for UBC Food consisting of multiple mobile applications, ecommerce systems, operational dashboards, backend APIs, and cloud-hosted infrastructure supporting business operations and logistics workflows.",
            fullDesc: [
                "Led development and support across Flutter mobile applications, React dashboard, Next.js ecommerce platform, and ASP.NET backend APIs",
                "Managed deployments, production troubleshooting, and infrastructure maintenance",
                "Handled integrations between operational systems, ecommerce workflows, and inventory-related services",
                "Maintained Azure-hosted environments, Blob Storage assets, IIS servers, SSL configuration, and database replication workflows",
                "Collaborated directly with stakeholders on feature planning, technical improvements, and operational continuity",
                "Led technical execution, code reviews, issue resolution, and release coordination",
                "Maintained stability across multiple production systems supporting daily business operations",
                "Improved deployment and maintenance workflows for multi-platform environments",
                "Successfully managed integrations and feature delivery across interconnected systems",
                "Supported operational scalability through infrastructure optimization and production support"
            ],
            technologies: [
                "Flutter",
                "React.js",
                "Next.js",
                "ASP.NET",
                "Azure",
                "IIS",
                "SQL Server",
                "Blob Storage",
                "REST APIs"
            ]
        },
        {
            title: "YaPa for Outlook",
            company: "Team Project — Cadmus Data Science",
            image: yapa,
            link: "https://www.cadmusdatascience.com/installation-of-today-add-in/",
            shortDesc: "AI-assisted productivity platform for Outlook focused on intelligent email prioritization, workflow automation, and cross-platform task management integrated with Microsoft services.",
            fullDesc: [
                "Contributed to development of a Microsoft-approved Outlook Add-in focused on AI-assisted email classification and workflow optimization",
                "Developed Android mobile application integrated with Microsoft Graph API and backend workflow services",
                "Implemented REST API integrations and synchronized operational workflows across mobile and cloud-based systems",
                "Worked on frontend enhancements, mobile UI implementation, and production-level feature updates",
                "Collaborated with cross-functional teams to improve usability, scalability, and workflow automation capabilities",
                "Contributed to production-grade systems involving AI-assisted recommendations and business process management"
            ],
            technologies: [
                "ASP.NET",
                "Android",
                "Kotlin",
                "Java",
                "REST APIs",
                "Microsoft Graph API",
                "Retrofit",
                "Python APIs",
                "Workflow Automation",
                "Microsoft Azure"
            ]
        },
        // {
        //     title: "Tayibat Food Delivery App",
        //     company: "Team Project — Tayibat",
        //     image: tayibat,
        //     link: "https://play.google.com/store/apps/details?id=com.tayibat.client",
        //     shortDesc: "Tayibat is a food delivery platform that connects customers with restaurants and delivery drivers across Algeria. The app simplifies ordering, delivery tracking, and restaurant management.",
        //     fullDesc: [
        //         "Android Development Intern working on production codebase",
        //         "Focused on debugging, architecture understanding, and feature support",
        //         "Fixed bugs in existing Android application",
        //         "Improved stability and performance of client app",
        //         "Worked with MVVM architecture pattern to understand scalable app structure",
        //         "Implemented and worked with Room Database for local data persistence",
        //         "Assisted in maintaining production-level mobile application"
        //     ],
        //     technologies: ["Android", "Java/Kotlin", "MVVM Architecture", "Room Database", "Git", "REST APIs"]
        // },
        // {
        //     title: "Rascals Ecommerce Store",
        //     company: "Freelance Project — Frontend Development",
        //     image: rascals,
        //     link: "https://rascals.la/",
        //     shortDesc: "Frontend development work for a Shopify-based retail clothing store focused on responsive ecommerce experience and custom storefront implementation.",
        //     fullDesc: [
        //         "Developed frontend components using Shopify templating structure",
        //         "Implemented responsive UI using HTML, CSS, and JavaScript",
        //         "Customized storefront layouts and interactions"
        //     ],
        //     technologies: ["Shopify", "HTML5", "CSS3", "JavaScript"]
        // },
        // {
        //     title: "Cook-a-Box Food Delivery Platform",
        //     company: "Freelance Project — Feature Development & Maintenance",
        //     image: general,
        //     link: "https://www.cookabox.com/",
        //     shortDesc: "Cook-a-Box is a Dubai-based food and grocery delivery platform focused on simplifying home cooking through recipe and ingredient delivery.",
        //     fullDesc: [
        //         "Worked on feature enhancements and bug fixing",
        //         "Assisted in maintaining and improving platform functionality",
        //         "Contributed to frontend/backend tasks within an existing Node.js codebase"
        //     ],
        //     technologies: ["React.js", "JavaScript", "Web Development"]
        // },
        // {
        //     title: "Slickey Learning Platform",
        //     company: "Freelance Project — Frontend Development",
        //     image: slickey,
        //     link: "#",
        //     shortDesc: "Online learning platform concept similar to Udemy focused on digital course management and learning experience.",
        //     fullDesc: [
        //         "Worked on assigned development tasks within a Next.js application",
        //         "Assisted in frontend feature implementation and platform improvements"
        //     ],
        //     technologies: ["Next.js", "React", "JavaScript"]
        // },
        // {
        //     title: "Vative Solutions Corporate Website + CMS",
        //     company: "Freelance Project — Full Website & CMS Development",
        //     image: vative,
        //     link: "vativesolutions.com",
        //     shortDesc: "Corporate website and custom CMS developed for an international engineering and renewable energy company focused on sustainable and net-zero solutions.",
        //     fullDesc: [
        //         "Built complete frontend website using HTML, CSS, and JavaScript",
        //         "Developed integrated CMS using Laravel",
        //         "Implemented dynamic content management functionality",
        //         "Delivered responsive corporate web experience"
        //     ],
        //     technologies: ["Laravel", "PHP", "HTML5", "CSS3", "JavaScript", "CMS Development"]
        // },
        // {
        //     title: "VTV Energy Corporate Website",
        //     company: "Freelance Project — Frontend Development",
        //     image: general,
        //     link: "vtvenergy.com",
        //     shortDesc: "Corporate website developed for a renewable energy solutions company after company rebranding and restructuring.",
        //     fullDesc: [
        //         "Designed and developed responsive frontend website",
        //         "Built corporate informational pages and layouts"
        //     ],
        //     technologies: ["HTML5", "CSS3", "JavaScript"]
        // },
        // {
        //     title: "Hildens Consulting Website",
        //     company: "Freelance Project — WordPress Development",
        //     image: hildens,
        //     link: "https://hildensconsulting.com/",
        //     shortDesc: "Corporate consulting website developed using WordPress with focus on clean presentation and responsive design.",
        //     fullDesc: [
        //         "Developed and customized WordPress website",
        //         "Implemented responsive layouts and content structure"
        //     ],
        //     technologies: ["WordPress", "CSS3", "JavaScript"]
        // },
        // {
        //     title: "TWE — Teaching Women Entrepreneurship",
        //     company: "Team Project — Flutter Mobile App",
        //     image: twe,
        //     link: "https://www.facebook.com/uspeaklebanon/videos/1698109063891056/",
        //     shortDesc: "Mobile application developed for USPEaK Organization as part of an entrepreneurship initiative supporting women entrepreneurs in Lebanon, funded by the U.S. Embassy Beirut.",
        //     fullDesc: [
        //         "Developed Flutter mobile application",
        //         "Coordinated closely with UI/UX designer for implementation",
        //         "Built responsive mobile interfaces and app workflows",
        //         "Participated in project planning and delivery"
        //     ],
        //     technologies: ["Flutter", "Dart", "Firebase", "REST APIs"]
        // },
        // {
        //     title: "Bocabilla SaaS Business Platform",
        //     company: "Team Project — SaaS Development",
        //     image: bocabilla,
        //     link: "https://app.bocabilla.com/login",
        //     shortDesc: "Cloud-based SaaS platform designed to help businesses manage quotations, invoices, virtual cards, appointments, and financial operations from a centralized system.",
        //     fullDesc: [
        //         "Contributed to Laravel-based SaaS platform development",
        //         "Worked on backend logic and business workflows",
        //         "Participated in feature implementation and platform improvements",
        //         "Collaborated with development team on scalable architecture"
        //     ],
        //     technologies: ["Laravel", "MySQL", "JavaScript", "SaaS Architecture"]
        // },
        // {
        //     title: "Backoffice Management System",
        //     company: "Freelance Project",
        //     image: general,
        //     link: "#",
        //     shortDesc: "Administrative dashboard and backoffice management system developed for operational workflows and data management.",
        //     fullDesc: [
        //         "Built frontend interface using React.js and Tailwind CSS",
        //         "Developed responsive dashboard components and management screens",
        //         "Implemented modern UI structure for internal operational use"

        //     ],
        //     technologies: ["React.js", "Tailwind CSS", "JavaScript"]
        // },
        // {
        //     title: "Real-Time Android Face Recognition App",
        //     company: "Freelance Project",
        //     image: general,
        //     link: "#",
        //     shortDesc: "Android application capable of detecting and recognizing faces in real time using on-device machine learning without requiring internet connectivity.",
        //     fullDesc: [
        //         "Developed Android application implementation",
        //         "Integrated Google ML Kit for face detection",
        //         "Implemented TensorFlow Lite & MobileFaceNet for recognition workflows",
        //         "Explored on-device AI/ML mobile processing"

        //     ],
        //     technologies: ["Android", "TensorFlow Lite", "Google ML Kit", "MobileFaceNet", "Java / Kotlin"]
        // },
        // {
        //     title: "Flutter News Application",
        //     company: "Freelance Project",
        //     image: general,
        //     link: "#",
        //     shortDesc: "Cross-platform mobile news application developed using Flutter for browsing and displaying categorized news content.",
        //     fullDesc: [
        //         "Developed Flutter-based mobile UI",
        //         "Implemented mobile navigation and content display",
        //         "Worked with cross-platform mobile development concepts"

        //     ],
        //     technologies: ["Flutter", "Dart", "REST APIs"]
        // },
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Professional Projects</h1>

            <p className="projects-note">
                More projects and case studies are currently being added.
            </p>

            <div className="projects-grid">
                {projects.slice(0, visibleProjects).map((project, index) => (
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

            {visibleProjects < projects.length && (
                <div className="show-more-container">
                    <button
                        className="show-more-btn"
                        onClick={() => setVisibleProjects(prev => prev + 4)}
                    >
                        Show More
                    </button>
                </div>
            )}

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