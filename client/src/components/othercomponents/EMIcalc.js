import { useState } from "react";
import "../CSS/Calc.css"

function Emicalc() {

  const [principle, setPrinciple] = useState();
  const [tenure, setTenure] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState("Your Monthly Installment is:");

  const calculate = () => {

    let p = parseInt(principle);
    let t = parseInt(tenure);
    let r = parseInt(interest);

    let a = Math.pow(1 + r, t)

    let x = p * r * a
    let y = a - 1
    let z = x / y

    setResult(`${z}`)
  }

  return (
    <>

      <div className="emiCalc">
        <div>
          <h2>EMI Calculator</h2>

          <input className="calcView" value={result} type="text" placeholder="Your Monthly Installment is" />

          <input
            placeholder="Enter Principle Amount ₹"
            type="number"
            name="principle"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
          />
          <input
            placeholder="Enter Tenure in Months"
            type="number"
            name="tenure"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
          <input
            placeholder="Enter Rate of Interest"
            type="number"
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <p></p>
          <button onClick={calculate} >Calculate</button>
        </div>
      </div>

    

    </>
  );
}

export default Emicalc;