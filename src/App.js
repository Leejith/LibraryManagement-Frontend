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
import StudentReg from './Components/Students/StudentReg';
import AdminRegister from './Components/Admin/AdminRegister';
import Footer from './Components/common/Footer';
import Books from './Components/common/Books';
import StProf from './Components/Students/StProf';
import BookMore from './Components/common/BookMore';
import ForgotPassword from './Components/common/ForgotPassword';
import BookDetails from './Components/common/BookDetails';
import Otp from './Components/common/Otp';
import Reset from './Components/common/Reset';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nav'element={[<Navbar/>,<Home/>,<Books/>,<Footer/>]}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/navbar'element={<Navbar/>}/>
        <Route path='/StudentLogin'element={<StudentLogin/>}/>
        <Route path='/Studentreg'element={<StudentReg/>}/>
        <Route path='/books'element={<Books/>}/>
        <Route path='/book'element={<BookMore/>}/>
        <Route path='/details/:isbn13'element={<BookDetails/>}/>
        <Route path='/footer'element={<Footer/>}/>
        <Route path='/StaffLogin'element={<StaffLogin/>}/>
        <Route path='/StaffRegister'element={<StaffRegister/>}/>
        <Route path='/Adminlogin'element={<AdminLogin/>}/>
        <Route path='/Adminreg'element={<AdminRegister/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/forgot'element={<ForgotPassword/>}/>
        <Route path='/otp'element={<Otp/>}/>
        <Route path='/reset-password'element={<Reset/>}/>
        <Route path='/stprof'element={<StProf/>}/>

       
        
       

      </Routes>
    </BrowserRouter>
  )
}

export default App;
