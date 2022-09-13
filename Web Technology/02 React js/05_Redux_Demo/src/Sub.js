import { useDispatch } from "react-redux";
import { SubNumber } from "./action/index";

export const Sub=()=>{
    const dispatch = useDispatch();
    return(
        <>
            <button onClick={()=>dispatch(SubNumber())}> - </button>
        </>
    )
}