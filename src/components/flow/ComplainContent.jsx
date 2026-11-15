import StatusBadge from "../StatusBadge";

export default function ComplainContent() {
    return (
        <div className="flex py-6 items-start flex-col justify-center w-full gap-4">
            <div className="w-full flex items-center justify-between flex-row">
                <span className="text-brand-default font-public-sans text-base uppercase">
                    Your tracked records (2)
                </span>
                <button className="bg-brand-primary text-base rounded-4xl px-4 py-2 text-white font-public-sans font-600 border-0 outline-none cursor-pointer">
                    + File new complaint
                </button>
            </div>

            <table className="bg-brand-main-color rounded-xl border border-brand-border w-full flex items-center justify-center flex-col">
                <thead className="flex w-full items-center justify-start flex-col">
                    <tr className="w-full flex items-center justify-between flex-row">
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            CASE ID
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/3">
                            TITLE / LOCATION
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            AGENCY
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            STATUS
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            SLA TARGET
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            LAST UPDATE
                        </th>
                    </tr>
                </thead>
                <tbody className="flex w-full items-center justify-center flex-col">
                    <tr className="p-4 flex w-full bg-brand-third items-center justify-between">
                        <td className="font-ibm-plex-mono text-base flex items-center justify-center w-1/6 text-brand-primary font-600">
                            CMP-2026-9472
                        </td>
                        <td className="flex w-1/3 items-start justify-center flex-col gap-2">
                            <span className="font-public-sans text-base font-600">
                                Pohon tumbang di depan Kebun Binatang samping
                                Kampus ITB
                            </span>
                            <span className="text-brand-default text-base font-public-sans font-400">
                                Jl. Tamansari depan Kebun Binatang
                            </span>
                        </td>
                        <td className="text-brand-default flex text-base items-center justify-center w-1/6 font-public-sans font-400">
                            Dinas Pertamanan dan Hutan Kota Bandung
                        </td>
                        <td className="w-1/6 flex items-center justify-center">
                            <StatusBadge status="submitted" />
                        </td>
                        <td className="w-1/6 font-ibm-plex-mono flex items-center justify-center">
                            Awaiting verification
                        </td>
                        <td className="w-1/6 font-ibm-plex-mono text-brand-default flex items-center justify-center">
                            Oct 30
                        </td>
                    </tr>
                    <tr className="p-4 rounded-bl-xl rounded-br-xl border-t border-t-brand-border flex w-full bg-brand-third items-center justify-between">
                        <td className="font-ibm-plex-mono flex items-center justify-center w-1/6 text-brand-primary font-600">
                            CMP-2026-8841
                        </td>
                        <td className="flex w-1/3 items-start justify-center flex-col gap-2">
                            <span className="font-public-sans font-600">
                                PAM clean drinking water pipeline burst flooding
                                sidewalk in front of Cipete Raya MRT
                            </span>
                            <span className="text-brand-default font-public-sans font-400">
                                Jl. Fatmawati Raya No. 42 (depan Stasiun MRT
                                Cipete Raya)
                            </span>
                        </td>
                        <td className="text-brand-default flex items-center justify-center w-1/6 font-public-sans font-400">
                            Perumda PAM JAYA (Clean Drinking Water)
                        </td>
                        <td className="w-1/6 flex items-center justify-center">
                            <StatusBadge status="in riview" />
                        </td>
                        <td className="w-1/6 text-brand-red font-ibm-plex-mono flex items-center justify-center gap-2">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_601_187)">
                                    <path
                                        d="M6.00245 2.25154L1.06162 10.4999C0.959749 10.6763 0.905848 10.8763 0.905278 11.08C0.904708 11.2837 0.957487 11.484 1.05837 11.661C1.15925 11.838 1.30471 11.9855 1.48028 12.0888C1.65585 12.1921 1.85542 12.2476 2.05912 12.2499H11.9408C12.1445 12.2476 12.344 12.1921 12.5196 12.0888C12.6952 11.9855 12.8407 11.838 12.9415 11.661C13.0424 11.484 13.0952 11.2837 13.0946 11.08C13.0941 10.8763 13.0402 10.6763 12.9383 10.4999L7.99745 2.25154C7.89346 2.0801 7.74704 1.93836 7.57231 1.83999C7.39759 1.74162 7.20046 1.68994 6.99995 1.68994C6.79944 1.68994 6.60231 1.74162 6.42759 1.83999C6.25286 1.93836 6.10644 2.0801 6.00245 2.25154Z"
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
                                        d="M7 9.9165H7.00583"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_601_187">
                                        <rect
                                            width="14"
                                            height="14"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Breached by 64h 2m</span>
                        </td>
                        <td className="w-1/6 font-ibm-plex-mono text-brand-default flex items-center justify-center">
                            Oct 29
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
