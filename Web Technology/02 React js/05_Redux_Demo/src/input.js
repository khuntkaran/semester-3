import { useSelector } from 'react-redux';
export const Input=()=>{
    const mystate = useSelector((state5)=>state5.ChangeNumber.value);
    return(
        <>
            <input type={"Number"} disabled value={mystate} />
        </>
    )
}