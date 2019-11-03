import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';

import './styles.js';

export default function Dashboard() {
  const [status, setStatus] = useState(false);

  const toggleDrawer = () => {
    switch (status) {
      case false:
        setStatus(true);
        return status;

      case true:
        setStatus(false);
        return status;

      default:
        return status;
    }
  };

  return (
    <>
      <AppBar title="Contole Financeiro" onLeftIconButtonClick={toggleDrawer}>
        <img src="" alt="avatar" />
        <span>Nome do usuario</span>
      </AppBar>
      <Drawer open={status} docked={false} onRequestChange={toggleDrawer}>
        <List>
          <Link to="/">
            <ListItem>Dashboard</ListItem>
          </Link>
          <Link to="/cpagar">
            <ListItem>Contas a pagar</ListItem>
          </Link>

          <Link to="/creceber">
            <ListItem>Contas a Receber</ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
