import "../CSS/NotiSetting.css";
import { NavLink } from "react-router-dom";
import LogoProfile from "../logoProfile.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Notification = () => {

    const history = useNavigate();

    const [notiData, getNotiData] = useState([])

    const gettingData = async (e) => {
        try {
            const res = await fetch(`/getnoti`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            });

            const data = await res.json();

            if (res.status === 200) {
                getNotiData(data)
                console.log(data)
            } else {
                history("/usernotfound");
            }

        } catch (error) {
            console.log(error);
            history("/usernotfound");
        }

    }

    useEffect(() => {
        gettingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div className="notificationsMain">
                <NavLink className="loginCross" to="/en" > <i className="fa-solid fa-circle-xmark"></i></NavLink>

                <div className="notifications">
                    <div className="notificationsSubMain">
                        <h5 className="notificationsSubMainh5" >Notifications </h5>
                        <i className="fa-solid fa-bell notificationsSubMaini"></i>
                    </div>
                    {/* <div className="noNewNotiDiv">
                       <h4>No Notifications Yet</h4>
                       <i className="fa-solid fa-face-smile"></i>
                    </div> */}

                    {
                        notiData.length ? <div style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column-reverse" }} >
                            {
                                notiData.map((currVal) => {
                                    return (
                                        <div key={currVal._id} className="notiMainDiv">
                                            <img src={LogoProfile} alt="" />
                                            <div>
                                                <h6>Bhandare Finserve</h6>

                                                <p>{currVal.notify}
                                                    <br />
                                                    <button className="btn infoBtn">
                                                        <span className="dateNoti">{currVal.date}</span>
                                                        <i className="fa-solid fa-circle-info"></i>
                                                    </button>
                                                </p>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div> :
                            <div className="noNewNotiDiv">
                                <h4>No Notifications Yet</h4>
                                <i className="fa-solid fa-face-smile"></i>
                            </div>
                    }



                </div>

            </div>
        </>
    )

}

export default Notification;