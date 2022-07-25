import { useLink } from "@react-aria/link";
import styled from "styled-components";
import React from "react";

const StyledButton = styled.a`
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

function ButtonLink(props) {
  let ref = React.useRef();
  let { linkProps } = useLink(props, ref);

  return (
    <StyledButton
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </StyledButton>
  );
}

export default ButtonLink;