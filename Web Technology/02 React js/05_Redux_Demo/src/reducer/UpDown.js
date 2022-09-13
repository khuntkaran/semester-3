const initialState ={value:0,kp:4};

const ChangeNumber = (state2=initialState,action) =>{
    switch(action.type){
        case 'increment':  return {...state2,value:state2.value+1};
        case 'decriment': return {...state2,value:state2.value-1};
        default:return state2;
    }
}
export default ChangeNumber;