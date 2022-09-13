import { useDispatch } from "react-redux"
import { AddNumber } from "./action/index";
export const Add=()=>{
    const dispatch = useDispatch();
    return(
        <>
           <button onClick={() => {dispatch(AddNumber());}}>+</button>
        </>
    )
}