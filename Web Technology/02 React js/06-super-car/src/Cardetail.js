import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

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
            <button className="btn btn-success" onClick={()=>{navigate("/AllCar")}}>Back</button>
            <table>
                <tr>
                    <td colSpan={3}><img src={Cardetail.SuperCarImage}/></td>
                </tr>
                <tr>
                    <td>Car-Name</td>
                    <td>:</td>
                    <td>{Cardetail.SuperCarName}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>:</td>
                    <td>{Cardetail.SuperCarPrice}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>:</td>
                    <td>{Cardetail.SuperCarDescription}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><button className="btn btn-primary" onClick={()=>{
                        navigate('/EditCar/'+params.id)
                    }}>EDIT</button></td>
                    <td><button className="btn btn-danger" onClick={()=>{
                            fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/SuperCar/"+params.id,{
                                method:"DELETE"
                            }).then(()=>{
                                navigate('/AllCar')
                            })
                    }}>DELETE</button></td>
                </tr>
            </table>
        </>
    )
}

export default Cardetail;