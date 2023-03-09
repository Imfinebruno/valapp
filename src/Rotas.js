import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Historia } from './pages/Historia';
import { Habilidades } from './pages/Habilidades';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/historia' element={<Historia />}/>
          <Route path='/habilidades' element={<Habilidades />}/>
      </Routes>
    </BrowserRouter>
  )
}
