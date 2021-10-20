import react, {useEffect,useState} from 'react'

function BarraDeBusqueda(props) {

  const [Busqueda,setBusqueda] = useState("");

  return (


<div>

<body>



<form>



  <input class="input2"  onChange ={(e)=>{setBusqueda(e.target.value);console.log(e.target.value)}} type="text" name="search" placeholder={props.search}/>
</form>

</body>



</div>




  );
}

export default BarraDeBusqueda;