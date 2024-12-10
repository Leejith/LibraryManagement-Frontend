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
import Footer from './Components/common/Footer';
import Books from './Components/common/Books';
import StProf from './Components/Students/StProf';
import BookMore from './Components/common/BookMore';
import ForgotPassword from './Components/common/ForgotPassword';
import BookDetails from './Components/common/BookDetails';
import Reset from './Components/common/Reset';
import AdProf from './Components/Admin/AdProf';
import StafPr from './Components/Staff/StafPr';
import Landing from './Components/common/Landing';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home'element={[<Navbar/>,<Home/>,<Books/>,<Footer/>]}/>
        <Route path='/homepage'element={<Home/>}/>
        <Route path='/Land'element={<Landing/>}/>
        <Route path='/navbar'element={<Navbar/>}/>
        <Route path='/StudentLogin'element={<StudentLogin/>}/>
        <Route path='/Studentreg'element={<StudentReg/>}/>
        <Route path='/books'element={<Books/>}/>
        <Route path='/book'element={[<Navbar/>,<BookMore/>]}/>
        <Route path='/details'element={<BookDetails/>}/>
        <Route path='/footer'element={<Footer/>}/>
        <Route path='/StaffLogin'element={<StaffLogin/>}/>
        <Route path='/StaffRegister'element={<StaffRegister/>}/>
        <Route path='/Adminlogin'element={<AdminLogin/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/forgot'element={<ForgotPassword/>}/>
        <Route path='/reset-password'element={<Reset/>}/>
        <Route path='/stprof'element={<StProf/>}/>
        <Route path='/adprof'element={<AdProf/>}/>
        <Route path='/sttprof'element={<StafPr/>}/>

       
        
       

      </Routes>
    </BrowserRouter>
  )
}

export default App;
