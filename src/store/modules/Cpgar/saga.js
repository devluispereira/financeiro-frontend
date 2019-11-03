import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';

import { alterarConta, MontarComponente } from './actions';

export function* Montar() {
  try {
    const respose = yield call(api.get, 'despesas');

    const { data } = respose;
    yield put(MontarComponente(data));
  } catch (erro) {
    console.log(erro);
  }
}
export default all([takeLatest('MONTAR_COMPONENTE', Montar)]);
