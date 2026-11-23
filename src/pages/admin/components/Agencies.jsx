import { ScrollRestoration } from "react-router";

const AGENCIES = [
    {
        name: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
        email: "pengaduan@binamarga.jakarta.go.id",
        phone: "+62 (21) 384-5120",
        avgResponse: "2.1d",
        openCases: 142,
    },
    {
        name: "Perumda PAM JAYA (Clean Drinking Water)",
        email: "layanan@pamjaya.co.id",
        phone: "+62 (21) 570-4250",
        avgResponse: "1.4d",
        openCases: 64,
    },
    {
        name: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
        email: "dispatch@dishub.jakarta.go.id",
        phone: "+62 (21) 350-1349",
        avgResponse: "1.8d",
        openCases: 95,
    },
    {
        name: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
        email: "satgas.kebersihan@lingkunganhidup.jakarta.go.id",
        phone: "+62 (21) 809-2740",
        avgResponse: "1.6d",
        openCases: 89,
    },
    {
        name: "Dinas Pertamanan dan Hutan Kota DKI Jakarta",
        email: "forestry@pertamanan.jakarta.go.id",
        phone: "+62 (21) 532-8454",
        avgResponse: "2.8d",
        openCases: 41,
    },
    {
        name: "Satpol PP Provinsi DKI Jakarta (Public Order)",
        email: "pengaduan@satpolpp.jakarta.go.id",
        phone: "+62 (21) 382-2255",
        avgResponse: "2.3d",
        openCases: 53,
    },
    {
        name: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)",
        email: "pengaduan@citata.jakarta.go.id",
        phone: "+62 (21) 382-2081",
        avgResponse: "2.6d",
        openCases: 37,
    },
];

const GRID = "grid grid-cols-[1fr_20%_12%_12%_10%] items-center gap-4 px-5";

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

export default function Agencies({ onAdd, onEdit }) {
    return (
        <>
            <ScrollRestoration />
            <section className="w-full flex flex-col gap-4">
                <div className="flex py-4 items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-ibm-plex-mono text-lg uppercase tracking-widest text-gray-500">
                            Registered municipal bureaus ({AGENCIES.length})
                        </span>
                        <p className="font-public-sans text-lg text-gray-500">
                            Agencies available for report routing and officer
                            assignment.
                        </p>
                    </div>
                    <button
                        onClick={onAdd}
                        className="flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 font-public-sans font-medium text-white cursor-pointer"
                    >
                        <PlusIcon />
                        Add agency
                    </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-third">
                    <div
                        className={`${GRID} py-3 border-b border-brand-border bg-black/[0.03] font-ibm-plex-mono uppercase tracking-wider text-gray-500`}
                    >
                        <span>Agency</span>
                        <span>Contact phone</span>
                        <span>Avg response</span>
                        <span>Open cases</span>
                        <span className="text-right">Settings</span>
                    </div>

                    {AGENCIES.map((a) => (
                        <div
                            key={a.email}
                            className={`${GRID} py-4 border-b border-brand-border last:border-b-0 font-public-sans`}
                        >
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-semibold text-brand-default">
                                    {a.name}
                                </span>
                                <span className="truncate text-gray-500">
                                    {a.email}
                                </span>
                            </div>
                            <span className="font-ibm-plex-mono text-brand-default">
                                {a.phone}
                            </span>
                            <span className="font-ibm-plex-mono text-emerald-800">
                                {a.avgResponse}
                            </span>
                            <span className="font-ibm-plex-mono text-brand-default">
                                {a.openCases}
                            </span>
                            <span className="flex justify-end">
                                <button
                                    onClick={() => onEdit?.(a)}
                                    className="flex items-center gap-1.5 font-semibold text-emerald-800 cursor-pointer"
                                >
                                    <PencilIcon />
                                    Edit
                                </button>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
