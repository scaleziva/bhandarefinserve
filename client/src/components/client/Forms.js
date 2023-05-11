import { useNavigate, NavLink } from "react-router-dom";
import "../CSS/Client.css";
import Logo from "../Navbar DarkLogo.png";
import { useState, useEffect } from "react";

function Forms() {

    const navigate = useNavigate();

    const [formDataHome, setformDataHome] = useState([]);
    const [formDataSalaried, setformDataSalaried] = useState([]);
    const [formDataSE, setformDataSE] = useState([]);

    const gettingDataHome = async (e) => {
        try {
            const res = await fetch(`/usersasqwzxerdfcv/homecontact`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            if (res.status === 200) {
                setformDataHome(data)
            } else {
                navigate("/usernotfound");
            }

        } catch (error) {
            console.log(error);
            navigate("/usernotfound");
        }

    }

    const gettingDataSalaried = async (e) => {
        try {
            const res = await fetch(`/usersasqwzxerdfcv/servicesSalaries`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            if (res.status === 200) {
                setformDataSalaried(data)
            } else {
                navigate("/usernotfound");
            }

        } catch (error) {
            console.log(error);
            navigate("/usernotfound");
        }

    }

    const gettingDataSE = async (e) => {
        try {
            const res = await fetch(`/usersasqwzxerdfcv/servicesSelf`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            if (res.status === 200) {
                setformDataSE(data)
            } else {
                navigate("/usernotfound");
            }

        } catch (error) {
            console.log(error);
            navigate("/usernotfound");
        }

    }

    useEffect(() => {
        gettingDataHome();
        gettingDataSalaried();
        gettingDataSE();
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
                <h2>From Home Contact form</h2>

                    <table className="dashtable">

                        <thead>
                            <tr>
                                <th className="dashth" > </th>
                                <th className="dashth" >Full Name</th>
                                <th className="dashth" >Email</th>
                                <th className="dashth" >Phone</th>
                                <th className="dashth" >Message</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                formDataHome.map((currVal) => {
                                    return (
                                        <tr key={currVal._id} >
                                            <th className="dashtd" ><i className="fa-solid fa-circle-dot"></i></th>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.name}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.email}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.phone}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.message}</td>
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


            <center>

                <div className="userDataMain">
                <h2>From Services (Salaried)</h2>

                    <table className="dashtable">

                        <thead>
                            <tr>
                                <th className="dashth" > </th>
                                <th className="dashth" >Full Name</th>
                                <th className="dashth" >Email</th>
                                <th className="dashth" >Phone</th>
                                <th className="dashth" >Company</th>
                                <th className="dashth" >Monthly Income</th>
                                <th className="dashth" >Experience</th>
                                <th className="dashth" >Location</th>
                                <th className="dashth" >Get Paid</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                formDataSalaried.map((currVal) => {
                                    return (
                                        <tr key={currVal._id} >
                                            <th className="dashtd" ><i className="fa-solid fa-circle-dot"></i></th>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.name}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.email}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.phone}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.company}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.monthlyIncome}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.experience}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.location}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.getPaid}</td>
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

            <center>

                <div className="userDataMain">
                <h2>From Services (Self Employed)</h2>

                    <table className="dashtable">

                        <thead>
                            <tr>
                                <th className="dashth" > </th>
                                <th className="dashth" >Full Name</th>
                                <th className="dashth" >Email</th>
                                <th className="dashth" >Phone</th>
                                <th className="dashth" >Company</th>
                                <th className="dashth" >Business Turnover</th>
                                <th className="dashth" >Existency</th>
                                <th className="dashth" >Location</th>
                                <th className="dashth" >Industry</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                formDataSE.map((currVal) => {
                                    return (
                                        <tr key={currVal._id} >
                                            <th className="dashtd" ><i className="fa-solid fa-circle-dot"></i></th>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.name}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.email}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.phone}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.company}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.turnover}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.existency}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.location}</td>
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.industry}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </center>

        </>
    );
}

export default Forms;