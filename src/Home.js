import React from 'react';
import './App.css';
import Header from '../src/HomeComponents/Header/Header';
import { Link } from 'react-router-dom';

function Home() {
    return ( <div className='text-center'>
        <Header/>
            <h1 className='text-center text-danger mt-5'  >Page Not Found
            
            <br/>

            
            </h1>
       
        </div>


    );
}

export default Home;