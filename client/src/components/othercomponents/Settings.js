import "../CSS/NotiSetting.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Settings = () => {

    const history = useNavigate();

    const [userData, setUserData] = useState([])

    const gettingData = async (e) => {
        try {
            const res = await fetch(`/isuserauthenticateprofile`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const dataa = await res.json();

            if (res.status === 200) {
                setUserData(dataa.msg)
                console.log(userData)
            } else {
                history("/usernotfound");
            }

        } catch (error) {
            console.log(error);
        }

    }

    //for changing password
    const [changePassData, setChangePassData] = useState({
        password: "",
        newPassword: ""
    });

    const inputEventForPass = (e) => {
        const { name, value } = e.target;

        setChangePassData({ ...changePassData, [name]: value });
    }

    const postChange = async (e) => {
        e.preventDefault();

        const { password, newPassword } = changePassData;

        try {
            const res = await fetch("/changepass", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password, newPassword
                })
            });

            await res.json();
            console.log(res.status);

            if (res.status === 404) {
                alert("Invalid details")
            } else {
                history("/login");
                alert("password changed")
            }

        } catch (error) {
            console.log(error)
        }
    }

    // for deletion of account
    const [deleAccData, setDeleAccData] = useState({
        email: "",
        password: ""
    });

    const inputEventForDele = (e) => {
        const { name, value } = e.target;

        setDeleAccData({ ...deleAccData, [name]: value });
    }

    const postDele = async (e) => {
        e.preventDefault();

        const { email, password } = deleAccData;

        try {
            const res = await fetch("/deleteaccount", {

                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            await res.json();

            if (res.status === 200) {
                alert("account deleted")
                history("/signup");
            } else {
                alert("Invalid details... re-enter correctly")
            }

        } catch (error) {
            console.log(error)
        }
    }

    // const navigateToLogout = () => {
    //     history("/logout");
    // }

    // const navigateToProfile = () => {
    //     history("/profile");
    // }

    useEffect(() => {
        gettingData();
        console.log("use")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="notificationsMain">
                <NavLink className="loginCross" to="/en" > <i className="fa-solid fa-circle-xmark"></i></NavLink>

                <div className="notifications">
                    <div className="notificationsSubMain" style={{ alignItems: "center", justifyContent: "center" }}>
                        <h5 style={{ textAlign: "center", marginRight: "20px" }} >Your Profile <i class="fa-solid fa-circle-user settingHuman"></i></h5>
                    </div>

                    <div className="profileDiv">
                        {/* <div className="profileDivSub">
                            <b>
                                <h4>Full Name:</h4>
                            </b>
                            <h4>{userData.name}</h4>
                        </div>
                        
                        <div className="profileDivSub">
                            <b>
                                <h4>Email:</h4>
                            </b>
                            <h4>{userData.email}</h4>
                        </div>
                        <div className="profileDivSub">
                            <b>
                                <h4>Phone:</h4>
                            </b>
                            <h4>{userData.phone}</h4>
                        </div> */}

                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Full Name:</td>
                                    <td>{userData.name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{userData.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone Number:</td>
                                    <td>{userData.phone}</td>
                                </tr>
                                <tr>
                                    <td>Birthday:</td>
                                    <td>{userData.birthday}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                    <div className="settings_container">

                        <h2 style={{ marginBottom: "20px", borderBottom: "2px soild black" }} >Settings <i className='fa fa-gear' ></i></h2>

                        <div className="changePass_div">
                            <h3 style={{ marginBottom: "20px", marginTop: "10px" }} >Change Password</h3>
                            <form method="PUT">
                                <input type="password" onChange={inputEventForPass} value={changePassData.password} name="password" placeholder="Current Password" />
                                <input type="password" onChange={inputEventForPass} value={changePassData.newPassword} name="newPassword" placeholder="New Password" />
                                <button onClick={postChange} >Change Password</button>
                            </form>

                        </div>
                        <hr />
                        <div className="deleteAcc_div">

                            <h3 style={{ marginBottom: "20px", marginTop: "10px" }} >Delete Account</h3>
                            <form method="DELETE">
                                <input onChange={inputEventForDele} value={deleAccData.email} name="email" type="text" placeholder="Email" />
                                <input onChange={inputEventForDele} value={deleAccData.password} name="password" type="password" placeholder="Password" />
                                <button onClick={postDele}  >Delete Account</button>
                                <center>
                                    <p style={{ marginTop: "5px" }} ><strong>Note</strong>: Once deleted account can't be recoup, <br /> however you can create an account again. </p>
                                </center>
                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}

export default Settings;