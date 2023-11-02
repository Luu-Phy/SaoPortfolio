import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSchool, faBuilding } from "@fortawesome/free-solid-svg-icons"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import styled from "styled-components"

function Experience() {
  const Title = styled.h1`
    font-size: 6.5rem;
    font-family: "Exo 2", sans-serif;
    color: #1d1d1d;
    padding: 0.5rem;
    text-align: center;
  `
  return (
    <div id="experience" className="experience">
      <Title>Education & Experience</Title>
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
          date="2019 - 2023"
        >
          <h3>Sai Gon University</h3>
          <p>Major: Software Engineer</p>
          <p>GPA: 2.7</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBuilding} />}
          date="2023 - now"
        >
          <h3>FPT Telecom</h3>
          <p>ISC - SU10</p>
          <p>Back-end Developer Intern</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
