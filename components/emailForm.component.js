import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Button from "./button.component";
import { app, database } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Router from 'next/router';

const StyledEmailForm = styled.div`
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
  const [email, setEmail] = useState("");
  const dbInstance = collection(database, "emails");

  const handleSaveEmail = () =>{
    if (email != "") {
      saveEmail()
      setEmail("");
      Router.push('/thanks')
    }else{
      console.log("empty email error")
    }
  }

  const saveEmail = () => {
    addDoc(dbInstance, {
      email: email,
    });

  };

  return (
    <form>
    <StyledEmailForm>
      <div>
        <div>
          <p>Laat je email aders achter,</p>
          <p>dan laten we je weten wanneer SPEBI verkrijgbaar is!</p>
        </div>
        <label>Email:</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </StyledEmailForm>
      <Button onClick={(e) => handleSaveEmail()}>Verzenden</Button>
    </form>
  );
};

export default EmailForm;
