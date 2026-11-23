import { ScrollRestoration } from "react-router";

const CATEGORIES = [
    {
        name: "Roads & Transit",
        sub: "Pothole / Sidewalk (Trotoar)",
        agency: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
        sla: 48,
        reports: 1,
    },
    {
        name: "Water & Sewage",
        sub: "Water Burst / Pipa Bocor",
        agency: "Perumda PAM JAYA (Clean Drinking Water)",
        sla: 24,
        reports: 1,
    },
    {
        name: "Street Lighting",
        sub: "Dark Street / PJU Padam",
        agency: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
        sla: 72,
        reports: 1,
    },
    {
        name: "Sanitation & Waste",
        sub: "Trash Pile / Sampah Liar",
        agency: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
        sla: 36,
        reports: 1,
    },
    {
        name: "Public Parks & Trees",
        sub: "Hazardous Tree / Rawan Tumbang",
        agency: "Dinas Pertanian dan Hutan Kota DKI Jakarta",
        sla: 48,
        reports: 1,
    },
    {
        name: "Noise & Disturbance",
        sub: "Late-night Noise / Ketertiban",
        agency: "Satpol PP Provinsi DKI Jakarta (Public Order)",
        sla: 48,
        reports: 1,
    },
    {
        name: "Building & Zoning",
        sub: "Unsafe Construction / Bangunan",
        agency: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)",
        sla: 72,
        reports: 0,
    },
];

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

export default function Categories({ onAdd, onEdit }) {
    return (
        <>
            <ScrollRestoration />
            <section className="w-full flex flex-col gap-4">
                <div className="flex py-4 items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-ibm-plex-mono text-lg uppercase tracking-widest text-gray-500">
                            Routing taxonomy ({CATEGORIES.length})
                        </span>
                        <p className="font-public-sans text-lg text-gray-500">
                            Categories route new reports to an agency and define
                            their SLA window.
                        </p>
                    </div>
                    <button
                        onClick={onAdd}
                        className="flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 font-public-sans font-medium text-white cursor-pointer"
                    >
                        <PlusIcon />
                        Add category
                    </button>
                </div>

                <ul className="overflow-hidden rounded-2xl border border-brand-border bg-brand-third">
                    {CATEGORIES.map((c) => (
                        <li
                            key={c.name}
                            className="flex items-center justify-between gap-4 px-5 py-4 border-b border-brand-border last:border-b-0"
                        >
                            <div className="flex flex-col gap-0.5 font-public-sans">
                                <span className="text-lg font-semibold text-brand-default">
                                    {c.name}
                                </span>
                                <span className=" text-gray-500">{c.sub}</span>
                                <span className=" text-gray-500">
                                    Assigned to: {c.agency}
                                </span>
                            </div>

                            <div className="flex shrink-0 items-center gap-6 font-ibm-plex-mono text-brand-default">
                                <span>{c.sla}h SLA</span>
                                <span className="w-fit text-right">
                                    {c.reports}{" "}
                                    {c.reports === 1 ? "report" : "reports"}
                                </span>
                                <button
                                    onClick={() => onEdit?.(c)}
                                    className="flex items-center gap-1.5 font-semibold text-emerald-800 cursor-pointer"
                                >
                                    <PencilIcon />
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
