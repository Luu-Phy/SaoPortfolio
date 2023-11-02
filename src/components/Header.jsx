import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import React from "react"
import styled from "styled-components"

const HeaderWrap = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.45);
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 70% 30%;
  align-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
`
const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`

const StyledTitleLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: "Roboto Mono", monospace;
  border-radius: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 1rem;
  cursor: pointer;
  @media (max-width: 1024px) {
    padding: 0.1rem;
    margin: 0 0.5rem;
    font-size: 12px;
  }
`

const FacebookIcon = styled(FontAwesomeIcon)`
  color: #1877f2;
  font-size: 1.3rem;
`

const GithubIcon = styled(FontAwesomeIcon)`
  color: #333;
  font-size: 1.3rem;
`

const LinkedInIcon = styled(FontAwesomeIcon)`
  color: #0a66c2;
  font-size: 1.3rem;
`

const PhoneIcon = styled(FontAwesomeIcon)`
  color: #000;
  font-size: 1.3rem;
`

const EnvelopeIcon = styled(FontAwesomeIcon)`
  color: #ea4335;
  font-size: 1.3rem;
`

function Header() {
  return (
    <HeaderWrap>
      <HeaderLeft>
        <StyledTitleLink href="#">About</StyledTitleLink>
        <StyledTitleLink href="#skills">Skills</StyledTitleLink>
        <StyledTitleLink href="#experience">Experience</StyledTitleLink>
        <StyledTitleLink href="#project">Project</StyledTitleLink>
      </HeaderLeft>
      {/* <HeaderRight>
        <StyledTitle backgroundColor="#eee">
          <FacebookIcon icon={faFacebook} />
        </StyledTitle>
        <StyledTitle backgroundColor="#eee">
          <GithubIcon icon={faGithub} />
        </StyledTitle>
        <StyledTitle backgroundColor="#eee">
          <LinkedInIcon icon={faLinkedinIn} />
        </StyledTitle>
        <StyledTitle backgroundColor="#eee">
          <PhoneIcon icon={faPhone} />
        </StyledTitle>
        <StyledTitle backgroundColor="#eee">
          <EnvelopeIcon icon={faEnvelope} />
        </StyledTitle>
      </HeaderRight> */}
      <div></div>
    </HeaderWrap>
  )
}

export default Header
