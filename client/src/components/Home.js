import React, { useState, useEffect } from "react";
import "./CSS/Home.css";
import Hamburger from "./othercomponents/Hamburger";
import Slider from "./othercomponents/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./othercomponents/Footer";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ImageAbout from "./BFS Home.png";

import Whatsapp from "./whatsApp.jpeg";
import Chevronup from "./chevronup.png";
import Testimonial from "./othercomponents/Testimonial";

import Logo from "./Navbar Logo.png";

import SearchBar from "./othercomponents/Searchbar";

import CoinAnimation from "./othercomponents/CoinAnimation";

//Images for services

import LoansIcon from "./Anime Img/loans.png";
import RegistrationIcon from "./Anime Img/registrations.png";
import InsuranceIcon from "./Anime Img/insurance.png";
import FilingIcon from "./Anime Img/filings.png";

//For EMI
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)


function Home() {

    const navigate = useNavigate();

    // For EMI calc

    const options = {}

    // for interest in graph
    const [interestForGraph, setInterestForGraph] = useState()

    // emi bro
    const [emiInput, setEmi] = useState()

    // For Principal
    const [principalInput, setprincipalInput] = useState(40000);

    function handleForPrincipal(event) {
        const value = event.target.value;
        setprincipalInput(value > 1000000000 ? 1000000000 : value); // limit the maximum value to 500000000
    }

    function handleSliderForPrincipal(event) {
        const value = event.target.value;
        setprincipalInput(value);
    }

    // for interest

    const [interestInput, setinterestInput] = useState(10);

    function handleForInterest(event) {
        const value = event.target.value;
        setinterestInput(value > 50 ? 50 : value); // limit the maximum value to 500000000
    }

    function handleSliderForInterest(event) {
        const value = event.target.value;
        setinterestInput(value);
    }

    //  For tenure 

    const [tenureInput, settenureInput] = useState(2);

    function handleForTenure(event) {
        const value = event.target.value;
        settenureInput(value > 30 ? 30 : value); // limit the maximum value to 500000000
    }

    function handleSliderForTenure(event) {
        const value = event.target.value;
        settenureInput(value);
    }

    const calcularteInterest = () => {
        setInterestForGraph((parseInt(principalInput) * parseInt(interestInput) * parseInt(tenureInput)) / 100)
    }

    const calculateEmi = () => {
        setTimeout(function () {
            let a = parseInt(principalInput) + parseInt(interestForGraph)
            let b = 12 * parseInt(tenureInput)

            setEmi(Math.trunc(a / b))
        }, 2000);

    }

    useEffect(() => {
        calcularteInterest();
        calculateEmi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [principalInput])

    useEffect(() => {
        calcularteInterest();
        calculateEmi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interestInput])

    useEffect(() => {
        calcularteInterest();
        calculateEmi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tenureInput])

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);


    // Rendering services
    const [loans, setLoans] = useState(true);
    const [insurances, setinsurances] = useState(true);
    const [businesses, setbusinesses] = useState(true);
    const [filings, setfilings] = useState(true);

    const ServicesLoans = () => {
        if (loans === false) {
            return (
                <>
                    <div className="featuresDivDivdivSubAfter">
                        <img src={LoansIcon} className="servicesIcons" alt=""></img><h5>Loans</h5>
                    </div>
                    <div className="featuresDivDivdivSub1After" >
                        <div>
                            <span><NavLink className="navServicesAfter" to="/services/homeloan" >Home Loan</NavLink></span>
                            <span><NavLink className="navServicesAfter" to="/services/personalloan" >Personal Loan</NavLink></span>
                            <span><NavLink className="navServicesAfter" to="/services/businessloan" >Business Loan</NavLink></span>
                            <span><NavLink className="navServicesAfter" to="/services/carloan" >Car Loan</NavLink></span>
                            <span><NavLink className="navServicesAfter" to="/services/educationloan" >Education Loan</NavLink></span>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="featuresDivDivdivSub">
                        <img src={LoansIcon} className="servicesIcons" alt=""></img><h5>Loans</h5>
                    </div>
                    <div className="featuresDivDivdivSub1" >
                        <div>
                            <span><NavLink className="navServices" to="/services/homeloan" >Home Loan</NavLink></span>
                            <span><NavLink className="navServices" to="/services/personalloan" >Personal Loan</NavLink></span>
                            <span><NavLink className="navServices" to="/services/businessloan" >Business Loan</NavLink></span>
                            <span><NavLink className="navServices" to="/services/carloan" >Car Loan</NavLink></span>
                            <span><NavLink className="navServices" to="/services/educationloan" >Education Loan</NavLink></span>
                        </div>
                    </div>
                </>
            )
        }
    }

    const settingServicesLoans = () => {
        if (loans === true) {
            setLoans(false)
        } else if (loans === false) {
            setLoans(true)
        }
    }

    const ServicesInsurance = () => {
        if (insurances === false) {
            return (<>
                <div className="featuresDivDivdivSubAfter">
                    <img src={InsuranceIcon} className="servicesIcons" alt=""></img><h5>Insurance</h5>
                </div>
                <div className="featuresDivDivdivSub1After" >
                    <div>
                        <span><NavLink className="navServices" to="/services/lifeinsurance" >Life Insurance</NavLink></span>
                        <span><NavLink className="navServices" to="/services/healthinsurance" >Health Insurance</NavLink></span>
                        <span><NavLink className="navServices" to="/services/vehicleinsurance" >Vehicle Insurance</NavLink></span>
                    </div>
                </div>
            </>)
        } else {
            return (
                <>
                    <div className="featuresDivDivdivSub">
                        <img src={InsuranceIcon} className="servicesIcons" alt=""></img><h5>Insurance</h5>
                    </div>
                    <div className="featuresDivDivdivSub1" >
                        <div>
                            <span><NavLink className="navServices" to="/services/lifeinsurance" >Life Insurance</NavLink></span>
                            <span><NavLink className="navServices" to="/services/healthinsurance" >Health Insurance</NavLink></span>
                            <span><NavLink className="navServices" to="/services/vehicleinsurance" >Vehicle Insurance</NavLink></span>
                        </div>
                    </div>
                </>
            )
        }
    }

    const settingServicesInsurance = () => {
        if (insurances === true) {
            setinsurances(false)
        } else if (insurances === false) {
            setinsurances(true)
        }
    }

    const ServicesBusiness = () => {
        if (businesses === false) {
            return (<>
                <div className="featuresDivDivdivSubAfter">
                    <img src={RegistrationIcon} className="servicesIcons" alt=""></img><h5>Registrations</h5>
                </div>
                <div className="featuresDivDivdivSub1After" >
                    <div>
                        <span><NavLink className="navServices" to="/services/labourlicense">Labour License</NavLink></span>
                        <span><NavLink className="navServices" to="/services/tradelicense" >Trade License</NavLink></span>
                        <span><NavLink className="navServices" to="/services/gst">GST Registration</NavLink></span>
                        <span><NavLink className="navServices" to="/services/foodlicense" >Food License</NavLink></span>
                        <span><NavLink className="navServices" to="/services/trademarkreg" >Trademark</NavLink></span>
                        <span><NavLink className="navServices" to="/services/msme">MSME</NavLink></span>
                    </div>
                </div>
            </>)
        } else {
            return (<>
                <div className="featuresDivDivdivSub">
                    <img src={RegistrationIcon} className="servicesIcons" alt=""></img><h5>Registrations</h5>
                </div>
                <div className="featuresDivDivdivSub1" >
                    <div>
                        <span><NavLink className="navServices" to="/services/labourlicense">Labour License</NavLink></span>
                        <span><NavLink className="navServices" to="/services/tradelicense" >Trade License</NavLink></span>
                        <span><NavLink className="navServices" to="/services/gst">GST Registration</NavLink></span>
                        <span><NavLink className="navServices" to="/services/foodlicense" >Food License</NavLink></span>
                        <span><NavLink className="navServices" to="/services/trademarkreg" >Trademark</NavLink></span>
                        <span><NavLink className="navServices" to="/services/msme">MSME</NavLink></span>
                    </div>
                </div>
            </>)
        }
    }

    const settingServicesbusinesses = () => {
        if (businesses === true) {
            setbusinesses(false)
        } else if (businesses === false) {
            setbusinesses(true)
        }
    }

    const ServicesFilings = () => {
        if (filings === false) {
            return (<>
                <div className="featuresDivDivdivSubAfter">
                    <img src={FilingIcon} className="servicesIcons" alt=""></img><h5>Filings</h5>
                </div>
                <div className="featuresDivDivdivSub1After" >
                    <div>
                        <span><NavLink className="navServices" to="/services/incometax" >Income Tax</NavLink></span>
                        <span><NavLink className="navServices" to="/services/accounting" >Accounting</NavLink></span>
                        <span><NavLink className="navServices" to="/services/gstfiling" >GST Filing</NavLink></span>
                    </div>
                </div>
            </>)
        } else {
            return (<>
                <div className="featuresDivDivdivSub">
                    <img src={FilingIcon} className="servicesIcons" alt=""></img><h5>Filings</h5>
                </div>
                <div className="featuresDivDivdivSub1" >
                    <div>
                        <span><NavLink className="navServices" to="/services/incometax" >Income Tax</NavLink></span>
                        <span><NavLink className="navServices" to="/services/accounting" >Accounting</NavLink></span>
                        <span><NavLink className="navServices" to="/services/gstfiling" >GST Filing</NavLink></span>
                    </div>
                </div>
            </>)
        }
    }

    const settingServicesfilings = () => {
        if (filings === true) {
            setfilings(false)
        } else if (filings === false) {
            setfilings(true)
        }
    }

    // Submitting contact form

    const [contactData, setContactDiv] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const setLoginVal = (e) => {
        const { name, value } = e.target;
        setContactDiv({ ...contactData, [name]: value });
    }

    const postLoginDetails = async (e) => {

        e.preventDefault();

        const { name, email, phone, message } = contactData;

        try {
            const res = await fetch("/contacthome", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, message
                })
            });

            const data = await res.json();

            if (res.status === 200) {
                console.log("Contact Submitted");
                alert("Form Submitted")
                window.location.reload(false);
            } else {
                console.log("Login Failed");
                if (data.error === "Invalid credentials") {
                    console.log(data.error)
                } else if (data.error === "Enter all the details") {
                    console.log(data.error)
                }
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>

            <div id="partOne" >

                <a href="https://wa.me/918142522522">
                    <img src={Whatsapp} alt="lol" className="whatsappBtn" />
                </a>
                <a href="#partOne">
                    <img src={Chevronup} alt="lol" className="upButton" />
                </a>

                {/* #1 */}
                <div className="partOneDivOne">
                    <i style={{ fontSize: "12px", marginRight: "10px", marginTop: "12px" }} className="fa fa-bell animate-flicker" aria-hidden="true"></i> <h3 className="notifyHeading animate-flicker" >"All important updates/notifications here!"</h3>
                </div>

                {/* #2 */}
                <div className="navBarHome" >

                    <div style={{ marginTop: "15px" }}>
                        {/* <i className="fa fa-bars hamburgerAbs"></i> */}
                        <Hamburger />
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <img src={Logo} alt="" className="homeLogo" />
                        <SearchBar />
                    </div>

                    <div className="iconDiv">
                    
                        <a href="#5">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </a>

                        <a href="/login">
                            <i className="fa-solid fa-bell"></i>
                        </a>

                        <a href="#emicalc">
                            <i className="fa-solid fa-calculator"></i>
                        </a>

                        <a href="/login">
                            <i className="fa-solid fa-gear"></i>
                        </a>

                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
                        <button className="loginBtn" onClick={() => navigate("/login")} ><b>Login</b> </button>
                    </div>

                </div>

                {/* 3 */}

                <div className="partOneThree" >
                    <div className="toggleDiv" >


                        <div className="dropdown">
                            <p className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Loans
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><NavLink className="dropdown-item" to="/services/homeloan" >Home Loan</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/personalloan" >Personal Loan</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/businessloan" >Business Loan</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/carloan" >Car Loan</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/educationloan" >Education Loan</NavLink></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <p className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Insurance
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><NavLink className="dropdown-item" to="/services/lifeinsurance" >Life Insurance</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/healthinsurance" >Health Insurance</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/vehicleinsurance" >Vehicle Insurance</NavLink></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <p className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Business Registration
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><NavLink className="dropdown-item" to="/services/labourlicense" >Labour License</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/tradelicense" >Trade License</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/gst" >GST Registration</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/foodlicense" >Food License {"(FSSAI)"} </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/trademarkreg" >Trademark Registration</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/msme" >MSME</NavLink></li>
                            </ul>
                        </div>


                        <div className="dropdown">
                            <p className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Filings
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><NavLink className="dropdown-item" to="/services/incometax" >Income Tax</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/accounting" >Accounting</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/gstfiling" >GST Filing</NavLink></li>
                            </ul>
                        </div>


                    </div>
                </div>

                {/* #4 */}

                <center>
                    <div className="partOneDivFour">

                        {/* Slider */}
                        <div data-aos="fade-right" className="sliderDiv" >
                            <Slider />
                        </div>

                        {/* Other */}
                        <div data-aos="fade-left" className="sliderDivBeside">

                            <div className="besideDivFirst" >
                                <img src={ImageAbout} alt="" />
                            </div>

                            <div className="besideDivSecond"  >
                                {/* <h6 style={{ marginTop: "5px" }} ><u>QUICK LINKS</u></h6> */}
                                <div className="quickLinks" >

                                    <div className="quickLinksSub" >
                                        <div>
                                            <a className="quickLinksSubNavlink" href="#5"> <i className="fa fa-duotone fa-briefcase"></i> Services</a>
                                        </div>

                                        <div>
                                            <NavLink className="quickLinksSubNavlink" to="/about"> <i className="fa fa-duotone fa-address-card"></i> About Us</NavLink>
                                        </div>
                                    </div>


                                    <div className="quickLinksSub" >
                                        <div>
                                            <a className="quickLinksSubNavlink" href="#contact"> <i className="fa fa-solid fa-headset"></i> Contact Us</a>
                                        </div>

                                        <div>
                                            <a className="quickLinksSubNavlink" href="#emicalc"> <i className="fa fa-duotone fa-calculator"></i> EMI Calculator</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </center>

                {/* #5 */}

                <div className="partOneDivFive" id="cursorDiv">
                    <center><h2 className="essenceOfBhandare" style={{ marginTop: "25px" }} >THE ESSENCE OF BHANDARE FINSERVE</h2></center>

                    {/* <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="whiteboxDiv">
                        <div className="whiteboxDivDiv fade-in-image" >Plan <i className="fa-solid fa-pen-to-square"></i></div>
                        <div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div>
                        <div className="whiteboxDivDiv fade-in-image" >Assist <i style={{ fontSize: "20px", fontWeight: "bolder" }} className="fa-sharp fa-solid fa-person-walking-with-cane"></i></div>
                        <div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div><div className="fade-in-image" >-</div>
                        <div className="whiteboxDivDiv fade-in-image" >Achieve <i className="fa fa-solid fa-bullseye-arrow"></i></div>
                    </div> */}

                </div>

                <div className="coinAnime">
                    <CoinAnimation />
                </div>

            </div>

            {/* Part 1 ends */}

            {/* Part 2 Starts baby */}

            <div id="5"></div>
            <div className="partTwo" >

                <div className="partTwoDivOne" >

                    <h1 className="ourSetOfServices" > OUR SET OF SERVICES </h1>

                    <div className="featuresDiv">
                        <div className="featuresDivDiv" >

                            <div onClick={settingServicesLoans} data-aos="fade-up"
                                className="featuresDivDivdiv">
                                <ServicesLoans />
                            </div>

                            <div onClick={settingServicesInsurance} data-aos="fade-up"
                                className="featuresDivDivdiv">
                                <ServicesInsurance />
                            </div>

                            <div data-aos="fade-up" onClick={settingServicesbusinesses}
                                className="featuresDivDivdiv">
                                <ServicesBusiness />
                            </div>

                            <div data-aos="fade-up" onClick={settingServicesfilings}
                                className="featuresDivDivdiv">
                                <ServicesFilings />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Part 2 Ends */}

            {/* Part 3  */}
            <div style={{ width: "100vw", height: "auto", display: "flex", alignItems: "center", justifyContent: "center" }} id="emicalc">
                {/* Loan Calc */}

                <div className="LoansCalc" onMouseEnter={calculateEmi()}  >
                    <h5 style={{ textAlign: "center", fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "23px", marginTop: "50px" }} >Know before you owe: calculate your EMI today!</h5>
                    <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", marginBottom: "50px", textAlign: "center", marginTop: "17px" }} > EMI Calculator</h1>

                    <div className="LoansCalcSub" >

                        <div className="LoansCalc1" >

                            <div className="loanCalc1Sub">

                                <span>Principal Amount</span>
                                <center>
                                    <div>
                                        <input
                                            type="number"
                                            id="principalInput"
                                            value={principalInput}
                                            min="0"
                                            max="1000000000"
                                            onChange={handleForPrincipal}
                                        />
                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                    </div>
                                    <input
                                        style={{ width: "80%", position: "relative", top: "10px" }}
                                        type="range"
                                        id="sliderValue"
                                        value={principalInput}
                                        min="100000"
                                        max="1000000000"
                                        step="1"
                                        onChange={handleSliderForPrincipal}
                                    />
                                </center>
                            </div>

                            <div className="loanCalc1Sub">

                                <span>Interest Rate</span>
                                <center>
                                    <div>
                                        <input
                                            type="number"
                                            id="principalInput"
                                            value={interestInput}
                                            min="1"
                                            max="50"
                                            onChange={handleForInterest}
                                        />
                                        <i className="fa-solid fa-percent"></i>
                                    </div>
                                    <input
                                        style={{ width: "80%", position: "relative", top: "10px" }}
                                        type="range"
                                        id="sliderValue"
                                        value={interestInput}
                                        min="1"
                                        max="50"
                                        step="1"
                                        onChange={handleSliderForInterest}
                                    />
                                </center>
                            </div>

                            <div className="loanCalc1Sub">
                                <span>Tenure</span>
                                <center>
                                    <div>
                                        <input
                                            type="number"
                                            id="principalInput"
                                            value={tenureInput}
                                            min="1"
                                            max="30"
                                            onChange={handleForTenure}
                                        />
                                        <i className="fa-solid fa-clock"></i>
                                    </div>
                                    <input
                                        style={{ width: "80%", position: "relative", top: "10px" }}
                                        type="range"
                                        id="sliderValue"
                                        value={tenureInput}
                                        min="1"
                                        max="30"
                                        step="1"
                                        onChange={handleSliderForTenure}
                                    />
                                </center>
                            </div>

                        </div>

                        <div className="LoansCalc2" >

                            <div style={{ borderBottom: "1px solid grey" }} >
                                <span>Principal</span>
                                <span>{principalInput}</span>
                            </div>

                            <div style={{ borderBottom: "1px solid grey" }} >
                                <span>Interest</span>
                                <span>{interestInput}</span>
                            </div>

                            <div style={{ borderBottom: "1px solid grey" }} >
                                <span>Time In Years</span>
                                <span>{tenureInput}</span>
                            </div>

                            <div>
                                <span>Premium</span>
                                <span>{emiInput}</span>
                            </div>

                        </div>

                        <div className="LoansCalc3" >

                            <h6 style={{ fontFamily: "Montserrat", fontSize: "25px", fontWeight: "bold" }} >Graphical representation</h6>

                            <Doughnut
                                style={{ maxWidth: "400px" }}
                                data={{
                                    labels: ['Interest', 'Principal'],
                                    datasets: [{
                                        data: [interestForGraph, principalInput],
                                        backgroundColor: ['#0251aa', '#ffc107'],
                                        borderColor: ['#0251aa', '#ffc107'],
                                    }]
                                }}
                                options={options}
                            ></Doughnut>

                        </div>
                    </div>
                </div>

            </div>

            {/* Part 3 ends  */}

            {/* Testismonial */}

            <Testimonial />

            {/* Testismonial Ends */}

            <div className="dummyGap"></div>

            {/* Part 4  */}

            <div id="contact" className="partFour">

                <center><h1 style={{ color: "black", fontFamily: "Montserrat, san-serif", fontSize: "55px", fontWeight: "900", padding: "10px", margin: "50px auto" }} >Contact Us</h1></center>

                <div className="contactUsDiv">

                    <div className="contactPartOneMain" >

                        {/* Contact details */}
                        <div className="contactPartOne">
                            {/* <h3>Get in touch</h3> */}

                            <div className="contactPartOneSub" >
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <p style={{ fontWeight: "bold", fontSize: "20px", color: "black !important" }} className="contactP" >Phone:</p>
                                    <p>+91 8142522522</p>
                                    <p>+91 8142622622</p>
                                </div>
                            </div>


                            <div className="contactPartOneSub" >
                                <i className="fa-solid fa-envelope"></i>
                                <div>
                                    <p style={{ fontWeight: "bold", fontSize: "20px", color: "black !important" }} className="contactP" >Email:</p>
                                    <p>info@bhandarefinserve.com</p>
                                </div>
                            </div>

                            <div className="contactPartOneSub" >
                                <i className="fa-solid fa-location-crosshairs"></i>
                                <div>
                                    <p style={{ fontWeight: "bold", fontSize: "20px", color: "black !important" }} className="contactP" >Location:</p>
                                    <p>307, 5th Floor, Liberty Plaza</p>
                                    <p>HimayatNagar, Hyderabad</p>
                                </div>
                            </div>

                        </div>

                        {/* Contact form */}

                        <div className="contactForm">
                            <h4>Pass your Query to us,</h4>
                            <form className="inputsDiv">

                                <div className="inputsDivOne" >
                                    <div className="inputsDivOneSub" >
                                        <p>Full Name:</p>
                                        <div>
                                            <i className="fa-solid fa-user"></i>
                                            <input required autoComplete="off" type="text" name="name" value={contactData.name} onChange={setLoginVal} />
                                        </div>
                                    </div>

                                    <div className="inputsDivOneSub" >
                                        <p>Email:</p>
                                        <div>
                                            <i className="fa-solid fa-envelope"></i>
                                            <input required autoComplete="off" type="email" name="email" value={contactData.email} onChange={setLoginVal} />
                                        </div>
                                    </div>

                                    <div className="inputsDivOneSub" >
                                        <p>Phone:</p>
                                        <div>
                                            <i className="fa-solid fa-phone"></i>
                                            <input required autoComplete="off" type="number" name="phone" value={contactData.phone} onChange={setLoginVal} />
                                        </div>
                                    </div>

                                    <div className="inputsDivOneSub inputsDivOneSubMsg" >
                                        <p>Message:</p>
                                        <div>
                                            <textarea cols="30" rows="10" required autoComplete="off" type="text" name="message" value={contactData.message} onChange={setLoginVal} />
                                        </div>
                                    </div>

                                    <button onClick={postLoginDetails} className="submitContact" type="submit">Submit</button>

                                </div>

                                <div className="inputsDivTwo" >
                                    <p>Message:</p>
                                    <textarea required autoComplete="off" type="text" name="message" value={contactData.message} onChange={setLoginVal} cols="30" rows="10"></textarea>
                                </div>

                            </form>


                        </div>


                    </div>


                    <div className="contactPartTwo">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.105953351718!2d78.47558591467089!3d17.406702188067047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997d7f599439%3A0xe1551435c37475ad!2sBHANDARE%20FINSERVE%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1680457799717!5m2!1sen!2sin" width="100%" style={{ border: "0", height: "60vh", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

            </div>

            {/* Part 4 ends  */}

            {/* Part 5 lol less */}

            <div style={{ width: "100vw", height: "40vh", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column" }} >

                <h2 style={{ fontFamily: "Montserrat, san-serif", textAlign: "center", width: "100%" }} >For any queries/ appointment</h2>
                <a style={{
                    width: "300px", height: "75px", padding: "10px 20px 10px 0px", color: "white", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "28px",
                    borderRadius: "10px", background: "#075E54"
                }} href="https://wa.me/918142522522">
                    <i style={{ width: "30%", height: "75px", border: "1px solid #075E54", borderRadius: "10px 0px 0px 10px", fontSize: "40px", background: "white", color: "#075E54", display: "grid", placeItems: "center" }} className="fa-brands fa-whatsapp"></i>
                    Whatsapp Us
                </a>

            </div>

            {/* Part 5 lol less ends */}

            {/* Part 6 starts */}

            <Footer />

            {/* Part 6 ends */}


        </>
    );
}

export default Home;