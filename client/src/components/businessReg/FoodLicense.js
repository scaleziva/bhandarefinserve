import NavbarServices from "../othercomponents/NavbarServices";
import "../CSS/Loans.css";
import ContactForm from "../othercomponents/ContactForm";
import "../CSS/Testimonial.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import Footer from "../othercomponents/Footer"

// Importing images
// import Age from "./images/Age.png";
// import Bank from "./images/Bank.png";
// import Credit from "./images/Credit.png";
// import Home from "./images/Home.png";
// import Income from "./images/Income.png";
// import Residency from "./images/Residency.png";

import IMG1 from "./images/images benefits/Affordable Rates.png";
import IMG2 from "./images/images benefits/Customer Support.png";
import IMG3 from "./images/images benefits/Expert Assistance.png";
import IMG4 from "./images/images benefits/Quick Documentation.png";
import IMG5 from "./images/images benefits/Secure Processing.png";
import IMG6 from "./images/images benefits/Trusted Banks.png";

import MainBg from "./images/Food License.jpg"


function FoodLicense() {

    //     const partners = [
    //         {
    //             logo: Age,
    //             heading: "Age",
    //             text: "The age limit for applying loan is 23 years – 58 years"
    //         },
    //         {
    //             logo: Residency,
    //             heading: "Residency",
    //             text: "The applicant should be a legal Indian resident"
    //         },
    //         {
    //             logo: Home,
    //             heading: "Permanent Address",
    //             text: "There should be a permanent address with 6 months stability"
    //         },
    //         {
    //             logo: Bank,
    //             heading: "Bank Account",
    //             text: "An active bank account should be present"
    //         },
    //         {
    //             logo: Credit,
    //             heading: "Credit Score",
    //             text: "Maintain a good credit score of >700*"
    //         },
    //         {
    //             logo: Income,
    //             heading: "Income",
    //             text: "Applicant should be earning regular income of >= 30K/Month"
    //         },
    //     ];

    return (
        <>
            <div className="loansMainMost"  >
                <NavbarServices />

                <div className="dflexlol">
                    <div className="loansMain">

                        <div className="loansSubFirst" >
                            <h3>Serving up Success</h3>
                            <h2>Get your Food License now !</h2>
                        </div>

                        <ContactForm />
                    </div>
                </div>

            </div>

            {/* Part 2 */}

            <div className="loansPart2Main" >

                <div className="loansPart2">

                    <center style={{ width: "100%" }} >
                        <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Licensing Services</h5>
                        <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Food License : Serving Up Success</h1>
                    </center>

                    <div className="loansPart2Sub">
                        <div className="loansPart2Subimg" >
                            <img src={MainBg} className="mainBgImg" alt="" />
                        </div>
                        <div>
                            <p>A food license is an essential requirement for any business involved in the production or sale of food products in India. It is a legal document that ensures compliance with the country's food safety regulations and laws, and authorizes an organization to engage in various food-related activities. </p>
                            <p>The process of obtaining a food license in India can be quite daunting and time-consuming, but with the assistance of Bhandare Finserve, a leading financial services provider in India, businesses can now obtain their Food License quickly and efficiently. </p>
                            <p>Bhandare Finserve understands the importance of obtaining a Food License for businesses, and hence, it provides comprehensive assistance in this regard. The company offers a range of services, including guidance on the necessary documentation, application submission, and follow-up with the concerned authorities. </p>
                        </div>
                    </div>
                    <p className="loansPara" >Bhandare Finserve's team of experts ensures that the entire process is smooth and hassle-free for businesses. They keep track of the progress of the application and update clients on the status of their Food License application. </p>
                    <p className="loansPara" >Moreover, with Bhandare Finserve's quick documentation and hassle-free process, businesses can focus on their core operations while the company takes care of their Food License requirements. So, whether you are a food manufacturer, distributor, or retailer, don't let the process of obtaining a Food License hold you back. Apply now for your Food License with Bhandare Finserve's expert assistance and take your business to new heights.</p>

                </div>

                {/* Loan Calc */}

                {/*  #3 */}

                <div className="loansProcessMain" >

                    <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Documents Required</h5>
                    <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "20px 10px", textAlign: "center" }} > How to Apply for a Food License?</h1>
                    <p style={{ fontFamily: "Montserrat", fontWeight: "400", margin: "20px auto", padding: "10px", width: "90%", maxWidth: "1200px", textAlign: "center" }}  > Ahoy there! When it comes to applying for a Food License there are different sets of rules and requirements. At Bhandare Finserve, we make the process as smooth as silk, but you'll still need to provide a fully filled-out application form, a recent photo, and a few other documents as per the requirements.</p>

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

                {/* <div className="eligibilityLoansMain" >
                    <center style={{ width: "100%" }} >
                        <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >ELIGIBILITY CHECK</h5>
                        <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px 10px", textAlign: "center" }} >What makes you eligible for Food License ?</h2>
                        <p style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto", padding: "10px", width: "90%", maxWidth: "900px", textAlign: "center" }}  >We've rounded up the top eligibility criteria that is required while applying for a Food License</p>
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

                </div> */}

                {/* 5 */}

                {/* <div className="eligibilityTable" >

                    <center style={{width:"100%"}} >
                        <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Let's Talk Money</h5>
                        <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} > Vehicle Insurance : Policies & Premiums</h2>
                    </center>

                    <div className="tableEligi">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="interestRatestd1" >Interest rates</td>
                                    <td>6.75% to 12%</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="interestRatestd1" >Processing fee</td>
                                    <td>It ranges from 1% - 3% and differs according to the banks</td>
                                </tr>
                                <tr>
                                    <td className="interestRatestd1" >Loan Tenure</td>
                                    <td>3 years – 20 years</td>
                                </tr>
                                <tr>
                                    <td className="interestRatestd1" >Loan Amount</td>
                                    <td>₹ 10 lakhs - ₹ 75 lakhs</td>
                                </tr>
                                <tr>
                                    <td className="interestRatestd1" >Lock-in period</td>
                                    <td>It differs from the lender to lender</td>
                                </tr>
                                <tr>
                                    <td className="interestRatestd1" >Pre-closure charges</td>
                                    <td>It differs from the lender to lender</td>
                                </tr>
                                <tr>
                                    <td className="interestRatestd1" >Guarantor Required</td>
                                    <td>It depends on the different conditions</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 

                </div>*/}

                {/* 6 */}

                <div className="benefitsLoans" >
                    <center style={{ width: "100%" }} >
                        <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Benefits</h5>
                        <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Here’s Why People Choose BFS for Food Licensing !</h2>
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

                </div>

                {/* 7 */}

                <div className="questionLoans" >
                    <center style={{ width: "100%" }} >

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

export default FoodLicense;