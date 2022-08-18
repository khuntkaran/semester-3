import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FacultyAdd=()=>{
    
    const params = useParams();
    const navigate=useNavigate();
    const initialState = {
        FacultyName: "",
        FacultyImage: "",
        Mobile: "",
        Email: ""
      };
    let [data,setdata]=useState(initialState);
    useEffect(() => {
        if(params.id !=null){
            fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/My/" + params.id,{
            method:"GET"
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setdata(res);
            });
        }
        else{
            setdata(initialState );
        }
      }, [params]);

    return(
        <>
        <button className="btn btn-primary ms-3" onClick= {()=>{navigate("/facultiesname")}}>Back</button>
        <table className="m-3 ">
            <tbody >
                <tr>
                    <td scope="row">Enter FacultyName</td>
                    <td>:</td>
                    <td><input value={data.FacultyName} onChange={(e)=>{setdata({...data,FacultyName:e.target.value})
                        }} type="text" placeholder="Faculty Name"/>
                    </td>
                </tr>
                <tr>
                    <td>Enter FacultyImage</td>
                    <td>:</td>
                    <td><input value={data.FacultyImage} onChange={(e)=>{setdata({...data,FacultyImage:e.target.value})
                        }} type="text" placeholder="Image address"/></td>
                </tr>
                <tr>
                    <td>Enter Mobile</td>
                    <td>:</td>
                    <td><input value={data.Mobile} onChange={(e)=>{setdata({...data,Mobile:e.target.value})
                        }}  type="text" placeholder="Mobile Number"/></td>
                </tr>
                <tr>
                    <td>Enter Email</td>
                    <td>:</td>
                    <td><input value={data.Email} onChange={(e)=>{setdata({...data,Email:e.target.value})
                        }} type="text" placeholder="Email Address"/></td>
                </tr>
                <tr>
                    <td colSpan={3} align="center"  >
                        
                        <button className="btn btn-success" onClick={()=>{
                            if(params.id != null){
                                fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/My/"+params.id,{
                                    method:"PUT",
                                    body:JSON.stringify(data),
                                    headers:{
                                        "Content-Type":"application/json"
                                    }
                                }).then(() => {
                                    return navigate("/facultiesname");
                                })
                            }
                            else{
                                fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/My/",{
                                    method:"POST",
                                    body:JSON.stringify(data),
                                    headers:{
                                        "Content-Type":"application/json"
                                    }
                                }).then(() => {
                                    return navigate("/facultiesname");
                                })
                            }
                        
                        }}>
                            {params.id != null && "Edit "}
                            {!(params.id != null) && "Add "}
                            Faculty
                        </button></td>

                </tr>
            </tbody>
        </table>
        </>
    );
}
export default FacultyAdd;