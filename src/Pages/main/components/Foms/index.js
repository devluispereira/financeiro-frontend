import React from 'react';

import { Form1 } from './styles';

export default function Foms(props) {
  return (
    <Form1>
      <h2>Nome </h2>
      <input id="dpLazEditnome" type="text" />
      <h2>Valor de Base</h2>
      <input id="dpLazEditvalor" type="text" />
      <button type="button" onClick={props.action}>
        Alterar
      </button>
    </Form1>
  );
}
