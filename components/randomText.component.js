import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledRandomText = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  & > h2 {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const RandomText = () => {
  const [text, setText] = useState("");
  const texts = [
    "Ik heb echt kaulo veel zin in een",
    "Ben denk ik wel echt 100p bij een",
    "Doe maar twaalf biba en twaalf",
  ];
  useEffect(() => {
    setText(texts[Math.floor(Math.random() * texts.length)]);
  }, []);
  return (
    <StyledRandomText>
      <h2>{text}</h2>
    </StyledRandomText>
  );
};

export default RandomText;
