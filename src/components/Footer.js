import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  padding: 2rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  color: #b2b2b2;
  background: #38383a;
`
const FooterLinksWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  /* @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  } */
`

// const FooterDesc = styled.div`
//   padding: 0 2rem;
//   h1 {
//     /* margin-bottom: 3rem; */
//     /* color: #f26a2e; */
//     color: #fff;
//   }

//   @media screen and (maw-width: 400px) {
//     padding: 1rem;
//   }
// `

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;

  font-weight: bold;
  h2 {
    font-size: clamp(0.5rem, 6vw, 1.5rem);
    /* margin-bottom: 3rem; */
    /* color: #f26a2e; */
    color: #fff;
  }
  p {
    font-size: clamp(0.6rem, 4vw, 1rem);
    letter-spacing: 1px;
    font-weight: 400;
  }
  &:last-of-type p {
    /* font-style: italic; */
    font-weight: 600;
    font-size: clamp(0.6rem, 6vw, 1rem);
  }

  @media screen and (maw-width: 400px) {
    padding: 1rem;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterRow>
          <h2>OnlinExperience</h2>
        </FooterRow>
        <FooterRow>
          <p>Operating Online | (+372) 5569-1845 |</p>
        </FooterRow>
        <FooterRow>
          <p>onlinexperiencetour@gmail.com</p>
        </FooterRow>
        <FooterRow>
          <p>Making travelling possible!</p>
        </FooterRow>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer
