import React from 'react'
import im from "../../assets/imgs/avataaars.svg"
import sty from "../Home/Home.module.css"
export default function Home() {
  return (
    <>
    <div className={`${sty.bg} text-center m-auto text-light `}>
    <img src={im} alt="" className={`${sty.im}`}/>
    <h4 className=" text-uppercase mt-4 fw-bolder fs-1">start Framework</h4>
    <div className='line d-flex justify-content-center align-items-center'>
        <div className={`${sty.line} my-3`}></div>
        <i className="fa-solid fa-star mx-4"></i>
         <div className={`${sty.line}`}></div>
    </div>
    <p className='text-light pb-4'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
