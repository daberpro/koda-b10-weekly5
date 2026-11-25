import { useState } from "react";
import ModalPopup from "../ModalPopup";

export default function AccountCreatedModal({
    show,
    setShow,
    officer,
    password,
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("failed to copy password", err);
        }
    };

    return (
        <ModalPopup
            title="Officer Account"
            subtitle="Account created"
            show={show}
            showModalFn={setShow}
        >
            <div className="flex overflow-y-auto scrollbar-thin flex-col gap-4">
                <p className="text-sm text-brand-default">
                    Share these sign-in details with the officer. The password
                    is shown only once.
                </p>

                <dl className="flex flex-col gap-1 p-4 border border-dashed border-brand-border rounded-2xl bg-brand-main">
                    <dt className="font-ibm-plex-mono text-sm text-brand-default">
                        Full name
                    </dt>
                    <dd className="font-bold text-lg mb-1">
                        {officer?.fullname}
                    </dd>

                    <dt className="font-ibm-plex-mono text-sm text-brand-default">
                        Email
                    </dt>
                    <dd className="font-ibm-plex-mono text-sm mb-1">
                        {officer?.email}
                    </dd>

                    <dt className="font-ibm-plex-mono text-sm text-brand-default">
                        Agency
                    </dt>
                    <dd className="text-sm mb-1">{officer?.agency}</dd>

                    <dt className="font-ibm-plex-mono text-sm text-brand-default">
                        Badge ID
                    </dt>
                    <dd className="font-ibm-plex-mono text-sm">
                        {officer?.badgeId}
                    </dd>
                </dl>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between">
                        <span className="font-ibm-plex-mono uppercase text-brand-default text-sm">
                            Generated Password
                        </span>
                        <button
                            className="cursor-pointer text-sm font-bold text-brand-primary"
                            type="button"
                            onClick={handleCopy}
                        >
                            {copied ? "Copied" : "Copy"}
                        </button>
                    </div>
                    <div className="p-4 border border-brand-border rounded-2xl bg-brand-main font-ibm-plex-mono text-sm break-all">
                        {password}
                    </div>
                    <span className="text-xs text-brand-default">
                        8 characters · uppercase, lowercase, and numbers
                    </span>
                </div>

                <div className="flex flex-row justify-end">
                    <button
                        className="px-4 cursor-pointer py-2 bg-brand-primary text-white rounded-4xl"
                        type="button"
                        onClick={() => setShow(false)}
                    >
                        Done
                    </button>
                </div>
            </div>
        </ModalPopup>
    );
}
