import { useState } from "react";
import TopicContent from "../components/reporting/TopicContent";
import LocationContent from "../components/reporting/LocationContent";
import ProofContent from "../components/reporting/ProofContent";
import RiviewAndSendContent from "../components/reporting/RiviewAndSendContent";

/**
 *
 * @param {{step: "location"|"proof"|"riview-and-send"|"topic"}} param0
 * @returns
 */
function Content({ step }){
    switch (step) {
        case "location":
            return <LocationContent/>;
        case "proof":
            return <ProofContent />;
        case "riview-and-send":
            return <RiviewAndSendContent/>;
        case "topic":
        default:
            return <TopicContent />;
    }
}

export default function ReportingPage() {

    const enumStep = {
        TOPIC: "topic",
        LOCATION: "location",
        PROOF: "proof",
        RIVIEW_AND_SEND: "riview-and-send"
    }
    const [stepState, setStepState] = useState({
        [enumStep.TOPIC]: {
            id: 1,
            ready: false,
            titleForm: "What needs fixing?",
            description: "Select the municipal service category that best matches the issue observed."
        },
        [enumStep.LOCATION]: {
            id: 2,
            ready: false,
            titleForm: "Where is it located?",
            description: "Provide street address, RT/RW, or notable landmark for inspection crews."
        },
        [enumStep.PROOF]: {
            id: 3,
            ready: false,
            titleForm: "Attach evidence",
            description: "Reports with photographic proof or audio notes are prioritized by field dispatchers."
        },
        [enumStep.RIVIEW_AND_SEND]: {
            id: 4,
            ready: false,
            titleForm: "Report summary & declaration",
            description: "Review the report and choose notifications before final submission."
        }
    });
    const [currentStep, setCurrentStep] = useState("topic");

    return (
    <div className="flex flex-col justify-start items-start w-[90%] gap-4">

        <div className="w-full h-fit flex flex-col items-start justify-center">

            <div className="w-full gap-4 max-lg:flex-col h-fit flex flex-row items-start justify-center">

                <div
                    className="w-1/3 max-lg:w-full gap-4 items-start justify-center flex-col flex">
                    <span className="uppercase text-brand-default text-base">Community Intake</span>
                    <h1 className="font-fraunces font-extrabold text-[3.5rem]">Report an Issue</h1>
                    <p className="font-public-sans line-h-8 font-400 text-brand-default text-lg">
                        Public civic reporting for Indonesian
                        municipal services.
                    </p>

                    <div className="flex flex-col py-6 items-start justify-center gap-4 w-full">
                        <button onClick={()=> setCurrentStep(enumStep.TOPIC)} className={"no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " + (currentStep === enumStep.TOPIC? "bg-brand-primary text-white rounded-4xl" : "bg-transparent text-brand-default")}
                            >
                            <div className="w-fit items-center flex-row justify-center">
                                <span className="font-ibm-plex-mono text-lg font-400 mr-4">01</span>
                                <span className="font-public-sans text-lg font-600">Topic</span>
                            </div>
                        </button>
                        <button onClick={()=> setCurrentStep(enumStep.LOCATION)} className={"no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " + (currentStep === enumStep.LOCATION? "bg-brand-primary text-white rounded-4xl" : "bg-transparent text-brand-default")}
                            >
                            <div className="w-fit items-center flex-row justify-center">
                                <span className="font-ibm-plex-mono text-lg font-400 mr-4">02</span>
                                <span className="font-public-sans text-lg font-400">Location</span>
                            </div>
                        </button>
                        <button onClick={()=> setCurrentStep(enumStep.PROOF)} className={"no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " + (currentStep === enumStep.PROOF? "bg-brand-primary text-white rounded-4xl" : "bg-transparent text-brand-default")}
                            >
                            <div className="w-fit items-center flex-row justify-center">
                                <span className="font-ibm-plex-mono text-lg font-400 mr-4">03</span>
                                <span className="font-public-sans text-lg font-400">Proof</span>
                            </div>
                        </button>
                        <button onClick={()=> setCurrentStep(enumStep.RIVIEW_AND_SEND)} className={"no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " + (currentStep === enumStep.RIVIEW_AND_SEND? "bg-brand-primary text-white rounded-4xl" : "bg-transparent text-brand-default")}
                            >
                            <div className="w-fit items-center flex-row justify-center">
                                <span className="font-ibm-plex-mono text-lg font-400 mr-4">04</span>
                                <span className="font-public-sans text-lg font-400">Riview & Send</span>
                            </div>
                        </button>
                    </div>

                    <div
                        className="w-full bg-brand-third border-2 border-dashed border-brand-border rounded-xl p-6 flex items-center flex-col justify-center">
                        <div className="w-full flex items-center justify-start gap-4">
                            <svg className="font-600 text-lg" width="1em" height="1em" viewBox="0 0 14 14"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_639)">
                                    <g clipPath="url(#clip1_214_639)">
                                        <path
                                            d="M6.99999 12.8334C6.99999 12.8334 11.6667 10.5001 11.6667 7.00008V2.91675L6.99999 1.16675L2.33333 2.91675V7.00008C2.33333 10.5001 6.99999 12.8334 6.99999 12.8334Z"
                                            strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"
                                            stroke="currentColor" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_214_639">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_214_639">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className="font-public-sans font-600 text-lg">Independent
                                Verification</span>
                        </div>
                        <p
                            className="py-4 text-brand-default leading-6 text-base font-public-sans font-400">
                            Our verification desk checks each report and routes it to the municipal agency (Bina
                            Marga, PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked
                            publicly.
                        </p>
                    </div>

                    <a className="no-underline text-brand-primary font-public-sans font-600 text-lg mt-4"
                        href="#">Cancel and return to feed</a>

                </div>



                <div
                    className="w-[70%] max-lg:w-full flex items-start flex-col justify-start h-fit gap-4">

                    <div
                        className="w-full flex items-start justify-center flex-col bg-brand-third p-6 rounded-xl border border-brand-border">

                        <div className="flex mb-4 w-full items-start justify-start flex-col gap-2">
                            <span className="font-ibm-plex-mono font-400 text-brand-default text-lg">Step { stepState[currentStep].id } of 04</span>
                                <span className="font-fraunces font-600 text-[2rem] font-bold">{ stepState[currentStep].titleForm }</span>
                                <span className="font-public-sans font-400 text-brand-default">{ stepState[currentStep].description }</span>
                        </div>

                        <Content step={currentStep} />

                        <div className="w-full items-center justify-between flex-row flex py-8">
                            <button
                                className="bg-transparent border-0 outline-none text-brand-primary text-base font-public-sans font-600">Cancel</button>
                            <a href="#"
                                className="bg-brand-primary no-underline text-white font-public-sans font-600 text-base rounded-2xl p-4 border-0 outline-none cursor-pointer flex items-center justify-center gap-2">
                                Continue
                                <svg width="1em" height="1em" viewBox="0 0 13 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_614)">
                                        <path d="M2.70831 6.5H10.2916" strokeWidth="1.08333" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M6.5 2.70825L10.2917 6.49992L6.5 10.2916" strokeWidth="1.08333"
                                            strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_614">
                                            <rect width="13" height="13" fill="currentColor" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
    );

}
