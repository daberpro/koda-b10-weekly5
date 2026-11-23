import { Link } from "react-router";
import StatusBadge from "./StatusBadge";
import { useEffect } from "react";

/**
 *
 * @param {{ totalProof: number, date: string, variant: string }} param0
 * @returns
 */
function ComponentVariant({ totalProof = 0, date = "Uknown 0", variant, url }) {
    switch(variant){
        case "variant-2":
            return (
                <>
                    <span className="font-ibm-plex-mono font-400 text-base">{ totalProof } proof</span>
                    <span className="font-ibm-plex-mono font-400 text-base text-brand-default">{ date }</span>
                    <Link
                        to={url}
                        className="bg-transparent cursor-pointer font-public-sans font-400 outline-none border-0 flex justify-center items-start flex-col text-base font-400 text-brand-primary">
                        <span className="font-600 text-base">Track &#8594;</span>
                    </Link>
                </>
            )
        case "variant-1":
        default:
            return (
                <Link to={url} className="bg-transparent cursor-pointer font-public-sans font-normal outline-none border-0 flex flex-col justify-center items-start text-base text-brand-primary">
                    <span>Inspect</span>
                    <span>&#8594;</span>
                </Link>
            )
    }
}

export default function ReportCards({ title, location, evidence, dateCreation, upvote, status, id, variant, department = "No department" }) {

    return (
        <div className="min-h-40 max-[1499px]:h-fit flex justify-start items-start flex-col lg:flex-row bg-brand-third border border-brand-border rounded-xl p-6 gap-4">
            {evidence?.files?.length > 0 && (
                <div className="flex h-full justify-start items-center flex-col">
                    <img className="rounded-xl w-32 h-32 object-cover" src={"placeholder.svg"} alt="Report Image" />
                </div>
            )}
            <div className={"flex justify-start h-[stretch] w-full gap-2 " + (variant === "variant-1"? "flex-col items-start" : "flex-col lg:flex-row items-start lg:items-center")}>

                <div className={"items-center flex justify-between h-full flex-col gap-2 " + (variant === "variant-1"? "w-full" : "grow")}>
                    <div className="w-full flex mb-2 justify-start flex-col lg:flex-row items-start lg:items-center gap-2">
                        <div className="w-fit items-center justify-start flex gap-2">
                            <StatusBadge status={status} />
                            <span className="text-brand-default text-md">{id}</span>
                        </div>
                        <div className="w-fit items-center justify-start gap-2 flex">
                            {variant === "variant-2" && (
                                <>
                                    <span>{"\u00B7"}</span>
                                    <span className="text-lg font-semibold font-public-sans">{ department }</span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <div className="w-full">
                            <span className="font-public-sans font-semibold text-base">{title}</span>
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" strokeLinecap="round" strokeLinejoin="round" stroke="#0F6B4F" />
                                <path d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z" strokeLinecap="round" strokeLinejoin="round" stroke="#0F6B4F" />
                            </svg>
                            <span className="font-public-sans text-brand-default text-base">{location?.address}</span>
                        </div>
                    </div>
                </div>

                <div className={"h-full flex items-center mt-2 flex-row gap-4 " + (variant === "variant-1"? "w-full justify-between" : "w-fit justify-end")}>
                    <button className="bg-brand-secondary cursor-pointer font-public-sans font-normal border border-brand-border outline-none text-brand-default p-2 rounded-4xl text-base flex gap-2 justify-center items-center">
                        <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 5V11" strokeLinecap="round" strokeLinejoin="round" stroke="#0F6B4F" />
                            <path d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z" strokeLinecap="round" strokeLinejoin="round" stroke="#0F6B4F" />
                        </svg>
                        <span>{upvote}</span>
                    </button>
                    <ComponentVariant url={"/track/detail/"+id} date={ (dateCreation?.month?.substring(0,3) || "Uknown") + " " + (dateCreation?.date || "")} totalProof={evidence?.files?.length} variant={variant}  />
                </div>
            </div>
        </div>
    );
}
