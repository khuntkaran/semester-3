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
                    <div class="card text-light shadow" style={{backgroundColor:"black",width: 18+"rem"}} onClick={()=>{navigate('/YourCar/'+fac.id)}}>
                        <div className="inner"><img src={fac.SuperCarImage} class="card-img-top " alt="..."/></div>
                        <div class="card-body text-center text-light">
                            <h5 class="card-title">{fac.SuperCarName}</h5>
                            <p class="card-text">more info....</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }) 
    return(
        <>
        <div className="container my-5 ">
            <div className="row align-center g-4 ">
                {formtedcar}
            </div>
        </div>
        </>
    )
}
export default Carall;