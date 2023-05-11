import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../CSS/Login.css";
import Logo from "../Navbar DarkLogo.png"

function Login() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const [error, setError] = useState("")

    const setLoginVal = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const postLoginDetails = async (e) => {

        e.preventDefault();

        const { email, password } = loginData;

        try {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const data = await res.json();

            if (res.status === 200) {
                console.log("Login Success");
                navigate(`/dashboard/hfbckakjdbckadfdv/home`);
            } else {
                console.log("Login Failed");
                if (data.error === "Invalid credentials") {
                    setError("Invalid credentials, please recheck the Email & Password")
                } else if (data.error === "Enter all the details") {
                    setError("Fill all the entries")
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

                <img src={Logo} alt="" style={{width:"250px", height:"auto", marginBottom:"50px"}} />
                <form>
                    <div className="login_form">
                        <p style={{ color: "red !important" }} >{error}</p>
                        <input required autoComplete="off" type="email" name="email" placeholder="Email" value={loginData.email} onChange={setLoginVal} />
                        <input required autoComplete="off" type="password" name="password" placeholder="Password" value={loginData.password} onChange={setLoginVal} />
                        {/* <p style={{ fontSize: "12px" }} >don't have an account? <NavLink to="/signup" >Sign up</NavLink> </p> */}
                        <button type="submit" onClick={postLoginDetails}>Login</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Login;