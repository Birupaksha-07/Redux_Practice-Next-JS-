"use client"
import React from 'react';
import Navbar from "@/components/Navbar";
import { useDispatch , useSelector } from 'react-redux';
import { add , sub} from '@/redux/slice/countSlice';
const Page = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>{
    return state.count;
  })

  return (
    <>
      <Navbar />
      <h1 className="heading">Hii this is about page</h1>
      <div className="countDivP">
        <div className="countDiv">
          <h2 onClick={()=>dispatch(add())}>+</h2>
          <h4>{data}</h4>
          <h2 onClick={()=>dispatch(sub())}>-</h2>
        </div>
      </div>


    </>
  )
}

export default Page;
