import { Link } from 'react-router-dom';
import "../styles/Intro.css"





function Index() {
  return (
    <div>
        <span>Esta en pagina index</span><br/>
        <Link to="Page1"> pagina Numero 1 </Link>
        <Link to="Page2"> pagina Numero 2 </Link>
        <Link to="Page3"> pagina Numero 3 </Link>
        <Link to="Page4"> pagina Numero 4 </Link>
        <Link to="Page5"> pagina Numero 5 </Link>
        <Link to="Page6"> pagina Numero 6 </Link>


        <body class="body12">
    <nav class="navbar">
        <div class="logo">
            <a class="logo_text" href="#">
                <img src="https://i.imgur.com/vkxZ4UU.png" alt="AQUI LOGO"/>
            </a>
        </div>
        <ul class="menu">
            <li class="menu_item">
                <a href="" class="menu_link">Menu_1</a>
            </li>
            <li class="menu_item">
                <a href="" class="menu_link">Menu_2</a>
            </li>
            <li class="menu_item">
                <a href="" class="menu_link">Menu_3</a>
            </li>
            <li class="menu_item">
                <a href="" class="menu_link">Menu_4</a>
            </li>
        </ul>

        <div class="phone">
            <span class="phone_order">Pedidos al número</span>
            <span class="phone_number">888 999 4232</span>
        </div>

        <div class="login">

        <Link class="login_link login_link--button" to="Page1"> Login    </Link>
        <Link class="login_link " to="Page2"> Signup    </Link>

{/*             <a class="login_link login_link--button" >Login</a>
            <a class="login_link" href="#">Signup</a> */}
        </div>

        <div class="btn_pizza">
            <i class="fas fa-pizza-slice"></i>
        </div>

        <div class="btn_login">
            <i class="fas fa-user"></i>
        </div>

        <div class="btn_menu">
            <i class="fa fa-bars"></i>
        </div>
    </nav>

    <ul class="pizza_list">
        <li class="pizza_item">
            <i class="fas fa-pizza-slice"></i>
            <a class="pizza_link" href="#">Pizza 1</a>
        </li>
        <li class="pizza_item">
           {/*  <!-- <img src="pizza_2.svg" alt="" width=""> --> */}
            <img src="img/pizza_2.svg" alt="" width="32"/>
            <a class="pizza_link" href="#">Pizza 2</a>
        </li>
        <li class="pizza_item">
            <i><img src="img/pizza_3.svg" alt="" width="32"/></i>
            <a class="pizza_link" href="#">Pizza 3</a>
        </li>
        <li class="pizza_item">
            <i><img src="img/pizza_5.svg" alt="" width="32"/></i>
            <a class="pizza_link" href="#">Pizza 4</a>
        </li>
        <li class="pizza_item">
            <i><img src="img/pizza_6.svg" alt="" width="40"/></i>
            <a class="pizza_link" href="#">Pizza 5</a>
        </li>
    </ul>




    {/* <!-- Seccion slider --> */}
    <section class="slider">
        {/* <!-- Slideshow container --> */}
        <div class="slideshow-container">
            {/* <!-- Full-width images with number and caption text --> */}
            <div class="mySlides fade">
                <img src="https://i.imgur.com/CbliHSZ.jpg"/>
                <div class="slide-text">Producto N° 1</div>
            </div>

            <div class="mySlides fade">
                <img src="https://i.imgur.com/Lqp4CAL.jpg"/>
                <div class="slide-text">Producto N° 2</div>
            </div>

            <div class="mySlides fade">
                <img src="https://i.imgur.com/gfG8c9L.jpg"/>
                <div class="slide-text">Producto N° 3</div>
            </div>

            <div class="mySlides fade">
                <img src="https://i.imgur.com/gfG8c9L.jpg"/>
                <div class="slide-text">Producto N° 3</div>
            </div>

            <div class="mySlides fade">
                <img src="https://i.imgur.com/gfG8c9L.jpg"/>
                <div class="slide-text">Producto N° 3</div>
            </div>

            <div class="mySlides fade">
                <img src="https://i.imgur.com/gfG8c9L.jpg"/>
                <div class="slide-text">Producto N° 3</div>
            </div>

            {/* <!-- Next and previous buttons --> */}
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br/>

        {/* <!-- The dots/lines --> */}
        {/* <div style="text-align:center;position: relative;bottom: 50px;"> */}   {/*  NOTA esta linea "div" esta abajo sin STYLE!!!!!! se remueve por conflicto */}
        <div>
          <img src="https://i.imgur.com/CbliHSZ.jpg" alt="" />      {/*< ------------imagen temporal mientras se corrije el slider */}
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
            <span class="dot" onclick="currentSlide(6)"></span>
        </div>
    </section>

    <section class="foodset">
        <a href="#" class="food_item food_item--bigger">
            <span class="foodset_title">Combo personal</span>
            <span class="foodset_desc">Gaseosa 400 Ml + papas</span>
        </a>
        <a href="#" class="food_item">
            <span class="foodset_title">Mini combo</span>
            <span class="foodset_desc">2 Gaseosas mini</span>
        </a>
        <a href="#" class="food_item">
            <span class="foodset_title">Pizza </span>
            <span class="foodset_desc">Vaso de cerveza</span>
        </a>
        <a href="#" class="food_item food_item--longer">
            <span class="foodset_title">Ordene online</span>
        </a>
    </section>


    <section class="pizza_day">
       {/*  <!-- <img src="pizza-day-wallpaper.jpg" alt="Bruno Marques Designer en Pixabay"> --> */}
        <div class="pizza_day-text">
            <span class="pizza_text-free">Envio gratis con</span>
            <span class="pizza_text-day">Pizza del día</span>
            <div class="pizza_day_number">
                <div class="pizza_price">$30.000 <span>c/u</span></div>
                <div class="pizza_option">
                    <span>Pizza hawaiana</span>
                    <span>Pizza champiñones</span>
                    <span>Pizza lasagna</span>
                </div>
            </div>
            <button class="btn_order">Ordene Ahora</button>
        </div>
    </section>


    <footer class="footer">
        <div class="social-icons">
            <a href="#" class="social-item"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-item"><i class="fab fa-facebook-square"></i></a>
            <a href="#" class="social-item"><i class="fab fa-instagram-square"></i></a>
            <a href="#" class="social-item"><i class="fab fa-tiktok"></i></a>
        </div>

        <div class="logo logo-footer">
            <a class="logo_text" href="#">
                <img src="img/logo.png" alt=""/>
            </a>
        </div>

        <div class="data">
            <span class="data_item">NeosPizza Restaurant</span>
            <span class="data_item">Dirección del restaurante</span>
            <span class="data_item">Telefono: 888 999 4232</span>
        </div>

        <span class="copyright">
            © 2021 5-Soft |
            Todos los derechos reservados.
        </span>
    </footer>

{/*     <script src="js/slider.js"></script>
    <script src="js/app.js"></script> */}












</body>








    </div>


     
  )
}

export default Index;