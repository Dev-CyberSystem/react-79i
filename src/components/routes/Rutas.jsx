import { Routes, Route } from 'react-router-dom';
import Home from '../../page/home/Home';
import Error404 from '../../page/error404/Error404';
import Productos from '../../components/productos/Productos';
import LoginPage from '../../page/login/LoginPage';
import SignUpPage from '../../page/signUp/SignUpPage';



// Routes: agrupa todas las rutas. Ponemos la cantidad de rutas necesarias para la app


const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            {/* element: view o page que deseo que se muestre cuando el path '/' exista*/}
            
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/signUp' element={<SignUpPage />}/>
            <Route path='*' element={<Error404 />}/>
            {/* <Route path='/productos/:id' element/> */}
        </Routes>
    
    </>
  )
}

export default Rutas