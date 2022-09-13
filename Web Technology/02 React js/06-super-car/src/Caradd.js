import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Caradd=()=>{
    const params = useParams();
    const navigate = useNavigate();
    const initialState ={
        SuperCarName:"",
        SuperCarImage:"",
        SuperCarPrice:"",
        SuperCarDescription:""
    }
    const [data,setData] = useState(initialState);
    useEffect(()=>{
        if(params.id>0){
            fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/SuperCar/"+params.id,{
                method:"GET"
            }).then((res)=>{
                return res.json();
            }).then((res)=>{
                setData(res);
            })
        }
        else{
            setData(initialState);
        }
    },[params])
    return(
        <>
            <table>
                <tr>
                    <td>Car Name </td>
                    <td> : </td>
                    <td><input value={data.SuperCarName} placeholder="Car Name" onChange={(e)=>{setData({...data,SuperCarName:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car Image </td>
                    <td> : </td>
                    <td><input value={data.SuperCarImage} placeholder="Car Image" onChange={(e)=>{setData({...data,SuperCarImage:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car Price </td>
                    <td> : </td>
                    <td><input value={data.SuperCarPrice} placeholder="Car Price" onChange={(e)=>{setData({...data,SuperCarPrice:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car Description </td>
                    <td> : </td>
                    <td><input value={data.SuperCarDescription} placeholder="Car Description" onChange={(e)=>{setData({...data,SuperCarDescription:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td colSpan={3} align="center"><button className="btn btn-success" onClick={()=>{
                        if(params.id!=null){
                            fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/SuperCar/"+params.id,{
                                method:"PUT",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            }).then(()=>{
                                navigate("/AllCar");
                            })
                        }
                        else{
                            fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/SuperCar",{
                                method:"POST",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            }).then(()=>{
                                navigate("/AllCar");
                            })
                        }
                    }}>
                        {params.id != null && "Edit "}
                        {!(params.id != null) && "Add "}
                        Car
                    </button></td>
                </tr>
            </table>

        </>
    )
}

export default Caradd;