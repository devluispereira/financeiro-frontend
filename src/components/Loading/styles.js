import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:100%;
  z-index:1000;
  position:fixed;
  display: flex;
  align-items:center;
  justify-content:center;

  svg{
    animation-name: girando;
   animation-duration: 0.7s;
   animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes girando {
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;
