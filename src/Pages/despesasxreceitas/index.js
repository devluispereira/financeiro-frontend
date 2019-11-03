import React from 'react';
import Dashboard from '../Dashboard';
import Menu from '../main/components/Menu';
import Grafico from './Grafico';
// import { Container } from './styles';

export default function despesasxreceitas() {
  return (
    <>
      <Dashboard />
      <Menu />
      <Grafico />
    </>
  );
}
