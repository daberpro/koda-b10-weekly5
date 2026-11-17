import { Link } from "react-router";
import ReportCards from "../components/ReportCards";

function HomePageInfoCard({ number, title, description }) {
    return (
        <div className="flex flex-col justify-start items-center bg-brand-third border border-brand-border rounded-2xl p-6 gap-4 w-full max-lg:w-full">
            <div className="flex justify-start items-center w-full">
                <span className="font-ibm-plex-mono w-12 h-12 flex items-center justify-center bg-brand-secondary rounded-4xl border border-brand-primary text-base font-semibold text-brand-primary">{number}</span>
            </div>
            <div className="w-full flex justify-center items-start flex-col gap-2">
                <h3 className="font-fraunces font-semibold w-full text-lg">{title}</h3>
                <p className="w-full leading-6 text-brand-default font-normal">{description}</p>
            </div>
        </div>
    );
}


export default function HomePage() {

    const infoHomePage = [
        {
            title: "Snap & Tag",
            description: "Take a photo or quick audio of the issue and provide the street location."
        },
        {
            title: "Report Riview",
            description: "Our team verifies evidence and routes directly to the responsible bureau."
        },
        {
            title: "Field Fix",
            description: "Dispatched technicians do the repairs under strict public SLA windows."
        },
        {
            title: "Proof & Close",
            description: "Before/after photos published openly so everyone sees the resolution."
        }
    ];

    const reportsData = [
        {
          id: "CMP-2026-8841",
          image: "/images/img (1).png",
          title: "PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT",
          address: "Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)",
          likes: 148,
          status: "in riview"
        },
        {
          id: "CMP-2026-8794",
          image: "/images/img (3).png",
          title: "Complete PJU streetlight outage spanning 300 meters along residential corridor",
          address: "Jl. Tebet Barat Dalam Raya No. 24, RT 08 / RW 03",
          likes: 64,
          status: "resolved"
        },
        {
          id: "CMP-2026-8819",
           image: "/images/img (4).png",
          title: "Severe 15cm asphalt cavity in TransJakarta corridor causing motorbike rim damage",
          address: "Jl. Gatot Subroto Kav. 38 (depan Menara Mulia, Jalur TransJakarta)",
          likes: 92,
          status: "assigned"
        },
        {
          id: "CMP-2026-8720",
          image: "/images/img (5).png",
          title: "Illegal household trash accumulation obstructing drainage at Kali Krukut Kemang",
          address: "Kampung Kemang, RT 02 / RW 01 (bantara Kali Krukut)",
          likes: 78,
          status: "in riview"
        }
    ];

    return (
        <>
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <h1 className="font-fraunces font-extrabold text-[3.5rem]">See something broken? Snap <br /> it. We push the city to fix it.</h1>
            <p className="font-public-sans text-lg leading-8 font-normal text-brand-default">Potholes, dark streetlights, PAM water leaks, or trash piles. Drop photos,<br /> track fixes like a food delivery order, and keep authorities accountable.</p>

            <div className="flex justify-start items-center gap-4">
                <Link to={"/reporting"} className="flex justify-center items-center gap-4 p-4 text-base rounded-4xl outline-none border-0 bg-brand-primary text-white font-semibold">
                    <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2_8)">
                            <path d="M9.0625 2.5H5.9375L4.375 4.375H2.5C2.16848 4.375 1.85054 4.5067 1.61612 4.74112C1.3817 4.97554 1.25 5.29348 1.25 5.625V11.25C1.25 11.5815 1.3817 11.8995 1.61612 12.1339C1.85054 12.3683 2.16848 12.5 2.5 12.5H12.5C12.8315 12.5 13.1495 12.3683 13.3839 12.1339C13.6183 11.8995 13.75 11.5815 13.75 11.25V5.625C13.75 5.29348 13.6183 4.97554 13.3839 4.74112C13.1495 4.5067 12.8315 4.375 12.5 4.375H10.625L9.0625 2.5Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                            <path d="M10 8.125C10 9.50571 8.88071 10.625 7.5 10.625C6.11929 10.625 5 9.50571 5 8.125C5 6.74429 6.11929 5.625 7.5 5.625C8.88071 5.625 10 6.74429 10 8.125Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                        </g>
                    </svg>
                    <span className="font-public-sans">Snap a report</span>
                    <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2_13)">
                            <path d="M3.125 7.5H11.875" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                            <path d="M7.5 3.125L11.875 7.5L7.5 11.875" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                        </g>
                    </svg>
                </Link>
                <button className="font-public-sans flex items-center justify-center p-4 text-base rounded-4xl outline-none bg-brand-third border border-brand-border font-semibold">
                    Track a case
                </button>
            </div>

            <div className="flex justify-start items-start flex-col lg:flex-row w-full mt-8">
                <p className="font-ibm-plex-mono text-brand-default font-normal flex justify-center items-center px-4 gap-4">
                    <span className="font-semibold">48</span> reports today
                </p>
                <span className="text-[0.5rem] text-brand-default px-4 lg:px-0">&#9679;</span>
                <p className="font-ibm-plex-mono text-brand-default font-normal flex justify-center items-center px-4 gap-4">
                    <span className="font-semibold text-brand-primary">194</span> fixed this week
                </p>
                <span className="text-[0.5rem] text-brand-default px-4 lg:px-0">&#9679;</span>
                <p className="font-ibm-plex-mono text-brand-default font-normal flex justify-center items-center px-4 gap-4">
                    <span className="font-semibold text-brand-primary">2.3 days</span> avg response
                </p>
            </div>
        </div>

        <div className="flex card-container-homepage justify-center items-center mt-12 w-[90%] border-t border-brand-border pt-8 gap-4 max-lg:flex-col">
            {
                infoHomePage.map((data,i) => {
                    return <HomePageInfoCard {...data} number={`0${i + 1}`} key={`home-info-card-${i}`} />
                })
            }
        </div>

        <div className="flex flex-col justify-center items-center mt-8 w-[90%] border-t border-brand-border pt-8">
            <div className="flex justify-between items-start w-full max-lg:flex-col max-lg:gap-4">
                <div className="w-1/2 max-lg:w-full flex justify-center items-start flex-col gap-2">
                    <h2 className="font-fraunces font-semibold">Recent Community Reports</h2>
                    <span className="font-public-sans font-normal">Verified reports lodged in Jakarta and surrounding regions</span>
                </div>
                <div className="w-1/2 max-lg:w-full flex justify-end max-lg:justify-start">
                    <button className="font-public-sans flex flex-col justify-start items-start border-0 outline-none p-4 text-brand-primary bg-transparent text-base font-semibold">
                        <span>View live feed</span>
                        <span>&#8594;</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mt-8 max-lg:grid-cols-1">

                {
                    reportsData.map((data, i) => {
                        return <ReportCards variant="variant-1" {...data} key={data.id} />
                    })
                }

            </div>
        </div>
        </>
    )
}
