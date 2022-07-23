import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledEmailForm = styled.form`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  & > div {
    margin: auto 0;
    & > div {
      margin-bottom: 2.5rem;
      &>p{
        margin-top: 0.5rem;
      }
    }
    & > label {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;
const Input = styled.input`
  color: black;
  border-style: solid;
  border-color: #ffd835;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  padding: 1rem 1.5rem;
`;

const EmailForm = () => {
  const [email, setEmail] = useState('');


  return (
    <StyledEmailForm>
      <div>
        <div>
          <p>Laat je email aders achter,</p>
          <p>dan laten we je weten wanneer SPEBI verkrijgbaar is!</p>
        </div>
        <label>Email:</label>
        <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
    </StyledEmailForm>
  );
};

export default EmailForm;
