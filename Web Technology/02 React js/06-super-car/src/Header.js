import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
const Header = () =>{
    //header change color
    const [color,setColor]= useState(false);
    const changeColor=()=>{
        if(window.scrollY>=520){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);

    return(
        <>
            <nav  className={color ? 'header-color navbar navbar-expand-lg p-0  fixed-top shadow-5-strong navbar-dark':'navbar navbar-expand-lg p-0  fixed-top shadow-5-strong navbar-dark'} >
                <div class="container">
                    <Link class="navbar-brand" to="">
                        <img src="favicon-32x32.png" alt="Logo" width="100%" height="60" class="d-inline-block align-text-top"/>
                    </Link>
                    <span style={{color:"#FF0000",fontFamily:"fantasy"}} className="my-auto h1">SUPER CAR</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li class="nav-item my-auto">
                            <Link style={{textDecoration:"none",color:"#FF0000",fontSize:20,fontFamily:"fantasy"}} className="me-3" to='./'>Home</Link>
                            </li>
                            <li class="nav-item my-auto">
                            <Link style={{textDecoration:"none",color:"	#FF0000",fontSize:20,fontFamily:"fantasy"}} className="me-3" to='./AllCar'>Get All Car</Link>
                            </li>
                            <li class="nav-item my-auto">
                            <Link style={{textDecoration:"none",color:"	#FF0000",fontSize:20,fontFamily:"fantasy"}}  className="me-3" to='./AddCar'>Add Car</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner ">
                <div class="carousel-item active inner">
                <img src="https://www.supercars.net/blog/wp-content/uploads/2020/07/bugatti-divo-2018-art-x6-1400x788.jpg" style={{height:35+'rem'}} class="d-block w-100 " alt="..."/>
                </div>
                <div class="carousel-item inner">
                <img src="https://www.supercars.net/blog/wp-content/uploads/2022/07/Bugatti-Chiron-Super-Sport-by-Doug-1421x799.jpg" style={{height:35+'rem'}} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item inner">
                <img src="https://www.supercars.net/blog/wp-content/uploads/2021/09/Performance-hybrid-electric-1421x748.jpg" style={{height:35+'rem'}} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            
        </>
    )
}

export default Header;