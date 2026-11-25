import { ScrollRestoration } from "react-router";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

const dummyData = [
    {
        domain: "Roads & Transit",
        bureau: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
        sla: "48 hours",
        threshold: "+12h (Warning)",
        active: true,
    },
    {
        domain: "Water & Sewage",
        bureau: "Perumda PAM JAYA (Clean Drinking Water)",
        sla: "24 hours",
        threshold: "+6h (Warning)",
        active: true,
    },
    {
        domain: "Street Lighting",
        bureau: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
        sla: "72 hours",
        threshold: "+18h (Warning)",
        active: true,
    },
    {
        domain: "Sanitation & Waste",
        bureau: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
        sla: "36 hours",
        threshold: "+9h (Warning)",
        active: true,
    },
    {
        domain: "Public Parks & Trees",
        bureau: "Dinas Pertanian dan Hutan Kota DKI Jakarta",
        sla: "48 hours",
        threshold: "+12h (Warning)",
        active: true,
    },
    {
        domain: "Noise & Disturbance",
        bureau: "Satpol PP Provinsi DKI Jakarta (Public Order)",
        sla: "48 hours",
        threshold: "+12h (Warning)",
        active: true,
    },
    {
        domain: "Building & Zoning",
        bureau: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)",
        sla: "72 hours",
        threshold: "+18h (Warning)",
        active: true,
    },
];

export default function SLABenchmark() {

    return (
        <>
            <ScrollRestoration />
            <section className="w-full flex flex-col gap-4">
                <div className="flex py-4 items-center justify-between">
                    <span className="font-ibm-plex-mono text-lg uppercase tracking-widest text-gray-500">
                        Statutory resolution windows
                    </span>
                    <span className="font-ibm-plex-mono text-lg text-brand-primary">
                        Enforced across all wards
                    </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-third">
                    <div
                        className="grid grid-cols-[18%_1fr_12%_18%_12%] items-center gap-4 px-6 py-3 border-b border-brand-border bg-black/[0.03] font-ibm-plex-mono uppercase tracking-wider text-gray-500"
                    >
                        <span>Service domain</span>
                        <span>Responsible bureau</span>
                        <span>Target SLA</span>
                        <span>Escalation threshold</span>
                        <span className="text-right">Status</span>
                    </div>

                    {dummyData.map((w) => (
                        <div
                            key={w.domain}
                            className="grid grid-cols-[18%_1fr_12%_18%_12%] items-center gap-4 px-6 py-4 border-b border-brand-border last:border-b-0 font-public-sans text-brand-default"
                        >
                            <span className="font-semibold">{w.domain}</span>
                            <span className="text-gray-700">{w.bureau}</span>
                            <span className="font-ibm-plex-mono font-semibold text-emerald-800">
                                {w.sla}
                            </span>
                            <span className="font-ibm-plex-mono text-gray-500">
                                {w.threshold}
                            </span>
                            <span className="flex justify-end">
                                <span
                                    className={`rounded-full border px-3 py-0.5 font-ibm-plex-mono text-[10px] uppercase tracking-wider ${
                                        w.active
                                            ? "border-emerald-200 bg-emerald-100 text-emerald-800"
                                            : "border-brand-border bg-black/5 text-gray-500"
                                    }`}
                                >
                                    {w.active ? "Active" : "Paused"}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
