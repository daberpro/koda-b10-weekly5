import { useState } from "react";
import { ScrollRestoration } from "react-router";
import ModalContainer from "./ModalContainer";
import AccountCreatedModal from "./AccountCreateModal";

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

export default function OfficerAccounts({
    // officers = officers,
    agencyCount = 7,
}) {
    const officers = [
        {
            name: "Hendra Kurniawan",
            email: "hendra.k@pamjaya.co.id",
            agency: "Perumda PAM JAYA (Clean Drinking Water)",
            badgeId: "PAM-JKT-044",
            phone: "+62 813-8820-4100",
            active: true,
        },
        {
            name: "Raka Wijaya",
            email: "raka.wijaya@binamarga.jakarta.go.id",
            agency: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
            badgeId: "DBM-JKT-104",
            phone: "+62 811-3401-992",
            active: true,
        },
    ];
    const [showModal, setShowModal] = useState(false);
    const [showModalCreation, setShowModalCreation] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    return (
        <>
            <ScrollRestoration />
            <section className="w-full flex flex-col gap-4">
                <div className="flex py-4 items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-ibm-plex-mono text-lg uppercase tracking-widest text-gray-500">
                            Officer accounts
                        </span>
                        <p className="font-public-sans text-lg text-gray-500">
                            {officers.length} officer
                            {officers.length === 1
                                ? "account"
                                : "accounts"}{" "}
                            across {agencyCount} available agencies.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 font-public-sans font-medium text-white cursor-pointer"
                    >
                        <PlusIcon />
                        Add officer account
                    </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-third">
                    <div
                        className="grid grid-cols-[22%_1fr_16%_20%_10%] items-center gap-4 px-5 py-3 border-b border-brand-border bg-black/3 font-ibm-plex-mono uppercase tracking-wider text-gray-500"
                    >
                        <span>Officer</span>
                        <span>Agency</span>
                        <span>Badge ID</span>
                        <span>Phone</span>
                        <span className="text-right">Status</span>
                    </div>

                    {officers.map((o) => (
                        <div
                            key={o.badgeId}
                            className="grid grid-cols-[22%_1fr_16%_20%_10%] items-center gap-4 px-5 py-4 border-b border-brand-border last:border-b-0 font-public-sans"
                        >
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <span className=" font-semibold text-brand-default">
                                    {o.name}
                                </span>
                                <span className="truncate  text-gray-500">
                                    {o.email}
                                </span>
                            </div>
                            <span className="text-sm text-brand-default">
                                {o.agency}
                            </span>
                            <span className="font-ibm-plex-mono  text-brand-default">
                                {o.badgeId}
                            </span>
                            <span className="font-ibm-plex-mono  text-brand-default">
                                {o.phone}
                            </span>
                            <span className="flex justify-end">
                                <span
                                    className={`rounded-full border px-3 py-0.5 font-ibm-plex-mono uppercase tracking-wider ${
                                        o.active
                                            ? "border-emerald-200 bg-emerald-100 text-emerald-800"
                                            : "border-brand-border bg-black/5 text-gray-500"
                                    }`}
                                >
                                    {o.active ? "Active" : "Inactive"}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            <ModalContainer
                title={
                    isEdit ? "Edit officer account" : "Create officer account"
                }
                show={showModal}
                showModalFn={setShowModal}
                subtitle={"Officer Access"}
            >
                <form className="flex overflow-y-auto scrollbar-thin flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="fullName"
                        >
                            Full Name
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            name="fullName"
                            type="text"
                            id="fullName"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            name="email"
                            type="email"
                            id="email"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            name="phone"
                            type="tel"
                            id="phone"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="agency"
                        >
                            Agency
                        </label>
                        <select
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            name="agency"
                            id="agency"
                        >
                            <option>
                                Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="badgeId"
                        >
                            Badge ID
                        </label>
                        <input
                            placeholder="Auto-generated if blank"
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            name="badgeId"
                            type="text"
                            id="badgeId"
                        />
                        <span className="text-sm text-brand-default">
                            Officers sign in with this email and the generated
                            password.
                        </span>
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
                            name="action"
                            value="verified"
                            type="submit"
                        >
                            Create account
                        </button>
                    </div>
                </form>
            </ModalContainer>
            <AccountCreatedModal
                officer={{ fullname: "", agency: "", badgeId: "", email: "" }}
                password={""}
                setShow={setShowModalCreation}
                show={showModalCreation}
            />
        </>
    );
}
