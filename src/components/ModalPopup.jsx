export default function ModalPopup({
    children,
    title,
    subtitle,
    show,
    showModalFn,
}) {
    return (
        <div
            onClick={() => showModalFn(false)}
            className={
                "fixed inset-0 z-20 flex items-center justify-center p-4 transition-all duration-300 " +
                (show
                    ? "bg-black/25 opacity-100 visible"
                    : "bg-black/0 opacity-0 invisible")
            }
        >
            <div className="w-full max-w-md max-h-full overflow-hidden rounded-2xl bg-brand-third *:p-4 flex flex-col transition-all duration-300 ">
                <div className="w-full border-b border-b-brand-border flex flex-col bg-brand-main">
                    <div className="flex justify-between w-full">
                        <span className="font-ibm-plex-mono text-sm uppercase text-brand-default">
                            {title}
                        </span>
                        <button
                            onClick={() => showModalFn(false)}
                            className="cursor-pointer"
                        >
                            <svg
                                className="text-xl"
                                width="1em"
                                height="1em"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.75 4.25L4.25 12.75"
                                    strokeWidth="1.41667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#4C5B52"
                                />
                                <path
                                    d="M4.25 4.25L12.75 12.75"
                                    strokeWidth="1.41667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#4C5B52"
                                />
                            </svg>
                        </button>
                    </div>

                    <span className="font-fraunces font-bold text-xl">
                        {subtitle}
                    </span>
                </div>

                {children}
            </div>
        </div>
    );
}
