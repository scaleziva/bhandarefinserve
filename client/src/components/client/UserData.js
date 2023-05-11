import { useNavigate, NavLink } from "react-router-dom";
import "../CSS/Client.css";
import Logo from "../Navbar DarkLogo.png";
import { useState, useEffect } from "react";

function UserData() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);

    const gettingData = async (e) => {
        try {
            const res = await fetch(`/usersasqwzxerdfcv/allusers`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            if (res.status === 200) {
                setUserData(data)
                console.log(userData)
            } else {
                navigate("/usernotfound");
            }

        } catch (error) {
            console.log(error);
            navigate("/usernotfound");
        }

    }

    useEffect(() => {
        gettingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="dashboardMain">
                <img onClick={() => navigate("/en")} className="dashLogo" src={Logo} alt="" />
                <NavLink className="logoutDash" to="/logout" >Logout</NavLink>
            </div>

            <center>

                <div className="userDataMain">

                    <table className="dashtable">

                        <thead>
                            <tr>
                                <th className="dashth" > </th>
                                <th className="dashth" >Full Name</th>
                                <th className="dashth" >Email</th>
                                <th className="dashth" >Phone</th>
                                <th className="dashth" >Password</th>
                                <th className="dashth" >Birthday</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                userData.map((currVal) => {
                                    return (
                                        <tr key={currVal._id} >
                                            <th className="dashtd" ><i className="fa-solid fa-circle-dot"></i></th>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.name}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.email}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.phone}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.password}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.birthday}</td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                <th className="dashtd" ><i className="fa-solid fa-circle-dot"></i></th>
                                <td className="dashtd" style={{ boxSizing: "border-box" }} >{"hbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiu"}</td>
                                <td className="dashtd" style={{ boxSizing: "border-box" }} >{"hbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiu"}</td>
                                <td className="dashtd" style={{ boxSizing: "border-box" }} >{"hbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiu"}</td>
                                <td className="dashtd" style={{ boxSizing: "border-box" }} >{"hbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiuhbeuifeiu"}</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

            </center>
        </>
    );
}

export default UserData;