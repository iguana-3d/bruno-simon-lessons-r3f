import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <MainRoutes />
      </Router>
    </React.Fragment>
  );
};

export default App;
