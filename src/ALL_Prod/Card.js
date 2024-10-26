import React, { Fragment } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Cards() {
    return (
        <Fragment>

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        < div className="card">
                            <div className="card-body rounded">
                               <img src='img/insorence.jpeg' alt='insorence'/>
                                <a href="#" className="card-link">Insurance</a>
                                <div className='arrow'>
                              <FaLongArrowAltRight />
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        < div className="card">
                            <div className="card-body rounded">
                               <img src='img/insorence.jpeg' alt='insorence'/>
                                <a href="#" className="card-link">Insurance</a>
                              <div className='arrow '>
                              <FaLongArrowAltRight />
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        < div className="card">
                            <div className="card-body rounded">
                               <img src='img/insorence.jpeg' alt='insorence'/>
                                <a href="#" className="card-link">Insurance</a>
                                <div className='arrow'>
                              <FaLongArrowAltRight />
                              </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </Fragment>
    )
}

export default Cards