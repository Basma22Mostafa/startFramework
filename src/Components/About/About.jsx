import React from 'react'
import sty from "../About/About.module.css"
export default function About() {
  return (
    <div className={`${sty.bg} text-light `}>
      <h2 className='fs-1 text-uppercase fw-bolder text-center'>About Component</h2>
      <div className='line d-flex justify-content-center align-items-center'>
          <div className={`${sty.line} my-3`}></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className={`${sty.line}`}></div>
      </div>
      <div className='container '>
      <div className='row align-items-center justify-content-center'>
        <div className='col-md-5'>
          <div >
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

          </div>
        </div>
        <div className='col-md-5'>
          <div >
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
