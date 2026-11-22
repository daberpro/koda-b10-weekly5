import { useState } from "react";
import TopicContent from "../components/reporting/TopicContent";
import LocationContent from "../components/reporting/LocationContent";
import ProofContent from "../components/reporting/ProofContent";
import RiviewAndSendContent from "../components/reporting/RiviewAndSendContent";
import { useEffect } from "react";
import { verifyUserCredential } from "../lib/util";
import { NavLink, Outlet, redirect, useMatches, useNavigate } from "react-router";
import { TempReportContext } from "../lib/contexts";
import { useRef } from "react";
import { Form } from "react-hook-form";

// /**
//  *
//  * @param {{step: "location"|"proof"|"riview-and-send"|"topic"}} param0
//  * @returns
//  */
// function Content({ step, nextStepConfirm}) {
//     switch (step) {
//         case "location":
//             return (
//                 <LocationContent nextStepConfirm={nextStepConfirm}>
//                     <FormNavigateContent currentStep={step} />
//                 </LocationContent>
//             );
//         case "proof":
//             return (
//                 <ProofContent nextStepConfirm={nextStepConfirm}>
//                     <FormNavigateContent currentStep={step} />
//                 </ProofContent>
//             );
//         case "riview-and-send":
//             return (
//                 <RiviewAndSendContent nextStepConfirm={nextStepConfirm}>
//                     <FormNavigateContent currentStep={step} />
//                 </RiviewAndSendContent>
//             );
//         case "topic":
//         default:
//             return (
//                 <TopicContent nextStepConfirm={nextStepConfirm}>
//                     <FormNavigateContent currentStep={step} />
//                 </TopicContent>
//             );
//     }
// }

