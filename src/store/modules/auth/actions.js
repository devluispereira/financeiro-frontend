export function singInRequest(email, password) {
  return {
    type: '@auth/SING_IN_REQUEST',
    payload: { email, password },
  };
}

export function singInSucess(token, user) {
  return {
    type: '@auth/SING_IN_SUCESS',
    payload: { token, user },
  };
}

export function singFailure() {
  return {
    type: '@auth/SING_FAILURE',
  };
}
