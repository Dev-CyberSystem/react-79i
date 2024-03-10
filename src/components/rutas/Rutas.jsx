import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../page/home/Home';
import { Contenido } from '../../page/info/Contenido';
import { Page404 } from '../../page/404/Page404';
import { Admin } from '../../page/admin/Admin';
import FormRegistro from '../registro/FormRegistro';

export function Rutas () {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/registro' element={<FormRegistro></FormRegistro>}></Route>
      {user && user.isAdmin ? (<Route path="/admin" element={<Admin />} />) : null }
      <Route path='/link' element={<Contenido></Contenido>}></Route>
      <Route path='*' element={<Page404></Page404>}></Route>
    </Routes>
    </>
  );
};