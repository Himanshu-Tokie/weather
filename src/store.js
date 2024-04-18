import { combineReducers, createReducer, createSlice } from "@reduxjs/toolkit";
import { pokemonAPI } from "./rtk";
import { FETCH_DATA1, FETCH_DATA_SUCCESS } from "./action";

const initialState = {name:'himanshu'}

export const myReducer = createReducer(initialState,(builder)=>{
    builder.addCase(FETCH_DATA_SUCCESS,(state,action)=>{
        console.log(action.payload,18);
        return {...state,saga:action.payload};
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

const pokemonSlice = createSlice({
  name: 'pokemonApi',
  initialState,
  reducers: {
    fetchPokemon: (state, action) => {
      console.log(action, 100);
      return {...state,pokemon:action.payload}
    },
  },
});

// // Export the reducer and action creators
export const { fetchPokemon } = pokemonSlice.actions;
export const {reducerPokemon}=pokemonSlice.reducer

const rootReducer = combineReducers({
  myReducer, // assuming you have a reducer named myReducer
  pokemonApi: pokemonAPI.reducer, // assuming you have a reducer named pokemonReducer and want to store its state under 'pokemon' key
});

export default rootReducer;