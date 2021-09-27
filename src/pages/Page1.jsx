
import { Link } from 'react-router-dom';
import imagentest from "../media/imagentest.png"




function Page1() {

    return(

        <div>

        <Link to="index"><img src={imagentest} alt="" /></Link>

        
        

   
        </div>




    )
}

export default Page1;