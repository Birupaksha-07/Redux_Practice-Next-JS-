
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'countSlice',
    initialState:0,
    reducers:{
        add:(state,action)=>{
                return state += 1
        },
        sub:(state,action)=>{
            if(state <= 0){
                return state = 0
            }else{
                return state -= 1
            }
        }
    }
});

export const {add, sub} = countSlice.actions;
export default countSlice.reducer;