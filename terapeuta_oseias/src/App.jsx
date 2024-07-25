import React, { createContext, useContext, useState } from 'react'

import Home from './pages/Home.jsx'
import Clientes from './pages/Clientes.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Consultas from './pages/Consultas.jsx';
import Impressao from './pages/Impressao.jsx';
import Cliente from './pages/Cliente.jsx';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='clientes' element={<Clientes />} />
            <Route path='clientes/:id' element={<Cliente />} />
            <Route path='consultas' element={<Consultas />} />
            <Route path='impressao' element={<Impressao />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
