import React from 'react';
import logo from './Assets/kkgoadi.png';
import { useState } from 'react';
import Questionnaire from './Questionnaire';

function Dashboard({ radioCount}) {
    

    return (
    <>
       <div className='home-side-bar'>
            <div className='logo'>
                <img className='logo-1' src={logo} alt='Logo'></img>
            </div>

            <div className='navigation-side-bar'>
                <a href='dashboard'>Dashboard</a>
                <br />
                <a href='questions'>Questionnaire</a>
                <br />
                <a href='/'>Create</a>
                <br />
            </div>
        </div>

        <div className='form-2'>
            <div className='header-text'>
                <h1>Dashboard</h1>
            </div>

            <div className="card">
                <div className="card-container">
                    <h4><b>Number of Questions</b></h4> 
                    <br />
                    <p></p> 
                </div>

                <br />

                <div className="card-container">
                    <h4><b>Agreements</b></h4> 
                    <br />
                    <p>{radioCount?.Agree || 0}</p> 
                </div>

                <br />

                <div className="card-container">
                    <h4><b>Disagreements</b></h4>
                    <br /> 
                    <p>{radioCount?.Disagree || 0}</p> 
                </div>

                <br />
            
                <div className="card-container">
                    <h4><b>Neutral</b></h4> 
                    <br />
                    <p>{radioCount?.Neutral || 0}</p> 
                </div>
            </div>

        </div>

       
    </>
  )
}

export default Dashboard
