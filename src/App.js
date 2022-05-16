
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Footer from './Pages/Sheard/Footer/Footer';
import Navbar from './Pages/Sheard/Navbar/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyApponitment from './Pages/Dashboard/MyApponitment';
import MyReviws from './Pages/Dashboard/MyReviws';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyApponitment></MyApponitment>}></Route>
          <Route path='myreviws' element={<MyReviws></MyReviws>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
