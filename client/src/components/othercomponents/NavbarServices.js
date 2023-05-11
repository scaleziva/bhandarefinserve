import "../CSS/NavbarServices.css";
import "../CSS/Home.css"
// import Logo from "../logowithouttext.png"
import Logo from "../Navbar Logo.png";
import DarkLogo from "../Navbar DarkLogo.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavbarServices = () => {
    
    const navigate = useNavigate();
    
    const navigateToHome = () => {
        navigate("/")
    }
    
    // if (window.scrollY >= 56) {
    // navE1.classList.add("navbar-scrolled");
    //   }else if (window.scrollY < 56) {
    // navE1.classList.remove("navbar");
    //   }

    const [forNavBg, setforNavBg] = useState("lolxd");
    const [forNavtxt, setforNavtxt] = useState("text-whitexd");
    const [hamburger, sethamburger] = useState("white");
    const [addShadow, sethaddShadow] = useState("");

    const [imgLogo, setimgLogog] = useState(Logo);

    const changeBg = () => {
        if (window.scrollY >= 100) {
            setforNavBg("lolxdwhite")
            setforNavtxt("text-blackxd")
            sethamburger("black")
            sethaddShadow("one-edge-shadow")
            setimgLogog(DarkLogo)
        } else if (window.scrollY < 100) {
            setforNavBg("lolxd")
            setforNavtxt("text-whitexd")
            sethamburger("white")
            sethaddShadow("")
            setimgLogog(Logo)
        }
    }

    const changeBgOnClick = () => {
        if (forNavBg === "lolxd") {
            setforNavBg("lolxdwhite")
            setforNavtxt("text-blackxd")
            sethamburger("black")
            sethaddShadow("one-edge-shadow")
        } else if (window.scrollY < 100) {
            setforNavBg("lolxd")
            setforNavtxt("text-whitexd")
            sethamburger("white")
            sethaddShadow("")
        } else {
            setforNavBg("lolxdwhite")
            setforNavtxt("text-blackxd")
            sethamburger("black")
            sethaddShadow("one-edge-shadow")
        }
    }

    window.addEventListener("scroll", changeBg);

    const [bgforSlider, setbgforSlider] = useState("bg-transparent");


    const changeForSlider = () => {
        if (window.innerWidth < 991) {
            setbgforSlider("bg-white")
            setforNavtxt("text-blackxd")

        } else if (window.innerWidth > 991) {
            setbgforSlider("bg-transparent")
            setforNavtxt("text-whitexd")

        }
        // console.log(window.innerWidth);
    }
    window.addEventListener("resize", changeForSlider);

    useEffect(() => {
        changeForSlider();
    }, []);


    return (
        <>
            <div style={{ marginBottom: "70px" }} >
                <div className={`servNavMain ${forNavBg} ${addShadow}`}>
                    <div className="servNav">

                        <nav class={`navbar navbar-expand-lg bg-transparent`}>
                            <img onClick={navigateToHome} src={imgLogo} alt="" className="servicesLogoNav" />
                            <button onClick={changeBgOnClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                {/* <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
                                {/* <span className="navbar-toggler-icon text-whitexd"></span> */}
                                <i className="fa fa-navicon navbar-toggler" style={{ color: hamburger, fontSize: "28px" }}></i>
                            </button>

                            <div class={`collapse navbar-collapse ${bgforSlider} border-0`} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto text-whitexd">
                                    <li className="nav-item active">
                                        <a class={`nav-link ${forNavtxt} fw-bolder m-2`} href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class={`nav-link ${forNavtxt} fw-bolder m-2`} href="/about">About</a>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Loans
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/homeloan" >Home Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/personalloan" >Personal Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/businessloan" >Business Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/carloan" >Car Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/educationloan" >Education Loan</NavLink></li>
                                            {/* <div className="dropdown-divider"></div> */}
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Insurance
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/lifeinsurance" >Life Insurance</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/healthinsurance" >Health Insurance</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/vehicleinsurance" >Vehicle Insurance</NavLink></li>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Business Registration
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/labourlicense" >Labour License</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/tradelicense" >Trade License</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/gst" >GST Registration</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/foodlicense" >Food License {"(FSSAI)"} </NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/trademarkreg" >Trademark Registration</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/msme" >MSME</NavLink></li>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Filings
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/incometax" >Income Tax</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/accounting" >Accounting</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/gstfiling" >GST Filing</NavLink></li>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavbarServices;

// eslint-disable-next-line no-lone-blocks
{/* 

<div style={{ marginBottom: "70px" }} >
                <div className={`servNavMain ${forNavBg} ${addShadow}`}>
                    <div className="servNav">

                        <nav class={`navbar navbar-expand-lg bg-transparent`}>
                            <img src={Logo} alt="" />
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                                <i className="fa fa-navicon navbar-toggler" style={{ color: hamburger , fontSize: "28px" }}></i>
                            </button>

                            <div class={`collapse navbar-collapse form-inline my-2 my-lg-0 bg-transparent border-0`} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto text-whitexd">
                                    <li className="nav-item active">
                                        <a class={`nav-link ${forNavtxt} fw-bolder m-2`} href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class={`nav-link ${forNavtxt} fw-bolder m-2`} href="/">About</a>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Loans
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/homeloan" >Home Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/personalloan" >Personal Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/businessloan" >Business Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/carloan" >Car Loan</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold" to="/services/educationloan" >Education Loan</NavLink></li>
                                            
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Insurance
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/lifeinsurance" >Life Insurance</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/healthinsurance" >Health Insurance</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/vehicleinsurance" >Vehicle Insurance</NavLink></li>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Business Registration
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/labourlicense" >Labour License</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/tradelicense" >Trade License</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/gst" >GST Registration</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/foodlicense" >Food License {"(FSSAI)"} </NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/trademarkreg" >Trademark Registration</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/msme" >MSME</NavLink></li>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a class={`nav-link dropdown-toggle ${forNavtxt} fw-bolder`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Filings
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/incometax" >Income Tax</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/accounting" >Accounting</NavLink></li>
                                            <li><NavLink style={{ margin: "2px auto" }} className="dropdown-item text-dark fw-bold bg-white" to="/services/gstfiling" >GST Filing</NavLink></li>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>

                </div>
            </div>

*/}