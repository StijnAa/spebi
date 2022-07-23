import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
  text-align: center;

  & > h1 {
    z-index: -10;
    font-size: 6rem;
    width: 100%;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 5rem;
        margin-top: 3rem;
  }
  }
`;

const ImageContainer = styled.div`
    position: relative;
  z-index: 10;
  width: 100%;
  height: 60vh;
`;

const Hero = () => {
  return (
    <StyledHero>
      <h1>SPEBI</h1>
      <ImageContainer>
        <Image
            src="/bottle.gif"
            alt="SPEBI"
            layout='fill'
            objectFit='contain'
            />
      </ImageContainer>
    </StyledHero>
  );
};

export default Hero;
