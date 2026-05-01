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
            date="2023 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder & Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">DeVision</h4>
            <p>
              Led development and delivery of ERP systems, SaaS platforms, and ecommerce solutions. 
              <br />Managed cross-functional teams, client communication, and full project lifecycles from planning to deployment.
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
             Managed technical operations and led software development teams delivering enterprise systems.
             <br />Oversaw architecture decisions, project planning, and execution of web platforms and digital solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2020 – Oct 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Android Development Part-Time Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tayibat (Food Delivery App)</h4>
            <p>
            Worked on a live food delivery Android app, focusing on bug fixes, MVVM architecture, and Room database while gaining production mobile development experience.
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
            Worked on Microsoft-integrated productivity and workflow automation systems, including an Outlook Add-in and Android application with API integrations and workflow logic.
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