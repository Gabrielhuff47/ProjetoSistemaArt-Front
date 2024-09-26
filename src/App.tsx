import React from 'react';
import Formulario from './components/Formulario';
import Login from './pages/Login';
import { Router } from 'react-router-dom';
import AppRouter from './routes';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>

  );
}

export default App;
