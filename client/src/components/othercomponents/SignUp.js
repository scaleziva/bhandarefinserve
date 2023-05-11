import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Signup() {

    const [signinData, setSigninData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        birthday:""
    });

    const setVal = (e) => {
        const { name, value } = e.target;
        setSigninData({ ...signinData, [name]: value });
    }

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const postLoginDetails = async (e) => {

        e.preventDefault();

        const { name, email, phone, password, cpassword, birthday } = signinData;

        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, password, cpassword, birthday
                })
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 200) {
                console.log("signin Success");
                alert("Signin Success!")
                navigate(`/login`);
            } else {
                console.log("Registration Failed");
                if (data.error === "Passwords doesnt match") {
                    setError("Passwords doesn't match")
                } else if (data.error === "email already registered") {
                    setError("Email already registered... login : )")
                } else if (data.error === "Enter all the details") {
                    setError("Please fill all the details!")
                }
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="loginDiv" >
            <NavLink className="loginCross" to="/" > <i className="fa-solid fa-circle-xmark"></i></NavLink>
            <div className="loginform">

                <form >
                    <div className="login_form">
                        <h3>SignUp</h3>
                        <p className="dangertxt" style={{ color: "red" }} >{error}</p>
                        <input required autoComplete="off" type="text" onChange={setVal} name="name" placeholder="Full Name" value={signinData.name} />
                        <input required autoComplete="off" type="email" onChange={setVal} name="email" placeholder="Email Address" value={signinData.email} />
                        <input required autoComplete="off" type="number" onChange={setVal} name="phone" placeholder="Contact Number" value={signinData.phone} />
                        <input required autoComplete="off" type="password" onChange={setVal} name="password" placeholder="Password" value={signinData.password} />
                        <input required autoComplete="off" type="password" onChange={setVal} name="cpassword" placeholder="Confirm your password" value={signinData.cpassword} />
                        <input type="date" id="birthday" name="birthday" value={signinData.birthday} onChange={setVal} placeholder="Date Of Birth"></input>
                        {<p style={{ fontSize: "12px", /*backgroundColor:"white" , color:"ec1c23" , padding:"2px"*/ }} >already have an account? <NavLink to="/login" >Login</NavLink></p>}
                        <button type="submit" onClick={postLoginDetails} >Sign Up</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Signup;