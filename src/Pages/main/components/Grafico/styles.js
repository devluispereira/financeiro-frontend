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

export const Forms1 = styled.div``;
