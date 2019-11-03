import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './config/ReactotronConfig';
import theme from './Pages/Dashboard/styles';
import history from './services/history';
import Routes from './routes';
import GlobalStyles from './styles/global';

import { store, peristor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={peristor}>
        <MuiThemeProvider muiTheme={theme}>
          <Router history={history}>
            <GlobalStyles />
            <Routes />
          </Router>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
