import React from 'react'
import style from "../Footer/Footer.module.css"
export default function Footer() {
  return (
    <>
    <div className={`${style.footer} ` } >
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='item text-center'>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='item text-center'>
                        <h3 >AROUND THE WEB</h3>
                        <ul className={`${style.links} list-unstyled text-light d-flex mt-4`}>
                            <li className={`${style.icon} mx-2` }><i className=" fa-brands fa-facebook text-light mt-2"></i></li>
                            <li className={`${style.icon} mx-2`}><i className="fa-brands fa-twitter mt-2"></i></li>
                            <li className={`${style.icon} mx-2`}><i className="fa-brands fa-linkedin mt-2"></i></li>
                            <li className={`${style.icon} mx-2`}><i className="fa-solid fa-globe mt-2"></i></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='item text-center'>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div className='bg-dark w-100 p-3'>
        <p className='text-center text-light'>Copyright © Your Website 2021</p>

    </div>
    </>
  )
}
