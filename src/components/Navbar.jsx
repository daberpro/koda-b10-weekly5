import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {

    const [collapse, setCollapse] = useState(true);

    return (
        <nav id="navbar" className={"flex justify-center lg:items-center items-start w-full border-b border-brand-border " + (collapse? "overflow-y-hidden h-20": "overflow-y-visible h-fit") }>
            <div className="w-[90%] flex lg:flex-row flex-col justify-between lg:items-center items-start h-fit lg:h-full">
                <div className="lg:w-fit w-full h-20 flex lg:justify-start justify-between flex-row items-center">
                    <Link to="/" className="w-fit text-black no-underline h-full flex justify-start items-center gap-4">
                        <svg className="text-3xl" width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="3.34491" width="32" height="32" rx="10" transform="rotate(-5.99997 0 3.34491)" fill="#0F6B4F" />
                            <path d="M17.0964 14.9958L18.1428 15.0789L16.6836 22.3191C16.6498 22.4567 16.6261 22.5879 16.6124 22.7127C16.604 22.8369 16.6087 22.9839 16.6265 23.1536L16.66 23.4719C16.675 23.6151 16.6443 23.7309 16.5678 23.8194C16.496 23.902 16.3965 23.95 16.2692 23.9634L13.9619 24.2059C13.8293 24.2198 13.7167 24.1941 13.624 24.1288C13.5361 24.0576 13.4846 23.9504 13.4695 23.8072L13.4361 23.4889C13.4255 23.3882 13.4083 23.3015 13.3846 23.2289C13.3604 23.151 13.3157 23.0323 13.2507 22.8729L9.9238 14.9453C9.85823 14.7805 9.78441 14.665 9.70234 14.5985C9.62503 14.5262 9.51993 14.4702 9.38706 14.4305L9.06506 14.3518C8.94922 14.321 8.86324 14.2684 8.80714 14.1939C8.75104 14.1193 8.71798 14.0343 8.70794 13.9388C8.69345 13.8009 8.72738 13.6901 8.80975 13.6064C8.89686 13.5168 9.03589 13.4619 9.22684 13.4419L13.3004 13.0137C13.4967 12.9931 13.644 13.0178 13.7426 13.0879C13.8406 13.1527 13.8968 13.254 13.9113 13.3919C13.933 13.5988 13.8414 13.7479 13.6365 13.8391L13.2559 13.9676C13.1272 14.0187 13.0562 14.1093 13.0431 14.2393C13.0294 14.3641 13.0685 14.5316 13.1603 14.7418L16.3226 22.4053L15.4088 23.2011L17.0964 14.9958ZM22.3218 12.516C22.3067 12.3728 22.3404 12.2593 22.4228 12.1756C22.5099 12.086 22.6489 12.0312 22.8399 12.0111L25.2267 11.7602C25.423 11.7396 25.5704 11.7643 25.6689 11.8344C25.7727 11.9039 25.8319 12.0077 25.8464 12.1456C25.857 12.2463 25.8391 12.3313 25.7927 12.4006C25.7464 12.4698 25.6573 12.5408 25.5256 12.6137L25.2827 12.7518C25.1059 12.8562 24.9626 12.9973 24.8526 13.1751C24.7473 13.347 24.6668 13.6022 24.6112 13.9405L23.3191 21.6217C23.2866 21.8235 23.2654 21.9786 23.2553 22.0869C23.2453 22.1952 23.2475 22.3183 23.262 22.4562L23.2954 22.7744C23.3105 22.9177 23.2797 23.0335 23.2032 23.122C23.1315 23.2046 23.032 23.2526 22.9047 23.266L20.5258 23.516C20.3985 23.5294 20.2885 23.5034 20.1958 23.4381C20.1026 23.3674 20.0484 23.2605 20.0334 23.1173L19.9999 22.799C19.9905 22.7089 19.9762 22.6246 19.9573 22.5461C19.9377 22.4624 19.8925 22.3384 19.8217 22.1743L16.607 14.2428C16.5146 14.0273 16.4409 13.8876 16.386 13.8236C16.3304 13.7544 16.2559 13.7086 16.1624 13.6863L15.8395 13.5995C15.7184 13.5694 15.6306 13.525 15.5762 13.4663C15.5217 13.4077 15.4895 13.3306 15.4795 13.2352C15.4644 13.092 15.4981 12.9785 15.5805 12.8947C15.6676 12.8052 15.8066 12.7503 15.9975 12.7303L19.9438 12.3155C20.1401 12.2949 20.2875 12.3196 20.386 12.3897C20.484 12.4545 20.5405 12.5584 20.5555 12.7017C20.5667 12.8077 20.5467 12.8983 20.4956 12.9734C20.4498 13.0479 20.3655 13.1131 20.2427 13.1689L19.9018 13.2932C19.7784 13.3437 19.7061 13.4211 19.6848 13.5252C19.6689 13.6287 19.7088 13.8042 19.8045 14.0516L22.8794 21.7242L22.0577 22.4782L23.5317 13.9253C23.5734 13.6581 23.5564 13.4454 23.4807 13.2871C23.4051 13.1288 23.2376 13.015 22.9783 12.9457L22.6668 12.89C22.5562 12.8587 22.4738 12.8138 22.4193 12.7551C22.3643 12.6912 22.3318 12.6115 22.3218 12.516Z" fill="white" />
                        </svg>

                        <span className="font-fraunces font-extrabold text-lg">Warga Report</span>
                    </Link>

                    <button onClick={() => setCollapse(!collapse)} id="nav-burger-btn" className="outline-none cursor-pointer lg:hidden block border-0 bg-transparent">
                        <svg className="text-xl" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 17H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                <div className="w-full lg:w-fit lg:h-full h-fit flex justify-center items-center">
                    <div className="flex lg:flex-row lg:border-0 flex-col lg:flex-wrap border-y border-y-brand-default w-full justify-center items-start py-4 gap-4">
                        <NavLink className="no-underline text-brand-default text-base py-2 px-6" to="/live-feed">Live Feed</NavLink>
                        <NavLink className="no-underline text-brand-default text-base py-2 px-6" to="/track">Track</NavLink>
                        <NavLink className="no-underline text-brand-default text-base py-2 px-6" to="/how-it-works">How it works</NavLink>
                    </div>
                </div>
                <div id="nav-btn-container" className="w-fit h-full max-lg:py-4 gap-4 flex justify-end items-center">

                    <button id="signin" className="w-fit bg-transparent outline-none border-0 cursor-pointer h-fit text-brand-default no-underline py-2 px-6 gap-2 flex justify-center items-center">
                        <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_191)">
                                <path d="M7.5 1.5H9.5C9.76522 1.5 10.0196 1.60536 10.2071 1.79289C10.3946 1.98043 10.5 2.23478 10.5 2.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H7.5" strokeLinecap="round" strokeLinejoin="round" stroke="#4C5B52" />
                                <path d="M5 8.5L7.5 6L5 3.5" strokeLinecap="round" strokeLinejoin="round" stroke="#4C5B52" />
                                <path d="M7.5 6H1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#4C5B52" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_191">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="font-public-sans text-base">Signin</span>
                    </button>

                    <button className="py-2 cursor-pointer outline-none border-0 px-6 gap-2 flex justify-center items-center bg-brand-primary rounded-3xl">
                        <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_198)">
                                <path d="M6 2.5V9.5" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                                <path d="M2.5 6H9.5" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_198">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="font-public-sans text-white text-base">Report</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}