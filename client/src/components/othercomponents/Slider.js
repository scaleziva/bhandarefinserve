
function Slider() {
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">


                    {/* slide 1 */}
                    <div className="carousel-item active carouselSide carouselSide1">

                        <div className="carouselSlideOne" >
                            {/* <u><h4>BHANDARE FINSERVE</h4></u>
                            <h2>Finance? We Got you covered !</h2>
                            <p>We are your one-stop destination for loans, insurances, licenses, and more. Whether you are looking to finance your dream home, secure your future with life or health insurance, or obtain licenses for your business, we are here to assist you every step of the way !</p>
                            <div className="btnDivHome">
                                <a href="/services" ><button>Get Started</button></a>
                                <a href="/about"> <button>Know More</button></a>
                            </div> */}
                            {/* <img className="carouselSlideTwo" src="https://fastly.picsum.photos/id/59/200/200.jpg?hmac=q9DbuoFh1L_NWnGk3AGdzuEOlg5bBW4JmBSgWmQdT74" alt="" /> */}
                        </div>

                    </div>


                    {/* slide 2 */}
                    <div className="carousel-item carouselSide carouselSide2">

                        <div className="carouselSlideOne" >
                            {/* <h4>Bhandare Finserve</h4>
                            <h2>Personalised Aim - Assist</h2>
                            <p> We Assist you in fulfilling all your Aims and manage your finances with ease. We work closely with our clients to develop personalized solutions that fit their specific needs.</p>
                            <p>Don’t just take our word for it, Here’s what our clients have to say !</p>
                            <div className="btnDivHome">
                                <a href="/services" ><button>Services</button></a>
                                <a href="/testimonials"> <button>Testimonials</button></a>
                            </div> */}

                            {/* <img className="carouselSlideTwo" src="https://fastly.picsum.photos/id/59/200/200.jpg?hmac=q9DbuoFh1L_NWnGk3AGdzuEOlg5bBW4JmBSgWmQdT74" alt="" /> */}
                        </div>

                    </div>

                    {/* slide 3 */}
                    <div className="carousel-item carouselSide carouselSide3">

                        <div className="carouselSlideOne" >
                            {/* <h4>Bhandare Finserve</h4>
                            <h2>Let’s Talk & Transform</h2>
                            <p>Follow our socials to stay up-to-date with the latest news, updates, industry insights, valuable finance tips. And if you have a question or need assistance with any of our services, don't hesitate to reach out. Our team is always available to help !</p>
                            <div className="btnDivHome">
                                <a href="/services" ><button>Explore Socials</button></a>
                                <a href="/testimonials"> <button>Connect with us</button></a>
                            </div> */}

                            {/* <img className="carouselSlideTwo" src="https://fastly.picsum.photos/id/59/200/200.jpg?hmac=q9DbuoFh1L_NWnGk3AGdzuEOlg5bBW4JmBSgWmQdT74" alt="" /> */}
                        </div>

                    </div>


                </div>

                <a style={{ width: "30px", marginRight: "10px" }} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Previous</span>
                </a>
                <a style={{ width: "30px", marginRight: "20px" }} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>

    )
}

export default Slider;