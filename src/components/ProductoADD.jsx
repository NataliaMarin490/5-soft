








function ProductoADD(props) {

  return (


    <div>
      

<body>


<div class="container">
  

<img src={props.LaURL} alt=""  /> 

  
  <button class="btn" >🛒 Agregar  <br/>
  💲<strong>{props.ElPRECIO}</strong> !! 🤑<br/> 
  🍕{props.ElNOMBRE}
   </button>

   
  
  
</div>

</body>

</div>




  );
}

export default ProductoADD;