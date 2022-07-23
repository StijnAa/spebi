import React from "react";
import styled from "styled-components";
import Image from "next/image";

const GifContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 45vh;
`;

const Gif = () => {
  return (
    <GifContainer>
      <Image src="/bottle.gif" alt="SPEBI" layout="fill" objectFit="contain" />
    </GifContainer>
  );
};

export default Gif;
