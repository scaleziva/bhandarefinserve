import "./CSS/Services.css";
import "../App.css";
import { useEffect } from "react";
import AOS from 'aos';
import Whatsapp from "./whatsApp.jpeg";
import Footer from "./othercomponents/Footer";
import Hamburger from "./othercomponents/Hamburger";

function Services() {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000
    });
  }, []);

  return (
    <>

      <img src={Whatsapp} alt="lol" className="whatsappBtn" />

      {/* Navbar */}
      <div className="navBarHome" >

        <div style={{ marginTop: "15px" }}>
          <Hamburger />
        </div>

        <div>
          <button style={{ background: "white", border: "none", padding: "10px", width: "100px", height: "40px", marginTop: "5px", borderRadius: "10px", marginRight: "30px", lineHeight: "10px" }}  ><b>Logo</b> </button>
          <input style={{ width: "40vw", borderRadius: "10px", padding: "5px 10px", outline: "none", border: "none" }} type="text" placeholder="Search services here" />
        </div>


        <div className="iconDiv">
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-file-circle-check"></i>
          <i className="fa-solid fa-gear"></i>
        </div>

        <div>
          <button style={{ background: "white", border: "none", padding: "10px", width: "100px", height: "40px", marginTop: "5px", borderRadius: "10px", marginRight: "30px", lineHeight: "10px" }}  ><b>{"<-"}</b> </button>
        </div>

      </div>

      {/* Navbar Ends */}

      <div className="partTwoService" >

        <div className="partTwoDivOneService" >

          <h3>Our Services</h3>

          <div className="linesDivService" >
            <h6 data-aos="fade-right" >These are the services, we have expertise in.</h6>
            {/* <h6 data-aos="fade-left">But lost on the way ahead?</h6> */}
          </div>

          <div className="featuresDivService">
            <div className="featuresDivDivService" >
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
            </div>
            <div className="featuresDivDivService" >
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
            </div>
            <div className="featuresDivDivService" >
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
              <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"><h4>Service</h4></div>
            </div>
            <div className="btnDivHome" style={{ margin: "50px auto" }}><button>Back to home?</button></div>
          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Services;