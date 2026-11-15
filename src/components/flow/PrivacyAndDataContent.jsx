export default function PrivacyAndDataContent() {
    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <div className="w-full gap-4 items-start justify-center flex-col flex">
                <div className="flex py-6 items-start flex-col justify-center w-full gap-4">
                    <div className="p-8 w-1/2 bg-brand-third border border-brand-border rounded-xl flex items-start gap-4 justify-center flex-col">
                        <span className="font-fraunces font-600 text-lg">
                            Privacy Rights & Data Portability
                        </span>
                        <span className="font-public-sans text-brand-default text-base">
                            Review personal records retained under municipal
                            open data laws.
                        </span>
                        <p className="font-public-sans font-400 leading-6">
                            Under Indonesian Law No. 27/2022 on Personal Data
                            Protection (UU PDP) and Law No. 14/2008 on Public
                            Information Openness (UU KIP), personal citizen
                            identifiers are strictly segregated from public
                            registers.
                        </p>
                        <div className="p-4 border-2 border-dashed border-brand-border gap-4 rounded-xl flex items-start justify-center flex-col bg-brand-light-orange-secondary">
                            <span className="font-public-sans font-600 text-base">
                                Download your case archive
                            </span>
                            <span className="font-public-sans text-base font-400 text-brand-default">
                                Export all submitted complaints, attached media
                                metadata, and officer replies as standard JSON.
                            </span>
                            <button className="bg-brand-third p-4 flex items-center justify-center gap-4 cursor-pointer border border-brand-border rounded-4xl">
                                <svg
                                    className="text-lg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_601_597)">
                                        <path
                                            d="M10.5 7.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V7.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M3.5 5L6 7.5L8.5 5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M6 7.5V1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="currentColor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_601_597">
                                            <rect
                                                width="12"
                                                height="12"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="font-public-sans text-base">
                                    Download JSON archive
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
