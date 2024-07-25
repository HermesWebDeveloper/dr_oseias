import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx'
import Clientes from './pages/Clientes.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Consultas from './pages/Consultas.jsx';
import Impressao from './pages/Impressao.jsx';
import Cliente from './pages/Cliente.jsx';

const UserContext = createContext();
let ID = useContext(UserContext);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='clientes' element={<Clientes />} />
        <Route path={`clientes/${ID}`} element={<Cliente />}/>
        <Route path='consultas' element={<Consultas />} />
        <Route path='impressao' element={<Impressao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
