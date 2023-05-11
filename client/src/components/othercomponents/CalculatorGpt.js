import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function CalculatorGPT() {

    // const data = {
    //     labels: ['Interest', 'Principal'],
    //     datasets: [{
    //         label: 'Poll',
    //         data: [3, 6],
    //         backgroundColor: ['black', 'red'],
    //         borderColor: ['black', 'red'],
    //     }]
    // }

    const options = {}

    // for interest in graph
    const [interestForGraph, setInterestForGraph] = useState()

    // emi bro
    const [emiInput, setEmi] = useState()

    // For Principal
    const [principalInput, setprincipalInput] = useState(40000);

    function handleForPrincipal(event) {
        const value = event.target.value;
        setprincipalInput(value > 1000000000 ? 1000000000 : value); // limit the maximum value to 500000000
    }

    function handleSliderForPrincipal(event) {
        const value = event.target.value;
        setprincipalInput(value);
    }

    // for interest

    const [interestInput, setinterestInput] = useState(10);

    function handleForInterest(event) {
        const value = event.target.value;
        setinterestInput(value > 50 ? 50 : value); // limit the maximum value to 500000000
    }

    function handleSliderForInterest(event) {
        const value = event.target.value;
        setinterestInput(value);
    }

    //  For tenure 

    const [tenureInput, settenureInput] = useState(2);

    function handleForTenure(event) {
        const value = event.target.value;
        settenureInput(value > 30 ? 30 : value); // limit the maximum value to 500000000
    }

    function handleSliderForTenure(event) {
        const value = event.target.value;
        settenureInput(value);
    }

    const calcularteInterest = () => {
        setInterestForGraph((parseInt(principalInput) * parseInt(interestInput) * parseInt(tenureInput)) / 100)
    }

    const calculateEmi = () => {
        setTimeout(function () {
            let a = parseInt(principalInput) + parseInt(interestForGraph)
            let b = 12 * parseInt(tenureInput)

            setEmi(Math.trunc(a / b))
        }, 2000);

    }

    useEffect(() => {
        calcularteInterest();
        calculateEmi();
    }, [principalInput])

    useEffect(() => {
        calcularteInterest();
        calculateEmi();
    }, [interestInput])

    useEffect(() => {
        calcularteInterest();
        calculateEmi();
    }, [tenureInput])


    return (
        <div onMouseEnter={calculateEmi()} >

            {/*  For Principal */}

            <label htmlFor="principalInput">Input value:</label>
            <input
                type="number"
                id="principalInput"
                value={principalInput}
                min="0"
                max="1000000000"
                onChange={handleForPrincipal}
            />

            <label htmlFor="sliderValue">Slider value:</label>
            <input
                type="range"
                id="sliderValue"
                value={principalInput}
                min="100000"
                max="1000000000"
                step="1"
                onChange={handleSliderForPrincipal}
            />

            <p>Result: {principalInput}</p>

            {/*  For interest */}

            <label htmlFor="principalInput">Input value:</label>
            <input
                type="number"
                id="principalInput"
                value={interestInput}
                min="1"
                max="50"
                onChange={handleForInterest}
            />

            <label htmlFor="sliderValue">Slider value:</label>
            <input
                type="range"
                id="sliderValue"
                value={interestInput}
                min="1"
                max="50"
                step="1"
                onChange={handleSliderForInterest}
            />

            <p>Result: {interestInput}</p>

            {/*  For tenure */}

            <label htmlFor="principalInput">Input value:</label>
            <input
                type="number"
                id="principalInput"
                value={tenureInput}
                min="1"
                max="30"
                onChange={handleForTenure}
            />

            <label htmlFor="sliderValue">Slider value:</label>
            <input
                type="range"
                id="sliderValue"
                value={tenureInput}
                min="1"
                max="30"
                step="1"
                onChange={handleSliderForTenure}
            />

            <p>Result: {tenureInput}</p>

            <div style={{ width: "500px", height: "500px" }}  >

                <Doughnut
                    data={{
                        labels: [' Interest ', ' Principal '],
                        datasets: [{
                            label: ['Interest', 'Principal'],
                            data: [interestForGraph, principalInput],
                            backgroundColor: ['black', 'red'],
                            borderColor: ['black', 'red'],
                        }]
                    }}
                    options={options}
                ></Doughnut>

            </div>

            <h1>{emiInput}</h1>


        </div>
    );
}

export default CalculatorGPT;
