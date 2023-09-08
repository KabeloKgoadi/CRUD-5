import React from 'react'
import logo from './Assets/kkgoadi.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdateQuestion() {
    const {id} = useParams();
    const data = JSON.parse(localStorage.getItem(id));
    const [question, setQuestion] = useState(data.question);
    const navigate= useNavigate();
    
    const handleUpdate =  (e) => {
        e.preventDefault();

         localStorage.setItem(id, 
            JSON.stringify({question: question}))

        navigate('/');
    }
  return (
    <div>
        
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

        <div className='form-display-Change'>
            <h1>Change Question</h1>

            <form onSubmit={handleUpdate}>
                <input type='text' className='text-area'
                 value={question}
                 onChange={(e) => setQuestion(e.target.value)} 
                >

                </input>
                <br />
                <button className='btnAdd'>Save</button>
            </form>
        </div>
      
    </div>
  )
}

export default UpdateQuestion
