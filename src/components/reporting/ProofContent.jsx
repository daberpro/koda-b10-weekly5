export default function ProofContent() {

    return (
        <>
        <div
            className="w-full p-4 flex items-center justify-center flex-col bg-brand-third border border-dashed border-brand-border rounded-xl">

            <div className="flex max-lg:w-full items-center justify-center flex-col gap-4">
                <svg className="text-brand-primary text-[4rem]" width="1em" height="1em"
                    viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_214_920)">
                        <path
                            d="M4.66662 17.3834C3.79616 16.4991 3.13866 15.428 2.74405 14.2516C2.34943 13.0752 2.22809 11.8243 2.38922 10.594C2.55035 9.36362 2.98973 8.18618 3.67398 7.15104C4.35823 6.11591 5.26937 5.25031 6.33819 4.61997C7.40702 3.98964 8.60542 3.61115 9.8424 3.51325C11.0794 3.41535 12.3224 3.60061 13.4771 4.05497C14.6318 4.50932 15.6677 5.22082 16.5063 6.13544C17.3448 7.05005 17.964 8.14372 18.3166 9.3334H20.4166C21.5295 9.3484 22.6088 9.71667 23.4987 10.385C24.3886 11.0534 25.0431 11.9873 25.3676 13.0519C25.6922 14.1165 25.6701 15.2566 25.3044 16.3078C24.9387 17.359 24.2485 18.2668 23.3333 18.9001"
                            strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"
                            stroke="currentColor" />
                        <path d="M14 14V24.5" strokeWidth="2.33333" strokeLinecap="round"
                            strokeLinejoin="round" stroke="currentColor" />
                        <path d="M9.33325 19.8334L13.9999 15.1667L18.6666 19.8334"
                            strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"
                            stroke="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_214_920">
                            <rect width="28" height="28" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="font-public-sans font-600 text-base">Upload evidence files or use
                    camera simulation</span>
                <span className="font-public-sans text-brand-default">Images, audio voice notes,
                    inspection video clips (JPG, MP4, M4A)</span>

                <div className="w-full flex-wrap flex items-center justify-center flex-row gap-2">
                    <div
                        className="border border-brand-border max-md:w-full p-4 rounded-3xl bg-brand-third flex items-center justify-center gap-4">
                        <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_214_928)">
                                <g clipPath="url(#clip1_214_928)">
                                    <path
                                        d="M7.25 2H4.75L3.5 3.5H2C1.73478 3.5 1.48043 3.60536 1.29289 3.79289C1.10536 3.98043 1 4.23478 1 4.5V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V4.5C11 4.23478 10.8946 3.98043 10.7071 3.79289C10.5196 3.60536 10.2652 3.5 10 3.5H8.5L7.25 2Z"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                    <path
                                        d="M8 6.5C8 7.60457 7.10457 8.5 6 8.5C4.89543 8.5 4 7.60457 4 6.5C4 5.39543 4.89543 4.5 6 4.5C7.10457 4.5 8 5.39543 8 6.5Z"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_214_928">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_214_928">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Capture Photo</span>
                    </div>
                    <div
                        className="border border-brand-border max-md:w-full p-4 rounded-3xl bg-brand-third flex items-center justify-center gap-4">
                        <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_214_934)">
                                <g clipPath="url(#clip1_214_934)">
                                    <path
                                        d="M6 1C5.60218 1 5.22064 1.15804 4.93934 1.43934C4.65804 1.72064 4.5 2.10218 4.5 2.5V6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6V2.5C7.5 2.10218 7.34196 1.72064 7.06066 1.43934C6.77936 1.15804 6.39782 1 6 1Z"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                    <path
                                        d="M9.5 5V6C9.5 6.92826 9.13125 7.8185 8.47487 8.47487C7.8185 9.13125 6.92826 9.5 6 9.5C5.07174 9.5 4.1815 9.13125 3.52513 8.47487C2.86875 7.8185 2.5 6.92826 2.5 6V5"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                    <path d="M6 9.5V11" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_214_934">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_214_934">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Record Audio Memo</span>
                    </div>
                    <div
                        className="border border-brand-border max-md:w-full p-4 rounded-3xl bg-brand-third flex items-center justify-center gap-4">
                        <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_214_941)">
                                <g clipPath="url(#clip1_214_941)">
                                    <path d="M11 4L8 6L11 8V4Z" strokeLinecap="round"
                                        strokeLinejoin="round" stroke="currentColor" />
                                    <path
                                        d="M2 3H7C7.55228 3 8 3.44772 8 4V8C8 8.55228 7.55228 9 7 9H2C1.44772 9 1 8.55228 1 8V4C1 3.44772 1.44772 3 2 3Z"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        stroke="currentColor" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_214_941">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_214_941">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Capture Photo</span>
                    </div>
                </div>

            </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full">
            <div className="flex items-center justify-between flex-row w-full">
                <span className="font-ibm-plex-mono uppercase text-base">Attached evidence (2)</span>
                <span className="font-public-sans font-400 text-brand-primary">Click any card to
                    inspect</span>
            </div>
            <div
                className="grid justify-center items-center grid-cols-2 gap-4 w-full py-4 border-b border-b-brand-default">

                <div
                    className="flex items-center flex-col justify-center w-full gap-2 bg-brand-third border border-brand-border rounded-xl">
                    <img className="w-full h-46 object-cover rounded-tl-xl rounded-tr-xl"
                    src="assets/images/img1.png" alt="placeholder image"/>
                    <div
                        className="flex p-4 items-center justify-between flex-row w-full">
                        <div
                            className="flex items-start justify-center flex-col grow gap-2">
                            <span
                                className="font-public-sans font-600">incident_capture_camera.jpg</span>
                            <span className="font-ibm-plex-mono font-400 text-brand-default">IMAGE
                                &dot; 2.4 MB</span>
                        </div>
                        <button className="bg-transparent border-0 outline-none">
                            <svg className="text-lg" width="1em" height="1em"
                                viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.875 3.75H13.125" strokeWidth="1.25"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path
                                    d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75"
                                    strokeWidth="1.25" strokeLinecap="round"
                                    strokeLinejoin="round" stroke="currentColor" />
                                <path d="M6.25 6.875V10.625" strokeWidth="1.25"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path d="M8.75 6.875V10.625" strokeWidth="1.25"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path
                                    d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75"
                                    strokeWidth="1.25" strokeLinecap="round"
                                    strokeLinejoin="round" stroke="currentColor" />
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
                        className="w-full h-46 relative card-media bg-empty-video rounded-tl-xl rounded-tr-xl flex items-center flex-col justify-center">
                        <svg className="text-[4rem]" width="1em" height="1em" viewBox="0 0 40 40"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="white" fill-opacity="0.92" />
                            <path d="M16 14.6667L25.3333 20.0001L16 25.3334V14.6667Z"
                                fill="#13231B" />
                        </svg>

                        <span
                            className="bottom-4 right-4 absolute text-white font-ibm-plex-mono font-400">0:12</span>
                    </div>
                    <div
                        className="flex p-4 items-center justify-between flex-row w-full">
                        <div
                            className="flex items-start justify-center flex-col grow gap-2">
                            <span className="font-public-sans font-600">quick_site_clip.mp4</span>
                            <span
                                className="font-ibm-plex-mono font-400 text-brand-default uppercase">VIDEO
                                &dot; 4.8 MB</span>
                        </div>
                        <button className="bg-transparent border-0 outline-none">
                            <svg className="text-lg" width="1em" height="1em"
                                viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.875 3.75H13.125" strokeWidth="1.25"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path
                                    d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75"
                                    strokeWidth="1.25" strokeLinecap="round"
                                    strokeLinejoin="round" stroke="currentColor" />
                                <path d="M6.25 6.875V10.625" strokeWidth="1.25"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path d="M8.75 6.875V10.625" strokeWidth="1.25"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path
                                    d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75"
                                    strokeWidth="1.25" strokeLinecap="round"
                                    strokeLinejoin="round" stroke="currentColor" />
                            </svg>

                        </button>
                    </div>
                    <div className="w-full flex pb-4 px-4 items-center justify-start">
                        <span className="text-brand-default font-public-sans">12-second horizontal pan
                            of incident.</span>
                    </div>
                </div>

            </div>
        </div>

        </>
    );

}
