import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import StudentLogin from './Components/Students/StudentLogin';
import StaffLogin from './Components/Staff/StaffLogin';
import StaffRegister from './Components/Staff/StaffRegister';
import Navbar from './Components/common/Navbar';
import AdminLogin from './Components/Admin/AdminLogin';
import Login from './Components/common/Login';
import Home from './Components/common/Home';
import StudentRegister from './Components/Students/StudentReg';
import StudentReg from './Components/Students/StudentReg';
import AdminRegister from './Components/Admin/AdminRegister';
import Footer from './Components/common/Footer';
import Books from './Components/common/Books';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nav'element={[<Navbar/>,<Home/>,<Books/>,<Footer/>]}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/StudentLogin'element={<StudentLogin/>}/>
        <Route path='/books'element={<Books/>}/>
        <Route path='/footer'element={<Footer/>}/>
        <Route path='/StaffLogin'element={<StaffLogin/>}/>
        <Route path='/StaffRegister'element={<StaffRegister/>}/>
        <Route path='/Adminlogin'element={<AdminLogin/>}/>
        <Route path='/Adminreg'element={<AdminRegister/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/StudentReg'element={<StudentReg/>}/>
       
        
       

      </Routes>
    </BrowserRouter>
  )
}

export default App;
