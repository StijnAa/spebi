import { useButton } from "@react-aria/button";
import {useRef} from 'react';
import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  color: white;
  background-color: #ffd835;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  padding:1rem 1.5rem;
  margin-top: 2rem;
  min-width: 150px;
  &:hover{
    transform: scale(0.98);
  }
`;

function Button(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <StyledButton {...buttonProps} ref={ref}>
      {children}
    </StyledButton>
  );
}

export default Button;