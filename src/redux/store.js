
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import blogSlice from "./slice/blogSlice";
import countSlice from "./slice/countSlice";

const store = configureStore({

    reducer:{
        users : userSlice,
        blogs : blogSlice,
        count : countSlice,
    }
})

export default store;