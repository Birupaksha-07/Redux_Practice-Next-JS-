import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchBlogsData = createAsyncThunk("Blogs", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
})
export const fetchSingleBlogData = createAsyncThunk("singleBlogData", async ({ params }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogs}`)
    const data = await response.json();
    return data;
})


const initialState = {
    isLoading: false,
    blogs: [],
    singleBlog: [],
}

const BlogSlice = createSlice({
    name: 'Blogs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlogsData.fulfilled, (state, action) => {
            state.isLoading = false,
                state.blogs = action.payload
            console.log("Blogs Data --", state.blogs);
        }),
            builder.addCase(fetchBlogsData.pending, (state, action) => {
                state.isLoading = true
                console.log("pending state....");
            }),
            builder.addCase(fetchBlogsData.rejected, (error) => {
                state.isLoading = false,
                    console.log("rejected data --", error);
            }),

            // for single blog data
            builder.addCase(fetchSingleBlogData.fulfilled, (state, action) => {
                state.isLoading = false,
                state.singleBlog = action.payload
            }),
            builder.addCase(fetchSingleBlogData.pending, (state, action) => {
                state.isLoading = true
            })

    }

})

export default BlogSlice.reducer;