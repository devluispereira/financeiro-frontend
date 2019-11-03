import React, { useState, useEffect } from 'react';

import Dashboard from '../Dashboard';
import Menu from '../main/components/Menu';
import api from '../../services/api';

import { Container, Card } from './styles';

// Importação de componentes

import Grafico from './components/Grafico';

export default function Metas() {
  const [grupo, setGrupo] = useState([]);
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    async function montar() {
      const { data } = await api.get('grupos');
      setGrupo(...grupo, data);
    }
    montar();
  }, []);

  useEffect(() => {
    async function montar() {
      const { data } = await api.get('despesas');
      setDespesas(...despesas, data);
    }
    montar();
  }, []);

  return (
    <>
      <Dashboard />
      <Menu />
      <Container>
        {grupo.map(gp => (
          <Card>
            {console.log(grupo)}
            <Grafico
              key={gp.id}
              idItem={gp.id}
              nome={gp.nome}
              meta={gp.metas}
              total={gp.metas}
              atual={despesas
                .filter(desp => desp.grupo_despesas.nome === gp.nome)
                .reduce((cont = 0, prox) => cont + prox.valor, 0)}
            />
          </Card>
        ))}
      </Container>
    </>
  );
}
