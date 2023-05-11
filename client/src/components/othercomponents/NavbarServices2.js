import "../CSS/NavbarServices.css";
// import Logo from "../logowithouttext.png"
import Logo from "../logowithtext.png"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarServices = () => {

    // if (window.scrollY >= 56) {
    // navE1.classList.add("navbar-scrolled");
    //   }else if (window.scrollY < 56) {
    // navE1.classList.remove("navbar");
    //   }

    const [forNavBg, setforNavBg] = useState("lolxd");
    const [forNavtxt, setforNavtxt] = useState("text-whitexd");
    const [hamburger, sethamburger] = useState("white");
    const [addShadow, sethaddShadow] = useState("");

    const changeBg = () => {
        if (window.scrollY >= 100) {
            setforNavBg("lolxdwhite")
            setforNavtxt("text-blackxd")
            sethamburger("black")
            sethaddShadow("one-edge-shadow")
        } else if (window.scrollY < 100) {
            setforNavBg("lolxd")
            setforNavtxt("text-whitexd")
            sethamburger("white")
            sethaddShadow("")
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
            <div className={`servNavMain ${forNavBg} ${addShadow}`}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/">Features</a>
                        <a className="nav-item nav-link" href="/">Pricing</a>
                        <a className="nav-item nav-link disabled" href="/">Disabled</a>
                    </div>
                </div>
            </nav>
        </div >
        </>
    )
}

export default NavbarServices;