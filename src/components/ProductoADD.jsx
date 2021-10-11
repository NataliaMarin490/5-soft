


function ProductoADD(props) {

  return (


    <div>
      

<body>


<div class="container1">
  

<img src={props.LaURL} alt=""  /> 

  
  <button class="btn" onClick={(e) => {
  }} >🛒 Agregar  <br/>
  💲<strong>{props.ElPRECIO}</strong> !! 🤑<br/> 
  🍕{props.ElNOMBRE}
   </button>

   
  
  
</div>

</body>

</div>




  );
}

export default ProductoADD;