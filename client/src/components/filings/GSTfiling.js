import NavbarServices from "../othercomponents/NavbarServices";
import "../CSS/Loans.css";
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

import MainBg from "./images/GST Filing.jpg"

import { useState } from "react";

function GSTfilings() {

    // const partners = [
    //     {
    //         logo: Age,
    //         heading: "Age",
    //         text: "The age limit for applying loan is 23 years – 58 years"
    //     },
    //     {
    //         logo: Residency,
    //         heading: "Residency",
    //         text: "The applicant should be a legal Indian resident"
    //     },
    //     {
    //         logo: Home,
    //         heading: "Permanent Address",
    //         text: "There should be a permanent address with 6 months stability"
    //     },
    //     {
    //         logo: Bank,
    //         heading: "Bank Account",
    //         text: "An active bank account should be present"
    //     },
    //     {
    //         logo: Credit,
    //         heading: "Credit Score",
    //         text: "Maintain a good credit score of >700*"
    //     },
    //     {
    //         logo: Income,
    //         heading: "Income",
    //         text: "Applicant should be earning regular income of >= 30K/Month"
    //     },
    // ];

    const [contactData, setContactDiv] = useState({
        name: "",
        email: "",
        phone: "",
        company: ""
    });

    const [monthlyIncome, setmonthlyIncome] = useState("");
    const [experience, setexperience] = useState("");
    const [location, setLocation] = useState("");
    const [getPaid, setGettingpaid] = useState("");

    const setLoginVal = (e) => {
        const { name, value } = e.target;
        setContactDiv({ ...contactData, [name]: value });
    }

    const postLoginDetails = async (e) => {

        e.preventDefault();

        const { name, email, phone, company } = contactData;
        console.log(name, email, phone, company, monthlyIncome, experience, location, getPaid)

        try {
            const res = await fetch("/contactServiceSalaried", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, company, monthlyIncome, experience, location, getPaid
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
            <div className="loansMainMost"  >
                <NavbarServices />

                <div className="dflexlol">
                    <div className="loansMain">

                        <div className="loansSubFirst" >
                            <h3>Filing GST seems too complicated ?</h3>
                            <h2>Let our Tax Experts do it for you !</h2>
                        </div>

                        <div className="loansSubSecond" >
                            <form>
                                <h6 >We are thrilled that you chose us</h6>
                                <h6>Fill the form and receive your quote in the next 24 hours.</h6>
                                <div className="loansInput">
                                    <input required autoComplete="off" type="text" name="name" value={contactData.name} onChange={setLoginVal} placeholder="Full Name" />
                                    <input required autoComplete="off" type="number" name="phone" value={contactData.phone} onChange={setLoginVal} placeholder="Mobile Number" />
                                </div>

                                <div className="loansInput">
                                    <input required autoComplete="off" type="email" name="email" value={contactData.email} onChange={setLoginVal} placeholder="Email" />
                                    <input required autoComplete="off" type="text" name="company" value={contactData.company} onChange={setLoginVal} placeholder="Company" />
                                </div>

                                <div className="loansInput">

                                    <select onChange={(e) => { setmonthlyIncome(e.target.value) }} >
                                        <option value="DEFAULT">Monthly Income</option>
                                        <option  >Less Than Rs. 30,000</option>
                                        <option  >Rs. 30,000 - Rs. 40,000</option>
                                        <option  >Rs. 41,000 - Rs. 50,000</option>
                                        <option  >More Than Rs. 50,000</option>
                                    </select>

                                    <select onChange={(e) => { setexperience(e.target.value) }} >
                                        <option value="DEFAULT">Experience</option>
                                        <option  >1-2 Years</option>
                                        <option  >2-4 Years</option>
                                        <option  >More Than 4 Years</option>
                                    </select>

                                </div>

                                <div className="loansInput">

                                    <select onChange={(e) => { setLocation(e.target.value) }} >
                                        <option value="DEFAULT">Location</option>
                                        <option >Hyderabad</option>
                                        <option >Bangalore</option>
                                        <option >Mumbai</option>
                                        <option >Other</option>
                                    </select>

                                    <select onChange={(e) => { setGettingpaid(e.target.value) }} >
                                        <option value="DEFAULT">How do you get paid?</option>
                                        <option >Cash</option>
                                        <option >Cheque</option>
                                        <option >Bank Transfer</option>
                                        <option >Others</option>
                                    </select>

                                </div>

                                <span style={{ width: "90%", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-evenly", marginTop: "15px" }} >

                                    <input style={{ width: "30px", height: "auto" }} type="checkbox" name="" id="" />

                                    <p style={{ width: "90% !important", height: "auto", marginRight: "2px", marginLeft: "2px" }} >
                                        By clicking on <b>‘Access Now’</b>, you agree to all the
                                        <a className="termsNpolicies" href="/termsofuse"> Terms</a> & <a className="termsNpolicies" href="/privacypolicy">Policies </a>
                                        of this website.
                                    </p>

                                </span>

                                <button onClick={postLoginDetails} className="submitBtn" type="submit">Talk to an ITR expert now</button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>

            {/* Part 2 */}

            <div className="loansPart2Main" >

                <div className="loansPart2">

                    <center style={{ width: "100%" }} >
                        <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Filing Services</h5>
                        <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >GST Filing : Get Your Taxes Done</h1>
                    </center>

                    <div className="loansPart2Sub">
                        <div className="loansPart2Subimg" >
                            <img src={MainBg} className="mainBgImg" alt="" />
                        </div>
                        <div>
                            <p>All business entities that have been registered under the GST system are required to submit GST returns. However, the filing procedure is contingent upon the nature of the enterprise.</p>
                            <p>To comply with the regulations of the Indian government, businesses registered under the GST must file returns every month, quarter, or year, depending on the category of the enterprise, using the government's GST portal. These returns necessitate the provision of information regarding sales and purchases of goods and services, as well as taxes collected and paid.</p>
                            <p>However, filing GST returns in India is not an easy task. The official website requires the completion of specific GST forms, which differ depending on the type of business. Failing to complete even a single field or making a mistake might cause a delay in filing income tax returns. Therefore, it is essential to seek professional guidance.</p>
                        </div>
                    </div>
                    <p className="loansPara"  >That is why we offer our services to help you submit your GST returns accurately and on time. We have extensive experience in this field, so you can rely on us. Simply provide us with the necessary documents, and we will handle the rest.</p>
                    <p className="loansPara text-dark" > Apply now and speak with a GST filing expert!</p>

                </div>

                {/* Loan Calc */}

                {/*  #3 */}

                <div className="loansProcessMain" >

                    <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Documents Required</h5>
                    <h1 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "20px 10px", textAlign: "center" }} >Documents for Filing GST ?</h1>
                    <p style={{ fontFamily: "Montserrat", fontWeight: "400", margin: "20px auto", padding: "10px", width: "90%", maxWidth: "1200px", textAlign: "center" }}  > Ahoy there! When it comes to filing GST there is a specific protocol to be followed. At Bhandare Finserve, we make the process as smooth as silk, but you'll still need to provide a fully filled-out application form, a recent photo, and a few other documents as per the requirements.</p>

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
                        <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px 10px", textAlign: "center" }} >Who Should File an Income Tax Return ?</h2>
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

                <div className="eligibilityTable" >

                    <center style={{ width: "100%" }} >
                        <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >ELIGIBILITY CHECK</h5>
                        <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Who Should File GST ?</h2>
                    </center>

                    <div className="ITRfiling">`
                        <h6>GST returns has to be filed by all the business entities who are registered under the GST system. The filing process has to be identified on the basis of the nature of the business.</h6>

                        <h6>The registered dealer who part of the following activities needs to file a GST return:</h6>

                        <div>
                            <b><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></b> Sales <br />
                            <b><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></b> Purchase <br />
                            <b><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></b> Output Goods and services tax (on Sales) <br />
                            <b><i style={{ color: "#FFD700", marginRight: "12px" }} className="fa-solid fa-certificate"></i></b> Input Tax Credit with GST paid on the purchase
                        </div>

                        <br />

                        <p><b>Note: </b>Make sure to fill in accurate details in every field of the form, and select the applicable ITR Filing Form based on your criteria. If you have any doubts you can reach out to our expert and they will help you out.</p>

                        <p>You should know that non-compliance with filing of income tax returns can result in huge penalties. So why take that risk, when you can easily get an expert to file your income tax returns online!</p>

                    </div>

                </div>

                {/* 6 */}

                <div className="benefitsLoans" >
                    <center style={{ width: "100%" }} >
                        <h5 style={{ fontFamily: "Montserrat", fontWeight: "bolder", fontSize: "25px", marginTop: "50px" }} >Benefits</h5>
                        <h2 style={{ fontFamily: "Montserrat", fontWeight: "bolder", margin: "25px auto" }} >Here’s Why People Choose BFS for ITR Filing</h2>
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

export default GSTfilings;