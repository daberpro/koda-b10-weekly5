import { ScrollRestoration } from "react-router";

const STATUS_LINES = [
    "Filter Status: Nominal",
    "PII Rules: 14 strict redaction patterns active",
    "False report audit threshold: 3 incidents per IP/subnet",
];

export default function ModerationBanner({ lines = STATUS_LINES }) {
    return (
        <>
            <ScrollRestoration />
            <section className="w-full flex flex-col gap-4">
                <span className="font-ibm-plex-mono py-4 text-lg uppercase tracking-widest text-gray-500">
                    Public transparency & content filter log
                </span>

                <div className="flex flex-col gap-4 rounded-2xl border border-brand-border bg-brand-third p-6">
                    <h3 className="font-public-sans text-lg font-semibold text-brand-default">
                        Automated PII Redaction Engine
                    </h3>
                    <p className="font-public-sans leading-relaxed text-gray-600">
                        Resident phone numbers, full surnames, and email
                        prefixes are automatically stripped prior to caching in
                        the public registry. All media uploads are scanned for
                        illicit metadata and license plate markers.
                    </p>
                    <div className="flex flex-col gap-1 rounded-lg border border-brand-border bg-black/[0.04] px-4 py-3 font-ibm-plex-mono text-brand-default">
                        {lines.map((line) => (
                            <span key={line}>{line}</span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
