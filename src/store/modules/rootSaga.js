import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './User/saga';

export default function* rootSaga() {
  return yield all([auth, user]);
}
