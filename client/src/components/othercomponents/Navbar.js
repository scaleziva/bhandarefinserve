import Hamburger from "../othercomponents/Hamburger";

const Navbar = () => {
    return (
        <>

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
                    <button style={{ background: "white", border: "none", padding: "10px", width: "100px", height: "40px", marginTop: "5px", borderRadius: "10px", marginRight: "30px", lineHeight: "10px" }}  ><b>Login</b> </button>
                </div>

            </div>

        </>
    )
};

export default Navbar;