function CheckIcon() {
    return (
        <svg
            className="text-brand-primary text-2xl"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_214_781)">
                <path
                    d="M11.6667 3.5L5.25004 9.91667L2.33337 7"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#0F6B4F"
                />
            </g>
            <defs>
                <clipPath id="clip0_214_781">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default function ReportingPage(props) {
    const [report, setReport] = useState({
        id: "",
        topic: "",
        location: {
            area: "",
            address: "",
            coordinate: "",
        },
        evidence: {
            files: [],
        },
        title: "",
        details: "",
        anonymus: "",
        filerName: "",
        email: "",
        phone: "",
        confirm: "",
        alertChannels: [],
        date: "",
        status: "submitted",
        upvote: 0,
    });

    const matches = useMatches();
    const navigate = useNavigate();
    function nextStepConfirm() {
        const currentPath = matches[matches.length - 1];
        if (currentPath.pathname) {

            switch (currentPath.pathname) {
                case "/reporting/topic": {
                    return navigate("/reporting/location");
                }
                case "/reporting/location": {
                    return navigate("/reporting/proof");
                }
                case "/reporting/proof": {
                    return navigate("/reporting/riview-and-send");
                }
            }
        }
    }

    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <div className="w-full h-fit flex flex-col items-start justify-center">
                <div className="w-full gap-4 max-lg:flex-col h-fit flex flex-row items-start justify-center">
                    <div className="w-1/3 max-lg:w-full gap-4 items-start justify-center flex-col flex">
                        <span className="uppercase text-brand-default text-base">
                            Community Intake
                        </span>
                        <h1 className="font-fraunces font-extrabold text-[3.5rem]">
                            Report an Issue
                        </h1>
                        <p className="font-public-sans line-h-8 font-400 text-brand-default text-lg">
                            Public civic reporting for Indonesian municipal
                            services.
                        </p>

                        <div className="flex flex-col py-6 items-start justify-center gap-4 w-full">
                            <NavLink
                                to="/reporting/topic"
                                className={({ isActive }) => {
                                    return (
                                        "no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " +
                                        (isActive
                                            ? "bg-brand-primary text-white rounded-4xl"
                                            : "bg-transparent text-brand-default")
                                    );
                                }}
                            >
                                <div className="w-fit items-center flex-row justify-center">
                                    <span className="font-ibm-plex-mono text-lg font-400 mr-4">
                                        01
                                    </span>
                                    <span className="font-public-sans text-lg font-600">
                                        Topic
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink
                                to="/reporting/location"
                                className={({ isActive }) => {
                                    return (
                                        "no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " +
                                        (isActive
                                            ? "bg-brand-primary text-white rounded-4xl"
                                            : "bg-transparent text-brand-default")
                                    );
                                }}
                            >
                                <div className="w-fit items-center flex-row justify-center">
                                    <span className="font-ibm-plex-mono text-lg font-400 mr-4">
                                        02
                                    </span>
                                    <span className="font-public-sans text-lg font-400">
                                        Location
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink
                                to="/reporting/proof"
                                className={({ isActive }) => {
                                    return (
                                        "no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " +
                                        (isActive
                                            ? "bg-brand-primary text-white rounded-4xl"
                                            : "bg-transparent text-brand-default")
                                    );
                                }}
                            >
                                <div className="w-fit items-center flex-row justify-center">
                                    <span className="font-ibm-plex-mono text-lg font-400 mr-4">
                                        03
                                    </span>
                                    <span className="font-public-sans text-lg font-400">
                                        Proof
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink
                                to="/reporting/riview-and-send"
                                className={({ isActive }) => {
                                    return (
                                        "no-underline w-full flex justify-between cursor-pointer items-center p-4 font-public-sans font-400 text-base " +
                                        (isActive
                                            ? "bg-brand-primary text-white rounded-4xl"
                                            : "bg-transparent text-brand-default")
                                    );
                                }}
                            >
                                <div className="w-fit items-center flex-row justify-center">
                                    <span className="font-ibm-plex-mono text-lg font-400 mr-4">
                                        04
                                    </span>
                                    <span className="font-public-sans text-lg font-400">
                                        Riview & Send
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div className="w-full bg-brand-third border-2 border-dashed border-brand-border rounded-xl p-6 flex items-center flex-col justify-center">
                            <div className="w-full flex items-center justify-start gap-4">
                                <svg
                                    className="font-600 text-lg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_214_639)">
                                        <g clipPath="url(#clip1_214_639)">
                                            <path
                                                d="M6.99999 12.8334C6.99999 12.8334 11.6667 10.5001 11.6667 7.00008V2.91675L6.99999 1.16675L2.33333 2.91675V7.00008C2.33333 10.5001 6.99999 12.8334 6.99999 12.8334Z"
                                                strokeWidth="1.16667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="currentColor"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_639">
                                            <rect
                                                width="14"
                                                height="14"
                                                fill="white"
                                            />
                                        </clipPath>
                                        <clipPath id="clip1_214_639">
                                            <rect
                                                width="14"
                                                height="14"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span className="font-public-sans font-600 text-lg">
                                    Independent Verification
                                </span>
                            </div>
                            <p className="py-4 text-brand-default leading-6 text-base font-public-sans font-400">
                                Our verification desk checks each report and
                                routes it to the municipal agency (Bina Marga,
                                PAM JAYA, Dishub, DLH, Satpol PP, Citata).
                                Resolution timestamps are tracked publicly.
                            </p>
                        </div>

                        <a
                            className="no-underline text-brand-primary font-public-sans font-600 text-lg mt-4"
                            href="#"
                        >
                            Cancel and return to feed
                        </a>
                    </div>

                    <div className="w-[70%] max-lg:w-full flex items-start flex-col justify-start h-fit gap-4">
                        <div className="w-full flex items-start justify-center flex-col bg-brand-third p-6 rounded-xl border border-brand-border">
                            <TempReportContext.Provider
                                value={[report, setReport]}
                            >
                                <Outlet context={{ nextStepConfirm }} />
                                {/* <Content
                                    nextStepConfirm={nextStepConfirm}
                                    step={currentStep}
                                />*/}
                            </TempReportContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
