import React from "react";
import styled from "styled-components";
import ButtonLink from "./buttonLink.component";
import EmailForm from "./emailForm.component";

const StyledThanks = styled.section`
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
  & > section {
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    & > div {
      margin: auto 0;
      & > div {
        margin-bottom: 2.5rem;
        & > p {
          margin-top: 0.5rem;
        }
      }
      & > label {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

const ButtonContainer = styled.div``;

const Thanks = () => {
  return (
    <StyledThanks>
      <h1>SPEBI</h1>
      <section>
        <div>
          <p>Thanks!</p>
        </div>
      </section>
      <ButtonContainer>
        <ButtonLink href="/">Terug</ButtonLink>
      </ButtonContainer>
    </StyledThanks>
  );
};

export default Thanks;
