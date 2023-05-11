import "./CSS/Privacy.css";
import Footer from "./othercomponents/Footer";
import AOS from 'aos';
import { useEffect } from "react";

function Termsofuse() {

    useEffect(() => {
        AOS.init({
            offset: 30,
            duration: 1000
        });
    }, []);

    return (
        <>
            <div style={{ width: "100vw", height: "50px", background: "black", color: "white", display: "flex", alignItems: "Center", justifyContent: "center" }} >Navbar Goes here</div>

            <div className="privacyUpper">

                <div className="privacyMain">

                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Terms of Use</h3>
                        <p data-aos="fade-right" >Bhandare Finserve is a well-established financial advisory firm located in Hyderabad, Telangana, that facilitates connections between reliable financial institutions such as banks and NBFCs in Hyderabad with creditworthy borrowers, providing suitable fundraising options for individuals and businesses at highly competitive interest rates. </p>
                        <p data-aos="fade-right" >It is highly recommended that users carefully review all information, terms, conditions, and policies provided on the Bhandare Finserve website before entering into any final agreements for financial services. Bhandare Finserve reserves the right to modify or update any terms or conditions without prior notice. Users are encouraged to regularly check the website for any changes and stay up to date with the revised terms. By continuing to use the website, users are indicating their agreement to all updated terms. If users agree with all the terms, they are welcome to avail of the services and continue with the processes. However, if any of the terms are not agreeable, users are advised not to use the website or any services offered by Bhandare Finserve.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Services Description</h3>
                        <p data-aos="fade-right" >In an effort to provide users with information on various financial services and products, such as loans, credit cards, balance transfer services, etc., Bhandare Finserve operates this website. To utilize the services of this company and receive a quote, users are required to provide all necessary details with accuracy. By utilizing this website and its services, you consent to Bhandare Finserve contacting you at any time through various modes of communication, including phone calls, text messages, and emails, in order to gain more information about your interest in their services. Additionally, you agree to receive promotional calls, messages, and emails from the company.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Access to the Website & License</h3>
                        <p data-aos="fade-right" >You acknowledge that the website is owned by Bhandare Finserve, and the company reserves all the legal rights, title, content, and the IPR of the services mentioned on the website. You shall use the services on this website only if you are above 18 years of age and if you are an Indian resident only. You can check for the other eligibility criteria on the website pages, and know if you are eligible to apply for a loan or not with us. If you are availing the services, you shall have to provide true, accurate, and updated details about yourself. If any of the provided information is found to be incomplete or inaccurate, Bhandare Finserve reserves the rights to refuse or discontinue any of the connected services. Bhandare Finserve shall not be held responsible for any claims made by you in future that may arise due to the transactions or agreements made by using this website. It is the responsibility of the borrower to consider all the risks, the authenticity of the lender, and move ahead with the process, and the website shall not have a stand in any of the decisions made by the borrower.</p>
                        <p data-aos="fade-right" >The website shall be used only for the purpose of searching, gathering information about the financial services provided by Bhandare Finserve, applying & requesting a quote, and shall not be used for any illegal or forbidden purposes. As the website and the company operate in India, you shall abide by the pertaining Indian laws. The company reserves all the rights to restrict, suspend, or terminate your access to the website, without any prior notice.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Third - Party Partners</h3>
                        <p data-aos="fade-right" >The website displays third-party content related to financial services such as loans, credit cards, and others, as well as non-financial content. However, the display of such content does not indicate endorsement or support of the brands or their services by Bhandare Finserve. The company is not responsible for the authenticity of third-party services, and any interaction with them through the website or any resulting damages or loss is solely at the user's risk. Therefore, it is the user's responsibility to verify the legitimacy of third-party services before engaging with them, and any expenses or damages resulting from such interactions are solely their responsibility.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Liability Limitation</h3>
                        <p data-aos="fade-right" >All the people related to Bhandare Finserve, including the representatives, employees, affiliates, and management, shall not be held responsible for the following occurrences, which have been mentioned or not mentioned in the contract -</p>
                        <p data-aos="fade-right" >(i) Any form of direct or indirect loss, damage, injury, claim, accident, act of god.</p>
                        <p data-aos="fade-right" >(ii) The performance or non-performance of the lender or us.</p>
                        <p data-aos="fade-right" >(iii) Any delay or failure, without limitation.</p>
                        <p data-aos="fade-right" >(iv) The use or inability to use the website content.</p>
                        <p data-aos="fade-right" >(v) Any viruses or issues that may arise to your electronic device upon accessing the website or downloading any of its content.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Indemnification</h3>
                        <p data-aos="fade-right" >By using the website or violating any of its policies, terms, or conditions, you pledge to comply with the indemnification clause. Additionally, you acknowledge that all employees, agents, affiliates, and management of Bhandare Finserve are harmless and agree to indemnify the company against any and all claims, losses, penalties, fees, damages, or expenses that may arise.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Trademarks & Content</h3>
                        <p data-aos="fade-right" >Bhandare Finserve claims ownership of all logos, service marks, trademarks, and other content displayed on the website. Without prior notice to the company, it is strictly prohibited to reuse, copy, duplicate, distribute, display or adapt any information from the website for public or commercial use. The company reserves all copyrights and intellectual property rights for the website and its content.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-right" > <i className="fa-solid fa-circle" style={{ color: "#1a235c", marginRight: "10px", fontSize: "12px", position: "relative", top: "-5px" }}></i> Additional Terms</h3>
                        <p data-aos="fade-right" >In the event that any of the terms, conditions, or policies mentioned are deemed invalid or void, all parties must file a petition with the court. This condition will be considered severable and will not affect the validity or authorization of the agreement or any remaining conditions. The headings and subheadings on the website are for clarification purposes only and do not limit the scope or alter the meaning of the content. Failure to take immediate action on any breach of terms or conditions does not constitute a waiver, and the website reserves the right to take appropriate action at any time without notice. Bhandare Finserve reserves the right to change, modify, or update any terms, policies, and conditions related to the financial services provided without prior notice.</p>
                        <p data-aos="fade-right" >By continuing to use the financial services provided by Bhandare Finserve, you acknowledge that you are aware of and agree to all the terms, conditions, and policies mentioned on the website. You also agree to abide by these policies to the fullest extent possible.</p>
                    </div>

                </div>

            </div>

            <Footer />

        </>

    )
}

export default Termsofuse;