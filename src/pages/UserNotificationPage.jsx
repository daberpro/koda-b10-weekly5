import StatusBadge from "../components/StatusBadge";

export default function UserNotificationPage() {
    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <div className="w-full h-fit flex flex-row items-start justify-center">
                <div className="w-full p-6 gap-4 items-start justify-center flex-col flex">
                    <span className="uppercase text-brand-default text-base">
                        Alerts & Activity
                    </span>
                    <div className="w-full flex items-center justify-between">
                        <h1 className="font-fraunces font-bold text-[3.5rem]">
                            Notifications
                        </h1>
                        <button className="bg-transparent text-lg border-0 outline-none font-public-sans font-600 text-brand-primary flex items-center justify-center gap-2">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_601_7)">
                                    <path
                                        d="M11.6666 3.5L5.24998 9.91667L2.33331 7"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_601_7">
                                        <rect
                                            width="14"
                                            height="14"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span>Mark all as read</span>
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-start gap-2">
                        <span className="uppercase font-ibm-plex-mono font-400 text-brand-default text-base">
                            Filter :
                        </span>
                        <button className="border border-brand-border px-4 py-2 rounded-4xl bg-brand-primary font-public-sans font-400 text-base text-white">
                            All
                        </button>
                        <button className="border border-brand-border px-4 py-2 rounded-4xl bg-brand-third font-public-sans font-400 text-base text-brand-default">
                            Unread
                        </button>
                        <button className="border border-brand-border px-4 py-2 rounded-4xl bg-brand-third font-public-sans font-400 text-base text-brand-default">
                            Status
                        </button>
                        <button className="border border-brand-border px-4 py-2 rounded-4xl bg-brand-third font-public-sans font-400 text-base text-brand-default">
                            Replies
                        </button>
                    </div>

                    <div className="flex items-start flex-row justify-center w-full gap-4">
                        <div className="w-1/3 flex items-center justify-start flex-col h-85 rounded-xl">
                            <div className="h-fit bg-brand-secondary border-l-4 border-l-brand-primary border border-brand-border rounded-tl-xl rounded-tr-xl flex gap-4 items-center justify-between flex-col w-full p-4">
                                <div className="w-full flex items-center justify-between flex-row">
                                    <span className="font-ibm-plex-mono font-400 text-base text-brand-primary">
                                        CMP-2026-9472
                                    </span>
                                    <span className="font-public-sans font-400 text-brand-default">
                                        04:41 PM
                                    </span>
                                </div>
                                <div className="w-full flex items-center justify-start flex-row">
                                    <span className="font-public-sans font-600 text-base">
                                        Report received — verification pending
                                    </span>
                                </div>
                                <div className="w-full flex items-center justify-between flex-row">
                                    <span className="font-public-sans text-brand-default font-400">
                                        Status Change
                                    </span>
                                    <svg
                                        className="text-xs text-brand-primary"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 7 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="7"
                                            height="7"
                                            rx="3.5"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="h-fit bg-brand-third border-t border-t-brand-border rounded-bl-xl rounded-br-xl flex gap-4 items-center justify-between flex-col w-full p-4">
                                <div className="w-full flex items-center justify-between flex-row">
                                    <span className="font-ibm-plex-mono font-400 text-base text-brand-primary">
                                        CMP-2026-9472
                                    </span>
                                    <span className="font-public-sans font-400 text-brand-default">
                                        04:41 PM
                                    </span>
                                </div>
                                <div className="w-full flex items-center justify-start flex-row">
                                    <span className="font-public-sans font-600 text-base">
                                        Report received — verification pending
                                    </span>
                                </div>
                                <div className="w-full flex items-center justify-between flex-row">
                                    <span className="font-public-sans text-brand-default font-400">
                                        Status Change
                                    </span>
                                    <svg
                                        className="text-xs text-brand-primary"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 7 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="7"
                                            height="7"
                                            rx="3.5"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="w-[70%] flex items-start flex-col justify-start h-fit gap-4">
                            <div className="w-full flex items-start justify-center flex-col bg-brand-third p-6 rounded-xl border border-brand-border gap-4">
                                <div className="flex items-end justify-between flex-row w-full">
                                    <span className="font-ibm-plex-mono font-400 text-base text-brand-default">
                                        Incident Reference
                                    </span>
                                    <StatusBadge status="submitted" />
                                </div>

                                <div className="flex w-full items-start justify-start flex-col gap-2">
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="font-public-sans text-lg text-brand-primary font-600 text-[2rem]">
                                            CMP-2026-9472
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full border-t border-t-brand-default py-6 flex gap-2 items-start flex-col justify-center">
                                    <span className="font-fraunces font-600 text-lg">
                                        Report received — verification pending
                                    </span>
                                    <span className="text-brand-default leading-6 text-base font-ibm-plex-mono uppercase font-400">
                                        Dispatched Oct 30, 04:41 PM GMT+7
                                    </span>
                                </div>

                                <div className="p-6 flex items-start bg-brand-light-orange-secondary rounded-xl border border-brand-border w-full justify-center flex-col gap-4">
                                    <span className="font-public-sans leading-6 text-brand-default">
                                        Your report CMP-2026-9472 is queued for
                                        WargaReport evidence verification.
                                        Proposed bureau: Dinas Pertamanan dan
                                        Hutan Kota DKI Jakarta. The SLA
                                        countdown starts once the report is
                                        routed.
                                    </span>
                                </div>

                                <div className="w-full items-center justify-start gap-4 flex-row flex py-6">
                                    <a
                                        href="#"
                                        className="bg-brand-primary no-underline text-white font-public-sans font-600 text-base rounded-2xl p-4 border-0 outline-none cursor-pointer flex items-center justify-center gap-2"
                                    >
                                        Open complaint tracking record
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_214_614)">
                                                <path
                                                    d="M2.70831 6.5H10.2916"
                                                    strokeWidth="1.08333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="currentColor"
                                                />
                                                <path
                                                    d="M6.5 2.70825L10.2917 6.49992L6.5 10.2916"
                                                    strokeWidth="1.08333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_214_614">
                                                    <rect
                                                        width="13"
                                                        height="13"
                                                        fill="currentColor"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
