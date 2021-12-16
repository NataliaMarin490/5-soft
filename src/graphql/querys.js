import { gql } from '@apollo/client';

const obtenerUsuarios =  gql`
query Usuarios {
  Usuarios {
    nombre
    apellido
    identificacion
    correo
    estado
    rol
    _id
  }
}
`







export {obtenerUsuarios }