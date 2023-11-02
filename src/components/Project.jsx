import React from "react"
import { projectList } from "./Data"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: "Exo 2", sans-serif;
  color: #1d1d1d;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }
`

const GridItem = styled.div`
  padding: 1.5rem;
  background-color: #e3eeff;
  border-radius: 10px;
  text-align: center;
`

const Img = styled.img`
  width: 100%;
  max-width: 20rem;
  height: auto;
  border-radius: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: #5488c7;
  font-size: 1.3rem;
  font-weight: bold;
`

function Project() {
  return (
    <Container id="project">
      <Title>Project</Title>
      <Grid>
        {projectList.map(data => (
          <GridItem key={data.id}>
            <Img src={data.img} />
            <hr />
            <h2 style={{ fontSize: "1.8rem", margin: "1rem 0" }}>
              {data.name}
            </h2>
            <Link href={data.link}>Github</Link>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default Project
