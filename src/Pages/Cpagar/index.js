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
import Loading from '../../components/Loading'

import { Delete, Edit } from '@material-ui/icons';

import api from '../../services/api';

import { Container } from './styles';

import Dashboard from '../Dashboard';

moment.locale('br');

export default function Cpagar() {
  const [dados, setDados] = useState();
  const [loading, setLoading]=useState(true)

  useEffect(() => {
   
    async function chamada() {
      const response = await api.get('despesas');
      const { data } = await response;
      console.log(data)
      setLoading(false)
     return setDados(data);
    }
    chamada();
    
    console.log(dados)
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
    if(e.targ.value === ''){
      return setDataPagamento(null)
    }
    return setDataPagamento(e.target.value);
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
      
    };
    console.log(obj);
    api.post('despesas', obj);
    // window.location.reload();
  }

  function handleMaturity(maturit,datePg){
    
    const dataAtual = new Date().toDateString()

   const dataVetor = maturit.split('T')  
   const dataVencimento = new Date(dataVetor[0]).toDateString()

    if(dataVencimento <= dataAtual && datePg === null){
      return 'vencido'
    }
    
  }

  

    
   

  return (
    <>
      {loading ? (<Loading/>) : (
        <Container>
        <Dashboard />
        <div className="Tabela">
          <h1>Contas a Pagar</h1>
          <div id="botoes">
            <button className="add" type="button" onClick={handleClickOpen}>
              Adionar
            </button>
          </div>
    
          <Dialog
            open={dialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
          >
            <DialogTitle  id="alert-dialog-title">
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
                <Select autoWidth={true} value={grupo} onChange={changeGrupo} style={ {
                  width:'200px',
                  marginBottom: "10px"
                }}>
                <MenuItem> </MenuItem>
                {select.map(sl => (
                  <MenuItem value={sl.id}>{sl.nome}</MenuItem>
                ))}
              </Select>
                  
                  </FormControl>      
            
              <Button type="button" color='primary' id="submitDialog" onClick={submitForm}>
                Inserir
              </Button>
            </Grid>
          </Dialog>
          <Table>
            <TableHead align="center">
              <TableRow>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Vencimento</TableCell>
                <TableCell align="center">Data Pagamento</TableCell>
                <TableCell align="center">Grupo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dados ? dados.map(dado => (
                <TableRow
                                 
                  key={dado.id}
                  hover="true"
                  onDoubleClick={() => handleEdit()}
                  onChange={() => handleEdit()}
                >
                  <TableCell  align="center">                   
                    {dado.nome}
                  </TableCell>
                  <TableCell contentEditable align="center">
                    R${dado.valor}
                  </TableCell>
                  <TableCell align="center" className={handleMaturity(dado.vencimento,dado.data_pagamento)} >
                    {moment(dado.vencimento).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell align="center">
                    {dado.data_pagamento
                      ? moment(dado.data_pagamento).format('DD/MM/YYYY')
                      : (<Button>Pagar</Button>)}
                  </TableCell>
                  <TableCell align="center">
                    {dado.grupo}
                  </TableCell>
                </TableRow>
              )) : null}
            </TableBody>
          </Table>
        </div>
      </Container>

      )
      }
    </>
  );
}
