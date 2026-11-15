export default function NotificationsContent() {
    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <div className="w-full gap-4 items-start justify-center flex-col flex">
                <div className="flex py-6 items-start flex-col justify-center w-full gap-4">
                    <form
                        className="w-1/2 bg-brand-third p-8 rounded-xl border border-brand-border flex items-start justify-center flex-col gap-4"
                        action=""
                    >
                        <span className="font-fraunces font-600 text-lg">
                            Dispatch Notification Preferences
                        </span>
                        <span className="font-public-sans text-brand-default text-base">
                            Control when municipal bureaus may send automated
                            status alerts.
                        </span>

                        <div className="flex items-center justify-center flex-row gap-4 pt-4">
                            <div className="w-fit">
                                <input type="checkbox" />
                            </div>
                            <div className="grow flex items-start justify-center flex-col gap-2">
                                <span className="font-public-sans font-600">
                                    Email Status Transitions
                                </span>
                                <span className="text-brand-default">
                                    Receive an email whenever an inspector
                                    triages, assigns, or resolves your case.
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center flex-row gap-4 pt-4">
                            <div className="w-fit">
                                <input type="checkbox" />
                            </div>
                            <div className="grow flex items-start justify-center flex-col gap-2">
                                <span className="font-public-sans font-600">
                                    Urgent SMS Alerts
                                </span>
                                <span className="text-brand-default">
                                    Receive text messages when emergency crews
                                    need physical gate access.
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center flex-row gap-4 py-4">
                            <div className="w-fit">
                                <input type="checkbox" />
                            </div>
                            <div className="grow flex items-start justify-center flex-col gap-2">
                                <span className="font-public-sans font-600">
                                    Weekly Ward Resolution Digest
                                </span>
                                <span className="text-brand-default">
                                    Summary of all public infrastructure
                                    projects completed in your postal code.
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-brand-primary text-white px-4 py-2 font-public-sans font-600 text-base border-0 outline-none rounded-4xl w-fit flex items-center justify-center flex-row gap-2"
                        >
                            <span>Update alert preferences</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
