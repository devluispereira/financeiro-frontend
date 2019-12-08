import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../Pages/SingIn';

import Cpagar from '../Pages/Cpagar';
import Creceber from '../Pages/Creceber';

import despesasxreceitas from '../Pages/despesasxreceitas';
import Metas from '../Pages/Metas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/dashboard" component={Metas} isPrivate />
      <Route path="/cpagar" component={Cpagar} isPrivate />
      <Route path="/creceber" component={Creceber} isPrivate />
      <Route path="/despxrece" component={despesasxreceitas} isPrivate />
      <Route path="/metas" component={Metas} isPrivate />
    </Switch>
  );
}
