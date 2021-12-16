import React from 'react'


import { useQuery} from '@apollo/client';
import { obtenerUsuarios } from '../graphql/querys';



export  const Tarjetausers = () => {


  
    const {data,error,loading} = useQuery(obtenerUsuarios)
    
    if(data) {
      console.log(data)
    }

    
    return (
        <div>

{data && data.Usuarios.map((x) =>{return ( <div key={x._id}>


  <div class="card" >
  <img src="https://i.imgur.com/r5by8jB.png" class="card-img-top" alt="..." width="100" class="my-2"/>
  <div class="card-body">
    <h5 class="card-title">{x.nombre} {x.apellido}</h5>
    <p class="card-text">{x.correo}</p>
    <p class="card-text">{x.rol}</p>
    <p class="card-text">{x.estado}</p>
    <p class="card-text"><a href="#" class="btn btn-primary"> Editar 🖉 {x._id} </a>  <a href="#" class="btn btn-primary"> Eliminar 🗑️ {x._id} </a> </p>
    
    
    
  </div>
</div>
  
  
   </div>) })}



</div>
    )
}
