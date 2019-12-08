import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem, } from 'material-ui/List';

import  './styles.js';
import {HeaderDrawer} from './stylesComponent'
import {MdDashboard,MdExitToApp} from 'react-icons/md'
import {GiPayMoney,GiReceiveMoney} from 'react-icons/gi'




export default function Dashboard() {
  const [status, setStatus] = useState(false);

  const user = useSelector(state => state.user.profile)
  const date =  new Date();
 

  function exit(){
    localStorage.clear();
    window.location.reload()
  }

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
      <AppBar  title="Contole Financeiro" onLeftIconButtonClick={toggleDrawer}>
        <img src="" alt="avatar" />
        <span>Nome do usuario</span>
      </AppBar>
      <Drawer open={status} docked={false} onRequestChange={toggleDrawer}>
        <HeaderDrawer>
          <span>Sistema Financeiro</span>
          
          <div >
            <p><strong>Usuario: </strong>{user.name}</p>
            <p>
              <strong>Data: </strong>
              {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
            </p>
          </div>
        </HeaderDrawer>
        <List>
          <Link to="/">
            
           <ListItem   leftIcon={<MdDashboard/>}> Dashboard</ListItem>
          </Link>
          <Link to="/cpagar">
            <ListItem leftIcon={<GiPayMoney/>}>Contas a pagar</ListItem>
          </Link>

          <Link to="/creceber">
            <ListItem leftIcon={<GiReceiveMoney/>}>Contas a Receber</ListItem>
          </Link>
          <Link onClick={()=> exit()} >
            <ListItem leftIcon={<MdExitToApp/>}><strong>Sair</strong></ListItem>
         
          </Link>
        </List>
      </Drawer>
    </>
  );
}
