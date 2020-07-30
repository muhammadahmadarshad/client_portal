import React,{useState} from 'react'
import './Main.css'

import goals from '../images/setgoals.jpeg'

import { Link } from 'react-router-dom'
import {Carousel,CarouselControl,CarouselItem} from 'reactstrap'


const items = [
    {
      src: 'https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1522036664039-3c5756c2b459?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1563197059-9a5f2aa3eb5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
function Main() {

    const [activeIndex, setActiveIndex] = useState(0);
const [animating, setAnimating] = useState(false);

const next = () => {
  if (animating) return;
  const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  setActiveIndex(nextIndex);
}

const previous = () => {
  if (animating) return;
  const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  setActiveIndex(nextIndex);
}


const slides = items.map((item) => {
    return (
      <CarouselItem
        key={item.id}
        src={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
>   
        <img className="d-block w-100 set-height"  src={item.src} alt={item.altText} />
            
            <div className="carousel-caption">

            <div >
                        <h5 className="heading ">
                            Eat Healthy
                            <br />
                            <span>Live Better</span>
                            <br />
                            Eat Good
                            <br />
                            <span>Do Good</span>
                        </h5>
                        <p className="paragraph">" Its not about Perfect. Its about Effort, and when you bring that Efforts every single day, thats where transformation Happens. Thats how changes occurs "</p>
                        <p className="paragraph"><br />" Its not a Diet <br /> Its a Lifestyle Change "</p>
                        <div className=" carousel-button">
                        <Link to="/dashboard">
                            <button type="button" className="btn btn-warning button">Lets Get Started..</button>

                        </Link>

                      
                    </div>
                    </div>
      

            </div>

      </CarouselItem>
    );
  });


    return (
    <div >
    <Carousel 
    enableTouch={true}
      activeIndex={activeIndex}
      next={next}
      previous={previous}>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
            <hr />
            <div className="container">
                <h2>Being Fit keep you Healthy</h2>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card Box">
                            <div className="card-header">
                                Set Your Goals
                                </div>
                            <div className="card-body">
                                <img className="card-img" src={goals} alt="Card cap"></img>
                                <hr />
                                <p className="card-text">First consider what you want to achieve, and then commit to it. Set your goals right now.</p>
                                <a href="/" className="btn btn-info text-white btn-lg btn-block">Set Goals</a>
                            </div>
                        </div>
                    </div>{/*
                    <div className="col-sm-4">
                        <div className="card">
                            <div class="card-header">
                                Calculate your Calories
                                 </div>
                            <div className="card-body">
                                <img className="card-img" src={caloriecalculate} alt="Card  cap"></img>
                                <hr />
                                <p className="card-text">Use the calorie calculator to estimate the number of daily calories your body needs to maintain. </p>
                                <a href="/" className="btn btn-info text-white btn-lg btn-block">Calculate Calories</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="card Box">
                            <div class="card-header">
                                Calculate Your BMI
                                 </div>
                            <div className="card-body">
                                <img className="card-img" src={bmi} alt="Card cap"></img>
                                <hr />
                                <p className="card-text">BMI is a person's weight in kilograms (kg) divided by his or her height. Measure your BMI right now.</p>
                                <Link to="/bmi" className="btn btn-info text-white btn-lg btn-block">Calculate BMI</Link>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="card Box">
                            <div class="card-header">
                                Search Food Recipes
                                 </div>
                            <div className="card-body">
                                <img className="card-img" src={foodrecipe} alt="Card  cap"></img>
                                <hr />
                                <p className="card-text">Find and share everyday cooking inspiration on Allrecipes. Discover recipes, ingredients based on the food you love.</p>
                                <Link to="/food-recipes" className="btn btn-info text-white btn-lg btn-block">Search Recipes</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card Box">
                            <div class="card-header">
                                Organize Diet Plan
                                 </div>
                            <div className="card-body">
                                <img className="card-img" src={organizediet} alt="Card cap"></img>
                                <hr />
                                <p className="card-text">20% gym and 80% diet. Abs are made in kitchen not gym. Being Organizes is being in Control. Origanize your diet plan now.</p>
                                <a href="#" className="btn btn-info text-white btn-lg btn-block">Organize Plan</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card Box">
                            <div class="card-header">
                                Contact</div>
                            <div className="card-body">
                                <img className="card-img" src={nutritionist} alt="Card cap"></img>
                                <hr />
                                <p className="card-text"> Nutrition is essential for growth and development, health and well-being. Contact your Nutritionist Now.</p>
                                <a href="#" className="btn btn-info text-white btn-lg btn-block">Contact</a>
                            </div>
                        </div>
                    </div>*/}

                </div>
            </div>
            <br />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="h1">Recipes and Inspiration</h1>
                    <p className="para">Get nutritionist-approved recipes and motivational workout tips with myFintess pal. </p>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card" >
                                <img src={`https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`} className="card-img-top" alt="..." />
                                <div className="card">
                                    <p >Make-ahead breakfast under 300 calories</p>
                                    <a href="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/" className="text-danger stretched-link" >Click here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card" >
                                <img src={`https://image.shutterstock.com/image-vector/balance-scales-weighing-calories-we-260nw-1091996300.jpg`} class="card-img-top" alt="..." />
                                <div className="card">
                                    <p >What 1,200 Calories looks like.</p>
                                    <a href="https://blog.myfitnesspal.com/1200-calories-looks-like-infographic/" className="text-danger stretched-link">Click here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card" >
                                <img src={`https://askhealthnews.com/wp-content/uploads/2018/11/movemoresitless.jpg`} className="card-img-top" alt="..." />
                                <div className="card">
                                    <p >Essential guide to get moving</p>
                                    <a href="https://blog.myfitnesspal.com/essential-guide-to-movement-activity/" className="text-danger stretched-link">Click here</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>

    )
}

export default Main;