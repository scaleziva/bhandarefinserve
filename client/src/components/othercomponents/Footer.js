import "../CSS/Footer.css";
import { NavLink } from "react-router-dom";

function Emicalc() {
  return (
    <>

      <div className="footerDiv">

        <div className="footerMain">

        <div className="firstTwoCombined">
          <div className="footerMainSub" >
            <h5 className="colorYellow"><u> Quick Links</u></h5>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> Services</NavLink>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> About Us</NavLink>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> Contact Us</NavLink>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> Emi Calculator</NavLink>
          </div>

          <div className="footerMainSub footerServices" >
            <h5 className="colorYellow"><u>Services</u></h5>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> Insurance</NavLink>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> Loans</NavLink>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> Business Registration</NavLink>
            <NavLink href="/"> <i style={{ fontSize: "15px", marginRight: "5px" }} className="fa-solid fa-caret-right colorYellow"></i> Filings</NavLink>
          </div>
        </div>


          <div className="footerLast" >

            <div className="aboveSocialDiv">
              <div style={{ width: "100%", height: "auto", textAlign: "center" }} ><h3 className="colorYellow"> For Queries</h3></div>

              <h5><i style={{ marginRight: "5px" }} className="fa-solid fa-phone colorYellow"></i> +91 8142522522 &nbsp; &nbsp; <i style={{  marginRight: "5px" }} className="fa-solid fa-phone colorYellow"></i> +91 8142622622</h5>
              {/* <h5><i style={{marginRight:"5px"}} className="fa-solid fa-phone colorYellow"></i> </h5> */}
              <h5><i style={{ marginRight: "5px", marginTop:"10px" }} className="fa-solid fa-envelope colorYellow"></i> info@bhandarefinserve.com</h5>
            </div>

            <div className="socialsDivFoot" >
              <div style={{ width: "100%", height: "auto", textAlign: "center" }} ><h3 className="colorYellow"> Our Socials</h3></div>
              <div className="socialsDiv">
                <a id="instagram" href="https://instagram.com/bhandare.finserve?igshid=YmMyMTA2M2Y="><i className="fa-brands fa-instagram"></i></a>
                <a id="twitter" href="https://www.youtube.com/channel/UCWsf8GExidvdc499_SG9few"><i className="fa-brands fa-youtube"></i></a>
                <a id="facebook" href="https://www.facebook.com/profile.php?id=100092480856213"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>

          </div>

        </div>

        <div className="copyRightDiv" >
          <div style={{textAlign:"center"}} >Bhandare Finserve  <i style={{ marginRight: "5px", marginLeft: "5px" }} className="fa-solid fa-copyright"></i> 2023 | All Rights Reserved | <NavLink to="/privacypolicy">Privacy Policy</NavLink> | <NavLink to="/termsofuse">Terms of Use</NavLink></div>
          <div>Powered by ScaleZiva</div>
        </div>

      </div>
      {/* <div className="extra"></div> */}

    </>
  );
}

export default Emicalc;