import React, { Fragment } from "react"
import "./styleFooter.css"
import { useNavigate } from 'react-router-dom';
const Footer = () => {

    const Navegate = useNavigate()
  return (

    <>
    <footer className="color-footer font-small blue pt-4 mt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <a href="https://web.rollingcodeschool.com/"><img src="https://web.rollingcodeschool.com/wp-content/uploads/2023/10/RollingCode-Logo-3.svg" alt="logo_rolling" /></a>
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
    
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Mas Informacion</h5>
                    <ul className="list-unstyled">
                        <li><a onClick={() => Navegate("/nosotros")}>Nosotros</a></li>
                        <li><a onClick={() => Navegate("/productos")}>Productos</a></li>
                        <li><a onClick={() => Navegate("*")}>Devoluciones</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer