import logo from './logo.svg';
import './App.css';
import StudentLogin from './Components/Students/StudentLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/StudentLogin'element={<StudentLogin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
