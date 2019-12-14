import styled from 'styled-components';
import { TableHead, FormControl } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

export const FormControler = styled(FormControl)`
  min-width: 200px;
  width: 200px;
  margin: 10px;
`;
export const ContainerHeader = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 20%;
  margin-top: 0px;
  top: 0px;
  margin-bottom: 60px;
  flex-direction: column;
  background: #fff;

  .Filtros{
    display:flex;
    width:100%;
    justify-content: flex-end;
    margin-right:20px;

  }

  .AddContas {

    display:flex;
    flex-direction: column;
    width:100%;
    justify-content:center;
    align-items:center;

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
    .add {
      background-color: #27ae60;
      color: #fff;
      font-weight: bold;
      &:hover {
        background-color: green;
      }
    }

  }
`;

export const Container = styled.div`

  background-color: #fff;
  height: 100%;
  margin-top:10%;





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

export const TableHeader = styled(TableHead)``;

export const DeleteB = styled(Delete)`
  color: #d50000;
  margin: 5px;
  cursor: pointer;

  &:hover {
    color: #9b0000;
  }
`;
export const EditB = styled(Edit)`
  color: #00c853;
  margin: 5px;
  cursor: pointer;

  &:hover {
    color: #009624;
  }
`;
