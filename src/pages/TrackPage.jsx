import { useNavigate } from "react-router";

export default function TrackPage() {

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const id = formData.get("id");
        navigate("/track/detail/" + id);
        e.target.reset();
    }

    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">

            <div className="w-full flex-col h-fit flex lg:flex-row items-start justify-center">

                <form
                    onSubmit={handleSubmit}
                    action={"#"}
                    className="lg:w-1/2 w-full bg-brand-third border border-brand-border p-6 rounded-xl gap-4 items-start justify-center flex-col flex">
                    <span className="uppercase text-brand-default text-base">Citizen Portal</span>
                    <h1 className="font-fraunces font-extrabold text-[3.5rem]">Track your complaint</h1>
                    <p className="font-public-sans text-lg line-h-8 font-400 text-brand-default">
                        Enter your official case reference number to view real-time triage progress,<br />
                        inspector assignment, and official replies.
                    </p>
                    <div className="flex justify-start items-center flex-col gap-4 w-full">
                        <label className="font-ibm-plex-mono w-full font-600 text-base" htmlFor="complain-id">Complaint
                            Reference ID *</label>
                        <input name="id" placeholder="e.g. CMP-2026-8841" id="complain-id" type="text"
                        className="bg-brand-third w-full border border-brand-border rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
                    </div>
                    <div className="flex justify-start items-center flex-col gap-4 w-full">
                        <label className="font-ibm-plex-mono w-full font-600 text-base" htmlFor="complain-id">Email
                            address or phone (optional verification)</label>
                        <input placeholder="citizen@example.com" id="complain-id" type="text"
                        className="bg-brand-third w-full border border-brand-border rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
                    </div>
                    <div>
                        Try a sample record: <span
                            className="font-ibm-plex-mono font-600 text-brand-primary">CMP-2026-8841 &dot; CMP-2026-8794
                            (Resolved)</span>
                    </div>
                    <button className="px-4 py-2 rounded-full flex gap-2 justify-center items-center flex-row bg-brand-primary text-white" type="submit">
                        <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                                strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                            <path d="M10.5 10.5L8.35 8.34998" strokeLinecap="round"
                                strokeLinejoin="round" stroke="currentColor" />
                        </svg>
                        <span>Lookup report status</span>
                        <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_13)">
                                <path d="M3.125 7.5H11.875" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                                <path d="M7.5 3.125L11.875 7.5L7.5 11.875" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                            </g>
                        </svg>
                    </button>
                </form>

                <div
                    className="lg:w-1/2 w-full flex items-start flex-col justify-start h-fit p-6">
                    <div
                        className="flex items-start justify-start w-full flex-row gap-2 p-6 border-b border-b-brand-border">
                        <svg className="text-xl text-brand-default" width="1em" height="1em" viewBox="0 0 20 20"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_713)">
                                <path
                                    d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                    strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path
                                    d="M7.58325 7.5C7.79055 6.95969 8.17887 6.50804 8.68198 6.22207C9.18509 5.9361 9.77183 5.83354 10.3421 5.93186C10.9124 6.03019 11.4309 6.32332 11.8092 6.76125C12.1875 7.19919 12.4022 7.7548 12.4166 8.33333C12.4166 10 9.91658 10.8333 9.91658 10.8333"
                                    strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                    stroke="currentColor" />
                                <path d="M10 14.1667H10.0083" strokeWidth="1.66667" strokeLinecap="round"
                                    strokeLinejoin="round" stroke="currentColor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_713">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className="text-base font-public-sans font-400 line-h-8 text-brand-default">
                            Your tracking ID was displayed on your confirmation receipt and <br />
                            sent to your registered email address immediately upon intake.<br />
                            <br />
                            Reports filed anonymously can only be tracked using this unique<br />
                            key; officers cannot retrieve records by name without it.
                        </p>
                    </div>
                    <a className="no-underline text-base text-brand-primary font-public-sans p-6 font-600"
                        href="#">Lost your tracking ID? Search recent reports by location →</a>
                </div>
            </div>
        </div>
    );
}
