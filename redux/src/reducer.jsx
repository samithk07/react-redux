const Buy_dress='Buy_Dress';
 export const BuyDress=()=>{
    return{
        type:Buy_dress
    }
 }
 const initialState={
    numOfDress:100
 }
 const reducer=(state=initialState,action)=>{
    switch (action.type){
        case Buy_dress:
            return{
                ...state,
                numOfDress:state.numOfDress-1
            } 
            default:
                return state;
    }
 }
 export default reducer;