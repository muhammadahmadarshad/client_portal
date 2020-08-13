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
                                  
                                    <Link to="/search_food" className="btn btn-block btn-danger mt-4 text-center stretched-link" >Search Food</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 mt-2">
                            <div className="card" >
                                <img src={`https://images.unsplash.com/flagged/photo-1558937311-d2193d5fcdcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80`} className="card-img-top" alt="..." />
                                <div className="card">
                                   
                                    <Link to="/personal_diet/1" className="btn btn-block btn-danger mt-4 text-center stretched-link" >Diet Plan</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 mt-2 ">
                            <div className="card" >
                                <img src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`} className="card-img-top" alt="..." />
                                <div className="card">
                                   
                                    <Link to="/nutritionists" className="btn btn-block btn-danger mt-4 text-center stretched-link" >Nutritionists</Link>
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