import NavbarServices from "../othercomponents/NavbarServices";
import { useEffect, useState } from "react";
import "../CSS/Loans.css";
import ContactForm from "../othercomponents/ContactFormDynamic";
import "../CSS/Testimonial.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Footer from "../othercomponents/Footer"

// Importing images
import Address from "./images/Eligi Images/Address.png";
import Age from "./images/Eligi Images/Age.png";
import Credit from "./images/Eligi Images/Credit Score.png";
import Bank from "./images/Eligi Images/Bank Account.png";
import Income from "./images/Eligi Images/Income.png";
import Residency from "./images/Eligi Images/Residency.png";

import IMG1 from "./images/images benefits/Affordable Rates.png";
import IMG2 from "./images/images benefits/Customer Support.png";
import IMG3 from "./images/images benefits/Expert Assistance.png";
import IMG4 from "./images/images benefits/Quick Documentation.png";
import IMG5 from "./images/images benefits/Secure Processing.png";
import IMG6 from "./images/images benefits/Trusted Banks.png";

import MainBg from "./images/Home Loans.jpg";

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


function Homeloan() {

    const partners = [
        {
            logo: Age,
            heading: "Age",
            text: "The age limit for applying loan is 23 years – 58 years"
        },
        {
            logo: Residency,
            heading: "Residency",
            text: "The applicant should be a legal Indian resident"
        },
        {
            logo: Address,
            heading: "Permanent Address",
            text: "There should be a permanent address with 6 months stability"
        },
        {
            logo: Bank,
            heading: "Bank Account",
            text: "An active bank account should be present"
        },
        {
            logo: Credit,
            heading: "Credit Score",
            text: "Maintain a good credit score of >700*"
        },
        {
            logo: Income,
            heading: "Income",
            text: "Applicant should be earning regular income of >= 30K/Month"
        },
    ];

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

    return (
        <>
            <div className="loansMainMost" onMouseEnter={calculateEmi()}  >
                <NavbarServices />

                <div className="dflexlol">
                    <div className="loansMain">

                        <div className="loansSubFirst" >
                            <h3>We provide the Key to your Dream Home</h3>
                            <h2>Apply for Home Loans at BFS & secure your future with our competitive loan rates</h2>
                        </div>

                        <ContactForm />
                    </div>
                </div>

            </div>

            {/* Part 2 */}

            <div className="loansPart2Main" >

                <div className="loansPart2">

                    <center style={{ width: "100%" }} >
                        {/* <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} ></h5> */}
                        <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto", marginTop: "40px" }} >Home Loans : New Home is just a Loan away</h1>
                    </center>

                    <div className="loansPart2Sub">
                        <div className="loansPart2Subimg" >
                            <img src={MainBg} className="mainBgImg" alt="" />
                        </div>
                        <div>
                            <p>Owning a home is a ubiquitous aspiration, and in India, it's a badge of honor and financial stability. Unfortunately, with skyrocketing real estate prices and demand surging for properties, it's challenging for middle-class folks to buy homes. Thankfully, Bhandare Finserve offers home loans across India from banks and NBFCs that pitch in the necessary finances to aid potential buyers in fulfilling their dream of purchasing a home or property. With different types of home loans available, such as new home loans, resale home loans, home extension loans, and plot loans, you can choose the most suitable one depending on your requirements.</p>
                            <p>Home Loans are secured loans where the property being purchased acts as surety for the loan, meaning that if the borrower fails to repay the complete loan, the lender may seize or resell the property. As a result, secured home loans have lower interest rates than personal loans, and lenders approve a loan amount depending on the value of the property placed as collateral.  </p>
                        </div>
                    </div>
                    <p className="loansPara" >Bhandare Finserve offers quick and convenient home loans of up to 75 lakhs* at reasonable interest rates from prominent home loan providers. Our housing loan services are designed to cater to your financial needs while providing manageable repayment options. </p>
                    <p className="loansPara" >Our experienced financial team ensures that the complete process, from applying for a suitable loan to the disbursal of the amount, happens smoothly and without any hassle.  Our network of lenders offers home loans at interest rates ranging from 6.75% to 12%, with the loan approval process taking just 2-3 days after the verification of submitted documents. We are delighted to help make your dream of owning a home a reality, so why not apply for a home loan today and have the money disbursed in no time!</p>

                </div>

                {/* Loan Calc */}

                <div className="LoansCalc" onMouseEnter={calculateEmi()}  >
                    <h5 style={{ textAlign: "center", fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "23px", marginTop: "50px" }} >Know before you owe: calculate your EMI today!</h5>
                    <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", marginBottom: "50px", textAlign: "center", marginTop: "17px" }} >Home Loans EMI Calculator</h1>

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
                                <span>Loan Tenure</span>
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
                                <span>EMI</span>
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

            {/*  #3 */}

            <div className="loansProcessMain" >

                <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Documents Required</h5>
                <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "20px 10px", textAlign: "center" }} >How to Apply for a Home Loan ?</h1>
                <p style={{ fontFamily: "Montserrat", fontWeight: "400", margin: "20px auto", padding: "10px", width: "90%", maxWidth: "1200px", textAlign: "center" }}  >Ahoy there! When it comes to applying for a home loan, different banks have different sets of rules and requirements. At Bhandare Finserve, we make the process as smooth as silk, but you'll still need to provide a fully filled-out application form, a recent photo, and a few other documents as per your lender's request. Here are some papers you'll likely need to verify your identity and financial status.</p>

                <div className="loanProcess">

                    <div>

                        <table className="loanProcesstable">

                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b> Identity Proof: </b> Pan Card / Aadhar Card / Voter ID Card / Driving License / Passport copy</td>
                            </tr>
                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b> Current Address Proof: </b>Driving license / Passport Copy / Latest Gas Bill / Latest Property Tax Bill / Bank Passbook / Ration Card</td>
                            </tr>
                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b>Age Proof: </b>  Pan Card / Aadhar Card / Voter ID Carf / Passport Copy / Any Other Statutory authority Certificate</td>
                            </tr>
                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b> Property Documents: </b>  Property documents & LINK documents with approved plan </td>
                            </tr>

                        </table>
                        {/* <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Identity Proof: </b> Pan Card / Aadhar Card / Voter ID Card / Driving License / Passport copy</p>
                        <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Current Address Proof: </b> Driving license / Passport Copy / Latest Gas Bill / Latest Property Tax Bill / Bank Passbook / Ration Card</p>
                        <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Age Proof: </b> Pan Card / Aadhar Card / Voter ID Carf / Passport Copy / Any Other Statutory authority Certificate</p>
                        <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Property Documents: </b> Property documents & LINK documents with approved plan</p> */}
                    </div>

                    <div>

                        <table className="loanProcesstable">

                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b> Bank Statement: </b> Updated Latest 3 Months Statement.</td>
                            </tr>
                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b> Company ID: </b> For Employment Proof.</td>
                            </tr>
                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b> Salary Slip: </b> Last 3 Months.</td>
                            </tr>
                            <tr>
                                <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                <td><b>  Form 16: </b> If Required.</td>
                            </tr>

                        </table>

                        {/* <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Bank Statement: </b> Updated Latest 3 Months Statement.</p> */}
                        {/* <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Company ID: </b>For Employment Proof.</p> */}
                        {/* <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Salary Slip: </b> Last 3 Months.</p> */}
                        {/* <p><b><i style={{ color: "#FFD700" , marginRight:"12px" }} className="fa-solid fa-certificate"></i> Form 16: </b>If Required.</p> */}
                    </div>

                </div>
            </div>

            {/* #4 */}

            <div className="eligibilityLoansMain" >
                <center className="centerEligi" >
                    <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >ELIGIBILITY CHECK</h5>
                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px 10px", textAlign: "center" }} >Dreaming of a new home? Let's see if you're eligible to make it a reality!</h2>
                    <p style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto", padding: "10px", width: "90%", maxWidth: "900px", textAlign: "center" }}  >We've rounded up the top eligibility criteria that our network of financial institutions typically look for when granting Home loans. Take a peek below to see if you meet the mark!</p>
                </center>

                <div className="eligibilityLoans">

                    <div className="partnerDIvMain">
                        <Slider
                            dots={false}
                            infinite={true}
                            speed={3000}
                            slidesToShow={4}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={3000}
                            cssEase={'linear'}
                            arrows={false}
                        >
                            {partners.map((partner, index) => (
                                <div className="eligibilityDiv" key={index}>
                                    <center>
                                        <img src={partner.logo} alt={`Partner ${index + 1}`} />
                                    </center>
                                    <h4>{partner.heading}</h4>
                                    <p>{partner.text}</p>
                                </div>
                            ))}
                        </Slider>

                    </div>

                </div>

            </div>

            {/* 5 */}

            <div className="eligibilityTable" >

                <center>
                    <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Let's Talk Money</h5>
                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Home Loans : Interest Rates & Charges</h2>
                </center>

                <div className="tableEligi">
                    <table className="table">
                        <thead>
                            <tr>
                                <td className="interestRatestd1" >Interest rates</td>
                                <td className="interestRatestd2" >6.75% to 12%</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="interestRatestd1" >Processing fee</td>
                                <td className="interestRatestd2" >It ranges from 1% - 3% and differs according to the banks</td>
                            </tr>
                            <tr>
                                <td className="interestRatestd1" >Loan Tenure</td>
                                <td className="interestRatestd2" >3 years – 20 years</td>
                            </tr>
                            <tr>
                                <td className="interestRatestd1" >Loan Amount</td>
                                <td className="interestRatestd2" >₹ 10 lakhs - ₹ 75 lakhs</td>
                            </tr>
                            <tr>
                                <td className="interestRatestd1" >Lock-in period</td>
                                <td className="interestRatestd2" >It differs from the lender to lender</td>
                            </tr>
                            <tr>
                                <td className="interestRatestd1" >Pre-closure charges</td>
                                <td className="interestRatestd2" >It differs from the lender to lender</td>
                            </tr>
                            <tr>
                                <td className="interestRatestd1" >Guarantor Required</td>
                                <td className="interestRatestd2" >It depends on the different conditions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {/* 6 */}

            <div className="benefitsLoans" >
                <center>
                    <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Benefits</h5>
                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder" }} >Dreaming of a new home? Let's see if you're eligible to make it a reality!</h2>
                </center>

                <div className="benefitsMain">
                    <div className="benefitsSub">
                        <div>
                            <img src={IMG1} alt="" />
                            <p>Affordable Rates</p>
                        </div>
                        <div>
                            <img src={IMG2} alt="" />
                            <p>Customer Support</p>
                        </div>
                        <div>
                            <img src={IMG3} alt="" />
                            <p>Expert Assistance</p>
                        </div>
                    </div>
                    <div className="benefitsSub">
                        <div>
                            <img src={IMG4} alt="" />
                            <p>Quick Documentation</p>
                        </div>
                        <div>
                            <img src={IMG5} alt="" />
                            <p>Secure Processing</p>
                        </div>
                        <div>
                            <img src={IMG6} alt="" />
                            <p>Trusted Banks</p>
                        </div>
                    </div>

                </div>

            </div >

            {/* 7 */}

            < div className="questionLoans" >
                <center>

                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Frequently Asked Questions</h2>
                </center>

                <div className="questionLoansSub">

                    <div id="accordion" style={{ width: "100%" }}>

                        <div id="accordion" style={{ width: "100%" }}>

                            <div className="card" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="card-header card-headerrr" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div className="rupeeSymbol">
                                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                            </div>
                                            Question goes here
                                        </button>
                                    </h5><i className="fa-solid fa-chevron-down"></i>
                                </div>

                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        answer goes here
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div className="card-header card-headerrr" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button style={{ width: "100% !important" }} className="btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <div className="rupeeSymbol">
                                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                            </div>
                                            Question goes here
                                        </button>
                                    </h5><i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        answer goes here
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div className="card-header card-headerrr" id="headingThree">
                                    <h5 className="mb-0">
                                        <button style={{ width: "100% !important" }} className="btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <div className="rupeeSymbol">
                                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                            </div>
                                            Question goes here
                                        </button>
                                    </h5><i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        answer goes here
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <div className="card-header card-headerrr" id="headingFour">
                                    <h5 className="mb-0">
                                        <button style={{ width: "100% !important" }} className="btn collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <div className="rupeeSymbol">
                                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                            </div>
                                            Question goes here
                                        </button>
                                    </h5><i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div className="card-body">
                                        answer goes here
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Homeloan;