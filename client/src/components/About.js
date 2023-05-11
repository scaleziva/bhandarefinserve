import "./CSS/About.css";
import "../App.css";
import { useEffect, useState } from "react";
import AOS from 'aos';
import Whatsapp from "./whatsApp.jpeg";
import Footer from "./othercomponents/Footer";
import NavbarForAbout from "./othercomponents/NavbarforAbout.js";

import ImageAbout from "./BFS LOGO - About us.png";
import WhiteImg from "./ffffff.png";

import OurVisMis from "./ourMissVisi.png";
import OurVisMisMob from "./OurMissionOurVisionPhone.png";
import Badge from "./badge.png";
import RajBhandare from "./rajBhandare.png";
import RanjeetBhandare from "./ranjeetBhandare.png";

import BgGrey from "./Bhandarebg.jpg";

function About() {

  const [choosingDiv, setchoosingDiv] = useState(true);

  const settingChoosinDiv = () => {
    if (choosingDiv === false) {
      setchoosingDiv(true)
    } else if (choosingDiv === true) {
      setchoosingDiv(false)
    }
  }

  // const SettingMissVis = ()=>{
  //      if (window.width >= 760) {
  //         return (<></>)
  //       } else{
  //         return (<></>)
  //      }
  // }

  const RenderingChoose = () => {
    return (
      <>
        <div className="whyChooseDiv" >

          <div className="whyChooseSub1" >

            <div className="whyChooseCard" data-aos="fade-up">

              <div className="whyChoose1sub">
                <img src={Badge} alt="" />
                <h4>Trust</h4>
                <img src={Badge} alt="" />
              </div>

              <p>Building trust with clients is not just a buzzword – it's a way of life. We at Bhandare Finserve take a personalized approach to financial services. We believe in complete transparency, so clients always know exactly what's happening with their finances.</p>

            </div>

            <div className="whyChooseCard" data-aos="fade-up">

              <div className="whyChoose1sub">
                <img src={Badge} alt="" />
                <h4>Ease</h4>
                <img src={Badge} alt="" />
              </div>

              <p>With a focus on delivering end-to-end solutions, we offer a wide range of options to suit your specific needs. We believe that the financial services process should be hassle-free and stress-free, which is why we provide quick documentation and streamline procedures.</p>

            </div>


          </div>

          <div className="whyChooseSub2" >

            <div className="whyChooseCard" data-aos="fade-up">

              <div className="whyChoose1sub">
                <img src={Badge} alt="" />
                <h4>Tenacity</h4>
                <img src={Badge} alt="" />
              </div>

              <p>We are persistent in working closely with clients to understand their unique needs and goals, and then tailoring solutions that are suitable for them, making complex financial services as easy as it gets.</p>

            </div>

          </div>
        </div>
      </>
    )
  }

  const [classForSpinningValues, setclassForSpinningValues] = useState("hidden")
  const [classForSpinningValuesSubside, setclassForSpinningValuesSubside] = useState("hiddenAlt")

  const changeBg = () => {

    // console.log(window.scrollY);
    if (window.scrollY >= 400) {
      setclassForSpinningValues("");
      setclassForSpinningValuesSubside("hidden");
    } else {
      setclassForSpinningValues("hidden");
      setclassForSpinningValuesSubside("hiddenAlt");
    }

  }

  window.addEventListener("scroll", changeBg);


  // for directions

  const [classForDirection, setclassForDirection] = useState("hidden")
  const [classForDirectionSubside, setclassForDirectionSubside] = useState("hiddenAltDirect")

  const changeBgDirect = () => {

    // console.log(window.scrollY);
    if (window.scrollY >= 1474) {
      setclassForDirection("");
      setclassForDirectionSubside("hidden");
    } else {
      setclassForDirection("hidden");
      setclassForDirectionSubside("hiddenAlt");
    }

  }

  window.addEventListener("scroll", changeBgDirect);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000
    });
  }, []);

  return (
    <>

      <a href="https://wa.me/918142522522">
        <img src={Whatsapp} alt="lol" className="whatsappBtn" />
      </a>

      <div className="aboutMain">

        <div style={{ position: "absolute" }} >
          <NavbarForAbout />
        </div>
        <center>
          <h2 className="abtMainHeading" style={{ position: "relative", top: "100px" }} >WHO ARE WE?</h2>
        </center>

      </div>
      {/* Main content */}

      <center>

        <div className="aboutDiv">

          <div className="subAboutDiv">

            <div className="subAboutDiv2">

              <div className="animate-img subAboutDivSub1">
                <img src={WhiteImg} alt="" className="whiteImg image" />
                <img className="imgLol image" src={ImageAbout} alt="" />
              </div>
              <div className="subAboutDivSub2 animate-text">
                <p> <span className="specialText" >Welcome to Bhandare Finserve</span>  - A Financial Services Firm which came into being in the year 2020 with the name of Bhandare Financial Services and was later revamped into Bhandare Finserve in the year 2021. </p>
                <p> <span className="specialText" >We are of the belief</span> that financial empowerment is the key to a brighter future. As a leading financial services firm, we specialize in providing Loans, Insurance, Business Registrations, and Filing services that cater to the unique needs of our clients</p>
                <p> <span className="specialText" >We understand</span> that navigating the financial world can be overwhelming and time-consuming. That's why we are dedicated to providing our clients with a hassle-free process that ensures quick documentation and affordable rates. With our extensive network of banks and financial institutions, we are able to offer our clients the best possible solutions that fit their financial needs. </p>
              </div>
            </div>

            {/* <div className="aftersubAbout2" >
              <p>At Bhandare Finserve, we pride ourselves on our commitment to excellence and our passion for helping our clients achieve their goals. Whether you're a small business owner looking to register your business, or an individual seeking a loan or insurance coverage, we are here to provide you with the expert guidance and support you need to succeed. So why wait? Contact us today and let us help you unlock your financial potential!</p>
            </div> */}

          </div>

        </div>

      </center>

      {/* Spinning with values */}

      <h1 className="spinningH1" style={{ width: "100vw", textAlign: "center" }} >Spinning with Values</h1>

      <div className={classForSpinningValuesSubside}></div>

      <div className={`aboutPart2 ${classForSpinningValues}`}>


        <img className="aboutPart2img" src={OurVisMis} alt="" />

        <div style={{ width: "100vw", height: "10px" }} >
          <img src={WhiteImg} alt="" className="whiteImgshort1" />
          <img src={WhiteImg} alt="" className="whiteImgshort2" />
        </div>

      </div>

      <div className={`aboutPart22 ${classForSpinningValues}`}>

        <img className="aboutPart2img" src={OurVisMisMob} alt="" />

      </div>

      {/* Spinning with values ends */}


      {/* About B Brothers */}

      <div className="aboutPartfour">

        <h2 className="duoOfEx" style={{textAlign:"center", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "20px", background: "#0251aa", color: "white", marginTop: "50px", borderRadius: "12px" }} >THE DUO OF EXCELLENCE</h2>

        <div className="nameTagAbt1">
          <img src={RajBhandare} alt="" className="nameTagAbt" />
        </div>

        <div className="contentAbt">

          <div className="contentImg" >
            <img src={BgGrey} alt="" />
          </div>

          <div className="contentAbtdiv" >
            <p> <span className="specialText"> Meet Mr. Rajkumar Bhandare </span>- the man, the myth, the finance guru! <br />
              As the Founder & CEO of Bhandare Finserve, one of the leading financial services firms in Hyderabad, Mr. Bhandare is on a mission to simplify financial solutions for people from all walks of life.
            </p>
            <p>With over 15 years of experience in the field of finance, Mr. Bhandare is a true innovator and visionary leader. He is committed to providing his clients with the best possible solutions that are tailored to their unique needs, and he is always looking for new and innovative ways to make the financial world more accessible and user-friendly. </p>
            <p>But Mr. Bhandare is more than just a finance expert - he is also a lively and dynamic presence in the office, known for his infectious energy and his commitment to creating a positive and engaging working environment for his team.</p>
          </div>

        </div>

        <div className={classForDirectionSubside} ></div>

        <div className={`animeAbt ${classForDirection}`}>


          <div className="verticalOne">
            | <br />
            | <br />
            | <br />
            | <br />
            | <br />
          </div>
          <div className="horizontalOne">

            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>
            <div>
              <i className="fa fa-minus" ></i>
            </div>

          </div>
          <div className="verticalTwo">
            | <br />
            | <br />
            | <br />
            | <br />
            | <br />
          </div>

          <div style={{ height: "10px" }} >
            <img src={WhiteImg} className="imgForLines" alt="" />
          </div>

        </div>

        <div className="nameTagAbt2">
          <img src={RanjeetBhandare} alt="" className="nameTagAbt" />
        </div>

        <div className="contentAbt">

          <div className="contentAbtdiv" >
            <p><span className="specialText">Meet Mr. Ranjeet Bhandare </span>  - The Young Finance Savvy <br />
              Mr. Bhandare, the big boss and mastermind behind Bhandare Finserve - a top-notch financial services firm in Hyderabad, is on a quest to turn complicated financial jargon into something your grandmother can understand.
            </p>
            <p>With more than 5 years of financial know-how under his belt, Mr. Bhandare is not your typical pencil-pushing suit. He's a true trailblazer, a visionary who's constantly pushing the envelope and seeking new ways to make finances fun, friendly, and easy to grasp.</p>
            <p>But don't think for a second that Mr. Bhandare is all work and no play. Au contraire! He's the life of the office party,  his charisma and zest for life are unmatched, and he's passionate about fostering a positive and supportive work culture for his team.</p>
          </div>

          <div className="contentImg" >
            <img src={BgGrey} alt="" />
          </div>

        </div>

      </div>

      {/* About B Brothers ends */}

      {/* Why us bro? */}

      <div className="aboutPart3" >

        <h2>WHY CHOOSE US?</h2>

        <div className="aboutPartImg" >
          <img onClick={settingChoosinDiv} className="badgeImg" src={Badge} alt="" />
          <p onClick={settingChoosinDiv} >Click to know</p>
        </div>

        {
          choosingDiv ? ("") : <RenderingChoose />
        }

      </div>

      {/* Why us bro? ends */}

      {/* Main content ends */}

      <Footer />

    </>
  );
}

export default About;