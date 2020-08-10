import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer className='footer' >

<div style={{background:'#FFC107',color:'black'}} className="jumbotron jumbotron-fluid">
                <div className="container hi">
                   
                    <div className="row">
                        <div className="col-sm-4 col-md-4 mt-2 ">
                            <div className="card" >
                                <img src={`https://images.unsplash.com/photo-1559100644-59dad675d48d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`} className="card-img-top" alt="..." />
                                <div className="card">
                                  
                                    <a href="/dashboard" className="btn btn-block btn-danger mt-4 text-center stretched-link" >Search Recipes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 mt-2">
                            <div className="card" >
                                <img src={`https://images.unsplash.com/flagged/photo-1558937311-d2193d5fcdcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80`} className="card-img-top" alt="..." />
                                <div className="card">
                                   
                                    <a href="/dashboard" className="btn btn-block btn-danger mt-4 text-center stretched-link" >Diet Plan</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 mt-2 ">
                            <div className="card" >
                                <img src={`https://askhealthnews.com/wp-content/uploads/2018/11/movemoresitless.jpg`} className="card-img-top" alt="..." />
                                <div className="card">
                                    <p >Essential guide to get moving</p>
                                    <a href="https://blog.myfitnesspal.com/essential-guide-to-movement-activity/" className="text-danger stretched-link">Diet Plan</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;