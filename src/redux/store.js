
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import todoSlice from "./slice/todoSlice";
import blogSlice from "./slice/blogSlice";

const store = configureStore({

    reducer:{
        users : userSlice,
        todos : todoSlice,
        blogs : blogSlice,
    }
})

export default store;