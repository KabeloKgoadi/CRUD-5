import React from 'react';
import { useState } from 'react';
import logo from './Assets/kkgoadi.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [question, setQuestion] = useState('');
    const data = Object.keys(localStorage);
    const navigate= useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let id = localStorage.length;
        let userId = id++;
        localStorage.setItem(userId, JSON.stringify({question: question}))
        navigate('/');
    };

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

        <div className='form-display'>
            <h1>Creating a Questionnaire</h1>

            <form onSubmit={handleSubmit}>
                <input type='text' className='text-area'
                 value={question}
                 onChange={(e) => setQuestion(e.target.value)} 
                >

                </input>
                <br />
                <button className='btnAdd'>Add</button>
            </form>
        </div>

        <div className='AddQuestion-title'>
            <h1>List of Questions</h1>
        </div>

        {data.map((value,id) => {
              const user = JSON.parse(localStorage.getItem(id))
              function handleDelete (id) {
                  localStorage.removeItem(id);
                  window.location.reload();
              }

            return(
                
                <div className='AddQuestion' key={id}>
                    <ul>
                        <div className='question-container'>
                            {/* <p>{user.question}</p> */}
                            <input 
                            type='text'
                            value={user.question}
                            
                            // onChange={(e) => handleUpdate(id)}
                            >
                            </input>
                            <Link to={`/update/${id}`}>
                                <i className='fa-solid fa-pencil'></i> 
                            </Link>
                            <i className="fa-solid fa-trash" onClick={() => handleDelete(id)}></i>
                        </div>
                        
                    </ul>
                </div>  
                )
            }
        )}

    </div>
  )
}

export default Create
