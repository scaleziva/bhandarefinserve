import './App.css';
import Home from "./components/Home";
import HomeEn from "./components/HomeEn";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes, Route } from 'react-router-dom';
import Services from './components/ServiceFile';
import About from './components/About';
import Chatbot from "./components/othercomponents/Chatbot";
import PrivacyPolicy from './components/Privacypolicy';
import Termsofuse from './components/Termsofuse';

// LOANS IMPORTING
import Homeloan from './components/loans/HomeLoans';
import Personalloan from "./components/loans/Personalloan";
import Businessloan from './components/loans/Businessloan';
import CarLoans from './components/loans/Carloans';
import EducationLoan from "./components/loans/EducationLoan";

//Insurance Importing
import LifeInsurance from './components/insurance/LifeInsurance';
import HealthInsurance from './components/insurance/HealthInsurance';
import VehicleInsurance from './components/insurance/VehicleInsurance';

//Business reg
import LabourLicense from "./components/businessReg/LabourLicense.js";
import TradeLicense from './components/businessReg/TradeLicense';
import GSTreg from './components/businessReg/GSTreg';
import FoodLicense from './components/businessReg/FoodLicense';
import TradeMark from './components/businessReg/TradeMark';
import MSME from "./components/businessReg/MSME";

//Importing filings
import Accounting from './components/filings/Accounting';
import GSTfilings from './components/filings/GSTfiling';
import IncomeTax from './components/filings/Incometax';

import CalculatorGPT from "./components/othercomponents/CalculatorGpt";

// Importing login / reg / client
import Login from "./components/othercomponents/Login.js"
import Signup from './components/othercomponents/SignUp';
import Logout from './components/othercomponents/Logout';

//client dashboard
import ClientLogin from "./components/client/Login";
import ClientHome from "./components/client/ClientHome.js";
import UserData from './components/client/UserData';
import Forms from './components/client/Forms';
import Notify from './components/client/Notify';

import Notification from './components/othercomponents/Notification';
import Settings from './components/othercomponents/Settings';

function App() {
  return (
    <>

      <Routes>

        {/* Basic Routing */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/en" element={<HomeEn />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/termsofuse" element={<Termsofuse />} />
        <Route exact path="/chatbot" element={<Chatbot />} />
        <Route exact path="/CalculatorGPT" element={<CalculatorGPT />} />

        {/* Routing for Loans */}
        <Route exact path="/services/homeloan" element={<Homeloan />} />
        <Route exact path="/services/personalloan" element={<Personalloan />} />
        <Route exact path="/services/businessloan" element={<Businessloan />} />
        <Route exact path="/services/carloan" element={<CarLoans />} />
        <Route exact path="/services/educationloan" element={<EducationLoan />} />

        {/* Routing for Insurance */}
        <Route exact path="/services/lifeinsurance" element={<LifeInsurance />} />
        <Route exact path="/services/healthinsurance" element={<HealthInsurance />} />
        <Route exact path="/services/vehicleinsurance" element={<VehicleInsurance />} />

        {/* Routing for Insurance */}
        <Route exact path="/services/labourlicense" element={<LabourLicense />} />
        <Route exact path="/services/tradelicense" element={<TradeLicense />} />
        <Route exact path="/services/gst" element={<GSTreg />} />
        <Route exact path="/services/foodlicense" element={<FoodLicense />} />
        <Route exact path="/services/trademarkreg" element={<TradeMark />} />
        <Route exact path="/services/msme" element={<MSME />} />

        {/* For filings */}
        <Route exact path="/services/accounting" element={<Accounting />} />
        <Route exact path="/services/gstfiling" element={<GSTfilings />} />
        <Route exact path="/services/incometax" element={<IncomeTax />} />

        {/* Backend */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/en/settings" element={<Settings />} />
        <Route exact path="/en/notifications" element={<Notification />} />

        {/* Client Dashboard */}
        <Route exact path="/dashboard/hfbckakjdbckadfdv/login" element={<ClientLogin />} />
        <Route exact path="/dashboard/hfbckakjdbckadfdv/home" element={<ClientHome />} />
        <Route exact path="/dashboard/hfbckakjdbckadfdv/home/dashboard/hfbckakjdbckadfdv/userdata" element={<UserData />} />
        <Route exact path="/dashboard/hfbckakjdbckadfdv/home/dashboard/hfbckakjdbckadfdv/forms" element={<Forms />} />
        <Route exact path="/dashboard/hfbckakjdbckadfdv/home/dashboard/hfbckakjdbckadfdv/notify" element={<Notify />} />

        <Route path="*" element={<Home />} />

      </Routes>

    </>

  );
}

export default App;