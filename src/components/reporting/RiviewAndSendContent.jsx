import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as YUP from "yup";
import { TempReportContext } from "../../lib/contexts";
import { useLocalStorage } from "../../lib/hooks/localStorageHook";
import { getUserCredentialWithId, storageKeys } from "../../lib/util";
import { useNavigate } from "react-router";

export default function RiviewAndSendContent(props) {
    const schemaValidate = YUP.object({
        title: YUP.string().required(),
        details: YUP.string().required(),
        anonymus: YUP.string(),
        fillerName: YUP.string().required(),
        email: YUP.string().email().required(),
        phone: YUP.string().required(),
        confirm: YUP.string().required(),
        alertChannels: YUP.array().required(),
    });

    const { children, nextStepConfirm } = props;
    const [report, setReport] = useContext(TempReportContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            title: report.title || "",
            details: report.details || "",
            anonymus: report.anonymus || "",
            filerName: report.title || "",
            email: report.email || "",
            phone: report.phone || "",
            confirm: report.confirm || "",
            alertChannels: report.alertChannels || [],
        },
        resolver: yupResolver(schemaValidate),
    });

    const [storage, setStorage] = useLocalStorage(storageKeys.REPORTS, []);
    const navigate = useNavigate();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    function riviewAndSend(data) {
        const date = new Date();
        const { email } = getUserCredentialWithId();
        const currentTotalStr = storage.length.toString();
        let lengthStrId = 4 - currentTotalStr.length;
        if (lengthStrId < 0) {
            lengthStrId = 0;
        }
        const id = `CMP-${date.getFullYear()}-${"0".repeat(lengthStrId) + currentTotalStr}`;
        const copyReportData = {
            ...report,
            ...data,
            id,
            email,
            dateCreation: {
                month: months[date.getMonth()],
                date: date.getDate(),
                year: date.getFullYear()
            },
            lastUpdate: {
                month: months[date.getMonth()],
                date: date.getDate(),
                year: date.getFullYear()
            }
        };
        setStorage([...storage, copyReportData]);
        reset();

        const urlParams = new URLSearchParams();
        urlParams.set("id", id);
        navigate("/reporting/receipt?" + urlParams.toString());
    }

    return (
        <form
            onSubmit={handleSubmit(riviewAndSend)}
            action={""}
            className="w-full flex items-center justify-start flex-col"
        >
            <div className="flex mt-8 justify-start items-center flex-col gap-4 w-full">
                <label
                    className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                    htmlFor="title"
                >
                    Concise Title *
                </label>
                <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                    <input
                        {...register("title")}
                        placeholder="Title"
                        id="title"
                        type="text"
                        defaultValue={report.title}
                        className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                    />
                </div>
                {errors.title && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.title.message}
                    </span>
                )}
            </div>

            <div className="flex mt-8 justify-start items-center flex-col gap-4 w-full">
                <div className="w-full flex items-center justify-between">
                    <label
                        className="font-ibm-plex-mono text-brand-default font-400 uppercase text-base"
                        htmlFor="details"
                    >
                        Incident Observation Details *
                    </label>
                    <span className="text-brand-default font-ibm-plex-mono text-base">
                        100 chars (min 15)
                    </span>
                </div>
                <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                    <textarea
                        {...register("details")}
                        id="details"
                        className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                    ></textarea>
                </div>
                {errors.details && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.details.message}
                    </span>
                )}
            </div>

            <div className="rounded-xl my-4 bg-brand-secondary border border-brand-border p-4 w-full flex items-center justify-center gap-4 flex-row">
                <div className="flex items-center justify-center flex-col">
                    <svg
                        className="text-brand-primary text-lg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_214_1162)">
                            <g clipPath="url(#clip1_214_1162)">
                                <path
                                    d="M3.33333 7.33325H12.6667C13.403 7.33325 14 7.93021 14 8.66659V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V8.66659C2 7.93021 2.59695 7.33325 3.33333 7.33325Z"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M4.6665 7.33325V4.66659C4.6665 3.78253 5.01769 2.93468 5.64281 2.30956C6.26794 1.68444 7.11578 1.33325 7.99984 1.33325C8.88389 1.33325 9.73174 1.68444 10.3569 2.30956C10.982 2.93468 11.3332 3.78253 11.3332 4.66659V7.33325"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_214_1162">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_214_1162">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex items-start justify-center flex-col gap-2">
                    <span className="font-public-sans font-600">
                        Post anonymously on public feed
                    </span>
                    <span className="font-public-sans text-brand-default">
                        Your name will be masked as Warga Anonim on open
                        records.
                    </span>
                </div>
                <div className="grow flex items-center justify-end flex-row">
                    <input
                        value={"anonymus"}
                        {...register("anonymus")}
                        type="checkbox"
                    />
                </div>
                {errors.anonymus && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.anonymus.message}
                    </span>
                )}
            </div>

            <div className="flex max-md:flex-col items-center justify-between flex-row gap-4 w-full">
                <div className="flex justify-start items-center flex-col gap-4 w-full">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                        htmlFor="filler"
                    >
                        Filer Name *
                    </label>
                    <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                        <svg
                            className="text-brand-default mx-4"
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.33333 2.33331H11.6667C12.311 2.33331 12.8333 2.85565 12.8333 3.49998V10.5C12.8333 11.1443 12.311 11.6666 11.6667 11.6666H2.33333C1.689 11.6666 1.16667 11.1443 1.16667 10.5V3.49998C1.16667 2.85565 1.689 2.33331 2.33333 2.33331Z"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M12.8333 4.08331L7 7.58331L1.16667 4.08331"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </svg>

                        <input
                            {...register("fillerName")}
                            placeholder="nama anda"
                            id="filler"
                            type="text"
                            className="bg-brand-third grow border-0 rounded-xl py-4 text-brand-default text-base font-public-sans font-400 outline-none"
                        />
                    </div>
                    {errors.fillerName && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.fillerName.message}
                        </span>
                    )}
                </div>
                <div className="flex justify-start items-center flex-col gap-4 w-full">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                        htmlFor="email"
                    >
                        Email for Status Alerts *
                    </label>
                    <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                        <input
                            {...register("email")}
                            placeholder="email"
                            id="email"
                            type="email"
                            className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                        />
                    </div>
                    {errors.email && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex max-md:flex-col items-center justify-between flex-row gap-4 w-full">
                <div className="flex justify-start items-center flex-col gap-4 w-full">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                        htmlFor="phone"
                    >
                        Phone / Whatsapp *
                    </label>
                    <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                        <input
                            {...register("phone")}
                            placeholder="+62 812-..."
                            id="phone"
                            type="phone"
                            className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                        />
                    </div>
                    {errors.phone && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.phone.message}
                        </span>
                    )}
                </div>
                <div className="flex justify-start items-center flex-col gap-4 w-full">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                        htmlFor="email"
                    >
                        Status alert channels
                    </label>
                    <div className="w-full flex items-center justify-start gap-4 flex-row bg-brand-third rounded-xl">
                        <div className="w-fit flex items-center justify-start gap-4">
                            <input
                                {...register("alertChannels")}
                                value={"email"}
                                id="email-status"
                                type="checkbox"
                            />
                            <label htmlFor="email-status">Email</label>
                        </div>
                        <div className="w-fit flex items-center justify-start gap-4">
                            <input
                                {...register("alertChannels")}
                                value={"sms"}
                                id="sms-status"
                                type="checkbox"
                            />
                            <label htmlFor="sms-status">SMS</label>
                        </div>
                    </div>
                    {errors.alertChannels && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.alertChannels.message}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex border-b border-b-brand-default py-4 w-full items-center justify-start gap-4 flex-row">
                <input
                    value={"confirmed"}
                    {...register("confirm")}
                    id="confirm"
                    type="checkbox"
                />
                <label
                    className="font-public-sans text-brand-default"
                    htmlFor="confirm"
                >
                    I confirm this incident was authentically observed on-site
                    under Law No. 25/2009.
                </label>
                {errors.confirm && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.confirm.message}
                    </span>
                )}
            </div>

            {children}
        </form>
    );
}
