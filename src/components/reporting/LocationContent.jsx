import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as YUP from "yup";
import { TempReportContext } from "../../lib/contexts";
import { ScrollRestoration, useOutletContext } from "react-router";
import { FormNavigation } from "./FormNavigation";

export default function LocationContent(props) {
    const schemaValidate = YUP.object({
        area: YUP.string().required(),
        address: YUP.string().required(),
    });

    const { nextStepConfirm } = useOutletContext();

    const [report, setReport] = useContext(TempReportContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            area: report.location?.area || "",
            address: report.location?.address || "",
            coordinate:
                report.location?.coordinate || "6.2088° S, 106.8456° E (WIB)",
        },
        resolver: yupResolver(schemaValidate),
    });

    function addLocationHandler(data) {
        const copyReportData = { ...report };
        copyReportData.location = data;
        setReport(copyReportData);
        nextStepConfirm();
    }

    return (
        <>
            <ScrollRestoration/>
            <div className="flex mb-4 w-full items-start justify-start flex-col gap-2">
                <span className="font-ibm-plex-mono font-400 text-brand-default text-lg">
                    Step 02 of 04
                </span>
                <span className="font-fraunces font-600 text-[2rem] font-bold">
                    Where is it located?
                </span>
                <span className="font-public-sans font-400 text-brand-default">
                    Provide street address, RT/RW, or notable landmark for inspection crews.
                </span>
            </div>
            <form
                className="w-full flex justify-start items-center flex-col"
                onSubmit={handleSubmit(addLocationHandler)}
                action=""
            >
                <div className="flex mt-8 justify-start items-center flex-col gap-4 w-full">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                        htmlFor="area"
                    >
                        Kelurahan / Kecamatan & Wilayah
                    </label>
                    <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                        <input
                            {...register("area", {
                                onChange(e) {
                                    setReport({
                                        ...report,
                                        location: {
                                            ...report.location,
                                            area: e.target.value
                                        }
                                    })
                                }
                            })}
                            placeholder="kecamatan & wilayah"
                            id="area"
                            type="text"
                            className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                        />
                    </div>
                    {errors.area && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.area.message}
                        </span>
                    )}
                </div>

                <div className="flex items-start justify-center flex-col w-full py-4">
                    <span className="font-ibm-plex-mono font-400 uppercase text-brand-default">
                        Common areas in Coblong &dot; Kota Bandung
                    </span>
                    <div className="flex items-center justify-center flex-row max-lg:justify-start max-lg:w-full flex-wrap gap-2 py-2">
                        <span className="bg-brand-third px-4 py-2 rounded-4xl border border-brand-border">
                            Jl. Dago
                        </span>
                        <span className="bg-brand-third px-4 py-2 rounded-4xl border border-brand-border">
                            Institut Teknologi Bandung (ITB)
                        </span>
                        <span className="bg-brand-third px-4 py-2 rounded-4xl border border-brand-border">
                            Simpang Dago
                        </span>
                        <span className="bg-brand-third px-4 py-2 rounded-4xl border border-brand-border">
                            Pasar Dago
                        </span>
                        <span className="bg-brand-third px-4 py-2 rounded-4xl border border-brand-border">
                            Jl. Ir. H. Juanda
                        </span>
                    </div>
                </div>

                <div className="flex justify-start items-center flex-col gap-4 w-full">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                        htmlFor="address"
                    >
                        Street Address, RT/RW, or Landmark *
                    </label>
                    <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                        <input
                            {...register("address",{
                                onChange(e) {
                                    setReport({
                                        ...report,
                                        location: {
                                            ...report.location,
                                            address: e.target.value
                                        }
                                    })
                                }
                            })}
                            placeholder="Alamat anda"
                            id="address"
                            type="text"
                            className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                        />
                    </div>
                    {errors.address && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.address.message}
                        </span>
                    )}
                </div>

                <div className="w-full mt-4 bg-brand-main-color border border-brand-border rounded-xl p-4 flex items-center justify-between">
                    <svg
                        className="text-brand-primary text-lg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_214_751)">
                            <g clipPath="url(#clip1_214_751)">
                                <path
                                    d="M12.25 5.83325C12.25 9.91658 7 13.4166 7 13.4166C7 13.4166 1.75 9.91658 1.75 5.83325C1.75 4.44087 2.30312 3.10551 3.28769 2.12094C4.27226 1.13638 5.60761 0.583252 7 0.583252C8.39239 0.583252 9.72774 1.13638 10.7123 2.12094C11.6969 3.10551 12.25 4.44087 12.25 5.83325Z"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M8.75 5.83325C8.75 6.79975 7.9665 7.58325 7 7.58325C6.0335 7.58325 5.25 6.79975 5.25 5.83325C5.25 4.86675 6.0335 4.08325 7 4.08325C7.9665 4.08325 8.75 4.86675 8.75 5.83325Z"
                                    strokeWidth="1.16667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_214_751">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_214_751">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span className="font-public-sans font-600 text-base">
                        Coordinates auto-pinned
                    </span>

                    <span className="font-public-sans text-base text-brand-default">
                        6.2088° S, 106.8456° E (WIB)
                    </span>
                </div>
                <FormNavigation backBtnContent="Back" nextBtnContent="Continue"  />
            </form>
        </>
    );
}
