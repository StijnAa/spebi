import React from "react";
import styled from "styled-components";
import ButtonLink from "./button.component";
import EmailForm from "./emailForm.component";


const StyledPreOrder = styled.section`
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

const PreOrder = () => {
  return (
    <StyledPreOrder>
      <h1>SPEBI</h1>
      <EmailForm/>
      <ButtonContainer>
        <ButtonLink href="/thanks">Verstuur</ButtonLink>
      </ButtonContainer>
    </StyledPreOrder>
  );
};

export default PreOrder;
