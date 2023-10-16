"use client"
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleBlogData } from "@/redux/slice/blogSlice";

function Blogs({ params }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.blogs.singleBlog;
  });
  const isLoading = useSelector((state) => {
    return state.blogs.isLoading;
  });

  useEffect(() => {
    dispatch(fetchSingleBlogData({ params }))
  }, []);
  console.log(userData);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center' }} className="mt-4">Blog details page: </h1>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {isLoading ? <div className="loadingTxt"> Loading... </div> :
            <div className="col-6 bolg-items">
              <h4 style={{ marginTop: '20px' }}><span>User ID :</span>  {userData.id}</h4>
              <p> <span style={{ fontWeight: 'bold' }}>Title : </span> {userData.title}</p>
              <p> <span style={{ fontWeight: 'bold' }}> Body : </span>{userData.body}</p>
            </div>}

        </div>


      </div>
    </>
  )
}

export default Blogs;


