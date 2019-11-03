import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  TextField,
  Grid,
  Select,
  MenuItem,
  FilledInput,
} from '@material-ui/core';

import { Delete, Edit } from '@material-ui/icons';

import api from '../../services/api';

import { Container } from './styles';

import Dashboard from '../Dashboard';

moment.locale('br');

export default function Cpagar() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function chamada() {
      const response = await api.get('despesas');
      const { data } = await response;

      setDados(data);
    }
    chamada();
  }, []);

  const [estado, setEstado] = useState(false);

  function handleEdit() {
    switch (estado) {
      case false:
        return setEstado(true);
      case true:
        return setEstado(false);
      default:
        return false;
    }
  }

  const [dialog, setDialog] = useState(false);
  const handleClickOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  // Funções captura dialogo

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [dataPagamento, setDataPagamento] = useState(null);
  const [grupo, setGrupo] = useState();
  const [select, setSelect] = useState([]);

  useEffect(() => {
    async function montarGrupo() {
      const { data } = await api.get('grupos');
      console.log(data);
      setSelect(data);
    }
    montarGrupo();
  }, []);

  function changeName(e) {
    setNome(e.target.value);
  }
  function changeValor(e) {
    setValor(e.target.value);
  }

  function changeDataV(e) {
    setDataVencimento(e.target.value);
  }
  function changeDataP(e) {
    setDataPagamento(e.target.value);
  }
  function changeGrupo(e) {
    setGrupo(e.target.value);
  }
  function submitForm() {
    const obj = {
      nome,
      valor,
      vencimento: dataVencimento,
      data_pagamento: dataPagamento,
      grupo,
      comprovante: 1,
    };
    console.log(obj);
    api.post('despesas', obj);
    // window.location.reload();
  }

  return (
    <>
      <Dashboard />
      <Container>
        <div className="Tabela">
          <h1>Contas a Pagar</h1>
          <div id="botoes">
            <button className="add" type="button" onClick={handleClickOpen}>
              Adionar
            </button>
          </div>
          <h1>Valor Total </h1>
          <Dialog
            open={dialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
          >
            <DialogTitle id="alert-dialog-title">
              Adicionar Despesas
            </DialogTitle>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="space-between"
              wrap="wrap"
            >
              <TextField
                label="Name"
                onChange={changeName}
                margin="normal"
                maxWidth={false}
              />
              <TextField
                onChange={changeValor}
                label="Valor"
                type="number"
                margin="normal"
                maxWidth={false}
              />
              <TextField
                onChange={changeDataV}
                label="Data Vencimento"
                type="date"
                margin="normal"
                maxWidth={false}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                onChange={changeDataP}
                label="Data Pagamento"
                type="date"
                margin="normal"
                maxWidth={false}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FilledInput type="file" />
              <Select value={grupo} onChange={changeGrupo} placeholder="Grupo">
                <MenuItem> </MenuItem>
                {select.map(sl => (
                  <MenuItem value={sl.id}>{sl.nome}</MenuItem>
                ))}
              </Select>
              <button type="button" id="submitDialog" onClick={submitForm}>
                Inserir
              </button>
            </Grid>
          </Dialog>
          <Table>
            <TableHead align="center">
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Vencimento</TableCell>
                <TableCell align="center">Data Pagamento</TableCell>
                <TableCell align="center">Grupo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dados.map(dado => (
                <TableRow
                  key={dado.nome}
                  hover="true"
                  onDoubleClick={() => handleEdit()}
                  onChange={() => handleEdit()}
                >
                  <TableCell>
                    {estado && <Delete cursor="pointer" />}
                    {estado && (
                      <Edit
                        onClick={() => console.log('editar esse tem')}
                        cursor="pointer"
                      />
                    )}
                    {dado.nome}
                  </TableCell>
                  <TableCell contentEditable align="center">
                    R${dado.valor}
                  </TableCell>
                  <TableCell align="center">
                    {moment(dado.vencimento).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell align="center">
                    {dado.data_pagamento
                      ? moment(dado.data_pagamento).format('DD/MM/YYYY')
                      : 'A pagar'}
                  </TableCell>
                  <TableCell align="center">
                    {dado.grupo_despesas.nome}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </>
  );
}
