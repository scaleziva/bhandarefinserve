import { useNavigate, NavLink } from "react-router-dom";
import "../CSS/Client.css";
import Logo from "../Navbar DarkLogo.png"

function Login() {

    const navigate = useNavigate();

    return (
        <>
            <div className="dashboardMain">
                <img onClick={() => navigate("/en")} className="dashLogo" src={Logo} alt="" />
                <NavLink className="logoutDash" to="/logout" >Logout</NavLink>
            </div>
            {/* <NavLink className="loginCross" to="/" > <i className="fa-solid fa-circle-xmark"></i></NavLink> */}
            <center>
                <div className="dashboardSub">
                    <div onClick={()=> navigate("dashboard/hfbckakjdbckadfdv/userdata")}> <i style={{color:"black" , marginBottom:"10px" , fontSize:"2rem"}}  class="fa-solid fa-user"></i> User Data</div>
                    <div onClick={()=> navigate("dashboard/hfbckakjdbckadfdv/notify")}> <i style={{color:"black" , marginBottom:"10px" , fontSize:"2rem"}} class="fa-solid fa-bell"></i> Notify</div>
                    <div onClick={()=> navigate("dashboard/hfbckakjdbckadfdv/forms")} > <i style={{color:"black" , marginBottom:"10px" , fontSize:"2rem"}} class="fa-brands fa-wpforms"></i> Contact Forms</div>
                    <div onClick={()=> navigate("/")}> <i style={{color:"black" , marginBottom:"10px" , fontSize:"2rem"}} class="fa-solid fa-display"></i> Go to website</div>
                </div>
            </center>
        </>
    );
}

export default Login;