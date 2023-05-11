import "./CSS/Privacy.css";
import Footer from "./othercomponents/Footer";
import AOS from 'aos';
import { useEffect } from "react";

function PrivacyPolicy() {

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
                        <h3 data-aos="fade-left"> <i className="fa-solid fa-circle" style={{color:"#1a235c", marginRight:"10px", fontSize:"12px", position:"relative", top:"-5px"}}></i> Privacy Policy</h3>
                        <p>Bhandare Finserve Pvt. Ltd. is a financial advisory company that operates in Hyderabad, Telangana. The company works as a mediator between credible borrowers and trustworthy financial institutions such as banks and NBFCs in Hyderabad to provide suitable fundraising options for individual applicants and businesses at competitive interest rates. It is important to note that Bhandare Finserve is not a direct lender but instead an authorized and regulated platform that connects prospective borrowers with prominent financial institutions across Hyderabad, Telangana, India, for the sole purpose of acquiring a suitable loan. </p>
                        <p>At Bhandare Finserve, privacy is highly valued, and the company takes measures to protect its clients' information. The company complies with all the applicable laws of the Indian Government and assures its clients that it does everything in its power to protect their privacy rights while using the company's website and services. However, the company does not guarantee complete safety in situations where any form of compromise occurs due to intractable reasons. Additionally, Bhandare Finserve is not responsible for any unauthorized disclosure of client information to third parties, including service providers or advertisers whose content may be displayed on the website.  </p>
                        <p>All the terms and policies mentioned on the Privacy Policy page of the company's website are subject to change without prior notice. In case of any major changes, the borrowers and visitors on the website will be informed. The website reserves the right to change, update, or modify any of the policies or terms, without prior notice, at any point in the future. Users are advised to check the website regularly for any updates and stay aware of the revised terms. The continued use of the website implies that clients agree to abide by all the updated terms. Clients are requested to use Bhandare Finserve's services only if they agree with all the terms and policies, and if they do not agree with any of the terms, they are advised not to use the website or any of the services provided by Bhandare Finserve Pvt. Ltd.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-left"> <i className="fa-solid fa-circle" style={{color:"#1a235c", marginRight:"10px", fontSize:"12px", position:"relative", top:"-5px"}}></i> Collection Of PII</h3>
                        <p>To use the services provided by Bhandare Finserve, borrowers/customers are required to provide Personally Identifiable Information (PII) including their first name, middle name, last name, contact details such as residential address, phone number, and email address, as well as bank account and identity details, among other relevant data. This PII will be used to connect the borrower with suitable financiers from the company's network to apply for a loan or other financial services. By submitting their PII, borrowers imply their agreement with the terms and policies of the website, and will comply with them. If any borrower is not comfortable with providing their PII, they are advised not to use the website's services.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-left"> <i className="fa-solid fa-circle" style={{color:"#1a235c", marginRight:"10px", fontSize:"12px", position:"relative", top:"-5px"}}></i> Collection of NPII</h3>
                        <p>Non-Personally Identifiable Information (NPII) includes non-personal details of the user's visit to Bhandare Finserve’s website, such as the type of browser (Google Chrome, Internet Explorer, Firefox, Safari, etc.), the device used, the operating system, the Internet Service Provider, the IP address, date and time stamps, and other similar information. This information is used by the company to track user behavior and understand navigation patterns for providing an improved user experience. Additionally, the user's NPII may be shared with third-parties to better serve the customer.</p>
                        <p>Although Bhandare Finserve stores both Personally Identifiable Information (PII) and NPII securely, the company is not responsible for any accidental disclosure of data. If users exchange information with other parties outside of the website's functionality, the company will not be held liable for any claims that may arise.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-left"> <i className="fa-solid fa-circle" style={{color:"#1a235c", marginRight:"10px", fontSize:"12px", position:"relative", top:"-5px"}}></i> Third Party Cookies</h3>
                        <p>At Bhandare Finserve, we use certified and regulated cookies on our website, as well as on third-party websites, to offer better services to our customers. When you visit our website, these cookies are embedded in your browser and help us track information such as your browser details, IP address, and operating system. We use this data to understand your behavior and navigation on the website, thereby enhancing your user experience. All information collected by these cookies is securely stored in our database and used only for genuine processes related to availing loans and other financial services from Bhandare Finserve. If you do not wish to be tracked by cookies, you can adjust the settings on your device and browser accordingly. However, please note that disabling certain cookies may impact the security of your browser or your personal information.</p>
                    </div>
                    <div className="privacySubDiv">
                        <h3 data-aos="fade-left"> <i className="fa-solid fa-circle" style={{color:"#1a235c", marginRight:"10px", fontSize:"12px", position:"relative", top:"-5px"}}></i> Security & Privacy</h3>
                        <p>The policies, terms & conditions mentioned above are specifically applicable to users of the Bhandare Finserve website who wish to avail of loans or financial services and agree to submit accurate and complete PII and NPII while also adhering to the policies, terms & conditions set forth on the website. Users are urged to take the necessary steps to disable cookies on their browser, unsubscribe from emails, and follow other relevant procedures, such as registering with DND or NCPR services, to prevent their information from being shared with third parties or to cease receiving promotional communications from the company. Please note that it may take up to 45 days from the date of registration for DND or other such services to become effective, during which time you may still receive calls, messages, emails, or other promotional communications from us. If you do not want to share any information with us, please stop using our website and services immediately.</p>
                        <p>The Privacy Policy and other disclosures on the website apply only to information provided by the user on the website and to information shared with the company. Bhandare Finserve is not responsible for any security breaches caused by actions taken by third parties. Additionally, the company will not be liable for any damages, losses, or misuse of data or information resulting from a Force Majeure event, which could include, but is not limited to, government actions, natural disasters, accidents, explosions, sabotage, riots, unauthorized data access or storage device use, system crashes, security breaches, and other unforeseen events. We encourage users to understand the risks associated with using web-based services and financial obligations before making any decisions.</p>
                    </div>

                </div>

            </div>

            <Footer/>

        </>

    )
}

export default PrivacyPolicy;