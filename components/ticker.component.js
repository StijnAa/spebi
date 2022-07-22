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
  position: fixed;
  display: block;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  background-color: rgba(#000, 0.9);
  box-sizing: content-box;

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
  -webkit-animation-name: ${TickerKeyframes};
  animation-name: ${TickerKeyframes};
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  &>p {
    display: inline-block;

    padding: 0 0.2rem;
    font-size: 2rem;
    color: black;
  }
`;
const StyledTickerSecond = styled.div`

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
  -webkit-animation-duration:10s;
  animation-duration: 10s;
  &>p {
    display: inline-block;

    padding: 0 0.2rem;
    font-size: 2rem;
    color: black;
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
        <StyledTickerSecond>
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
        </StyledTickerSecond>
      </TickerWrap>
    </>
  );
};

export default Ticker;
