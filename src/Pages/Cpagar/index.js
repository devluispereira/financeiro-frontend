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
  Button,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import Loading from '../../components/Loading';

import { Delete, Edit } from '@material-ui/icons';

import api from '../../services/api';

import {
  Container,
  ContainerHeader,
  TableHeader,
  DeleteB,
  EditB,
  FormControler,
} from './styles';

import Dashboard from '../Dashboard';

export default function Cpagar() {
  const [dados, setDados] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function chamada() {
      const response = await api.get('despesas');
      const { data } = await response;

      setLoading(false);
      return setDados(data);
    }
    chamada();
  }, []);

  const [estado, setEstado] = useState(false);
  const [buttonDialog, setButtonDialog] = useState({
    open: false,
    id: null,
  });

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
  const handleClickOpen = (action, id) => {
    if (action === 'adicionar') {
      return setDialog(true);
    }
    return setButtonDialog({
      open: true,
      id: id,
    });
  };

  const handleClose = action => {
    if (action === 'adicionar') {
      return setDialog(false);
    }
    return setButtonDialog(false);
  };

  // Funções captura dialogo

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [dataPagamento, setDataPagamento] = useState(null);
  const [grupo, setGrupo] = useState();
  const [select, setSelect] = useState([]);
  const [filtros, setFiltros] = useState('');

  useEffect(() => {
    async function montarGrupo() {
      const { data } = await api.get('grupos');

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
    if (e.target.value === '') {
      return setDataPagamento(null);
    }
    return setDataPagamento(e.target.value);
  }
  function changeGrupo(e) {
    setGrupo(e.target.value);
  }
  async function submitForm() {
    const obj = {
      nome,
      valor,
      vencimento: dataVencimento,
      data_pagamento: dataPagamento,
      grupo,
    };

    await api.post('despesas', obj);
    window.location.reload();
  }
  async function submitPag() {
    const obj = {
      data_pagamento: dataPagamento,
    };
    await api.put(`despesas/${buttonDialog.id}`, obj);
    window.location.reload();
  }

  function handleMaturity(maturit, datePg) {
    const dataAtual = new Date().toDateString();

    const dataVetor = maturit.split('T');
    const dataVencimento = new Date(dataVetor[0]).toDateString();

    if (dataVencimento <= dataAtual && datePg === null) {
      return 'vencido';
    }
  }

  function buildGrupos(grupoId) {
    const grupo = select.filter(sel => sel.id === grupoId);
    for (let att in grupo) {
      return grupo[att].nome;
    }
  }
  const handleChange = event => {
    setFiltros(event.target.value);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ContainerHeader>
            <Dashboard />

            <div className="AddContas">
              <h1>Contas a Pagar</h1>
              <button
                className=" botoes add"
                type="button"
                onClick={() => handleClickOpen('adicionar')}
              >
                Adionar
              </button>
            </div>
            <div className="Filtros">
              <FormControler>
                <InputLabel id="demo-simple-select-label">
                  Filtrar por despesas
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filtros}
                  onChange={handleChange}
                  style={{
                    marginRight: '30px',
                  }}
                >
                  <MenuItem value={10}>Despesas Fixas</MenuItem>
                  <MenuItem value={20}>Despesas Variáveis</MenuItem>
                  <MenuItem value={30}>Lazer</MenuItem>
                </Select>
              </FormControler>
              <FormControler
                style={{
                  width: '200px',
                  marginRight: '30px',
                }}
              >
                <TextField
                  id="date"
                  label="Filtrar por Data Inicio"
                  type="date"
                  style={{
                    width: '200px',
                    marginRight: '30px',
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                ></TextField>
              </FormControler>
              <FormControler
                style={{
                  width: '200px',
                  marginRight: '30px',
                }}
              >
                <TextField
                  id="date"
                  label="Filtrar por Data Fim"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                ></TextField>
              </FormControler>
            </div>
          </ContainerHeader>
          <Container>
            <div className="Tabela">
              <Dialog
                open={dialog}
                onClose={() => handleClose('adicionar')}
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
                  <FormControl>
                    <InputLabel>Selecione o Grupo</InputLabel>
                    <Select
                      autoWidth={true}
                      value={grupo}
                      onChange={changeGrupo}
                      style={{
                        width: '200px',
                        marginBottom: '10px',
                      }}
                    >
                      <MenuItem> </MenuItem>
                      {select.map(sl => (
                        <MenuItem key={sl.id} value={sl.id}>
                          {sl.nome}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Button
                    type="button"
                    color="primary"
                    id="submitDialog"
                    onClick={submitForm}
                  >
                    Inserir
                  </Button>
                </Grid>
              </Dialog>
              <Dialog
                open={buttonDialog.open}
                onClose={() => handleClose('pagar')}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
              >
                <DialogTitle id="alert-dialog-title">
                  Selecine a data de pagamento
                </DialogTitle>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="space-between"
                  wrap="wrap"
                >
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
                  <Button
                    type="button"
                    color="primary"
                    id="submitDialog"
                    onClick={() => submitPag()}
                  >
                    Efetuar Pagamento
                  </Button>
                </Grid>
              </Dialog>

              <div className="tableMaterial">
                <Table className="Scroll">
                  <TableHeader align="center">
                    <TableRow>
                      <TableCell align="center">Nome</TableCell>
                      <TableCell align="center">Valor</TableCell>
                      <TableCell align="center">Vencimento</TableCell>
                      <TableCell align="center">Data Pagamento</TableCell>
                      <TableCell align="center">Grupo</TableCell>
                      <TableCell align="center">Ação</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody slot>
                    {dados
                      ? dados.map(dado => (
                          <TableRow
                            key={dado.id}
                            hover
                            onDoubleClick={() => handleEdit()}
                            onChange={() => handleEdit()}
                          >
                            <TableCell align="center">{dado.nome}</TableCell>
                            <TableCell align="center">R${dado.valor}</TableCell>
                            <TableCell
                              align="center"
                              className={handleMaturity(
                                dado.vencimento,
                                dado.data_pagamento
                              )}
                            >
                              {moment(dado.vencimento)
                                .add(1, 'days')
                                .format('DD/MM/YYYY')}
                            </TableCell>
                            <TableCell align="center">
                              {dado.data_pagamento ? (
                                moment(dado.data_pagamento)
                                  .add(1, 'days')
                                  .format('DD/MM/YYYY')
                              ) : (
                                <Button
                                  type="button"
                                  onClick={() =>
                                    handleClickOpen('pagar', dado.id)
                                  }
                                >
                                  Pagar
                                </Button>
                              )}
                            </TableCell>
                            <TableCell align="center">
                              {buildGrupos(dado.grupo)}
                            </TableCell>
                            <TableCell align="center">
                              <DeleteB titleAccess="Deletar" />
                              <EditB titleAccess="Editar" />
                            </TableCell>
                          </TableRow>
                        ))
                      : null}
                  </TableBody>
                </Table>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
