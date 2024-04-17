import { createReducer } from "@reduxjs/toolkit"
import { FETCH_DATA, FETCH_DATA1, FETCH_DATA_SUCCESS } from "./action"

const initialState = []

const myReducer = createReducer(initialState,(builder)=>{
    builder.addCase(FETCH_DATA_SUCCESS,(state,action)=>{
        console.log(action.payload,18);
        return [action.payload];
    }).addCase(FETCH_DATA1,(state,action)=>{
        console.log(19);
    })
})

// const myReducer = (state=initialState,action)=>{
//     switch (action.type){
//         case FETCH_DATA:
//             const data = []
//             console.log(action,12);
//             return [...state,[action.payload]]
        
//         default:
//             return state
//     }
// }
export default myReducer