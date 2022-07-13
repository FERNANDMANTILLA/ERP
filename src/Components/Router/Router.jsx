import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Empresas } from '../Pages/Empresas';
import { NuevaEmpresa } from '../Pages/NuevaEmpresa';
import { CreateEmpresa } from '../Pages/CreateEmpresa';
import {Navigate} from 'react-router-dom';
import { Detalles } from '../Pages/Detalles';
import { Vendedores } from '../Pages/Vendedores';

export const Router = () => {
  return (
    <Routes>
    <Route path="/" element='WELCOME' />
    <Route path="/empresas" element={<Empresas/>} />
    <Route path="/nuevaempresa" element={<NuevaEmpresa/>} />
    <Route path="complete/:id" element={<CreateEmpresa/>} />
    <Route path="/empresas/detalles/:id" element={<Detalles/>} />
    <Route path="/vendedores" element={<Vendedores/>} />
    {/* <Route path="*" element={<Navigate to="/" />}></Route> */}

    </Routes>
  )
}
