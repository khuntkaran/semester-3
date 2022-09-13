import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import './App.css';
const Carall =()=>{
    const [car ,setCar]= useState([]);
    useEffect(()=>{
        fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/SuperCar",{
        method:"GET"
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setCar(res);
        })
    },[])
    const navigate = useNavigate();
    
    const formtedcar = car.map((fac)=>{
        return(
            <>  
                <div className="col-md-4">
                    <div class="card shadow-lg" style={{width: 18+"rem"}} onClick={()=>{navigate('/YourCar/'+fac.id)}}>
                        <img src={fac.SuperCarImage} class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Car : {fac.SuperCarName}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }) 
    return(
        <>
        <div className="container mt-5">
            <div className="row align-center g-4 ">
                {formtedcar}
            </div>
        </div>
        </>
    )
}
export default Carall;