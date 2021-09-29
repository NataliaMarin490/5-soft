import { Link } from 'react-router-dom';


function Index() {
  return (
    <div>
        <span>Esta en pagina index</span><br/>
        <Link to="Page1"> pagina Numero 1 </Link><br/>
        <Link to="Page2"> pagina Numero 2 </Link><br/>
        <Link to="Page3"> pagina Numero 3 </Link><br/>
        <Link to="Page4"> pagina Numero 4 </Link><br/>
        <Link to="Page5"> pagina Numero 5 </Link><br/>
        <Link to="Page6"> pagina Numero 6 </Link><br/>
    </div>


     
  )
}

export default Index;