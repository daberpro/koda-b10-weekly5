import { ScrollRestoration } from "react-router";

export default function EscalationDesk() {
    return (
        <>
            <ScrollRestoration />
            <div className="w-full gap-4 h-fit grid grid-cols-2">
                <div className="col-span-1 flex flex-col justify-center items-start gap-4">
                    <span className="font-ibm-plex-mono uppercase font-normal text-xl text-brand-default">
                        Verification & agency routing
                    </span>
                    <p className="font-public-sans text-brand-default">
                        1 report awaiting evidence review and agency routing.
                        Oldest submitted Nov 20, 07:09 AM GMT+7.
                    </p>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    <button className="px-4 py-2 rounded-4xl border-brand-border bg-brand-third flex gap-4 border items-center cursor-pointer">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2634_27)">
                                <g clipPath="url(#clip1_2634_27)">
                                    <path
                                        d="M6 11C6 11 10 9 10 6V2.5L6 1L2 2.5V6C2 9 6 11 6 11Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_2634_27">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_2634_27">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Open officer queue</span>
                    </button>
                </div>
                <div className="col-span-2 pt-4 row-start-2 row-end-3 flex flex-col gap-4">
                    <input
                        placeholder="Search by ID, title, category, or street…"
                        className="w-200 px-4 py-3 rounded-2xl border-brand-border bg-brand-third border outline-0"
                        type="text"
                    />
                    <div className="overflow-hidden rounded-2xl border border-brand-border">
                        <table className="w-full table-fixed border-collapse">
                            <thead>
                                <tr className="border-b border-brand-border text-left text-xs uppercase text-gray-500">
                                    <th className="w-[35%] px-4 py-2">Case</th>
                                    <th className="w-[25%] px-4 py-2">
                                        Proposed route
                                    </th>
                                    <th className="w-[15%] px-4 py-2">
                                        Submitted
                                    </th>
                                    <th className="w-[10%] px-4 py-2">
                                        Evidence
                                    </th>
                                    <th className="w-[15%] px-4 py-2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="px-4 py-3 align-middle">
                                        <p className="font-medium">
                                            Heavy excavation equipment operating
                                            past 22:00 WIB in residential alley
                                        </p>
                                        <span className="text-xs text-gray-500">
                                            CMP-2026-8601
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 align-middle">
                                        <span className="block">
                                            Noise &amp; Disturbance
                                        </span>
                                        <span className="block text-xs text-gray-500">
                                            Satpol PP Provinsi DKI Jakarta
                                            (Public Order)
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 align-middle font-ibm-plex-mono text-sm">
                                        Nov 20, 07:09 AM GMT+7
                                    </td>
                                    <td className="px-4 py-3 align-middle font-ibm-plex-mono text-sm">
                                        1 file
                                    </td>
                                    <td className="px-4 py-3 align-middle">
                                        <button className="font-public-sans text-black px-4 py-2 rounded-4xl border border-brand-border cursor-pointer">
                                            Review
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
