import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Dialog,
} from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';

import { Container } from './styles';

import Dashboard from '../Dashboard';

const dados = [
  {
    nome: 'Conta de Aguar',
    valor: 15.0,
    vencimento: '05/05/2020',
    dtPagamento: '05/06/2019',
    Grupo: 'Despesas fixas',
    comprovante: 'google.com.br',
  },
  {
    nome: 'Conta de Luz',
    valor: 15.0,
    vencimento: '05/05/2020',
    dtPagamento: '05/06/2019',
    Grupo: 'Despesas fixas',
    comprovante: 'google.com.br',
  },
  {
    nome: 'Padaria',
    valor: 15.0,
    vencimento: '05/05/2020',
    dtPagamento: '05/06/2019',
    Grupo: 'Despesas fixas',
    comprovante: 'google.com.br',
  },
  {
    nome: 'Lacatina',
    valor: 15.0,
    vencimento: '05/05/2020',
    dtPagamento: '05/06/2019',
    Grupo: 'Despesas fixas',
    comprovante: 'google.com.br',
  },
  {
    nome: 'Celular',
    valor: 15.0,
    vencimento: '05/05/2020',
    dtPagamento: '05/06/2019',
    Grupo: 'Despesas fixas',
    comprovante: 'google.com.br',
  },
  {
    nome: 'Computador',
    valor: 15.0,
    vencimento: '05/05/2020',
    dtPagamento: '05/06/2019',
    Grupo: 'Despesas fixas',
    comprovante: 'google.com.br',
  },
];

export default function Creceber() {
  return (
    <>
      <Dashboard />
      <Container>
        <div className="Tabela">
          <h1>Contas a Receber</h1>
          <Table>
            <TableHead align="center">
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right">Vencimento</TableCell>
                <TableCell align="right">Data Pagamento</TableCell>
                <TableCell align="right">Grupo</TableCell>
                <TableCell align="right">Comprovante</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dados.map(dado => (
                <TableRow
                  key={dado.nome}
                  hover="true"
                  onDoubleClick={() => <Dialog open />}
                >
                  <TableCell>{dado.nome}</TableCell>
                  <TableCell contentEditable align="right">
                    R${dado.valor}
                  </TableCell>
                  <TableCell align="right">{dado.vencimento}</TableCell>
                  <TableCell align="right">{dado.dtPagamento}</TableCell>
                  <TableCell align="right">{dado.Grupo}</TableCell>
                  <TableCell align="center">
                    <Link to={dado.comprovante}>
                      <AttachFile />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="botoes">
            <button className="add"> Adionar </button>
            <button className="del"> Excluir </button>
            <button className="edit"> Editar </button>
          </div>
        </div>
      </Container>
    </>
  );
}
