import { ScrollRestoration } from "react-router";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
import * as YUP from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { agenciesActions } from "../../redux/slices/agencies.slice";

function PlusIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 2.5V9.5M2.5 6H9.5"
                stroke="currentColor"
                strokeLinecap="round"
            />
        </svg>
    );
}

function PencilIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.5 1.8L10.2 3.5L4 9.7L1.8 10.2L2.3 8L8.5 1.8Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Agencies() {
    const { agencies } = useSelector((state) => state.agencies);
    const reduxDispatch = useDispatch();

    const schema = YUP.object({
        agencyName: YUP.string().required(),
        jurisdictionStatement: YUP.string().required(),
        averageReponse: YUP.number().min(1).required(),
        supportHotline: YUP.string().required(),
        dispatchEmail: YUP.string().required(),
        officeAddress: YUP.string().required(),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    function handleAgencyData(data) {
        reduxDispatch(
            agenciesActions.addNewAgency({
                id: crypto.randomUUID(),
                ...data,
                openCases: 0,
            }),
        );
        reset();
    }

    return (
        <>
            <ScrollRestoration />
            <section className="w-full flex flex-col gap-4">
                <div className="flex py-4 items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-ibm-plex-mono text-lg uppercase tracking-widest text-gray-500">
                            Registered municipal bureaus ({agencies.length})
                        </span>
                        <p className="font-public-sans text-lg text-gray-500">
                            Agencies available for report routing and officer
                            assignment.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 font-public-sans font-medium text-white cursor-pointer"
                    >
                        <PlusIcon />
                        Add agency
                    </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-third">
                    <div className="grid grid-cols-[1fr_20%_12%_12%_10%] items-center gap-4 px-5 py-3 border-b border-brand-border bg-black/3 font-ibm-plex-mono uppercase tracking-wider text-gray-500">
                        <span>Agency</span>
                        <span>Contact phone</span>
                        <span>Avg response</span>
                        <span>Open cases</span>
                        <span className="text-right">Settings</span>
                    </div>

                    {agencies.map((a) => (
                        <div
                            key={a.id}
                            className="grid grid-cols-[1fr_20%_12%_12%_10%] items-center gap-4 px-5 py-4 border-b border-brand-border last:border-b-0 font-public-sans"
                        >
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-semibold text-brand-default">
                                    {a.agencyName}
                                </span>
                                <span className="truncate text-gray-500">
                                    {a.dispatchEmail}
                                </span>
                            </div>
                            <span className="font-ibm-plex-mono text-brand-default">
                                {a.supportHotline}
                            </span>
                            <span className="font-ibm-plex-mono text-emerald-800">
                                {a.averageReponse}d
                            </span>
                            <span className="font-ibm-plex-mono text-brand-default">
                                {a.openCases}
                            </span>
                            <span className="flex justify-end">
                                <button className="flex items-center gap-1.5 font-semibold text-emerald-800 cursor-pointer">
                                    <PencilIcon />
                                    Edit
                                </button>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            <ModalContainer
                title={isEdit ? "Edit Agency" : "New Agency"}
                show={showModal}
                showModalFn={setShowModal}
                subtitle={"Create routing category"}
            >
                <form
                    onSubmit={handleSubmit(handleAgencyData)}
                    className="flex overflow-y-auto scrollbar-thin flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="agency-name"
                        >
                            Agency Name
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("agencyName")}
                            type="text"
                            id="agency-name"
                        />
                        {errors.agencyName && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.agencyName.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="statement"
                        >
                            Jurisdiction Statement
                        </label>
                        <textarea
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("jurisdictionStatement")}
                            id="statement"
                        ></textarea>
                        {errors.jurisdictionStatement && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.jurisdictionStatement.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="hotline"
                        >
                            Support Hotline
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("supportHotline")}
                            type="text"
                            id="hotline"
                        />
                        {errors.supportHotline && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.supportHotline.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="disptach-email"
                        >
                            Dispatch Email
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("dispatchEmail")}
                            type="email"
                            id="dispatch-email"
                        />
                        {errors.dispatchEmail && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.dispatchEmail.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="office-address"
                        >
                            Office Address
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("officeAddress")}
                            type="text"
                            id="office-address"
                        />
                        {errors.officeAddress && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.officeAddress.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="average-response"
                        >
                            Average Response (Days)
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("averageReponse")}
                            type="number"
                            id="average-response"
                        />
                        {errors.averageReponse && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.averageReponse.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-row justify-end gap-4 py-4 border-t border-t-brand-border flex-wrap">
                        <button
                            className="px-4 py-2 cursor-pointer rounded-4xl border border-brand-border"
                            type="reset"
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 cursor-pointer py-2 bg-brand-primary text-white rounded-4xl"
                            {...register("action")}
                            value="verified"
                            type="submit"
                        >
                            Create Category
                        </button>
                    </div>
                </form>
            </ModalContainer>
        </>
    );
}
