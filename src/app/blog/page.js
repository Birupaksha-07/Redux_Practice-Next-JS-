"use client"
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { fetchBlogsData } from "@/redux/slice/blogSlice";

const Index = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state)=>{
    return state.blogs.blogs
  })
  const isLoading = useSelector((state)=>{
    return state.blogs.isLoading
  });

  useEffect(() => {
    dispatch(fetchBlogsData())
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="heading">This is Main Blog Page</h1>
      <div className="blogs-container" style={{ marginTop: "150px" }}>
        {
          isLoading? <div className="loadingTxt"> Loading... </div> : userData.map((elm) => (
            <div key={elm.id} className="blog-item">
              <Link href={`/blog/${elm.id}`} className="link">
                <div className="blog-item-p">
                  <p className="item-id">{elm.id}</p>
                  <p className="item-title">{elm.title}</p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Index;


