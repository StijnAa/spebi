import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const TickerKeyframes = keyframes`
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }
  
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  `;
const TickerKeyframes2 = keyframes`
    0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    }

    100% {
    -webkit-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0);
    }
`;

const TickerWrap = styled.section`
    z-index: -10;

  position: fixed;
  display: block;
  bottom: 0;
  width: 200%;
  height: 4rem;
  background-color: rgba(#000, 0.9);
  box-sizing: content-box;
  transform: translate(-163px, -258px) rotate(-10deg);
  @media (max-width: 768px) {
    transform: translate(-163px, -88px) rotate(-10deg);
  }
  &>div:first-child{
    -webkit-animation-name: ${TickerKeyframes};
  animation-name: ${TickerKeyframes};
  }
`;

const StyledTicker = styled.div`
  position: absolute;
  height: 4rem;
  line-height: 4rem;
  white-space: nowrap;
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ${TickerKeyframes2};
  animation-name: ${TickerKeyframes2};
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  & > p {
    display: inline-block;
    font-weight: 700;
    padding: 0 0.2rem;
    font-size: 2rem;
    color: #cacaca;
  }
`;

const Ticker = () => {
  return (
    <>
      <TickerWrap>
        <StyledTicker>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
        </StyledTicker>
        <StyledTicker>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
          <p>SPEBI.NL </p>
        </StyledTicker>
      </TickerWrap>
    </>
  );
};

export default Ticker;
