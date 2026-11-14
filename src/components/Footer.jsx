
export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center border-t border-brand-default">
            <div className="footer-items w-[90%] flex justify-center items-center py-8 max-lg:flex-col max-lg:gap-8">
                <div className="flex flex-col justify-center items-start w-1/2 max-lg:w-full gap-5">
                    <span className="font-fraunces font-semibold text-xl">WargaReport</span>
                    <p className="font-public-sans font-normal text-brand-default text-base leading-6">
                        WargaReport is an independent civic reporting platform for municipal infrastructure issues across Indonesia. Residents submit evidence, follow SLA countdowns, and track resolution updates from the responsible agencies.
                    </p>
                    <p className="font-public-sans font-normal text-base leading-6 text-brand-red">
                        Not for life-threatening emergencies — call 112 (National Emergency Call Center) or BPBD DKI directly.
                    </p>
                </div>

                <div className="flex justify-around items-start w-1/2 max-lg:w-full max-lg:flex-col">
                    <div className="w-1/3 max-lg:w-full flex flex-col justify-start items-center max-lg:items-start gap-2">
                        <span className="font-ibm-plex-mono font-medium w-full uppercase">Citizens</span>
                        <ul className="flex flex-col justify-center items-start gap-2 w-full">
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">File a report</li>
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">Track complaint</li>
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">Public reports registry</li>
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">My filing history</li>
                        </ul>
                    </div>
                    <div className="w-1/3 max-lg:w-full flex flex-col justify-start items-center max-lg:items-start gap-2">
                        <span className="font-ibm-plex-mono font-medium w-full uppercase">Agencies</span>
                        <ul className="flex flex-col justify-center items-start gap-2 w-full">
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">Participating bureaus</li>
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">Officer triage queue</li>
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">SLA benchmarks</li>
                        </ul>
                    </div>
                    <div className="w-1/3 max-lg:w-full flex flex-col justify-start items-center max-lg:items-start gap-2">
                        <span className="font-ibm-plex-mono font-medium w-full uppercase">Civic Trust</span>
                        <ul className="flex flex-col justify-center items-start gap-2 w-full">
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">Help & FAQs</li>
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">Evidence guidelines</li>
                            <li className="font-public-sans font-medium text-brand-default list-none text-base">PII & redaction policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[90%] font-public-sans font-normal text-brand-default text-base border-t border-brand-default py-8 flex justify-between items-center max-lg:flex-col max-lg:gap-4 max-lg:text-center">
                <span>&copy; 2026 WargaReport. All rights reserved.</span>
                <span>UU No. 25/2009 Compliant</span>
            </div>
        </footer>
    );
}