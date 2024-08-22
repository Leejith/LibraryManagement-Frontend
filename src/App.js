import logo from './logo.svg';
import './App.css';
import StudentLogin from './Components/Students/StudentLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import StaffLogin from './Components/Staff/StaffLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/StudentLogin'element={<StudentLogin/>}/>
        <Route path='/StaffLogin'element={<StaffLogin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
