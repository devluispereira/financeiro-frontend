import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid silver;
  border-radius: 5px;
  margin: 1%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  height: 290px;
  width: 300px;
  margin: 5px;
  border: solid 1px silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes fade {
    to{
      opacity: 0

    }from{

      opacity:1;
      trans

    }
  }
`;

export const Form1 = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    height: 30px;
    border: solid 1px #3333;
    border-radius: 5px;
    font-family: 'Roboto' Arial, Helvetica, sans-serif;
  }
`;

export const Data = styled.div`
  height: 100%;
`;
