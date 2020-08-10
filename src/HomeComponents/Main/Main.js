import React,{useState,useEffect} from 'react'
import './Main.css'

import { Link } from 'react-router-dom'
import {Carousel,CarouselControl,CarouselItem} from 'reactstrap'
import Footer from '../Footer/Footer'
import Loading from '../../Components/Loading/Loading'
import Axios from 'axios'
import Product from '../Shop/Products-Item'


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

const [data,setData]=useState([])
useEffect(()=>{

    Axios.get('http://localhost:5000/product/featured_products')
    .then(res=>{
      
        setData(res.data)
        
    })

},[])

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


const slides = items.map((item,index) => {


    return (
      <CarouselItem
        key={index}
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
                <h2 className='text-center'>Featured Products</h2>
                <br />
                <div className="row">
                   { data.map((p,i)=>{

                        return(
                            <div className='col-md-3 mt-2 col-12'>
                                <Product product={p} key={i}></Product>


                            </div>
                        )})}

                        
                    
                </div>
            </div>
            <br />
            <Footer/>

        </div>

    )
}

export default Main;