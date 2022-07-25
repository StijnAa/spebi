import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ButtonLink from "./buttonLink.component";
import Gif from "./gif.component";

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
    }
  }
`;

const ButtonContainer = styled.div`
`;

const Hero = () => {
  return (
    <StyledHero>
      <h1>SPEBI</h1>
      <Gif/>
      <ButtonContainer>
        <ButtonLink href="/preorder">MOEK HEBBEN</ButtonLink>
      </ButtonContainer>
    </StyledHero>
  );
};

export default Hero;
