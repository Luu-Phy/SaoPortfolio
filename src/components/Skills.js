import React from "react"
import styled from "styled-components"

function Skills() {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 60% 30%;
    @media (max-width: 1024px) {
      grid-template-columns: 30% 60%;
      column-gap: 1rem;
    }
  `

  const SkillsLeftPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 100vh;
  `
  const Title = styled.h1`
    font-size: 5rem;
    font-family: "Exo 2", sans-serif;
    color: #1d1d1d;
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
  `
  const SkillsRightPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #eee;
  `
  const ListImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 80%;
  `
  const Label = styled.label`
    font-size: 2rem;
    font-weight: bold;
    color: #525252;
    padding: 2rem;
  `
  const Img = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 10px;
    @media (max-width: 1024px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  `

  return (
    <Container id="skills">
      <SkillsLeftPage>
        <Title>My Skill</Title>
      </SkillsLeftPage>
      <SkillsRightPage>
        <Label>Languages & Databases</Label>
        <ListImg>
          <Img src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/java.png" />
          <Img src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/js.png" />
          <Img src="https://www.commvault.com/wp-content/uploads/2019/08/sql-server_logo.jpg?quality=80&w=930" />
          <Img src="https://www.bairesdev.com/wp-content/uploads//2021/07/Csharp.svg" />
        </ListImg>

        <Label>Frameworks & Technologies</Label>
        <ListImg>
          <Img src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/react.png" />
          <Img src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/nodejs.png" />
          <Img src="https://coder.com.vn/wp-content/uploads/2021/05/e.png" />
        </ListImg>
        <Label>Tools & Platforms</Label>
        <ListImg>
          <Img src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/git.png" />
          <Img src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/docker.png" />
        </ListImg>
      </SkillsRightPage>
    </Container>
  )
}

export default Skills
