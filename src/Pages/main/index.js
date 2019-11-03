import React from 'react';

import { Container, Data } from './styles';
import api from '../../services/api';

import Dashboard from '../Dashboard';
import Menu from './components/Menu';

const novaData = new Date().getMonth() + 1;

export default function Main() {
  return (
    <>
      <Dashboard />
      <Menu />
      <Data>
        <h1>{novaData}</h1>
      </Data>

      <Container />
    </>
  );
}
