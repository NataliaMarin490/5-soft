import { Link    } from 'react-router-dom'
import React from 'react'



export  const Navbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Duracell TEAM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/Page4"><a className="nav-link active"  >Usuarios</a> </Link>
        </li>
        <li className="nav-item">
        <Link to="/Page1"><a className="nav-link active"  >Proyectos</a> </Link>
        </li>
        <li className="nav-item">
        <Link to="/Page2"><a className="nav-link active"  >Avances</a> </Link>
        </li>
        <li className="nav-item">
        <Link to="/Page3"><a className="nav-link active"  >Inscripciones</a> </Link>
        </li>
      </ul>
      <span className="navbar-text">
      <Link to="/Page0"><a className="nav-link active"  ><button type="button" className="btn btn-primary">Login</button></a> </Link>
      
      </span>
    </div>
  </div>
</nav>
</div>
    )
}
