import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const navigate= useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            navigate('../../');
        }).catch((e)=>{
            console.log(e);
            navigate('../../');
        })
    })

    return(
        <>
        </>
    )
}

export default Logout;