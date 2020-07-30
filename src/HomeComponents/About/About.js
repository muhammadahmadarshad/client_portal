import React from 'react'
import './About.css'
function About() {
    return (
        <div>
            <div class="image-aboutus-banner" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="lg-text">About Us</h1>
                            <p class="image-aboutus-para">" Healthy Diet Makes Healthy Life "</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aboutus-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h1 class="strong">Who we are and<br />what we do</h1>
                            <p class="lead">This is the Health and Diet leading portal for<br />easy and quick access to healthy physique. </p>
                        </div>
                        <div class="col-md-8">
                            <p>Our main goal is to promote health and reduce the risk of developing chronic diseases by encouraging Everyone to consume healthful diets and to achieve and maintain healthy body weights.</p>
                            <p>WHY CHOOSE US?<br />
01: Quality
<br />
Our nutrition products are scientifically formulated using the best possible ingredients.
<br />
02: Safety
<br />
Specialized Nutritionist will be provided to insure healthy life of clients.
<br />
03: Experience
<br />
Our expert Nutritionists boasts over 5 years of experience in nutrition research and development.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border"> </div>

            <div class="container ">
                <div class="site-heading">
                    <h3>Our Team</h3>
                    <p>Best Specialized team provided</p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card" >
                            <img src={`data:image/jpeg;base64,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`} className="card-img-top" alt="..." />
                            <div className="card">
                                <p >Doctor Name</p>
                                <a href="/" className="text-danger stretched-link" >View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" >
                            <img src={`data:image/jpeg;base64,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`} className="card-img-top" alt="..." />
                            <div className="card">
                                <p >Doctor Name</p>
                                <a href="/" className="text-danger stretched-link" >View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" >
                            <img src={`data:image/jpeg;base64,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`} className="card-img-top" alt="..." />
                            <div className="card">
                                <p >Doctor Name</p>
                                <a href="/" className="text-danger stretched-link" >View Details</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <br/>
            <div class="border"> </div>


            <div class="footer">
                <div class="row Row">
                    <div class="col-md-4">
                        <h5>About Us </h5>
                        <p>The Healthy Food Access portal is a set of web based tools and data that serves as a resource for supporting communities in launching healthy food retail projects. Information is intended to help with the implementation of policies, programs, and projects to improve healthy food access for low-income communities.</p>
                    </div>
                    <div class="col-md-6 ">
                        <h5>Information </h5>
                        <ul>
                            <li><a href="/">Maintenance Tips</a></li>
                            <li><a href="/">Locations</a></li>
                            <li><a href="/">Testimonials</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Partners</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>


    )
}
export default About;