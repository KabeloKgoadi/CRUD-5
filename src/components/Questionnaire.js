import Dashboard from './Dashboard';
import React, { useState } from 'react';
import logo from './Assets/kkgoadi.png';
import { useNavigate } from 'react-router-dom';

function Questionnaire() {
    const data = Object.keys(localStorage);
    const navigate= useNavigate();
   
    const [radioCount, setRadioCount] = useState({
        Agree: 0,
        Neutral: 0,
        Disagree: 0,
    });

    const handleRadioChange = (e) => {
        const selectedOption = e.target.value;
        setRadioCount((prevCounts) => ({
            ...prevCounts,
            [selectedOption]: prevCounts[selectedOption] + 1,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

  return (
    <>
        <div className='home-side-bar'>
            <div className='logo'>
                <img className='logo-1' src={logo} alt='Logo'></img>
            </div>

            <div className='navigation-side-bar'>
                <a href='dashboard'>Dashboard</a>
                <br />
                <a href='question'>Questionnaire</a>
                <br />
                <a href='/'>Create</a>
                <br />
            </div>
        </div>    

            <div className='form-2'>

                <div className='header-text'>
                    <h1>Questionnaire</h1>
                </div>
                
                <form className='form-questions' onSubmit={handleSubmit}>
                    {data.map((id) => {
                        const user = JSON.parse(localStorage.getItem(id))
                        return(
                            <div className='message-container' key={id}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='message-inline'>
                                                <p>{user.question}</p>
                                                </div>
                                            </td>

                                            <td align='center'>
                                                <div className='message-radio'>
                                                <label htmlFor="btnRadionAgree">Agree</label> <br />
                                                <input type="radio" 
                                                id="btnRadionAgree" 
                                                // name='msgOption' 
                                                value="Agree" 
                                                onClick={handleRadioChange}
                                                />
                                                <br />
                                                </div>
                                            </td>

                                            <td align='center'> 
                                                <div className='message-radio'>
                                                <label htmlFor="btnRadioNeutral">Neutral</label> <br />
                                                <input type="radio" 
                                                id="btnRadioNeutral"
                                                // name="msgOption" 
                                                value="Neutral" 
                                                onClick={handleRadioChange}
                                                />
                                                </div>
                                            </td>

                                            <td align='center'>
                                                <div className='message-radio'>
                                                <label htmlFor="btnRadioDisagree">Disagree</label> <br />
                                                <input type="radio" 
                                                id="btnRadioDisagree" 
                                                // name="msgOption"  
                                                value="Disagree"
                                                onClick={handleRadioChange} 
                                                />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>
                            )
                        }
                    )}   
                    <button className='btnSubmit'>Submit</button>   
                </form>
                
                
            </div>
            <Dashboard radioCount={radioCount} />
                
    </>
  )
}

export default Questionnaire
