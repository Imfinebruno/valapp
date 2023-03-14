import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Inicio } from './pages/Inicio';
import { Historia } from './pages/Historia';
import { Habilidades } from './pages/Habilidades';
import { Rotas } from './Rotas';


function App() {
  
  return (
      <Rotas />
  );
}

export default App;
