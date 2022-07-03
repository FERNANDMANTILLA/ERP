import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Empresas } from '../Pages/Empresas';
import { NuevaEmpresa } from '../Pages/NuevaEmpresa';
import { CreateEmpresa } from '../Pages/CreateEmpresa';
import {Navigate} from 'react-router-dom';
import { Detalles } from '../Pages/Detalles';

export const Router = () => {
  return (
    <Routes>
    <Route path="/" element='WELCOME' />
    <Route path="/empresas" element={<Empresas/>} />
    <Route path="/nuevaempresa" element={<NuevaEmpresa/>} />
    <Route path="nuevaempresa/complete" element={<CreateEmpresa/>} />
    <Route path="/empresas/detalles" element={<Detalles/>} />

    </Routes>
  )
}
