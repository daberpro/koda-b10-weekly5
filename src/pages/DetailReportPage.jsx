export default function DetailReportPage() {
    return (
        <>
        <div className="flex w-[90%] items-center justify-between">

            <button
                className="bg-transparent text-brand-primary gap-2 font-public-sans outline-none border-0 px-4 py-2 text-base flex items-center justify-center flex-row">
                <svg className="text-lg" width="1em" height="1em" viewBox="0 0 14 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1665_5)">
                        <path d="M11.0832 7H2.9165" strokeWidth="1.16667" strokeLinecap="round"
                            strokeLinejoin="round" stroke="currentColor" />
                        <path d="M6.99984 11.0834L2.9165 7.00002L6.99984 2.91669" strokeWidth="1.16667"
                            strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1665_5">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <span className="font-public-sans text-base font-600">
                    Back to Live Feed
                </span>
            </button>

            <button
                className="px-4 py-2 border border-brand-border rounded-3xl bg-brand-third flex items-center justify-center gap-2 flex-row">
                <svg className="text-lg" width="1em" height="1em" viewBox="0 0 11 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1665_13)">
                        <g clipPath="url(#clip1_1665_13)">
                            <path
                                d="M1.8335 5.5V9.16667C1.8335 9.40978 1.93007 9.64294 2.10198 9.81485C2.27389 9.98676 2.50705 10.0833 2.75016 10.0833H8.25016C8.49328 10.0833 8.72644 9.98676 8.89834 9.81485C9.07025 9.64294 9.16683 9.40978 9.16683 9.16667V5.5"
                                strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"
                                stroke="currentColor" />
                            <path d="M7.33317 2.75002L5.49984 0.916687L3.6665 2.75002" strokeWidth="0.916667"
                                strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                            <path d="M5.5 0.916687V6.87502" strokeWidth="0.916667" strokeLinecap="round"
                                strokeLinejoin="round" stroke="currentColor" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1665_13">
                            <rect width="11" height="11" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_1665_13">
                            <rect width="11" height="11" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="font-public-sans font-600 text-base">
                    Share
                </span>
            </button>

        </div>


        <div className="flex items-start gap-4 justify-center flex-row w-[90%]">

            <div className="w-[70%] h-fit flex items-center justify-start flex-col gap-4">

                <div
                    className="bg-brand-third w-full border border-brand-border p-8 rounded-xl flex items-center justify-center flex-col gap-4">
                    <div className="flex w-full items-center justify-between flex-row gap-4">
                        <div
                            className="flex items-center justify-center gap-2 rounded-4xl p-2 bg-brand-orange-secondary text-brand-orange border border-brand-orange">

                            <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                                    strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                <path d="M10.5 10.5L8.35 8.34998" strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                            </svg>
                            <span className="font-public-sans font-600 text-base">
                                In riview
                            </span>
                        </div>
                        <div className="w-fit flex items-center justify-center gap-2">
                            <svg className="text-lg text-brand-default" width="1em" height="1em"
                                viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.25 7C12.25 9.8995 9.8995 12.25 7 12.25C4.1005 12.25 1.75 9.8995 1.75 7C1.75 4.1005 4.1005 1.75 7 1.75C9.8995 1.75 12.25 4.1005 12.25 7Z"
                                    strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path d="M7 4.08331V6.99998L9.04167 8.16665" strokeWidth="1.16667"
                                    strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                            </svg>

                            <span className="font-ibm-plex-mono text-base text-brand-default">18h 59m left</span>
                        </div>
                        <div className="grow flex items-center justify-end flex-row">
                            <button
                                className="px-4 py-2 border border-brand-border rounded-3xl bg-brand-third flex items-center justify-center gap-2 flex-row">
                                <svg className="text-lg text-brand-primary" width="1em" height="1em"
                                    viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1665_31)">
                                        <g clipPath="url(#clip1_1665_31)">
                                            <path d="M4.0835 5.83331V12.8333" strokeWidth="1.16667"
                                                strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                            <path
                                                d="M8.74984 3.43002L8.1665 5.83335H11.5673C11.7485 5.83335 11.9271 5.87552 12.0891 5.95652C12.2511 6.03752 12.392 6.15512 12.5007 6.30002C12.6093 6.44492 12.6828 6.61312 12.7152 6.79132C12.7476 6.96952 12.7381 7.15281 12.6873 7.32669L11.3282 11.9934C11.2575 12.2357 11.1101 12.4486 10.9082 12.6C10.7062 12.7515 10.4606 12.8334 10.2082 12.8334H2.33317C2.02375 12.8334 1.72701 12.7104 1.50821 12.4916C1.28942 12.2729 1.1665 11.9761 1.1665 11.6667V7.00002C1.1665 6.6906 1.28942 6.39385 1.50821 6.17506C1.72701 5.95627 2.02375 5.83335 2.33317 5.83335H3.94317C4.16022 5.83324 4.37293 5.77258 4.55739 5.65819C4.74186 5.5438 4.89075 5.38023 4.98734 5.18585L6.99984 1.16669C7.27492 1.17009 7.54568 1.23562 7.79189 1.35837C8.03809 1.48112 8.25338 1.65792 8.42166 1.87556C8.58993 2.09319 8.70686 2.34605 8.76368 2.61522C8.82051 2.8844 8.81578 3.16293 8.74984 3.43002Z"
                                                strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"
                                                stroke="currentColor" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1665_31">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_1665_31">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span className="font-public-sans text-brand-default font-600 text-base">
                                    Upvote
                                </span>
                                <span className="font-ibm-plex-mono text-base font-600 text-black">
                                    (148)
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        className="grid w-full items-center justify-center gap-4 pb-4 border-b border-b-brand-border">
                        <span className="font-fraunces font-600 text-[2rem]">
                            PAM clean drinking water pipeline burst
                            flooding sidewalk in front of Cipete Raya MRT
                        </span>
                        <p className="font-public-sans text-brand-default text-base leading-6">
                            Clean drinking water is bursting through the sidewalk pavement outside
                            Jl. Fatmawati Raya No. 42 (RT 04 / RW 07, Cilandak Barat) right in
                            front of Cipete Raya MRT. Clean water has been flooding the roadway for 4 hours, causing
                            motorbikes to slip.
                        </p>
                    </div>
                    <div className="w-full items-center justify-center flex-col gap-4 flex">
                        <span className="font-ibm-plex-mono uppercase text-base text-brand-default w-full">Resolution
                            Pipeline</span>
                        <div className="w-full justify-between flex items-center flex-row gap-4">
                            <div
                                className="border border-brand-primary w-1/4 h-24 bg-brand-secondary rounded-xl p-6 flex items-center justify-center gap-2 flex-col">
                                <span className="font-ibm-plex-mono font-400 text-base text-brand-primary">01</span>
                                <span
                                    className="text-base font-public-sans font-600 text-brand-primary text-center">Submitted</span>
                            </div>
                            <div
                                className="border border-brand-primary w-1/4 h-24 bg-brand-secondary rounded-xl p-6 flex items-center justify-center gap-2 flex-col">
                                <span className="font-ibm-plex-mono font-400 text-base text-brand-primary">02</span>
                                <span
                                    className="text-base font-public-sans font-600 text-center text-brand-primary">Verified
                                    by
                                    WargaReport</span>
                            </div>
                            <div
                                className="border border-brand-border bg-brand-light-orange-secondary w-1/4 rounded-xl h-24 p-6 flex items-center justify-center gap-2 flex-col">
                                <span className="font-ibm-plex-mono font-400 text-base text-brand-default">03</span>
                                <span
                                    className="text-brand-default text-base font-public-sans font-600 text-center">Dispatched
                                    to
                                    Agency</span>
                            </div>
                            <div
                                className="border border-brand-border bg-brand-light-orange-secondary w-1/4 rounded-xl h-24 p-6 flex items-center justify-center gap-2 flex-col">
                                <span className="font-ibm-plex-mono font-400 text-base text-brand-default">04</span>
                                <span
                                    className="text-brand-default text-base font-public-sans font-600 text text-center">Fixed
                                    &
                                    Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-start justify-center gap-2 flex-col">
                    <span className="font-fraunces font-600 text-xl">Evidence on File</span>
                    <span className="text-brand-default font-public-sans text-base">2 attachments (tap to expand)</span>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full py-4 pr-4">

                    <div
                        className="flex items-center flex-col justify-center w-full gap-2 bg-brand-third border border-brand-border rounded-xl">
                        <img className="w-full object-cover rounded-tl-xl rounded-tr-xl h-46"
                        src="assets/images/img2.png" alt="placeholder image"/>
                        <div className="flex px-4 py-2 items-center justify-between flex-row w-full">
                            <div className="flex items-start justify-center flex-col grow gap-2">
                                <span className="font-public-sans font-600">incident_capture_camera.jpg</span>
                                <span className="font-ibm-plex-mono font-400 text-brand-default">IMAGE
                                    &dot; 2.4 MB</span>
                            </div>
                            <button className="bg-transparent border-0 outline-none">
                                <svg className="text-lg" width="1em" height="1em" viewBox="0 0 15 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.875 3.75H13.125" strokeWidth="1.25" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                    <path
                                        d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75"
                                        strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                    <path d="M6.25 6.875V10.625" strokeWidth="1.25" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                    <path d="M8.75 6.875V10.625" strokeWidth="1.25" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                    <path
                                        d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75"
                                        strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                </svg>

                            </button>
                        </div>
                        <div className="w-full flex pb-4 px-4 items-center justify-start">
                            <span className="text-brand-default font-public-sans">Photographed live on-site
                                by resident camera.</span>
                        </div>
                    </div>
                    <div
                        className="flex items-center flex-col justify-center w-full gap-2 bg-brand-third border border-brand-border rounded-xl">
                        <div
                            className="w-full relative h-46 bg-empty-video rounded-tl-xl rounded-tr-xl flex items-center flex-col justify-center">
                            <svg className="text-[4rem]" width="1em" height="1em" viewBox="0 0 40 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="white" fill-opacity="0.92" />
                                <path d="M16 14.6667L25.3333 20.0001L16 25.3334V14.6667Z" fill="#13231B" />
                            </svg>

                            <span
                                className="bottom-4 right-4 absolute text-white font-ibm-plex-mono font-400">0:12</span>
                        </div>
                        <div className="flex px-4 py-2 items-center justify-between flex-row w-full">
                            <div className="flex items-start justify-center flex-col grow gap-2">
                                <span className="font-public-sans font-600">quick_site_clip.mp4</span>
                                <span className="font-ibm-plex-mono font-400 text-brand-default uppercase">VIDEO
                                    &dot; 4.8 MB</span>
                            </div>
                            <button className="bg-transparent border-0 outline-none">
                                <svg className="text-lg" width="1em" height="1em" viewBox="0 0 15 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.875 3.75H13.125" strokeWidth="1.25" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                    <path
                                        d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75"
                                        strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                    <path d="M6.25 6.875V10.625" strokeWidth="1.25" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                    <path d="M8.75 6.875V10.625" strokeWidth="1.25" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                    <path
                                        d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75"
                                        strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                </svg>

                            </button>
                        </div>
                        <div className="w-full flex pb-4 px-4 items-center justify-start">
                            <span className="text-brand-default font-public-sans">12-second horizontal pan
                                of incident.</span>
                        </div>
                    </div>

                </div>

                <div className="w-full flex items-start justify-center gap-2 flex-col">
                    <span className="font-fraunces font-600 text-xl">Action History</span>
                    <span className="text-brand-default font-public-sans text-base">Chronological updates from intake
                        router and field teams</span>
                </div>

                <div className="flex items-center justify-center w-full flex-col">

                    <div className="w-full flex items-start justify-center flex-col">
                        <div className="flex items-center justify-start gap-4 w-full">
                            <div
                                className="p-2 w-8 h-8 flex items-center justify-center rounded-full border border-brand-border bg-brand-third">
                                <svg className="text-brand-primary text-lg" width="1em" height="1em"
                                    viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.16683 9.625V8.70833C9.16683 8.2221 8.97368 7.75579 8.62986 7.41197C8.28604 7.06815 7.81973 6.875 7.3335 6.875H3.66683C3.1806 6.875 2.71428 7.06815 2.37047 7.41197C2.02665 7.75579 1.8335 8.2221 1.8335 8.70833V9.625"
                                        strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                    <path
                                        d="M7.33317 3.20833C7.33317 4.22086 6.51236 5.04167 5.49984 5.04167C4.48732 5.04167 3.6665 4.22086 3.6665 3.20833C3.6665 2.19581 4.48732 1.375 5.49984 1.375C6.51236 1.375 7.33317 2.19581 7.33317 3.20833Z"
                                        strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                </svg>
                            </div>
                            <span className="font-public-sans font-600">Report submitted via WargaReport intake</span>
                            <div
                                className="flex items-center justify-center gap-2 rounded-4xl p-2 bg-brand-light-orange-secondary text-brand-default border border-brand-orange">
                                <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_833)">
                                        <path
                                            d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z"
                                            strokeLinecap="round" strokeLinejoin="round" stroke="#4C5B52" />
                                        <path d="M6 3.5V6L7.75 7" strokeLinecap="round" strokeLinejoin="round"
                                            stroke="#4C5B52" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_833">
                                            <rect width="12" height="12" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span className="font-public-sans font-600 text-base">
                                    Submitted
                                </span>
                            </div>
                        </div>
                        <div
                            className="w-full py-4 ml-4 border-l border-l-brand-default px-8 flex items-start justify-center flex-col gap-2">

                            <div className="flex items-center justify-start gap-4 w-full">
                                <span className="font-public-sans text-base font-400">Fahrul Septiana</span>
                                <span className="font-ibm-plex-mono font-400 text-base text-brand-default">Nov 6, 05:09
                                    PM
                                    GMT+7</span>
                            </div>

                            <div className="px-4 py-2 w-full text-start border border-brand-border rounded-xl">
                                <span className="text-brand-default font-public-sans text-base">
                                    Citizen attached visual photo evidence and acoustic audio note.
                                </span>
                            </div>


                        </div>
                    </div>

                    <div className="w-full flex items-start justify-center flex-col">
                        <div className="flex items-center justify-start gap-4 w-full">
                            <div
                                className="p-2 w-8 h-8 flex items-center justify-center rounded-full border border-brand-border bg-brand-third">
                                <svg className="text-brand-primary" width="1em" height="1em" viewBox="0 0 11 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1665_112)">
                                        <path
                                            d="M2.75016 1.83337H8.25016C8.75642 1.83337 9.16683 2.24378 9.16683 2.75004V8.25004C9.16683 8.7563 8.75642 9.16671 8.25016 9.16671H2.75016C2.2439 9.16671 1.8335 8.7563 1.8335 8.25004V2.75004C1.8335 2.24378 2.2439 1.83337 2.75016 1.83337Z"
                                            strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"
                                            stroke="currentColor" />
                                        <path d="M4.125 4.125H6.875V6.875H4.125V4.125Z" strokeWidth="0.916667"
                                            strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M4.125 0.458374V1.83337" strokeWidth="0.916667" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M6.875 0.458374V1.83337" strokeWidth="0.916667" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M4.125 9.16663V10.5416" strokeWidth="0.916667" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M6.875 9.16663V10.5416" strokeWidth="0.916667" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M9.1665 4.125H10.5415" strokeWidth="0.916667" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M9.1665 6.41663H10.5415" strokeWidth="0.916667" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M0.458496 4.125H1.8335" strokeWidth="0.916667" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path d="M0.458496 6.41663H1.8335" strokeWidth="0.916667"
                                            strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1665_112">
                                            <rect width="11" height="11" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <span className="font-public-sans font-600">Verified by WargaReport & dispatched to Perumda
                                PAM JAYA</span>
                            <div
                                className="flex items-center justify-center gap-2 rounded-4xl p-2 bg-brand-secondary text-brand-primary border border-brand-primary">
                                <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_840)">
                                        <g clipPath="url(#clip1_2_840)">
                                            <path d="M11 6H8L7 7.5H5L4 6H1" strokeLinecap="round"
                                                strokeLinejoin="round" stroke="currentColor" />
                                            <path
                                                d="M2.725 2.555L1 6V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V6L9.275 2.555C9.19221 2.38839 9.06459 2.24819 8.90648 2.15014C8.74837 2.05209 8.56604 2.0001 8.38 2H3.62C3.43396 2.0001 3.25163 2.05209 3.09352 2.15014C2.93541 2.24819 2.80779 2.38839 2.725 2.555Z"
                                                strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_840">
                                            <rect width="12" height="12" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_2_840">
                                            <rect width="12" height="12" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span className="font-public-sans font-600 text-base">
                                    Received
                                </span>
                            </div>
                        </div>
                        <div
                            className="w-full py-4 ml-4 border-l border-l-brand-default px-8 flex items-start justify-center flex-col gap-2">

                            <div className="flex items-center justify-start gap-4 w-full">
                                <span className="font-public-sans text-base font-400">WargaReport Civic Router</span>
                                <span className="font-ibm-plex-mono font-400 text-base text-brand-default">Nov 6, 05:12
                                    PM GMT+7</span>
                            </div>

                            <div className="px-4 py-2 w-full text-start border border-brand-border rounded-xl">
                                <span className="text-brand-default font-public-sans text-base">
                                    Priority: High. Clean water conservation target. 24h statutory countdown initiated.
                                </span>
                            </div>


                        </div>
                    </div>

                    <div className="w-full flex items-start justify-center flex-col">
                        <div className="flex items-center justify-start gap-4 w-full">
                            <div
                                className="p-2 w-8 h-8 flex items-center justify-center rounded-full border border-brand-border bg-brand-third">
                                <svg className="text-brand-primary" width="1em" height="1em" viewBox="0 0 11 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1665_135)">
                                        <path
                                            d="M5.50016 10.0833C5.50016 10.0833 9.16683 8.24996 9.16683 5.49996V2.29163L5.50016 0.916626L1.8335 2.29163V5.49996C1.8335 8.24996 5.50016 10.0833 5.50016 10.0833Z"
                                            strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"
                                            stroke="currentColor" />
                                        <path d="M4.125 5.50004L5.04167 6.41671L6.875 4.58337" strokeWidth="0.916667"
                                            strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1665_135">
                                            <rect width="11" height="11" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <span className="font-public-sans font-600">Case accepted by Duty Triage Coordinator</span>
                            <div
                                className="flex items-center justify-center gap-2 rounded-4xl p-2 bg-brand-orange-secondary text-brand-orange border border-brand-orange">

                                <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                                        strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                    <path d="M10.5 10.5L8.35 8.34998" strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                </svg>
                                <span className="font-public-sans font-600 text-base">
                                    In riview
                                </span>
                            </div>
                        </div>
                        <div
                            className="w-full py-4 ml-4 border-l border-l-brand-default px-8 flex items-start justify-center flex-col gap-2">

                            <div className="flex items-center justify-start gap-4 w-full">
                                <span className="font-public-sans text-base font-400">Hendra Kurniawan</span>
                                <span className="font-ibm-plex-mono font-400 text-base text-brand-default">Nov 6, 06:39
                                    PM GMT+7</span>
                            </div>

                            <div className="px-4 py-2 w-full text-start border border-brand-border rounded-xl">
                                <span className="text-brand-default font-public-sans text-base">
                                    Dispatched secondary valve isolation team from Cilandak maintenance station.
                                </span>
                            </div>


                        </div>
                    </div>


                </div>

            </div>

            <div className="w-1/3 bg-brand-third border border-brand-border rounded-xl p-8 h-fit">
                <div className="w-full flex items-start justify-center flex-col bg-brand-third rounded-xl gap-4half">


                    <div
                        className="flex w-full items-start justify-start flex-col gap-2 pb-4 border-b border-b-brand-border">
                        <span className="font-ibm-plex-mono font-400 text-brand-default text-lg">Tracking
                            Code</span>
                        <span
                            className="font-public-sans text-lg text-brand-primary font-600 text-[2rem]">CMP-2026-8841</span>
                    </div>

                    <div className="flex items-start justify-center flex-col w-full gap-2">
                        <span className="font-ibm-plex-mono uppercase font-400 text-base text-brand-default">Assigned
                            Authority</span>
                        <span className="font-public-sans font-600 text-base">Perumda PAM JAYA (Clean Drinking
                            Water)</span>
                    </div>

                    <div className="flex items-start justify-center flex-col w-full gap-2">
                        <span
                            className="font-ibm-plex-mono w-full uppercase font-400 text-base text-brand-default">Location</span>

                        <div className="flex w-full items-start justify-center flex-row gap-2">
                            <div className="flex w-fit items-start flex-row justify-center">
                                <svg className="text-brand-primary" width="1em" height="1em" viewBox="0 0 13 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1665_148)">
                                        <g clipPath="url(#clip1_1665_148)">
                                            <path
                                                d="M11.375 5.41669C11.375 9.20835 6.5 12.4584 6.5 12.4584C6.5 12.4584 1.625 9.20835 1.625 5.41669C1.625 4.12376 2.13861 2.88378 3.05285 1.96954C3.96709 1.0553 5.20707 0.541687 6.5 0.541687C7.79293 0.541687 9.03291 1.0553 9.94715 1.96954C10.8614 2.88378 11.375 4.12376 11.375 5.41669Z"
                                                strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"
                                                stroke="currentColor" />
                                            <path
                                                d="M8.125 5.41669C8.125 6.31415 7.39746 7.04169 6.5 7.04169C5.60254 7.04169 4.875 6.31415 4.875 5.41669C4.875 4.51922 5.60254 3.79169 6.5 3.79169C7.39746 3.79169 8.125 4.51922 8.125 5.41669Z"
                                                strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"
                                                stroke="currentColor" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1665_148">
                                            <rect width="13" height="13" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_1665_148">
                                            <rect width="13" height="13" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className="flex grow items-start justify-center flex-col gap-2">
                                <span className="font-public-sans font-600 text-base">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)</span>
                                <span className="font-public-sans font-500 text-brand-default text-base">Cilandak Barat, Jakarta Selatan</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start justify-center flex-col w-full gap-2">
                        <span className="font-ibm-plex-mono uppercase font-400 text-base text-brand-default">Reported
                            On</span>
                        <span className="font-public-sans font-600 text-base">Nov 6, 2026</span>
                    </div>
                    <div className="flex items-start justify-center flex-col w-full gap-2">
                        <span className="font-ibm-plex-mono uppercase font-400 text-base text-brand-default">Reported
                            By</span>
                        <span className="font-public-sans font-600 text-base">Fahrul S.</span>
                    </div>
                    <div className="flex items-start justify-center flex-col w-full gap-2">
                        <span className="font-ibm-plex-mono uppercase font-400 text-base text-brand-default">Field
                            Officer</span>
                        <span className="font-public-sans font-600 text-base">Hendra Kurniawan</span>
                        <span className="font-ibm-plex-mono text-brand-default text-base">Tim Reaksi Cepat PAM JAYA
                            [PAM-JKT-044]</span>
                    </div>

                    <div className="w-full items-center justify-start gap-4 flex-row flex py-4 border-t border-t-brand-border">
                        <a href="#"
                            className="bg-brand-primary w-full no-underline text-white font-public-sans font-600 text-base rounded-4xl px-4 py-2 border-0 outline-none cursor-pointer flex items-center justify-center gap-2">
                            Report similar issue nearby
                        </a>
                    </div>

                </div>
            </div>

        </div>
        </>
    );
}
