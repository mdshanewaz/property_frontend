import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Register  from './Pages/Register/Register';
import { Login } from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Otp from './Pages/Otp/Otp';
import { Profile } from './Pages/Profile/Profile';

import { ResetpassEmail } from './Pages/ResetpassEmail/ResetpassEmail';
import { ResetpassOtp } from './Pages/ResetpassOtp/ResetpassOtp';
import { Resetpass } from './Pages/Resetpass/Resetpass';

import { GetAppartment } from './components/test';
// import './App.css';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Buy } from './Pages/Buy/Buy';
import { Rent } from './Pages/Rent/Rent';
import { Sell } from './Pages/Sell/Sell';
import { Developers } from './Pages/Developers/Developers';
import { Services } from './Pages/Services/Services';
import { Contact } from './Pages/Contact/Contact';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

import { NoMatchPage } from './Pages/NoMatchPage/NoMatchPage';

import { ProfileAssetesPage } from './Pages/ProfileAssetesPage/ProfileAssetesPage';
import { ProfileRentsPage } from './Pages/ProfileRentsPage/ProfileRentsPage';
import { ProfileInboxPage } from './Pages/ProfileInboxPage/ProfileInboxPage';
import { AddAssetPage } from './Pages/AddAssetPage/AddAssetPage';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PropertyDetails } from './Pages/PropertyDetails/PropertyDetails';

function App() {
  return (
    <>
      <Nav />
      <Routes>

        {/* <Route path='/test' element={< Featured />} /> */}

        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />
        <Route path='/buy' element={< Buy />} />
        <Route path='/rent' element={< Rent />} />
        <Route path='/sell' element={< Sell />} />
        <Route path='/developers' element={< Developers />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/services' element={< Services />} />

        <Route path='/register' element={<PublicRoute>< Register /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute>< Login /></PublicRoute>} />

        <Route path='/otp' element={< Otp />} />

        <Route path='/email' element={< ResetpassEmail />} />
        <Route path='/pass/otp' element={< ResetpassOtp />} />
        <Route path='/pass/reset' element={< Resetpass />} />

        <Route path='/profile' element={<PrivateRoute>< Profile /></PrivateRoute>} >
          <Route path='assets' element={<ProfileAssetesPage/>} />
          <Route path='rents' element={<ProfileRentsPage/>} />
          <Route path='inbox' element={<ProfileInboxPage/>} />
          <Route path='addasset' element={<AddAssetPage/>} />
          <Route path='logout' element={<Logout/>} />
        </Route>
        

        <Route path='/property/:id' element={<PrivateRoute><PropertyDetails /></PrivateRoute>} />

        <Route path='/flat' element={< GetAppartment />} />

        <Route path='*' element={< NoMatchPage />} />
      </Routes>
      <Footer />
    </>  
  );
}

export default App;
