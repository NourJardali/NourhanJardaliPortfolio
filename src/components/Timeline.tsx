import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2019 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Full-Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
            <p>
              Delivered 20+ web, ecommerce, SaaS, and mobile applications for
              international clients across retail, logistics, education,
              consulting, and food delivery industries using Laravel, React.js,
              Node.js, Flutter, and cloud-based infrastructure.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder & Digital Solutions Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">DeVision</h4>
            <p>
              Co-founded and scaled a digital solutions agency delivering SaaS,
              ecommerce, and enterprise systems for international clients.
              Led end-to-end project delivery, cloud architecture, CI/CD workflows,
              technical planning, and cross-functional engineering teams while
              contributing hands-on to development and system optimization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Operations Manager & Head of Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Karim Press</h4>
            <p>
             Led development and operations teams delivering enterprise systems,
              SaaS platforms, NGO solutions, and cloud-based applications.
              Managed architecture planning, code reviews, AWS deployments,
              technical client communication, and end-to-end project delivery
              across multiple concurrent engagements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack / Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Cadmus Data Science (Remote — Netherlands)</h4>
            <p>
            Contributed to AI-assisted workflow automation systems including
              YaPa for Outlook, a Microsoft-approved productivity Add-in.
              Developed Android applications integrated with Microsoft Graph API,
              REST services, and scalable workflow management systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-Employed</h4>
            <p>
            Delivered full-stack digital solutions for SMEs across retail, F&B, education, and ecommerce.
            <br />Built POS systems, LMS platforms, ecommerce websites, and custom business applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;