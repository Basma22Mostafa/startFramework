import React from 'react'
import style from "../Contact/Contact.module.css"
export default function Contact() {
  return (
    <>
    <div className={`${style.contact} bg-light pb-5`}>
          <h2 className={`${style.header} fs-1 text-uppercase fw-bolder text-center pt-5`}>Contact Component</h2>
                <div className='line d-flex justify-content-center align-items-center'>
                    <div className={`${style.line} my-3`}></div>
                    <i className="fa-solid fa-star mx-4"></i>
                    <div className={`${style.line}`}></div>
                 </div>
          <div className='container'>
            <form action="" className='text-center m-auto p-3 mt-5'>
              <input type="text" className='w-50 border-0 border-bottom  py-2'  placeholder='userName'/>
              <br />
              <input type="number" className='w-50 border-0 border-bottom  py-2 mt-4'  placeholder='userAge'/>
              <br />
              <input type="email" className='w-50 border-0 border-bottom  py-2 mt-4'  placeholder='userEmail'/>
              <br />
              <input type="password" className='w-50 border-0 border-bottom  py-2 mt-4'  placeholder='userPassword'/>
              <br />
              <div className='text-start'>
              <button className={`${style.button} mt-4 border-0 p-2 rounded-2 text-light`}>Send Message</button>
              </div>
              </form>
            </div>       
     </div>     
    </>
  )
}
