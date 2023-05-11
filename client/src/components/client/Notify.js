import { useNavigate, NavLink } from "react-router-dom";
import "../CSS/Client.css";
import Logo from "../Navbar DarkLogo.png";
import { useState, useEffect } from "react";

function Notify() {

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

    const [notifyDiv, shownotifyDiv] = useState(false);

    const [notify, setNoti] = useState("");
    const [date, setDate] = useState("");
    const [notiemail, setnotiemail] = useState("");

    const sendClicked = (email) => {
        shownotifyDiv(true)
        setnotiemail(email)
    }

    const sendNotification = async (e) => {

        const email = notiemail

        e.preventDefault();

        if (notify === "") {
            alert("Please enter some message")
        }else if(notiemail === ""){
            alert("Please enter email")
        } else {
            try {
                const res = await fetch("/usersasqwzxerdfcv/post/notification", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        notify, email, date
                    })
                });

                const data = await res.json();

                if (res.status === 200) {
                    alert("Notified!");
                    shownotifyDiv(false)
                } else {
                    alert("Please cross-check the email");
                    if (data.error === "Invalid credentials") {
                        console.log("Invalid credentials, please recheck the Email & Password")
                    } else if (data.error === "Enter all the details") {
                        console.log("Fill all the entries")
                    }
                }

            } catch (error) {
                console.log(error)
            }

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


                    {
                        notifyDiv ?
                            <form type="submit" className="notifiDiv">
                                <i onClick={() => shownotifyDiv(false)} class="fa-sharp fa-solid fa-xmark notifyX"></i>
                                <input type="text" placeholder="Email" name="notiemail" value={notiemail} onChange={(e) => setnotiemail(e.target.value)} />
                                <input type="text" placeholder="Date [XX-XX-XXXX, XX:XX]" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                <textarea type="text" placeholder="Message" name="notify" value={notify} onChange={(e) => setNoti(e.target.value)} />
                                <i onClick={sendNotification} style={{ marginLeft: "5px", cursor: "pointer" }} className="fa-solid fa-paper-plane notifyBtn"></i>
                            </form> : ""
                    }


                    <table className="dashtable">

                        <thead>
                            <tr>
                                <th className="dashth" > </th>
                                <th className="dashth" >Full Name</th>
                                <th className="dashth" >Email</th>
                                <th className="dashth" >Phone</th>
                                <th className="dashth" >Birthday</th>
                                <th className="dashth" >Send Notification</th>
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
                                            <td className="dashtd" style={{ boxSizing: "border-box" }} >{currVal.birthday}</td>
                                            {/* <td className="dashtd" style={{ boxSizing: "border-box" }} ><input type="text" style={{width:"300px"}} /> <i style={{marginLeft:"5px", cursor:"pointer"}} className="fa-solid fa-paper-plane"></i></td> */}
                                            <td className="dashtd" onClick={() => sendClicked(currVal.email)} style={{ boxSizing: "border-box", background: "#ffc107", textAlign: "center", cursor: "pointer" }} >Send Notification<i style={{ marginLeft: "5px", cursor: "pointer" }} className="fa-solid fa-paper-plane"></i></td>
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

export default Notify;