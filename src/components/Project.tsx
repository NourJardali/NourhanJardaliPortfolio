import React, { useState } from "react";
import saas from '../assets/images/saas.png';
import b2b from '../assets/images/b2b.png';
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
            title: "UBC B2B Ordering Application",
            company: "UBC Food",
            image: b2b,
            link: "#",
            shortDesc: "Worked as Full-Stack Engineer on a Flutter-based B2B ordering platform enabling customers to place and manage orders, track deliveries, scan products, and interact with operational services in real time.",
            fullDesc: [
                "Developed and maintained the Flutter-based B2B customer ordering application integrated with enterprise backend systems",
                "Implemented ordering workflows including cart management, checkout, coupons, order tracking, notifications, wallet, favourites, and customer profiles",
                "Integrated barcode and QR code scanning workflows allowing customers to instantly check product availability and inventory status",
                "Worked on location-aware ordering flows where product availability depended on customer branch and geographic region",
                "Integrated backend APIs, authentication systems, and operational workflows connected to logistics and warehouse services",
                "Collaborated on production deployments, issue resolution, feature delivery, and operational support",
                "Contributed to maintaining performance and reliability for production customer ordering workflows"
            ],
            technologies: [
                "Flutter",
                "Dart",
                "REST APIs",
                "Firebase",
                "Google Maps APIs",
                "QR/Barcode Scanning",
                "Authentication Systems"
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
        {
            title: "UBC Sales Representative Application",
            company: "UBC Food",
            image: "",
            link: "#",
            shortDesc: "Developed operational mobile workflows for sales representatives including customer management, order lifecycle handling, analytics tracking, and cloud-synced cart management.",
            fullDesc: [
                "Worked on a Flutter-based operational platform used by sales representatives for customer ordering and field operations",
                "Implemented cart workflows allowing sales reps to create, save, duplicate, edit, and submit orders",
                "Developed cloud synchronization workflows where locally stored carts synced with backend infrastructure for persistence and recovery",
                "Built customer management workflows including customer creation, draft saving, order history, invoice tracking, and map-based customer locations",
                "Implemented PDF generation and sharing workflows allowing carts and orders to be sent through WhatsApp and email",
                "Integrated product catalog workflows filtered dynamically based on branch inventory and customer region",
                "Worked on analytics dashboards helping sales representatives track monthly sales targets and operational performance",
                "Integrated live sales representative location tracking connected to operational management dashboards"
            ],
            technologies: [
                "Flutter",
                "Dart",
                "REST APIs",
                "Google Maps APIs",
                "PDF Generation",
                "Firebase",
                "Cloud Synchronization"
            ]
        },
        {
            title: "UBC Warehouse Picker Application",
            company: "UBC Food",
            image: "",
            link: "#",
            shortDesc: "Developed warehouse preparation workflows for order picking, stock validation, and operational coordination between warehouse and logistics teams.",
            fullDesc: [
                "Worked on a Flutter-based warehouse operations application used by pickers to prepare and validate customer orders",
                "Implemented notification workflows for assigning preparation jobs to warehouse pickers",
                "Built item-level preparation interfaces allowing warehouse staff to validate quantities and stock availability",
                "Developed operational workflows supporting partial fulfillment when requested quantities exceeded available stock",
                "Integrated backend synchronization workflows to move prepared orders into logistics and warehouse management stages",
                "Collaborated on operational reliability improvements and production support for warehouse workflows",
                "Contributed to maintaining synchronization between warehouse operations, backend APIs, and logistics systems"
            ],
            technologies: [
                "Flutter",
                "Dart",
                "REST APIs",
                "Firebase Notifications",
                "Operational Workflows",
                "Warehouse Management Systems"
            ]
        },
        {
            title: "UBC Logistics & Delivery Application",
            company: "UBC Food",
            image: "",
            link: "#",
            shortDesc: "Developed advanced logistics and delivery workflows including shipment lifecycle management, live driver tracking, route optimization, QR scanning, and delivery confirmation systems.",
            fullDesc: [
                "Worked on a Flutter-based logistics application supporting shipment management, delivery coordination, and operational tracking",
                "Implemented shipment lifecycle workflows covering preparing, active delivery, completion, and operational synchronization",
                "Integrated Google Maps APIs for route visualization, multi-stop routing, live driver tracking, and delivery navigation",
                "Built route optimization workflows allowing drivers to optimize shipment stop sequencing",
                "Implemented live geolocation synchronization and operational tracking connected to management dashboards",
                "Developed QR/barcode scanning workflows for shipment verification and operational check-ins",
                "Built electronic proof-of-delivery workflows including customer signatures, notes, and backend synchronization",
                "Implemented operational notifications, shipment synchronization, and real-time workflow coordination",
                "Worked on shipment reordering, delivery status updates, and operational state management",
                "Collaborated on production support, troubleshooting, deployments, and logistics workflow improvements"
            ],
            technologies: [
                "Flutter",
                "Dart",
                "Google Maps APIs",
                "Geolocation",
                "QR/Barcode Scanning",
                "REST APIs",
                "Firebase",
                "Real-Time Workflows"
            ]
        },
        {
            title: "UBC Operations Dashboard",
            company: "UBC Food",
            image: "",
            link: "#",
            shortDesc: "Contributed to a React-based operational dashboard used for managing logistics, orders, notifications, products, analytics, sales representatives, and operational workflows.",
            fullDesc: [
                "Worked on a React.js operational dashboard supporting multiple departments including logistics, warehouse, sales, and management teams",
                "Developed and maintained modules for orders, invoices, products, notifications, campaigns, countries, reporting, and operational analytics",
                "Integrated live driver and sales representative tracking using Google Maps workflows",
                "Worked on operational monitoring interfaces and backend integrations connected to enterprise APIs",
                "Collaborated on workflow coordination between ecommerce, logistics, warehouse, and operational systems",
                "Handled frontend improvements, bug fixing, feature delivery, and production support",
                "Contributed to maintaining operational visibility and system reliability across daily business operations"
            ],
            technologies: [
                "React.js",
                "JavaScript",
                "REST APIs",
                "Google Maps APIs",
                "Operational Dashboards",
                "Analytics Systems"
            ]
        },
        {
            title: "UBC Ecommerce Platform",
            company: "UBC Food / UBC Holding / Maza Inc.",
            image: "",
            link: "#",
            shortDesc: "Worked on a Next.js ecommerce platform integrated with enterprise backend systems, inventory workflows, and Azure-hosted infrastructure supporting online ordering operations.",
            fullDesc: [
                "Contributed to development and maintenance of a Next.js ecommerce platform connected to enterprise operational systems",
                "Integrated backend APIs, inventory workflows, and operational services into the ecommerce experience",
                "Worked on customer ordering flows, product management, and ecommerce operational logic",
                "Managed Azure-hosted deployments including Blob Storage assets and production infrastructure coordination",
                "Collaborated on production troubleshooting, feature implementation, and operational reliability improvements",
                "Worked on synchronization workflows between ecommerce systems, inventory operations, and backend services",
                "Contributed to maintaining scalable and stable production ecommerce environments"
            ],
            technologies: [
                "Next.js",
                "React.js",
                "Azure",
                "Blob Storage",
                "REST APIs",
                "Ecommerce Systems",
                "CI/CD"
            ]
        },
        {
            title: "Tayibat Food Delivery App",
            company: "Team Project — Tayibat",
            image: tayibat,
            link: "https://play.google.com/store/apps/details?id=com.tayibat.client",
            shortDesc: "Tayibat is a food delivery platform that connects customers with restaurants and delivery drivers across Algeria. The app simplifies ordering, delivery tracking, and restaurant management.",
            fullDesc: [
                "Android Development Intern working on production codebase",
                "Focused on debugging, architecture understanding, and feature support",
                "Fixed bugs in existing Android application",
                "Improved stability and performance of client app",
                "Worked with MVVM architecture pattern to understand scalable app structure",
                "Implemented and worked with Room Database for local data persistence",
                "Assisted in maintaining production-level mobile application"
            ],
            technologies: ["Android", "Java/Kotlin", "MVVM Architecture", "Room Database", "Git", "REST APIs"]
        },
        {
            title: "Rascals Ecommerce Store",
            company: "Freelance Project — Frontend Development",
            image: rascals,
            link: "https://rascals.la/",
            shortDesc: "Frontend development work for a Shopify-based retail clothing store focused on responsive ecommerce experience and custom storefront implementation.",
            fullDesc: [
                "Developed frontend components using Shopify templating structure",
                "Implemented responsive UI using HTML, CSS, and JavaScript",
                "Customized storefront layouts and interactions"
            ],
            technologies: ["Shopify", "HTML5", "CSS3", "JavaScript"]
        },
        {
            title: "Cook-a-Box Food Delivery Platform",
            company: "Freelance Project — Feature Development & Maintenance",
            image: general,
            link: "https://www.cookabox.com/",
            shortDesc: "Cook-a-Box is a Dubai-based food and grocery delivery platform focused on simplifying home cooking through recipe and ingredient delivery.",
            fullDesc: [
                "Worked on feature enhancements and bug fixing",
                "Assisted in maintaining and improving platform functionality",
                "Contributed to frontend/backend tasks within an existing React.js and Node.js codebase"
            ],
            technologies: ["React.js", "JavaScript", "Web Development", "Node.js"]
        },
        {
            title: "Slickey Learning Platform",
            company: "Freelance Project — Frontend Development",
            image: slickey,
            link: "#",
            shortDesc: "Online learning platform concept similar to Udemy focused on digital course management and learning experience.",
            fullDesc: [
                "Worked on assigned development tasks within a Next.js application",
                "Assisted in frontend and backend feature implementation and platform improvements"
            ],
            technologies: ["Next.js", "React", "JavaScript", "Node.js"]
        },
        {
            title: "Vative Solutions Corporate Website + CMS",
            company: "Freelance Project — Full Website & CMS Development",
            image: vative,
            link: "vativesolutions.com",
            shortDesc: "Corporate website and custom CMS developed for an international engineering and renewable energy company focused on sustainable and net-zero solutions.",
            fullDesc: [
                "Built complete frontend website using HTML, CSS, and JavaScript",
                "Developed integrated CMS using Laravel",
                "Implemented dynamic content management functionality",
                "Delivered responsive corporate web experience"
            ],
            technologies: ["Laravel", "PHP", "HTML5", "CSS3", "JavaScript", "CMS Development"]
        },
        {
            title: "VTV Energy Corporate Website",
            company: "Freelance Project — Frontend Development",
            image: general,
            link: "vtvenergy.com",
            shortDesc: "Corporate website developed for a renewable energy solutions company after company rebranding and restructuring.",
            fullDesc: [
                "Designed and developed responsive frontend website",
                "Built corporate informational pages and layouts"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript"]
        },
        {
            title: "Hildens Consulting Website",
            company: "Freelance Project — WordPress Development",
            image: hildens,
            link: "https://hildensconsulting.com/",
            shortDesc: "Corporate consulting website developed using WordPress with focus on clean presentation and responsive design.",
            fullDesc: [
                "Developed and customized WordPress website",
                "Implemented responsive layouts and content structure"
            ],
            technologies: ["WordPress", "CSS3", "JavaScript"]
        },
        {
            title: "TWE — Teaching Women Entrepreneurship",
            company: "Team Project — Flutter Mobile App",
            image: twe,
            link: "https://www.facebook.com/uspeaklebanon/videos/1698109063891056/",
            shortDesc: "Mobile application developed for USPEaK Organization as part of an entrepreneurship initiative supporting women entrepreneurs in Lebanon, funded by the U.S. Embassy Beirut.",
            fullDesc: [
                "Developed Flutter mobile application",
                "Coordinated closely with UI/UX designer for implementation",
                "Built responsive mobile interfaces APIs and app workflows",
                "Participated in project planning and delivery",
            ],
            technologies: ["Flutter", "Dart", "Firebase", "REST APIs"]
        },
        {
            title: "Bocabilla SaaS Business Platform",
            company: "Team Project — SaaS Development",
            image: bocabilla,
            link: "https://app.bocabilla.com/login",
            shortDesc: "Cloud-based SaaS platform designed to help businesses manage quotations, invoices, virtual cards, appointments, and financial operations from a centralized system.",
            fullDesc: [
                "Contributed to Laravel-based SaaS platform development",
                "Worked on backend logic and business workflows",
                "Participated in feature implementation and platform improvements",
                "Collaborated with development team on scalable architecture"
            ],
            technologies: ["Laravel", "MySQL", "JavaScript", "SaaS Architecture"]
        },
        {
            title: "Our Easy Game",
            company: "Educational Tutoring & Learning Platform",
            image: "",
            link: "#",
            shortDesc: "Developed the Flutter mobile application for an educational tutoring platform connecting students and parents in the U.S. with tutors for exam preparation, homework support, and online learning workflows.",
            fullDesc: [
                "Worked as the primary Flutter mobile developer responsible for building and maintaining the student-facing mobile application",
                "Developed responsive mobile interfaces and operational workflows for tutoring, exam assistance, and learning support services",
                "Integrated backend APIs and authentication workflows for student, parent, and tutor interactions",
                "Implemented real-time and interactive user experiences for tutor discovery, learning assistance, and educational support features",
                "Collaborated with backend and dashboard teams to ensure consistent API integration and operational reliability across platforms",
                "Built scalable mobile application architecture focused on performance, maintainability, and smooth user experience",
                "Handled production bug fixing, feature enhancements, and deployment support for live application environments",
                "Contributed to improving usability and accessibility for students and parents using the platform across multiple learning workflows",
                "Worked closely with stakeholders and designers to translate business and educational requirements into production-ready mobile features"
            ],
            technologies: [
                "Flutter",
                "Dart",
                "REST APIs",
                "Firebase",
                "Authentication Systems",
                "Mobile UI/UX",
                "State Management",
                "Real-Time Workflows"
            ]
        },
        {
            title: "Backoffice Management System",
            company: "Freelance Project",
            image: general,
            link: "#",
            shortDesc: "Administrative dashboard and backoffice management system developed for operational workflows and data management.",
            fullDesc: [
                "Built frontend interface using React.js and Tailwind CSS",
                "Developed responsive dashboard components and management screens",
                "Implemented modern UI structure for internal operational use"

            ],
            technologies: ["React.js", "Tailwind CSS", "JavaScript"]
        },
        {
            title: "Real-Time Android Face Recognition App",
            company: "Freelance Project",
            image: general,
            link: "#",
            shortDesc: "Android application capable of detecting and recognizing faces in real time using on-device machine learning without requiring internet connectivity.",
            fullDesc: [
                "Developed Android application implementation",
                "Integrated Google ML Kit for face detection",
                "Implemented TensorFlow Lite & MobileFaceNet for recognition workflows",
                "Explored on-device AI/ML mobile processing"

            ],
            technologies: ["Android", "TensorFlow Lite", "Google ML Kit", "MobileFaceNet", "Java / Kotlin"]
        },
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
                More projects, images and case studies are still being added.
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

                        {/* <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noreferrer"
                            className="visit-btn"
                        >
                            Visit Project
                        </a> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;