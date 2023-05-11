import "../CSS/Searchbar.css";
import "../CSS/Home.css";
import { NavLink } from "react-router-dom";

import { useState } from "react";

const SearchBar = () => {

    const [resultsshow, setresultsshow] = useState(false);

    const showMenu = () => {
        if (resultsshow === false) {
            setresultsshow(true)
        } else if (resultsshow === true) {
            setresultsshow(false)
        }
    }

    const servicesArr = [
        { id: "691", name: "Home Loans", link: "/services/homeloan" },
        { id: "692", name: "Personal Loan", link: "/services/personalloan" },
        { id: "693", name: "Business Loan", link: "/services/personalloan" },
        { id: "694", name: "Car Loan", link: "/services/personalloan" },
        { id: "695", name: "Education Loans", link: "/services/educationloan" },
        { id: "696", name: "Life Insurance", link: "/services/lifeinsurance" },
        { id: "697", name: "Health Insurance", link: "/services/healthinsurance" },
        { id: "698", name: "Vehicle Insurance", link: "/services/vehicleinsurance" },
        { id: "699", name: "Labour License", link: "/services/labourlicense" },
        { id: "6910", name: "Trade License", link: "/services/tradelicense" },
        { id: "6911", name: "GST Registration", link: "/services/gst" },
        { id: "6912", name: "Food License (FSSAI)", link: "/services/foodlicense" },
        { id: "6913", name: "Trademark Registration", link: "/services/trademarkreg" },
        { id: "6914", name: "MSME", link: "/services/msme" },
        { id: "6915", name: "Income Tax", link: "/services/accounting" },
        { id: "6916", name: "Accounting", link: "/services/gstfiling" },
        { id: "6917", name: "GST Filing", link: "/services/incometax" },
    ];

    const [serviceInput, setServiceInput] = useState("")

    const onchangeInput = (e) => {
        setServiceInput(e.target.value)
    }

    return (
        <>
            <div className="searchBarMain">

                <div className="searchbarDiv" onClick={showMenu} >
                    <input className="homeInput" type="text" value={serviceInput} onChange={onchangeInput} name="serviceInput" placeholder="Search services here" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                {

                    resultsshow ? <div className="searchbarResults">
                        {servicesArr.filter((inputVal) => {
                            const searchTerm = serviceInput.toLowerCase()
                            const namee = inputVal.name.toLowerCase();
                            return namee.startsWith(searchTerm)
                        }).map((inputVal) => {
                            return (
                                <NavLink className="searchbarResultsSub" key={inputVal.id} to={`${inputVal.link}`} >
                                    {inputVal.name}
                                </NavLink>
                            )
                        })}
                        <NavLink className="searchbarResultsSub nomoreResults" >
                            No more results
                        </NavLink>
                    </div> : ""

                }

            </div>
        </>
    )
}

export default SearchBar;