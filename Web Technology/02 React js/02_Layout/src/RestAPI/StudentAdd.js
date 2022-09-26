import {useState} from "react";
import { useNavigate } from "react-router-dom";
const StudentAdd = ()=>{
    const navigate=useNavigate();
    const initialState = {
        SID:0,
        SN:"Name",
        SA:18,
        SS:1
    }
    const [data, setData] = useState(initialState)
    return(
        <>
            <table>
                <tr>
                    <td>SID </td>
                    <td> : </td>
                    <td><input type="number" onChange={(e)=>{setData({...data,SID:e.target.value})}} /></td>
                </tr>
                <tr>
                    <td>Name </td>
                    <td> : </td>
                    <td><input type="text" onChange={(e)=>{setData({...data,SN:e.target.value})}} /></td>
                </tr>
                <tr>
                    <td>Age </td>
                    <td> : </td>
                    <td><input type="number" onChange={(e)=>{setData({...data,SA:e.target.value})}} /></td>
                </tr>
                <tr>
                    <td>Sem </td>
                    <td> : </td>
                    <td><input type="number" onChange={(e)=>{setData({...data,SS:e.target.value})}} /></td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <button onClick={()=>{
                            console.log(data)
                            fetch('http://localhost:3003/studentadd',{
                                method:"POST",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            }).then(()=>{
                               return navigate("/studentname");
                            }
                            )
                        }}>submit</button>
                    </td>
                </tr>
            </table>
          
        </>
    )
}

export default StudentAdd;