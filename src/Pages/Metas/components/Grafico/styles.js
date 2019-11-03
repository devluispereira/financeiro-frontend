import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: identifier 3s;

  #atual {
    color: red;
    margin-bottom: 4px;
  }
  #saldo {
    color: green;
  }

  @keyframes identifier {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Forms1 = styled.div`
  background-color: #edfbf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;

  select {
    width: 100px;
    height: 40px;
  }

  input {
    height: 30px;
    border: solid 1px #3333;
    border-radius: 5px;
    font-family: 'Roboto' Arial, Helvetica, sans-serif;
  }
  button {
    margin: 10px;
    height: 30px;
    width: 80px;
    border: solid 1px #777;
    border-radius: 5px;
    background-color: #27ae60;
    color: #fff;
    font-weight: bold;
    &:hover {
      background-color: green;
    }
  }
`;
