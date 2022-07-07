import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import "../styles/Experience.css";

function Experience() {
  return (
    <div id="experience" className="experience">
      <h1> My Experiences</h1>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Pontificia Universidad Católica del Perú, Lima, Perú
          </h3>
          <p>Mechatronic Engineer</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="07/2020 - 01/2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Automation Project Advisor - Deitax Solutions S.A.C.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lambayeque, Perú
          </h4>
          <p>Design concept of a technogoly solution in a sofware and hardware perspective.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="03/2021 - 06/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Educational Assistant - Pontificia Universidad Católica del Perú
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Miguel, Lima
          </h4>
          <p>
            I was in charge of a group of students whose were teached and oriented through videocalls and emails.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="03/2022 - 06/2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Henry, remote, Argentina
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bootcamp program
          </h4>
          <p> Full Stack Engineer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
