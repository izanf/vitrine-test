import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
margin: 150px auto;
width: 40px;
height: 40px;
position: relative;
`;

const circleFadeDelay = keyframes`
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
`;

const Circle = styled.div`
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;

&:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #5F0000;
  border-radius: 100%;
  -webkit-animation: ${circleFadeDelay} 1.2s ease-in-out infinite both;
          animation: ${circleFadeDelay} 1.2s ease-in-out infinite both;
}
`;

const CircleOne = Circle.extend`
`;

const CircleTwo = Circle.extend`
-webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);

&:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; 
}
`;

const CircleThree = Circle.extend`
-webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);

&:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; 
}
`;

const CircleFour = Circle.extend`
-webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);

&:before {
  -webkit-animation-delay: -.9s;
          animation-delay: -.9s; 
}
`;

const CircleFive = Circle.extend`
-webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);

&:before {
  -webkit-animation-delay: -.8s;
          animation-delay: -.8s; 
}
`;

const CircleSix = Circle.extend`
-webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg);

&:before {
  -webkit-animation-delay: -.7s;
          animation-delay: -.7s; 
}
`;

const CircleSeven = Circle.extend`
-webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);

&:before {
  -webkit-animation-delay: -.6s;
          animation-delay: -.6s; 
}
`;

const CircleEight = Circle.extend`
-webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg);

&:before {
  -webkit-animation-delay: -.5s;
          animation-delay: -.5s; 
}
`;

const CircleNine = Circle.extend`
-webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);

&:before {
  -webkit-animation-delay: -.4s;
          animation-delay: -.4s; 
}
`;

const CircleTen = Circle.extend`
-webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg);

&:before {
  -webkit-animation-delay: -.3s;
          animation-delay: -.3s; 
}
`;

const CircleEleven = Circle.extend`
-webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg);

&:before {
  -webkit-animation-delay: -.2s;
          animation-delay: -.2s; 
}
`;

const CircleTwelve = Circle.extend`
-webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg);

&:before {
  -webkit-animation-delay: -.1s;
          animation-delay: -.1s; 
}
`;

const Loading = () => (
  <Wrapper>
    <CircleOne />
    <CircleTwo />
    <CircleThree />
    <CircleFour />
    <CircleFive />
    <CircleSix />
    <CircleSeven />
    <CircleEight />
    <CircleNine />
    <CircleTen />
    <CircleEleven />
    <CircleTwelve />
  </Wrapper>
);

export default Loading;
