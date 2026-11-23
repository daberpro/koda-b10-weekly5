import StatusBadge from "../components/StatusBadge";

export default function HowItWorksPage(){
    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">

            <div className="w-full h-fit flex flex-col items-start justify-center">

                <div className="w-full flex items-start justify-center p-6 flex-col gap-4">
                    <span className="uppercase text-brand-default text-base">Citizen Help</span>
                    <h1 className="font-fraunces font-extrabold text-[3.5rem]">How WargaReport Works</h1>
                    <p className="font-public-sans line-h-8 font-400 text-brand-default text-lg">
                        Everything you need to know about reporting civic issues, public countdown<br />
                        timers, and tracking city fixes.
                    </p>
                </div>

                <div className="w-full h-fit max-lg:flex-col flex flex-row items-start justify-center">
                    <div
                        className="w-1/2 max-lg:w-full p-6 gap-4 items-start justify-center flex-col flex">
                        <span
                            className="font-ibm-plex-mono w-full font-400 uppercase text-base text-brand-default">Frequently
                            Asked Questions</span>

                        <details open className="border border-brand-border w-full bg-brand-third rounded-xl">
                            <summary
                                className="w-full p-6 border-b border-b-brand-border rounded-xl flex items-start flex-col justify-center gap-2 bg-brand-light-orange-secondary summary-container">
                                <span className="uppercase font-ibm-plex-mono text-brand-primary font-600">How it
                                    works</span>
                                <p className="font-public-sans font-600 text-lg">How does WargaReport get city
                                    issues fixed?</p>
                            </summary>
                            <div className="w-full p-6">
                                <p className="font-public-sans text-base font-400 text-brand-default">
                                    1. You spot an issue (pothole, water leak, dark street) and snap a photo. <br />
                                    2. WargaReport verifies the evidence and dispatches it directly to the responsible
                                    municipal <br />
                                    agency<br />
                                    (PAM JAYA, Bina Marga, Dishub, DLH, Satpol PP, Citata).<br />
                                    3. A public countdown starts. Neighbors can upvote the report to increase
                                    priority.<br />
                                    4. Field crews resolve the physical issue and post verification proof before
                                    closing.<br />
                                </p>
                            </div>
                        </details>

                        <details open className="border border-brand-border w-full bg-brand-third rounded-xl">
                            <summary
                                className="w-full p-6 border-b border-b-brand-border rounded-xl flex items-start flex-col justify-center gap-2 bg-brand-third summary-container">
                                <span className="uppercase font-ibm-plex-mono text-brand-primary font-600">Privacy (UU
                                    PDP)</span>
                                <p className="font-public-sans font-600 text-lg">Will my name or contact info be
                                    visible to the public?</p>
                            </summary>
                        </details>

                        <details open className="border border-brand-border w-full bg-brand-third rounded-xl">
                            <summary
                                className="w-full p-6 border-b border-b-brand-border rounded-xl flex items-start flex-col justify-center gap-2 bg-brand-third summary-container">
                                <span className="uppercase font-ibm-plex-mono text-brand-primary font-600">Account
                                    Mandatory</span>
                                <p className="font-public-sans font-600 text-lg">Do I need an account to lodge a
                                    report or interact?</p>
                            </summary>
                        </details>

                        <details open className="border border-brand-border w-full bg-brand-third rounded-xl">
                            <summary
                                className="w-full p-6 border-b border-b-brand-border rounded-xl flex items-start flex-col justify-center gap-2 bg-brand-third summary-container">
                                <span
                                    className="uppercase font-ibm-plex-mono text-brand-primary font-600">Escalation</span>
                                <p className="font-public-sans font-600 text-lg">What happens if an agency
                                    ignores or delays the report?</p>
                            </summary>
                        </details>

                        <details open className="border border-brand-border w-full bg-brand-third rounded-xl">
                            <summary
                                className="w-full p-6 border-b border-b-brand-border rounded-xl flex items-start flex-col justify-center gap-2 bg-brand-third summary-container">
                                <span
                                    className="uppercase font-ibm-plex-mono text-brand-primary font-600">Notifications</span>
                                <p className="font-public-sans font-600 text-lg">Can I get status alerts sent to
                                    my WhatsApp or Email?</p>
                            </summary>
                        </details>

                    </div>

                    <div
                        className="w-1/2 max-lg:w-full flex items-start flex-col justify-start h-fit p-6 gap-4">
                        <div
                            className="bg-brand-third p-6 border border-brand-border flex items-start justify-center gap-4 flex-col w-full rounded-xl">
                            <span
                                className="font-ibm-plex-mono w-full font-400 uppercase text-base text-brand-default">Status
                                Meanings</span>
                            <span className="text-lg font-600 font-fraunces">What does each status mean?</span>
                            <div className="w-full flex items-center justify-center gap-4 flex-col">

                                <div className="w-full flex justify-start items-center flex-row gap-2">
                                    <StatusBadge status="submitted" />
                                    <span className="text-brand-default">Your report was submitted and received by our
                                        intake
                                        router.</span>
                                </div>

                                <div className="w-full flex justify-start items-center flex-row gap-2">
                                    <StatusBadge status="received"/>
                                    <span className="text-brand-default">Verified by WargaReport and queued for agency
                                        dispatch.</span>
                                </div>

                                <div className="w-full flex justify-start items-center flex-row gap-2">
                                    <StatusBadge status="in riview" />
                                    <span className="text-brand-default">Agency coordinators are assessing field safety and
                                        equipment.</span>
                                </div>

                                <div className="w-full flex justify-start items-center flex-row gap-2">
                                    <StatusBadge status="assigned" />
                                    <span className="text-brand-default">A field crew or technician is dispatched to the
                                        street.</span>
                                </div>

                                <div className="w-full flex justify-start items-center flex-row gap-2">
                                    <StatusBadge status="awaiting info"/>
                                    <span className="text-brand-default">Inspector needs clarification or an updated
                                        photo.</span>
                                </div>

                                <div className="w-full flex justify-start items-center flex-row gap-2">
                                    <StatusBadge status="resolved"/>
                                    <span className="text-brand-default">Physical fix completed and inspection statement
                                        published.</span>
                                </div>

                                <div className="w-full flex justify-start items-center flex-row gap-2">
                                    <StatusBadge status="closed"/>
                                    <span className="text-brand-default">Case completed and archived.</span>
                                </div>

                            </div>
                        </div>

                        <div
                            className="flex justify-center items-start flex-col gap-4 w-full p-6 bg-brand-red-secondary border border-brand-red rounded-xl">
                            <div
                                className="text-brand-red font-600 text-lg font-public-sans flex items-center justify-start gap-4">
                                <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_885)">
                                        <g clipPath="url(#clip1_2_885)">
                                            <path
                                                d="M13.7499 10.5751V12.4501C13.7506 12.6241 13.7149 12.7964 13.6452 12.9559C13.5755 13.1154 13.4732 13.2586 13.3449 13.3762C13.2167 13.4939 13.0653 13.5835 12.9004 13.6393C12.7355 13.695 12.5608 13.7157 12.3874 13.7001C10.4642 13.4911 8.61677 12.8339 6.99365 11.7813C5.48354 10.8217 4.20323 9.54142 3.24365 8.03131C2.18738 6.40081 1.53005 4.54443 1.3249 2.61256C1.30928 2.43973 1.32982 2.26554 1.38521 2.10108C1.4406 1.93662 1.52963 1.78549 1.64663 1.65732C1.76362 1.52916 1.90603 1.42675 2.06477 1.35664C2.22351 1.28652 2.39511 1.25022 2.56865 1.25006H4.44365C4.74696 1.24708 5.04102 1.35448 5.271 1.55227C5.50098 1.75005 5.6512 2.02471 5.69365 2.32506C5.7749 2.92506 5.91865 3.51256 6.13115 4.08131C6.21524 4.30501 6.23344 4.54813 6.18359 4.78186C6.13374 5.01559 6.01794 5.23013 5.8499 5.40006L5.05615 6.19381C5.94587 7.75853 7.24143 9.05409 8.80615 9.94381L9.5999 9.15006C9.76983 8.98202 9.98437 8.86622 10.2181 8.81637C10.4518 8.76652 10.6949 8.78472 10.9186 8.86881C11.4874 9.08131 12.0749 9.22506 12.6749 9.30631C12.9785 9.34914 13.2558 9.50206 13.454 9.73599C13.6522 9.96993 13.7575 10.2685 13.7499 10.5751Z"
                                                strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                                                stroke="currentColor" />
                                            <path
                                                d="M9.375 1.25C10.2038 1.25 10.9987 1.57924 11.5847 2.16529C12.1708 2.75134 12.5 3.5462 12.5 4.375"
                                                strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                                                stroke="currentColor" />
                                            <path
                                                d="M9.375 3.75C9.70652 3.75 10.0245 3.8817 10.2589 4.11612C10.4933 4.35054 10.625 4.66848 10.625 5"
                                                strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                                                stroke="currentColor" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_885">
                                            <rect width="15" height="15" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_2_885">
                                            <rect width="15" height="15" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span>Is this an acute life-safety emergency?</span>
                            </div>
                            <p className="text-brand-default font-public-sans font-400 text-lg line-h-8">
                                WargaReport is for non-urgent municipal infrastructure. If there is an
                                active fire, medical crisis, or immediate hazard to life:
                            </p>
                            <div
                                className="flex max-lg:flex-col items-center justify-start flex-row w-full gap-4">
                                <a className="p-4 border border-brand-red max-lg:w-full bg-brand-third text-brand-red rounded-2xl no-underline font-ibm-plex-mono font-600"
                                    href="#">Call 112 (National Emergency)</a>
                                <a className="p-4 border border-brand-red max-lg:w-full bg-brand-third text-brand-red rounded-2xl no-underline font-ibm-plex-mono font-600"
                                    href="#">Call 113 (Fire Dispatch)</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
