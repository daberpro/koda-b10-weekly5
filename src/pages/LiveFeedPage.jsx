import ReportCards from "../components/ReportCards";
import { useLocalStorage } from "../lib/hooks/localStorageHook";
import { storageKeys } from "../lib/util";

export default function LiveFeedPage() {
    const [ storage ] = useLocalStorage(storageKeys.REPORTS, []);

    return (
        <>
            <div className="flex flex-col justify-start items-start w-[90%] gap-4">
                <div className="w-full max-lg:flex-col h-fit flex flex-row items-center justify-center max-lg:gap-4">
                    <div className="grow max-lg:w-full gap-4 items-start justify-center flex-col flex">
                        <span className="uppercase text-brand-default text-base">
                            Public Incident Registry
                        </span>
                        <h1 className="font-fraunces font-extrabold text-[3.5rem]">
                            Community Reports & Fixes{" "}
                        </h1>
                        <p className="font-public-sans text-lg line-h-8 font-400 text-brand-default">
                            Open incident feed in Jakarta and surrounding urban
                            regions. Public visitors
                            <br />
                            may browse; sign in to interact.
                        </p>
                        <div className="flex justify-start items-center flex-row gap-4 w-full">
                            <div className="w-1/2 max-lg:w-full px-4 flex justify-center items-center flex-row gap-4 bg-brand-third border border-brand-border rounded-xl">
                                <svg
                                    className="text-xl text-brand-default"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M10.5 10.5L8.35 8.34998"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                </svg>
                                <input
                                    placeholder="Search by street name, complaint ID, or keyword..."
                                    className="grow text-base h-full p-4 outline-none border-0 bg-transparent"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-fit flex items-center  justify-center flex-row bg-brand-third gap-4 p-1 rounded-4xl border border-brand-border">
                        <button className="border-0 cursor-pointer text-base bg-brand-primary flex gap-2 items-center justify-center py-2 px-4 rounded-4xl text-white">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_2_214)">
                                    <path
                                        d="M4.33325 3.25H11.3749"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M4.33325 6.5H11.3749"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M4.33325 9.75H11.3749"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M1.625 3.25H1.63042"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M1.625 6.5H1.63042"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M1.625 9.75H1.63042"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_214">
                                        <rect
                                            width="13"
                                            height="13"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            Feed
                        </button>
                        <button className="border-0 cursor-pointer text-base bg-brand-third flex gap-2 items-center justify-center py-2 px-4 rounded-4xl text-brand-default">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_2_225)">
                                    <path
                                        d="M0.541748 3.24998V11.9166L4.33341 9.74998L8.66675 11.9166L12.4584 9.74998V1.08331L8.66675 3.24998L4.33341 1.08331L0.541748 3.24998Z"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M4.33325 1.08331V9.74998"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M8.66675 3.25V11.9167"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_225">
                                        <rect
                                            width="13"
                                            height="13"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            Map
                        </button>
                    </div>
                </div>

                <div className="flex-wrap flex justify-start items-center flex-row mt-8 max-lg:w-full gap-2">
                    <div className="px-4 py-2 text-base bg-brand-third border border-brand-border text-brand-default rounded-3xl">
                        All issues (6)
                    </div>
                    <div className="px-4 py-2 flex items-center justify-center gap-2 text-base bg-brand-third border border-brand-border rounded-4xl text-brand-default">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2_233)">
                                <path
                                    d="M6.00245 2.25166L1.06162 10.5C0.959749 10.6764 0.905848 10.8764 0.905278 11.0801C0.904708 11.2838 0.957487 11.4842 1.05837 11.6611C1.15925 11.8381 1.30471 11.9856 1.48028 12.0889C1.65585 12.1922 1.85542 12.2478 2.05912 12.25H11.9408C12.1445 12.2478 12.344 12.1922 12.5196 12.0889C12.6952 11.9856 12.8407 11.8381 12.9415 11.6611C13.0424 11.4842 13.0952 11.2838 13.0946 11.0801C13.0941 10.8764 13.0402 10.6764 12.9383 10.5L7.99745 2.25166C7.89346 2.08023 7.74704 1.93848 7.57231 1.84011C7.39759 1.74174 7.20046 1.69006 6.99995 1.69006C6.79944 1.69006 6.60231 1.74174 6.42759 1.84011C6.25286 1.93848 6.10644 2.08023 6.00245 2.25166Z"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M7 5.25V7.58333"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M7 9.91669H7.00583"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_233">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Roads & Transit
                    </div>
                    <div className="px-4 py-2 text-base flex items-center justify-center gap-2 text-brand-default bg-brand-third border border-brand-border rounded-4xl">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 11 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.25004 0.583313L1.57504 4.25831C1.03589 4.94722 0.701228 5.77381 0.609245 6.64376C0.517262 7.51372 0.67166 8.39201 1.05482 9.17844C1.43799 9.96487 2.03449 10.6278 2.77627 11.0915C3.51805 11.5552 4.37524 11.8011 5.25004 11.8011C6.12485 11.8011 6.98204 11.5552 7.72382 11.0915C8.4656 10.6278 9.0621 9.96487 9.44526 9.17844C9.82843 8.39201 9.98282 7.51372 9.89084 6.64376C9.79886 5.77381 9.4642 4.94722 8.92504 4.25831L5.25004 0.583313Z"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </svg>
                        Water & Sewage
                    </div>
                    <div className="px-4 py-2 text-base flex items-center justify-center gap-2 text-brand-default bg-brand-third border border-brand-border rounded-4xl">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2_243)">
                                <path
                                    d="M9.33329 7.00002C9.33329 8.28868 8.28862 9.33335 6.99996 9.33335C5.71129 9.33335 4.66663 8.28868 4.66663 7.00002C4.66663 5.71136 5.71129 4.66669 6.99996 4.66669C8.28862 4.66669 9.33329 5.71136 9.33329 7.00002Z"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M7 1.16669V2.33335"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M7 11.6667V12.8334"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M2.85828 2.85834L3.67494 3.675"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M10.325 10.325L11.1416 11.1417"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M1.16663 7H2.33329"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M11.6666 7H12.8333"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M3.67494 10.325L2.85828 11.1417"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M11.1416 2.85834L10.325 3.675"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_243">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Street Lighting
                    </div>
                    <div className="px-4 py-2 text-base flex items-center justify-center gap-2 text-brand-default bg-brand-third border border-brand-border rounded-4xl">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2_255)">
                                <path
                                    d="M1.75 3.5H12.25"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M11.0833 3.5L10.5 11.6667C10.5 11.9761 10.377 12.2728 10.1582 12.4916C9.93946 12.7104 9.64271 12.8333 9.33329 12.8333H4.66663C4.35721 12.8333 4.06046 12.7104 3.84167 12.4916C3.62288 12.2728 3.49996 11.9761 3.49996 11.6667L2.91663 3.5"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M5.83337 6.41669V9.91669"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M8.16663 6.41669V9.91669"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M5.25 3.5V2.33333C5.25 2.17862 5.31146 2.03025 5.42085 1.92085C5.53025 1.81146 5.67862 1.75 5.83333 1.75H8.16667C8.32138 1.75 8.46975 1.81146 8.57915 1.92085C8.68854 2.03025 8.75 2.17862 8.75 2.33333V3.5"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_255">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Sanitation & Waste
                    </div>
                    <div className="px-4 py-2 text-base flex items-center justify-center gap-2 text-brand-default bg-brand-third border border-brand-border rounded-4xl">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2_263)">
                                <path
                                    d="M7 1.16669L4.375 4.95835H9.625L7 1.16669Z"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M7 4.08331L3.5 8.74998H10.5L7 4.08331Z"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M7 8.75V12.8333"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_263">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Public Parks & Trees
                    </div>
                    <div className="px-4 py-2 text-base flex items-center justify-center gap-2 text-brand-default bg-brand-third border border-brand-border rounded-4xl">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.41675 2.91669L3.50008 5.25002H1.16675V8.75002H3.50008L6.41675 11.0834V2.91669Z"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M9.04175 4.95831C9.34624 5.20438 9.59183 5.51543 9.76055 5.8687C9.92927 6.22196 10.0168 6.60849 10.0168 6.99998C10.0168 7.39147 9.92927 7.778 9.76055 8.13126C9.59183 8.48453 9.34624 8.79558 9.04175 9.04165"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M10.7917 3.20831C11.3441 3.67375 11.7881 4.25423 12.0927 4.90917C12.3972 5.56411 12.555 6.27768 12.555 6.99998C12.555 7.72227 12.3972 8.43585 12.0927 9.09079C11.7881 9.74573 11.3441 10.3262 10.7917 10.7916"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </svg>
                        Noise & Disturbance
                    </div>
                    <div className="px-4 py-2 text-base flex items-center justify-center gap-2 text-brand-default bg-brand-third border border-brand-border rounded-4xl">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.75 12.25H12.25"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M2.91663 12.25V3.5L6.99996 1.75V12.25"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M11.0833 12.25V5.83331L7 4.08331"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M4.66663 4.66669H5.24996"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M4.66663 7H5.24996"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M4.66663 9.33331H5.24996"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M8.75 6.41669H9.33333"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M8.75 8.75H9.33333"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </svg>
                        Building & Zoning
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col pt-8 w-[90%]">
                <div className="flex max-lg:flex-col gap-4 justify-between items-center flex-row w-full">
                    <div className="w-fit max-[1499px]:p-4 flex justify-start items-center flex-wrap flex-row gap-2 bg-brand-third rounded-4xl border border-brand-border px-4">
                        <span className="font-ibm-plex-mono text-base text-brand-default p-2">
                            Status:
                        </span>
                        <button className="rounded-2xl text-base font-public-sans font-400 border-0 py-2 px-6 bg-brand-primary text-white">
                            All
                        </button>
                        <button className="bg-transparent text-brand-default text-base font-public-sans font-400 border-0 py-2 px-6">
                            Submitted
                        </button>
                        <button className="bg-transparent text-brand-default text-base font-public-sans font-400 border-0 py-2 px-6">
                            Received
                        </button>
                        <button className="bg-transparent text-brand-default text-base font-public-sans font-400 border-0 py-2 px-6">
                            In Riview
                        </button>
                        <button className="bg-transparent text-brand-default text-base font-public-sans font-400 border-0 py-2 px-6">
                            Assigned
                        </button>
                        <button className="bg-transparent text-brand-default text-base font-public-sans font-400 border-0 py-2 px-6">
                            Awaiting your info
                        </button>
                        <button className="bg-transparent text-brand-default text-base font-public-sans font-400 border-0 py-2 px-6">
                            Resolved
                        </button>
                        <button className="bg-transparent text-brand-default text-base font-public-sans font-400 border-0 py-2 px-6">
                            Closed
                        </button>
                    </div>
                    <div className="w-fit max-lg:w-full max-lg:justify-start flex-row flex bg-brand-third border border-brand-border py-2 px-4 rounded-4xl items-center justify-center gap-2 h-fit">
                        <input id="with-foto-only" type="checkbox" />
                        <label
                            className="text-base font-public-sans font-400 text-brand-default"
                            htmlFor="with-foto-only"
                        >
                            With photos/proof only
                        </label>
                    </div>
                </div>

                <div className="grid *:rounded-none [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl justify-center items-center grid-cols-1 w-full mt-8">
                    {/* {
                        id: "CMP-2026-8841",
                        image: "/images/img (1).png",
                        title: "PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT",
                        address: "Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)",
                        likes: 148,
                        status: "in review",
                        variant: "variant-2",
                        department: "Perumda PAM JAYA (Clean Drinking Water)" //[cite: 1]
                    }*/}
                    {storage.map((data) => {
                        return <ReportCards {...data} key={data.id} />;
                    })}
                </div>
            </div>
        </>
    );
}
