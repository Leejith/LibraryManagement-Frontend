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
import Footer from './Components/common/footer';
import Books from './Components/common/Books';
import BookMore from './Components/common/BookMore';
import ForgotPassword from './Components/common/ForgotPassword';
import BookDetails from './Components/common/BookDetails';
import Reset from './Components/common/Reset';
import Landing from './Components/common/Landing';
import StudentProfile from './Components/Students/StudentProfile';
import StaffProfile from './Components/Staff/StaffProfile';
import AddBook from './Components/Admin/AddBook';
import AdminHome from './Components/Admin/AdminHome';
import BookList from './Components/Admin/BookList';
import StaffList from './Components/Admin/StaffList';
import StudentList from './Components/Admin/StudentList';
import StaffHome from './Components/Staff/StaffHome';
import StaffNavbar from './Components/Staff/StaffNavbar';
import StaffBook from './Components/Staff/StaffBook';
import StaffBookDetails from './Components/Staff/StaffBookDetails';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={[<Landing/>,<Footer/>]}/>
        <Route path='/home'element={[<Navbar/>,<Home/>,<Books/>,<Footer/>]}/>
        <Route path='/homepage'element={<Home/>}/>
        <Route path='/navbar'element={<Navbar/>}/>
        <Route path='/footer'element={<Footer/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/StudentLogin'element={<StudentLogin/>}/>
        <Route path='/Studentreg'element={<StudentReg/>}/>
        <Route path='/Studentpf'element={<StudentProfile/>}/>
        <Route path='/book'element={<Books/>}/>
        <Route path='/books'element={[<Navbar/>,<BookMore/>,<Footer/>]}/>
        <Route path='/details/:isbn13'element={[<Navbar/>,<BookDetails/>,<Footer/>]}/>
        <Route path='/StaffLogin'element={<StaffLogin/>}/>
        <Route path='/StaffRegister'element={<StaffRegister/>}/>
        <Route path='/Staffpf'element={<StaffProfile/>}/>
        <Route path='/Staffhome'element={[<StaffNavbar/>,<StaffHome/>,]}/>
        <Route path='/Staffnavbar'element={<StaffNavbar/>}/>
        <Route path='/Staffbook'element={[<StaffNavbar/>,<StaffBook/>,<Footer/>]}/>
        <Route path='/Staffbookdetails/id'element={[<StaffNavbar/>,<StaffBookDetails/>,<Footer/>]}/>
        <Route path='/Adminlogin'element={<AdminLogin/>}/>
        <Route path='/Adminhome'element={<AdminHome/>}/>
        <Route path='/Addbook'element={<AddBook/>}/>
        <Route path='/BookList'element={<BookList/>}/>
        <Route path='/StaffList'element={<StaffList/>}/>
        <Route path='/StudentList'element={<StudentList/>}/>
        <Route path='/forgot'element={<ForgotPassword/>}/>
        <Route path='/reset-password'element={<Reset/>}/>
        
        

       
        
       

      </Routes>
    </BrowserRouter>
  )
}

export default App;
