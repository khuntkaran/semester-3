import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { GiFuelTank } from "react-icons/gi";
import {TbEngine} from "react-icons/tb";
import {GiCarDoor} from 'react-icons/gi';
import {FaCarSide} from "react-icons/fa";
import {GiRaceCar}from "react-icons/gi";
import {BsCalendarDateFill}from "react-icons/bs";
import "./App.css"
const Cardetail=()=>{
    const params = useParams();
    const [Cardetail,setCardetail] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/SuperCar/"+params.id,{
            method:"GET"
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            setCardetail(res);
        })
    },[])
    console.log()
    return(
        <>
            
            <div className="container-fluid pb-2" style={{backgroundColor:"black"}}>
            <div className="container ">
                <h1 className="pt-5 text-center" style={{color:"red"}}>{Cardetail.SuperCarName}</h1>
                <div className="inner"> <img src={Cardetail.SuperCarImage} style={{size:50+'%',width:100+"%"}} /></div>
                <div className="row mt-5">
                    <div className="col-md-8 text-light">
                        <h3>Description</h3>
                        <p>{Cardetail.SuperCarDescription}</p>
                    </div>
                    <div className="col-md-4">
                    <table class="table table-light ">
                        <thead>
                            <tr>
                            <th scope="col" colSpan={2} className="h2 text-center ">Specification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><BsCalendarDateFill/> Year</th>
                            <td>{Cardetail.Year}</td>
                            </tr>
                            <tr>
                            <th scope="row"><GiRaceCar/> Body Type</th>
                            <td>{Cardetail.BodyType}</td>
                            </tr>
                            <tr>
                            <th scope="row"><FaCarSide/> Exterior Colour</th>
                            <td>{Cardetail.ExteriorColor}</td>
                            </tr>
                            <tr>
                            <th scope="row"><GiCarDoor/> Interior Colour</th>
                            <td>{Cardetail.InteriorColor}</td>
                            </tr>
                            <tr>
                            <th scope="row"><GiFuelTank/> Fule Type</th>
                            <td>{Cardetail.FuleType}</td>
                            </tr>
                            <tr>
                            <th scope="row"><TbEngine/> Engine</th>
                            <td>{Cardetail.Engine}</td>
                            </tr>
                            <tr>
                            <th scope="row" colSpan={2} className="h3 text-center">{Cardetail.SuperCarPrice}</th>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col"><button className="btn btn-outline-success fs-5" onClick={()=>{navigate("/AllCar")}}>Back</button>
                    </div>
                    <div className="col"><button className="btn btn-outline-primary fs-5" onClick={()=>{
                            navigate('/EditCar/'+params.id)
                        }}>EDIT</button>
                    </div>
                    <div className="col"><button className="btn btn-outline-danger  fs-5" onClick={()=>{
                                fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/SuperCar/"+params.id,{
                                    method:"DELETE"
                                }).then(()=>{
                                    navigate('/AllCar')
                                })
                        }}>DELETE</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cardetail;