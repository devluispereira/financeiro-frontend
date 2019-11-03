import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Container } from './styles';

export default function Grafico(props) {
  const data = {
    labels: ['Despesas', 'Receiras'],
    datasets: [
      {
        label: 'Despesas x Receitas',
        backgroundColor: ['rgba(255,99,132,0.2)', 'green'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [3550, 4560],
      },
    ],
  };
  return (
    <>
      <Container>
        <Bar data={data} height={50} />
      </Container>
    </>
  );
}
