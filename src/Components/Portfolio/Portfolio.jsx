import React from 'react'
import style from "../Portfolio/Portfolio.module.css"
import port1 from "../../assets/imgs/portfolio/port1.png"
import port2 from "../../assets/imgs/portfolio/port2.png"
import port3 from "../../assets/imgs/portfolio/port3.png"


export default function Portfolio() {
  return (
    <>
    <div className={`${style.portfolio} bg-light pb-5`}>
      <h2 className={`${style.header} fs-1 text-uppercase fw-bolder text-center pt-5`}>Portfolio Component</h2>
            <div className='line d-flex justify-content-center align-items-center'>
                <div className={`${style.line} my-3`}></div>
                <i className="fa-solid fa-star mx-4"></i>
                <div className={`${style.line}`}></div>
             </div>   
            <div className='container mt-4'>   
            <div className='row gy-4'>
              <div className='col-lg-4 col-md-6'>
                <div className={`${style.card} card position-relative`}>
                   <img src={port1} alt="" className={`rounded-3`}/>
                   <div className={`${style.layer} rounded-3 position-absolute top-0 left-0 right-0 w-100 h-100`} >
                    <div className={`${style.overlay} text-center text-light fs-1`}>
                          <i className="fa-solid fa-plus"></i>
                    </div>
                </div>

                </div>
                
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className={`${style.card} card position-relative`}>
                   <img src={port2} alt="" className='rounded-3' />
                   <div className={`${style.layer} rounded-3 position-absolute top-0 left-0 right-0 w-100 h-100`} >
                    <div className={`${style.overlay} text-center text-light fs-1`}>
                          <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className={`${style.card} card position-relative`}>
                   <img src={port3} alt="" className='rounded-3' />
                   <div className={`${style.layer} rounded-3 position-absolute top-0 left-0 right-0 w-100 h-100`} >
                    <div className={`${style.overlay} text-center text-light fs-1`}>
                          <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className={`${style.card} card position-relative`}>
                   <img src={port1} alt="" className='rounded-3' />
                   <div className={`${style.layer} rounded-3 position-absolute top-0 left-0 right-0 w-100 h-100`} >
                    <div className={`${style.overlay} text-center text-light fs-1`}>
                          <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className={`${style.card} card position-relative`}>
                   <img src={port2} alt="" className='rounded-3' />
                   <div className={`${style.layer} rounded-3 position-absolute top-0 left-0 right-0 w-100 h-100`} >
                    <div className={`${style.overlay} text-center text-light fs-1`}>
                          <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className={`${style.card} card position-relative`}>
                   <img src={port3} alt=""  className='rounded-3'/>
                   <div className={`${style.layer} rounded-3 position-absolute top-0 left-0 right-0 w-100 h-100`} >
                    <div className={`${style.overlay} text-center text-light fs-1`}>
                          <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
                </div>
              </div>
            </div>
      </div>
    </div>
    
    </>
  )
}
