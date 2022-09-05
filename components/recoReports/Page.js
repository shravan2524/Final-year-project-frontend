import React, { useState, useEffect } from "react";
import Header from "./Header";
import Stepper from './Stepper';
import AgGrid from './AgGrid';
function Wizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const stepArray = [
        "Company Details",
        // "Location",
        // "Service Offered",
        "Business Hours",
        "Complete"
    ];
    const handleClick = (clickType) => {
        let newStep = currentStep;
        (clickType == "next") ? newStep++ : newStep--;
        // Check if steps are within the boundary
        if (newStep > 0 && newStep <= stepArray.length) {
            setCurrentStep(newStep)
        }
    }
    return (
        <>
            <div className="container horizontal mt-5 mb-12">
                <Stepper
                    steps={stepArray}
                    currentStepNumber={currentStep}
                />
            </div>
            <div className="container flex justify-around my-8 ">
                <button onClick={() => handleClick()} className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-orange-700 hover:bg-orange-900 text-white font-normal py-2 px-4 mr-1 rounded"> Previous </button>
                <button onClick={() => handleClick("next")} className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-700 hover:bg-orange-700 text-orange-700 hover:text-white font-normal py-2 px-4 rounded"> Next </button>
            </div>
        </>
    )
}

export default function Page() {
    return (
        <>
            <Header />
            <div className="container">
                <AgGrid />
            </div>
        </>
    );
}