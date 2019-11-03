import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Container, Forms1 } from './styles';

export default function Grafico(props) {
  function total() {
    if (props.total - props.atual < 0) {
      return 0;
    }
    return props.total - props.atual;
  }
  const data = {
    labels: ['Atual', 'Saldo'],
    datasets: [
      {
        data: [props.atual, total()],
        backgroundColor: ['#c0392b', '#27ae60'],
        hoverBackgroundColor: ['red', 'green'],
      },
    ],
  };

  return (
    <>
      <Container>
        <h2>{props.nome}</h2>
        <h4>Meta: R$ {props.meta}</h4>
        <Doughnut data={data} height={150} />
        <h3 id="atual">
          Gastos atuais = R${' '}
          <strong>{parseFloat(props.atual).toFixed(2)}</strong>
        </h3>
        <h3 id="saldo">
          Saldo=R${' '}
          <strong>{parseFloat(props.total - props.atual).toFixed(2)}</strong>
        </h3>
      </Container>
    </>
  );
}
