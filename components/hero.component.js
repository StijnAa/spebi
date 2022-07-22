import React from "react";
import styled from "styled-components";

const StyledHero = styled.section`
  text-align: center;

  & > h1 {
    z-index: -10;
    font-size: 8rem;
    position: absolute;
    width: 100%;
    font-weight: 900;
    @media (max-width: 768px) {
        font-size: 7rem;
        margin-top: 3rem;
  }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 10;
`;

const Img = styled.div`
  width: 500px;
  height: 800px;
  background-image: url("./bottle.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-clip: cover;
  background-position: 50% 70%;
  @media (max-width: 768px) {
    background-position: 50% 70%;


  }

`;

const Hero = () => {
  return (
    <StyledHero>
      <h1>SPEBI</h1>
      <ImageContainer>
        <Img />
      </ImageContainer>
    </StyledHero>
  );
};

export default Hero;
