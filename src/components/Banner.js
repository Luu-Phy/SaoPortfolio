import React from "react"
import styled from "styled-components"
import banner from "../assets/banner.svg"

function Banner() {
  const Banner = styled.div`
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: grid;
    background-color: #eee;
    grid-template-columns: 60% 40%;

    @media (max-width: 1024px) {
      grid-template-columns: 100%;
      background-size: contain;
      height: auto;
    }
  `

  const BannerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30%;
    margin-left: 4rem;
    justify-content: flex-start;

    @media (max-width: 1024px) {
      margin: 2rem;
    }
  `

  const MyName = styled.h1`
    font-size: 6.5rem;
    font-family: "Exo 2", sans-serif;
    color: #1d1d1d;

    @media (max-width: 1024px) {
      font-size: 4rem;
    }
  `

  const Description = styled.span`
    font-size: 1.5rem;
    font-family: "Roboto Mono", monospace;
    color: #1d1d1d;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  `
  return (
    <Banner>
      <BannerLeft>
        <MyName>Trịnh Nam Siêu Sao</MyName>
        <Description>
          My name is Trịnh Nam Siêu Sao and I'm studying Information Technology
          at SGU. I'm from Vietnam and my goal is to become a Developer.
        </Description>
      </BannerLeft>
      <div></div>
    </Banner>
  )
}

export default Banner
