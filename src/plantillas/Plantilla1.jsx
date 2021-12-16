import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../componentes_b5/Navbar'

import "../estilos/Plantilla1.css"

export const Plantilla1 = () => {
    return (

        <div>

        <Navbar/>
            <div className='fondo d-flex justify-content-center align-self-center'>
            
            <Outlet/>
        
       
           
            
        </div>
        </div>
       
    )
}
