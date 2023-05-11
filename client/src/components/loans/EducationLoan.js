// import Navbar from "../othercomponents/Navbar";
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
import Age from "./images/Eligi Images/Age.png";
import Bank from "./images/Eligi Images/Bank Account.png";
import Admission from "./images/Eligi Images/Admission.png";
import Nationality from "./images/Eligi Images/Nationality.png";

import IMG1 from "./images/images benefits/Affordable Rates.png";
import IMG2 from "./images/images benefits/Customer Support.png";
import IMG3 from "./images/images benefits/Expert Assistance.png";
import IMG4 from "./images/images benefits/Quick Documentation.png";
import IMG5 from "./images/images benefits/Secure Processing.png";
import IMG6 from "./images/images benefits/Trusted Banks.png";

import MainBg from "./images/Education Loans.jpg";

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


function Educationloan() {

    const partners = [
        {
            logo: Nationality,
            heading: "Nationality",
            text: "You should be an Indian National (Including NRI)"
        },
        {
            logo: Age,
            heading: "Age",
            text: "You should be 18 years old or above"
        },
        {
            logo: Admission,
            heading: "Admission",
            text: "You should have secured admission in the desired Institution/Course"
        },
        {
            logo: Bank,
            heading: "Bank",
            text: "to be changed"
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
                            <h3>Knowledge is Priceless</h3>
                            <h2>But our Loans Rates are Affordable</h2>
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
                        <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto", marginTop: "40px" }} >Education Loans : Don’t let Finances limit your Education</h1>
                    </center>

                    <div className="loansPart2Sub">
                        <div className="loansPart2Subimg" >
                            <img src={MainBg} className="mainBgImg" alt="" />
                        </div>
                        <div>
                            <p>Looking to pursue higher education overseas but worried about financing it? Worry no more, Bhandare Finserve has got you covered with its education loan services. We understand the importance of quality education and the financial burden it can pose on students and their families. That's why we offer 100% finance for abroad studies, making your dreams of studying at your dream university a reality.</p>
                            <p>We offer quick documentation services, making the loan application process hassle-free and straightforward. Our flexible repayment options ensure that you can choose a repayment plan that suits your financial situation and convenience.</p>
                            <p>At Bhandare Finserve, we understand that every student's financial situation is different. That's why we offer both secured and unsecured loan options, allowing students to choose an option that works best for them. Our unsecured loan option offers finance up to 75 lacs without the need for collateral, making it a great option for students who don't have any assets to pledge.</p>
                            <p>We also offer attractive interest rates, starting from 8.25% per annum, making our education loans a cost-effective option for students. Our processing fee starts from 1% onwards, making our loans one of the most affordable options in the market. With Bhandare Finserve, you don't have to worry about hidden charges or unexpected fees.</p>
                        </div>
                    </div>
                    <p className="loansPara" >So, if you're looking for a reliable and trustworthy education loan provider, look no further than Bhandare Finserve. Apply for an Education Loan Today and let us help you turn your dreams into reality.</p>

                </div>

                {/* Loan Calc */}

                <div className="LoansCalc" onMouseEnter={calculateEmi()}  >
                    <h5 style={{textAlign: "center", fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "23px", marginTop: "50px" }} >Know before you owe: calculate your EMI today!</h5>
                    <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", marginBottom: "50px", textAlign: "center", marginTop: "17px" }} >Education Loans EMI Calculator</h1>

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
                <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "20px 10px", textAlign: "center" }} >How to Apply for an Education Loan ?</h1>
                <p style={{ fontFamily: "Montserrat", fontWeight: "400", margin: "20px auto", padding: "10px", width: "90%", maxWidth: "1200px", textAlign: "center" }}  > Ahoy there! When it comes to applying for a Education loan, different banks have different sets of rules and requirements. At Bhandare Finserve, we make the process as smooth as silk, but you'll still need to provide a fully filled-out application form, a recent photo, and a few other documents as per your lender's request. Here are some papers you'll likely need to verify your identity and financial status.</p>

                <div className="loansProcessEdu">

                    {/* <h3>Student Application</h3>

                    <ul className="loansProcessEduul" >
                        <li>Proof of Identity (Any one)</li>
                        <li>Proof of Residence/ Address (Any one): Passport mandatory in case of Studies Abroad</li>
                        <li>Academic Records</li>
                        <li>10th Result & 12th Result, Graduation Result- Semester-wise (if applicable)</li>
                        <li>Entrance Exam Result through which admission is being taken (e.g. CAT, CMAT, JEE, NEET, CET, GMAT, GRE, TOEFL, etc)</li>
                        <li>Proof of admission: Offer Letter or Admission Letter from the Institution. Conditional admission letter may be considered in case of studies abroad.</li>
                        <li>Statement of cost of study/ Schedule of expenses</li>
                        <li>College / Course prospectus (if available)</li>
                        <li>2 passport-size photographs</li>
                        <li>A/C statement for last 1 year in case of any previous loan from other Banks/Lenders</li>
                    </ul> */}

                    <div className="loanProcess">

                        <div>

                            <table className="loanProcesstable">

                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td><b> Proof of Identity: </b> Pan Card / Aadhar Card / Voter ID Card / Driving License / Passport copy</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td><b> Proof of Residence: </b>Driving license / Passport Copy / Latest Gas Bill / Latest Property Tax Bill / Bank Passbook / Ration Card</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td><b>Academic Records: </b> 10th Result & 12th Result, Graduation Result- Semester-wise (if applicable)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td><b> Proof of admission: </b>  Offer Letter or Admission Letter from the Institution. Conditional admission letter may be considered in case of studies abroad. </td>
                                </tr>

                            </table>

                        </div>

                        <div>

                            <table className="loanProcesstable">

                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td>Entrance Exam Result through which admission is being taken (e.g. CAT, CMAT, JEE, NEET, CET, GMAT, GRE, TOEFL, etc)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td>Statement of cost of study/ Schedule of expenses</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td>College / Course prospectus (if available)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td>2 passport-size photographs</td>
                                </tr>
                                <tr>
                                    <th scope="row"><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></th>
                                    <td>A/C statement for last 1 year in case of any previous loan from other Banks/Lenders</td>
                                </tr>

                            </table>


                        </div>

                    </div>

                </div>
            </div>

            {/* #4 */}

            <div className="eligibilityLoansMain" >
                <center className="centerEligi" >
                    <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >ELIGIBILITY CHECK</h5>
                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px 10px", textAlign: "center" }} > Let’s Check your Eligibility for an Education Loan</h2>
                    <p style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto", padding: "10px", width: "90%", maxWidth: "900px", textAlign: "center" }}  >We've rounded up the top eligibility criteria that our network of financial institutions typically look for when granting education loans. Take a peek below to see if you meet the mark!</p>
                </center>

                <div className="eligibilityLoans">

                    <div className="partnerDIvMain">
                        <Slider
                            dots={false}
                            infinite={true}
                            speed={3000}
                            slidesToShow={3}
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
                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Education Loans : Interest Rates & Charges</h2>
                </center>

                <div className="tableEligi">
                    <table className="table">
                        <thead>
                            <tr>
                                <td className="interestRatestd1" >Interest rates</td>
                                <td className="interestRatestd2" >11.55% to 20.05%</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="interestRatestd1" >Processing fee</td>
                                <td className="interestRatestd2" >It ranges from 1% - 3% and differs according to the banks</td>
                            </tr>
                            <tr>
                                <td className="interestRatestd1" >Loan Tenure</td>
                                <td className="interestRatestd2" >3 years to 6 years</td>
                            </tr>
                            <tr>
                                <td className="interestRatestd1" >Loan Amount</td>
                                <td className="interestRatestd2" >	₹ 10 lakhs - ₹ 3 crores</td>
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
                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Here’s Why People Choose BFS for Personal Loans!</h2>
                </center>

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

            {/* 7 */}

            <div className="questionLoans" >
                <center>
                    {/*   */}
                    <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Frequently Asked Questions</h2>
                </center>

                <div className="questionLoansSub">

                    <div id="accordion" style={{ width: "100%" }}>

                        <div className="card" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="card-header card-headerrr" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className="rupeeSymbol">
                                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                        </div>
                                        What is the Maximum Loan Amount i can get ?
                                    </button>
                                </h5><i className="fa-solid fa-chevron-down"></i>
                            </div>

                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    There is no upper limit to the amount for our student education loan. The sanction loan amount will be decided on the basis of various factors defined in the policies.
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
                                        What are the expenses covered under the loan?
                                    </button>
                                </h5><i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    <b> College related expenses:</b> <br />
                                    • Tuition and Fees payable to the institute <br />
                                    • Examination / library / laboratory fees <br />
                                    • Purchase of books / Equipment / uniforms <br />
                                    • Living expenses (including Hostel fees) <br />

                                    <br /> <br />
                                    <b> Additional expenses: </b><br />
                                    • Travel expenses <br />
                                    • Purchase of computers/laptops <br />
                                    • Overseas Insurance <br />
                                    • Cost of health insurance


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

export default Educationloan;