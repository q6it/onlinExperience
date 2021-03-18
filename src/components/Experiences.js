import React from "react"
import styled from "styled-components"
import { Button } from "./styles/Button"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ExperienceContainer = styled.div`
  min-height: 100vh;
  padding: 4rem calc((100vw - 1300px) / 2);
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto); */
  /* color: #fff; */
`
const ExperienceWrapper = styled.div`
  /* background: #f7f7f7; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 5px;
  grid-auto-rows: 100px;
  position: relative;
  /* width: 50%; */

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
  img {
    max-height: 90vh;
  }
`

const DescriptionBox = styled.div`
  background: #f7f7f7;
  /* width: 35vw;
  height: 40vh; */
  /* margin-left: -40%; */
  padding: 2rem calc((100vw - 1900px) / 4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  position: absolute;
  top: 3rem;
  right: 20rem;

  @media screen and (max-width: 820px) {
    overflow: hidden;
    position: static;
    /* width: 85vw; */
    /* height: 40vh; */
    margin-top: -4rem;
    margin-left: 2.5rem;
    z-index: 2;
    margin-bottom: 5rem;
    justify-content: space-evenly;
  }
`

const ExperienceHeader = styled.div`
  flex: 1 1 auto;
  width: 25vw;
  font-size: clamp(1rem, 6vw, 2rem);
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  padding: 0.5rem;

  @media screen and (max-width: 830px) {
    width: 85vw;
  }
`
const ExperienceP = styled.p`
  flex: 1 1 auto;
  width: 25vw;
  padding: 0.5rem;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;

  @media screen and (max-width: 830px) {
    width: 85vw;
  }
`

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query ExpQuery {
      allExperiencesJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid(quality: 95, maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            location
          }
        }
      }
    }
  `)

  const getExperiences = data => {
    const experiences = []
    data.allExperiencesJson.edges.forEach((item, index) => {
      // const isDescription = item.node.description !== "" || false
      // console.log(
      //   "🚀 ~ file: Experiences.js ~ line 104 ~ data.allExperiencesJson.edges.forEach ~ isDescription",
      //   isDescription
      // )
      experiences.push(
        <div key={index}>
          <ExperienceWrapper>
            <Img
              src={item.node.img.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img.childImageSharp.fluid}
            />
            <DescriptionBox>
              <ExperienceHeader>{item.node.name}</ExperienceHeader>
              {item.node.description !== "" ? (
                <ExperienceP>{item.node.description}</ExperienceP>
              ) : null}
              <Button primary="true" round="true" to={item.node.location}>
                {item.node.button}
              </Button>
            </DescriptionBox>
          </ExperienceWrapper>
        </div>
      )
    })
    return experiences
  }

  return (
    <div>
      <ExperienceContainer>{getExperiences(data)}</ExperienceContainer>
    </div>
  )
}

{
  /* <Button primary="true" round="true" to="/tour_tallinn">
  Learn More
</Button> */
}
export default Experiences
