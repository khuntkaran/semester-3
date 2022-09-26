import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css"
const Caradd=()=>{
    const params = useParams();
    const navigate = useNavigate();
    const initialState ={
        SuperCarName:"",
        SuperCarImage:"",
        SuperCarPrice:"",
        SuperCarDescription:"",
        Year: "",
        BodyType: "",
        ExteriorColor: "",
        InteriorColor: "",
        FuleType: "",
        Engine: ""
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
        <div className="container-fluid   py-3" style={{backgroundColor:"black",color:"red"}}>
            <div className="row">
                <div className="col my-auto">
                <table className="p-5 h4" align="center">
                <tr>
                    <td>Car Name </td>
                    <td> : </td>
                    <td><input value={data.SuperCarName} placeholder="Car Name" className="indata" onChange={(e)=>{setData({...data,SuperCarName:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car Image </td>
                    <td> : </td>
                    <td><input value={data.SuperCarImage} placeholder="Car Image" className="indata"  onChange={(e)=>{setData({...data,SuperCarImage:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car Price </td>
                    <td> : </td>
                    <td><input value={data.SuperCarPrice} placeholder="Car Price" className="indata"  onChange={(e)=>{setData({...data,SuperCarPrice:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car Description </td>
                    <td> : </td>
                    <td><textarea value={data.SuperCarDescription}  className="indata" placeholder="Car Description" rows="4" cols="23" onChange={(e)=>{setData({...data,SuperCarDescription:e.target.value})}}></textarea></td>
                </tr>
                <tr>
                    <td>Car Year </td>
                    <td> : </td>
                    <td><input value={data.Year} placeholder="Car Year"  className="indata" onChange={(e)=>{setData({...data,Year:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car BodyType </td>
                    <td> : </td>
                    <td><input value={data.BodyType} placeholder="Car BodyType" className="indata"  onChange={(e)=>{setData({...data,BodyType:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car ExteriorColor </td>
                    <td> : </td>
                    <td><input value={data.ExteriorColor} placeholder="Car ExteriorColor" className="indata"  onChange={(e)=>{setData({...data,ExteriorColor:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car InteriorColor </td>
                    <td> : </td>
                    <td><input value={data.InteriorColor} placeholder="Car InteriorColor" className="indata"  onChange={(e)=>{setData({...data,InteriorColor:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car FuleType </td>
                    <td> : </td>
                    <td><input value={data.FuleType} placeholder="Car FuleType" className="indata"  onChange={(e)=>{setData({...data,FuleType:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td>Car Engine </td>
                    <td> : </td>
                    <td><input value={data.Engine} placeholder="Car Engine"  className="indata"   onChange={(e)=>{setData({...data,Engine:e.target.value})}}/></td>
                </tr>
                <tr>
                    <td colSpan={3} align="center"><button className="btn mt-2 btn-outline-success" onClick={()=>{
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
                </div>
            </div>
           

        </div>
        </>
    )
}

export default Caradd;