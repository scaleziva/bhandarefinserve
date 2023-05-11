import { useState } from "react";

const ContactForm = () => {

    // Submitting contact form

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

                    <button onClick={postLoginDetails} className="submitBtn" type="submit">Access Now</button>

                </form>
            </div>

        </>
    )
}

export default ContactForm;