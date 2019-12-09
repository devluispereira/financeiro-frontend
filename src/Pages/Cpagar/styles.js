import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  background-color: #fff;
  height: 70%;

  .vencido{
    color:red;
   font-weight:bold
   
  }
 
  }

  #Tabela {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fade 2s backwards;
    h1 {
      color: red;
    }

    @keyframes fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  #botoes {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    button {
      margin: 10px;
      height: 30px;
      width: 80px;
      border: solid 1px #777;
      border-radius: 5px;
    }
    #add {
      background-color: #27ae60;
      color: #fff;
      font-weight: bold;
      &:hover {
        background-color: green;
      }
    }

    #del {
      background-color: #c0392b;
      color: #fff;
      font-weight: bold;
      &:hover {
        background-color: red;
      }
    }

    #edit {
      background-color: #f39c12;
      color: #fff;
      font-weight: bold;
      &:hover {
        background-color: #e67e22;
      }
    }
    #dialogo {
      height: 500px;
      width: 250px;
      background-color: #ffff;
    }
  }

  button {
    background-color: #27ae60;
    color: #fff;
    font-weight: bold;
    &:hover {
      background-color: green;
    }
  }
`;
