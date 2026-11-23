import { ScrollRestoration } from "react-router";

const OFFICERS = [
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

const GRID = "grid grid-cols-[22%_1fr_16%_20%_10%] items-center gap-4 px-5";

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
    officers = OFFICERS,
    agencyCount = 7,
    onAdd,
}) {
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
                            {officers.length} officer{" "}
                            {officers.length === 1 ? "account" : "accounts"}{" "}
                            across {agencyCount} available agencies.
                        </p>
                    </div>
                    <button
                        onClick={onAdd}
                        className="flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 font-public-sans font-medium text-white cursor-pointer"
                    >
                        <PlusIcon />
                        Add officer account
                    </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-third">
                    <div
                        className={`${GRID} py-3 border-b border-brand-border bg-black/[0.03] font-ibm-plex-mono uppercase tracking-wider text-gray-500`}
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
                            className={`${GRID} py-4 border-b border-brand-border last:border-b-0 font-public-sans`}
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
        </>
    );
}
