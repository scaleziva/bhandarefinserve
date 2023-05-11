import "../CSS/Chatbot.css";
import { useState } from "react";
import Bot from "../bot.png"

function Chatbot() {

    const [isBot, setBot] = useState(false);

    const enableBot = () => {
        if (isBot) {
            setBot(false)
        } else {
            setBot(true)
        }
    }

    return (
        <>

            <img onClick={enableBot} className="botImg" src={Bot} alt="" />

            {
                (isBot) ? 
                <div className="chatBotDiv">

                <div className="botBar">
                  <img src={Bot} alt="" />
                  <h4>Ziva</h4>
                  <i className="fa-solid fa-compress"></i>

                </div>

                <div className="chatSection">

                </div>

                {/* <div className="inputBot">
                    
                    <div>Query 1</div>
                    <div>Query 2</div>
                    <div>Query 3</div>
                </div> */}

                </div> : ""
            }


        </>
    );
}

export default Chatbot;