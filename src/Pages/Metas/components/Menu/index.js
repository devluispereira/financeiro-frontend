import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Menu(props) {
  return (
    <Container>
      <Link to="despxrece">Metas</Link>
      <Link to="despxrece">Despesas x Receitas</Link>
    </Container>
  );
}
