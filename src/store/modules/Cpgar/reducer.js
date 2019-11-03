const INITIAL_STATE = [];
export default function cpagar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MONTAR_COMPONENTE':
      return console.log('Action Montar componente OK');

    case 'ALTERAR_CONTA':
      return console.log('Aciton Altear Conta OK');

    default:
      return state;
  }
}
