import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Questionnaire from './components/Questionnaire';
import Dashboard from './components/Dashboard';
import UpdateQuestion from './components/UpdateQuestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Create/>}/>
        <Route path = '/questions' element = {<Questionnaire />} />
        <Route path = '/dashboard' element = {<Dashboard />} />
        <Route path = '/update/:id' element = {<UpdateQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
