import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Edit } from '@material-ui/icons';
import api from '../../../../services/api';

import { Container, Forms1 } from './styles';

export default function Grafico(props) {
  const [status, setStatus] = useState(false);
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

  function handleStatus() {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }
  async function handleUpdate() {
    const valor = document.querySelector('#dpLazEditvalor');

    const algo = await api.put('grupos', {
      id: props.idItem,
      metas: valor.value,
    });
    console.log(algo);
    window.location.reload();
    return setStatus(false);
  }

  return (
    <>
      <Container>
        {status ? (
          <Forms1>
            <h1>{props.nome} </h1>
            <h2>Valor da Meta</h2>
            <input id="dpLazEditvalor" type="text" />
            <button type="button" onClick={() => handleUpdate()}>
              Alterar
            </button>
          </Forms1>
        ) : (
          <>
            <h2>
              {props.nome}{' '}
              <Edit cursor="pointer" onClick={() => handleStatus()} />
            </h2>
            <h4>Meta: R$ {props.meta}</h4>
            <Doughnut data={data} height={150} />
            <h3 id="atual">
              Gastos atuais = R${' '}
              <strong>{parseFloat(props.atual).toFixed(2)}</strong>
            </h3>
            <h3 id="saldo">
              Saldo=R${' '}
              <strong>
                {parseFloat(props.total - props.atual).toFixed(2)}
              </strong>
            </h3>
          </>
        )}
      </Container>
    </>
  );
}

Grafico.defaultProps = {
  grupos: [],
  valores: [],
  nome: 'Default',
  meta: 300,
  atual: 500,
};
