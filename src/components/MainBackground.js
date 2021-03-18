import React from "react"
import styled from "styled-components"

import { Button } from "./styles/Button"
import { styleVariables } from "./styles/variables"
import Image from "../images/1part_2part0.jpeg"
import Video from "../assets/videos/main_no_bezels.mp4"

const MainContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -${styleVariables.navHeight};
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        18deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(18deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const MainBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ImageBg = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const MainContent = styled.div`
  z-index: 3;
  height: calc(100vh - ${styleVariables.navHeight});
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  /* margin-top: -150px; */
`

const MainH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
`

const MainBackground = () => {
  return (
    <MainContainer>
      <MainBg>
        {/* <ImageBg src={Image} /> */}
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </MainBg>
      <MainContent>
        <MainItems>
          <MainH1>Available Online Experiences</MainH1>
          <Button primary="true" round="true" to="/tour_tallinn">
            Take a tour
          </Button>
        </MainItems>
      </MainContent>
    </MainContainer>
  )
}

export default MainBackground
