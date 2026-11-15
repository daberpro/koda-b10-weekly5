import StatusBadge from "../components/StatusBadge";

export default function ReportingReceiptPage() {
    return (
        <div className="w-full h-fit flex flex-row items-start justify-center">
            <div
                className="lg:w-[70%] w-full flex items-start flex-col justify-start h-fit p-6 gap-4">

                <div
                    className="w-full flex items-start justify-center flex-col bg-brand-third p-6 rounded-xl border border-brand-border gap-4">

                    <div className="flex items-end justify-between flex-row w-full">
                        <StatusBadge status="submitted" />
                        <span className="font-ibm-plex-mono font-400 text-base text-brand-default">Logged 04:41
                            PM</span>
                    </div>


                    <div className="flex w-full items-start justify-start flex-col gap-2">
                        <span
                            className="font-ibm-plex-mono font-400 text-brand-default text-lg">Official
                            Tracking Reference</span>
                        <div className="flex items-center justify-center gap-4">
                            <span
                                className="font-public-sans text-lg text-brand-primary font-600 text-[2rem]">CMP-2026-9472</span>
                            <button
                                className="border border-brand-border bg-brand-third p-4 rounded-[2.5rem] text-lg text-brand-default flex items-center justify-center cursor-pointer">
                                <svg width="1em" height="1em" viewBox="0 0 17 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_1328)">
                                        <g clipPath="url(#clip1_214_1328)">
                                            <path
                                                d="M7.79167 6.375H14.1667C14.9491 6.375 15.5833 7.00926 15.5833 7.79167V14.1667C15.5833 14.9491 14.9491 15.5833 14.1667 15.5833H7.79167C7.00926 15.5833 6.375 14.9491 6.375 14.1667V7.79167C6.375 7.00926 7.00926 6.375 7.79167 6.375Z"
                                                strokeWidth="1.41667" strokeLinecap="round"
                                                strokeLinejoin="round" stroke="currentColor" />
                                            <path
                                                d="M3.5415 10.6251H2.83317C2.45745 10.6251 2.09711 10.4758 1.83144 10.2101C1.56576 9.94447 1.4165 9.58414 1.4165 9.20841V2.83341C1.4165 2.45769 1.56576 2.09736 1.83144 1.83168C2.09711 1.566 2.45745 1.41675 2.83317 1.41675H9.20817C9.58389 1.41675 9.94423 1.566 10.2099 1.83168C10.4756 2.09736 10.6248 2.45769 10.6248 2.83341V3.54175"
                                                strokeWidth="1.41667" strokeLinecap="round"
                                                strokeLinejoin="round" stroke="currentColor" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_1328">
                                            <rect width="17" height="17" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_214_1328">
                                            <rect width="17" height="17" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        className="w-full bg-brand-third border border-dashed border-brand-border rounded-xl p-6 flex gap-2 items-start flex-col justify-center">
                        <span className="font-public-sans font-600 text-lg">Pohon tumbang di depan
                            Kebun Binatang samping Kampus ITB</span>
                        <p className="text-brand-default leading-6 text-base font-public-sans font-400">
                            Dinas Pertamanan dan Hutan Kota · Jl. Tamansari depan Kebun
                            Binatang
                        </p>
                    </div>

                    <div
                        className="p-6 flex items-start border-t border-t-brand-border border-b border-b-brand-border w-full justify-center flex-col gap-4">
                        <span className="font-fraunces font-600 text-lg">What happens next</span>
                        <ol className="flex items-start justify-center gap-4 flex-col">
                            <li className="text-brand-default font-public-sans text-base">Your report is awaiting
                                evidence verification. Proposed bureau: <span className="font-600">Dinas
                                    Pertamanan dan Hutan Kota</span></li>
                            <li className="text-brand-default font-public-sans text-base">A duty inspector will
                                assess site urgency within the target <span className="font-600">48-hour SLA
                                    window once routed</span></li>
                            <li className="text-brand-default font-public-sans text-base">Status transitions and
                                official statements will appear directly on your tracking page</li>
                        </ol>
                    </div>

                    <div className="w-full items-center justify-start gap-4 flex-row flex py-8">
                        <a href="#"
                            className="bg-brand-primary no-underline text-white font-public-sans font-600 text-base rounded-2xl p-4 border-0 outline-none cursor-pointer flex items-center justify-center gap-2">
                            Track report status
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
                        <button className="flex text-base items-center justify-center gap-4 p-4 rounded-2xl border border-brand-border bg-brand-third">
                            <svg width="1em" height="1em" viewBox="0 0 13 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_1361)">
                                    <g clipPath="url(#clip1_214_1361)">
                                        <path d="M3.25 4.875V1.625H9.75V4.875" strokeWidth="1.08333"
                                            strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                        <path
                                            d="M3.25016 9.75H2.16683C1.87951 9.75 1.60396 9.63586 1.4008 9.4327C1.19763 9.22953 1.0835 8.95398 1.0835 8.66667V5.95833C1.0835 5.67102 1.19763 5.39547 1.4008 5.1923C1.60396 4.98914 1.87951 4.875 2.16683 4.875H10.8335C11.1208 4.875 11.3964 4.98914 11.5995 5.1923C11.8027 5.39547 11.9168 5.67102 11.9168 5.95833V8.66667C11.9168 8.95398 11.8027 9.22953 11.5995 9.4327C11.3964 9.63586 11.1208 9.75 10.8335 9.75H9.75016"
                                            strokeWidth="1.08333" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                        <path
                                            d="M3.79167 7.58325H9.20833C9.50749 7.58325 9.75 7.82576 9.75 8.12492V11.3749C9.75 11.6741 9.50749 11.9166 9.20833 11.9166H3.79167C3.49251 11.9166 3.25 11.6741 3.25 11.3749V8.12492C3.25 7.82576 3.49251 7.58325 3.79167 7.58325Z"
                                            strokeWidth="1.08333" strokeLinecap="round"
                                            strokeLinejoin="round" stroke="currentColor" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_214_1361">
                                        <rect width="13" height="13" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_214_1361">
                                        <rect width="13" height="13" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>
                                Back to feed
                            </span>
                        </button>
                        <button
                            className="bg-transparent border-0 outline-none text-brand-primary text-base font-public-sans font-600">Cancel</button>

                    </div>

                </div>

            </div>
        </div>
    );
}
