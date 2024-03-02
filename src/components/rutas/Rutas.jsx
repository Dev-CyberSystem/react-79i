import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../page/home/Home';
import { Contenido } from '../../page/info/Contenido';
import { Page404 } from '../../page/404/Page404';
import { Admin } from '../../page/admin/Admin';

export function Rutas () {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/link' element={<Contenido></Contenido>}></Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
      <Route path='*' element={<Page404></Page404>}></Route>
    </Routes>
    </>
  );
};