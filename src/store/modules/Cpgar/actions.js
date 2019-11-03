export function MontarComponente(data) {
  return {
    type: 'MONTAR_COMPONENTE',
    payload: data,
  };
}

export function alterarConta() {
  return {
    type: 'ALTERAR_CONTA',
  };
}
