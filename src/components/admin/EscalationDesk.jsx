import { Link, ScrollRestoration } from "react-router";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { allTopics } from "../../lib/constants";
import { reportType } from "../../redux/types";
import * as YUP from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function EscalationRowContent(props) {

    const topic = allTopics.find((d) => {
        return d.topic == props.topic;
    });
    return (
        <tr className="bg-white">
            <td className="px-4 py-3 align-middle">
                <p className="font-medium">{props.title}</p>
                <span className="text-xs text-gray-500">{props.id}</span>
            </td>
            <td className="px-4 py-3 align-middle">
                <span className="block">{topic?.title}</span>
                <span className="block text-xs text-gray-500">
                    {props.agencies}
                </span>
            </td>
            <td className="px-4 py-3 align-middle font-ibm-plex-mono text-sm">
                {props.dateCreation?.month?.substring(0, 3)}{" "}
                {props.dateCreation?.date}, {props.dateCreation?.time}
            </td>
            <td className="px-4 py-3 align-middle font-ibm-plex-mono text-sm">
                {props.evidence.files?.length} file
            </td>
            <td className="px-4 py-3 align-middle">
                <button
                    onClick={() => props.setShowModal(true)}
                    className="font-public-sans text-black px-4 py-2 rounded-4xl border border-brand-border cursor-pointer"
                >
                    Review
                </button>
            </td>
        </tr>
    );
}

export default function EscalationDesk() {

    const schema = YUP.object({
        category: YUP.string().required(),
        agency: YUP.string().required(),
        priority: YUP.string().required(),
        sla: YUP.number().min(1).required(),
        note: YUP.string().optional()
    });

    const { register, formState: {errors}, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const data = useSelector((state) => state);
    const [selectedReport, setSelectedReport] = useState(reportType);
    const [showModal, setShowModal] = useState(false);

    function escalateReport(data) {
        console.log(data);
    }

    return (
        <>
            <ScrollRestoration />
            <section className="w-full gap-4 h-fit grid grid-cols-2">
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
                                {data.reports.reports.map((report, i) => {
                                    return (
                                        <EscalationRowContent
                                            key={"escalation-row-" + i}
                                            setShowModal={(arg) => {
                                                setSelectedReport(report);
                                                setShowModal(arg);
                                            }}
                                            {...report}
                                            agencies=""
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <ModalContainer
                title={"Escalation Desk"}
                show={showModal}
                showModalFn={setShowModal}
                subtitle={"Verify incoming report"}
            >
                <form onSubmit={handleSubmit(escalateReport)} className="flex overflow-y-auto scrollbar-thin flex-col gap-4">
                    <div className="rounded-2xl bg-brand-main gap-2 flex flex-col border-dashed border p-4 border-brand-border">
                        <span className="text-brand-primary uppercase font-ibm-plex-mono">
                            {selectedReport.id}
                        </span>
                        <span className="font-public-sans font-semibold text-lg">
                            {selectedReport.title}
                        </span>
                        <p className="font-public-sans font-light">
                            {selectedReport.details}
                        </p>
                        <span className="text-brand-default font-public-sans">
                            {selectedReport.location.address},
                            {selectedReport.location.area}
                        </span>
                        <span className="text-brand-default font-public-sans">
                            Reported by{" "}
                            {selectedReport.anonymus == "anonymus"
                                ? "an anonymous resident"
                                : selectedReport.fillerName}
                        </span>
                        <span className="text-brand-default font-public-sans">
                            {selectedReport.evidence.files.length} evidence file
                            · submitted{" "}
                            {selectedReport.dateCreation?.month?.substring(
                                0,
                                3,
                            )}{" "}
                            {selectedReport.dateCreation?.date},{" "}
                            {selectedReport.dateCreation?.time}
                        </span>
                        <Link to={"/track/detail/"+selectedReport.id} className="text-brand-primary font-semibold text-lg">
                            Open full case record →
                        </Link>
                    </div>

                    <div className="p-4 rounded-2xl border border-brand-border">
                        Review attached evidence (
                        {selectedReport.evidence.files.length})
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            {...register("category")}
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            id="category"
                        >
                            {allTopics.map((d) => {
                                return <option key={d.title}>{d.title}</option>;
                            })}
                        </select>
                        {errors.category && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.category.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="agency"
                        >
                            Route to agency
                        </label>
                        <select
                            {...register("agency")}
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            id="agency"
                        >
                            <option>
                                Satpol PP Provinsi DKI Jakarta (Public Order)
                            </option>
                        </select>
                        {errors.agency && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.agency.message}
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                        <div className="flex flex-col gap-2">
                            <label
                                className="uppercase text-brand-default text-sm"
                                htmlFor="priority"
                            >
                                Priority
                            </label>
                            <select
                                {...register("priority")}
                                className="p-4 border border-brand-border rounded-2xl outline-0"
                                id="priority"
                            >
                                <option>Standard</option>
                            </select>
                            {errors.priority && (
                                <span className="text-red-500 col-span-2 w-full text-sm">
                                    {errors.priority.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="uppercase text-brand-default text-sm"
                                htmlFor="sla"
                            >
                                SLA window (hours)
                            </label>
                            <input
                                {...register("sla")}
                                className="p-4 border border-brand-border rounded-2xl outline-0"
                                type="number"
                                id="sla"
                            />
                        </div>
                        {errors.sla && (
                            <span className="text-red-500 col-span-2 w-full text-sm">
                                {errors.sla.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="note"
                        >
                            Routing / audit note
                        </label>
                        <textarea
                            {...register("note")}
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            name="note"
                            id="note"
                        ></textarea>
                        {errors.note && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.note.message}
                            </span>
                        )}
                        <span className="text-sm text-brand-default">
                            Required when rejecting. Saved to the public audit
                            trail.
                        </span>
                    </div>

                    <div className="flex flex-row justify-end gap-4 py-4 border-t border-t-brand-border flex-wrap">
                        <button
                            className="px-4 cursor-pointer py-2 rounded-4xl border border-brand-border"
                            type="button"
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 cursor-pointer py-2 bg-red-700 text-white rounded-4xl"
                            {...register("action")}
                            value="rejected"
                            type="submit"
                        >
                            Reject report
                        </button>
                        <button
                            className="px-4 cursor-pointer py-2 bg-brand-primary text-white rounded-4xl"
                            {...register("action")}
                            value="verified"
                            type="submit"
                        >
                            Verify & route
                        </button>
                    </div>
                </form>
            </ModalContainer>
        </>
    );
}
