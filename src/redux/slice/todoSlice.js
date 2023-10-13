import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name:'TodoList',
    initialState:[],
    reducers:{
        addTodoList:(state, action)=>{
            state.push(action.payload);
        }
    }
});

export const{addTodoList} = TodoSlice.actions;
export default TodoSlice.reducer;