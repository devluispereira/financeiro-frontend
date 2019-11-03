import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

import { singInSucess, singFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const respose = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = respose.data;

    if (!user.provider) {
      console.tron.error('Usuário não é um provider');
    }
    yield put(singInSucess(token, user));

    history.push('/dashboard');
  } catch (erro) {
    yield put(singFailure());
  }
}
export default all([takeLatest('@auth/SING_IN_REQUEST', singIn)]);
