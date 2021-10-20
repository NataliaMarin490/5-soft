import { Link } from 'react-router-dom';
import ProductoADD from '../components/ProductoADD';
import CajaVS from '../components/CajaVS';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import "../styles/CajaVS.css"
import "../styles/ProductoADD.css"
import "../styles/Rotate.css"
import "../styles/modulo_Ventas.css"
import react, { useEffect, useState } from "react"
import axios from "axios";

function Page4() {
  const fecha = Date()
  let dato = 0
  const [Inventario, setInventario] = useState([])
  const [Venta, setVenta] = useState(["inventario"])

  useEffect(() => {

    const options = { method: 'GET', url: 'https://floating-spire-36481.herokuapp.com/productos' };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setInventario(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [setVenta])

  const CreaVenta = async () => {

    const options = {
      method: 'POST',
      url: 'https://floating-spire-36481.herokuapp.com/ventas/nuevo',
      headers: { 'Content-Type': 'application/json' },
      data: {
        idVendedor: 5,
        descripcionVenta: Venta,
        valorVenta: dato,
        estadoVenta: 1
      }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  const actualizarBaseDatos = async () => {

    for (var i = 1; (Venta.length) > i; i++) {

      console.log("tamaño es ", Venta.length, Venta[i].idbase, Venta[i].enStock)
      const options = {
        method: 'PATCH',
        url: 'https://floating-spire-36481.herokuapp.com/productos/edita',
        headers: { 'Content-Type': 'application/json' },
        data: {
          id: Venta[i].idbase,
          inventarioProducto: Venta[i].enStock - i
        }
      };

      await axios.
        request(options).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });
    }
  }
  return (
    <div>

      <ul>
        <div className="navbar4">
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link1" href="Index">Página Principal</a>
          </li>
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link" href="Page3">Gestión de Roles</a>
          </li>
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link" href="Page5">Estado de Ventas</a>
          </li>
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link" href="Page6">Inventario</a>
          </li>
        </div>
      </ul>
      <div className="pagina" >
        <div className="div1">
          {Inventario.map((x, index) => {
            return (
              <tr key={index}>
                <td>  {x._id}
                  <div class="container1"> <img src="https://i.imgur.com/Ficfe51.png" alt="" />
                    <button class="btn" onClick={(e) => {
                      setVenta([...Venta, { productos: x.descripcionProducto, prexio: x.valorProducto, idbase: x._id, enStock: x.inventarioProducto }]);
                    }}
                    >🛒 Agregar  <br />
                      💲<strong>{x.valorProducto}</strong> !! 🤑<br />
                      🍕{x.descripcionProducto}
                    </button>
                  </div>  </td>
              </tr>
            );
          })}
        </div>
        <div className="rotated">
          <img src="https://i.imgur.com/0om2LLs.png" alt="" />
        </div>
        <div className="div2">
          <form className="FORMULARIO">
            <h2>PEDIDO N xxx</h2>
            <strong>IDENTIFICADOR</strong>: 1245789 <br />
            <strong>DESCRIPCION:</strong> Compra Fisica<br />
            <strong>FECHA VENTA:</strong> {fecha}  <br />
            <hr />
            <strong>NOMBRE CLIENTE:</strong> aqui debe ir usuario logeado<br />
            <strong>ID CLIENTE:</strong> el id del usuario en BD<br />
            <hr />
            <strong>🍕 LISTA DE PRODUCTOS</strong>
            <strong className="strong2">
              {Venta.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{x.productos}  </td>
                  </tr>
                );
              })}
              {Venta.reduce((a, b) => {
                { dato = dato + parseInt(b.prexio) }
                return (<div>
                  <strong>VALOR TOTAL 💰= </strong>
                  {dato}
                  <hr />
                </div>)
              })}
              <br /><br />
            </strong>
            <input className="submit1" type="button" value="Confirmar Compra💲" onClick={(e) => {
              CreaVenta(); actualizarBaseDatos();
            }} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page4;




