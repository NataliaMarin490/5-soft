

import "../styles/modulo_Inventarios.css"


function BaseDatosPruebas(props) {

  const BaseFake =
    [
      { idProducto: 1, descripcionProducto: "Slim Pizza", valorProducto: 20000, inventarioProducto: 10 },
      { idProducto: 2, descripcionProducto: "Mini Pizza", valorProducto: 15000, inventarioProducto: 10 },
      { idProducto: 3, descripcionProducto: "Classic Pizza", valorProducto: 30000, inventarioProducto: 10 },
      { idProducto: 4, descripcionProducto: "Mega Pizza", valorProducto: 50000, inventarioProducto: 10 },
      { idProducto: 5, descripcionProducto: "Nerd Pizza", valorProducto: 60000, inventarioProducto: 10 },
    ]


    //BaseFake.push({ idProducto: 5, descripcionProducto: "Nerd Pizza", valorProducto: 60000, inventarioProducto: 10 })



    if(props.funcion == "actualizar"){
      
      const item = Number(props.id)
      const valor = Number(props.valor)
      const descripcion = props.descripcion

      function actualizar(props){
        BaseFake[item].descripcionProducto =descripcion
  
      }
      actualizar();

    }

    
    

    if(props.funcion == "buscar"){
      

      const descripcion = props.descripcion

      

      function buscar(props){
        const result = BaseFake.find(word => word.descripcionProducto == "Mini Pizza");
        const NewBaseFake=[]
        NewBaseFake.push(result)
        
        
  
      }
      buscar();

    }


    




  return (


    <div>

      {BaseFake.map(x => {
        return (
          <div>
            <table class="TablaInventario">
              <tbody>
                <tr>
                  <td>{x.idProducto}</td>
                  <td>{x.descripcionProducto}</td>
                  <td>{x.valorProducto}</td>
                  <td>{x.inventarioProducto}</td>
                  <td>{x.valorProducto * x.inventarioProducto}</td>
                </tr>
              </tbody>
            </table>

          </div>)

      })}




    </div>




  );
}

export default BaseDatosPruebas;