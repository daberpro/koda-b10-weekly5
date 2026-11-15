export default function SecurityContent() {
    return (
        <div class="flex flex-col justify-start items-start w-[90%] gap-4">
            <div class="flex py-6 items-start flex-col justify-center w-full gap-4">
                <form
                    class="w-1/2 bg-brand-third p-8 rounded-xl border border-brand-border flex-col flex items-start justify-center flex-col gap-4"
                    action=""
                >
                    <span class="font-fraunces font-600 text-lg">Security</span>
                    <span class="font-public-sans text-brand-default text-base">
                        Change the password used to sign in to your WargaReport
                        account.
                    </span>

                    <div class="flex flex-col justify-start items-center flex-col gap-4 w-full">
                        <label
                            class="font-ibm-plex-mono text-brand-default w-full font-400 uppercase text-base"
                            for="current-password"
                        >
                            Current Password
                        </label>
                        <div class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                            <input
                                placeholder="Enter current password"
                                id="current-password"
                                type="text"
                                class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                            />

                            <svg
                                class="text-brand-default mx-4 text-lg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.33331 7.99998C1.33331 7.99998 3.73331 3.33331 7.99998 3.33331C12.2666 3.33331 14.6666 7.99998 14.6666 7.99998C14.6666 7.99998 12.2666 12.6666 7.99998 12.6666C3.73331 12.6666 1.33331 7.99998 1.33331 7.99998Z"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </svg>
                        </div>
                        <span class="w-full text-brand-default text-xs">
                            Required to confirm any password change.
                        </span>
                    </div>

                    <div class="flex flex-col justify-start items-center flex-col gap-4 w-full">
                        <label
                            class="font-ibm-plex-mono text-brand-default w-full font-400 uppercase text-base"
                            for="new-password"
                        >
                            New Password
                        </label>
                        <div class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                            <input
                                placeholder="At least 8 characters"
                                id="new-password"
                                type="text"
                                class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                            />

                            <svg
                                class="text-brand-default mx-4 text-lg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.33331 7.99998C1.33331 7.99998 3.73331 3.33331 7.99998 3.33331C12.2666 3.33331 14.6666 7.99998 14.6666 7.99998C14.6666 7.99998 12.2666 12.6666 7.99998 12.6666C3.73331 12.6666 1.33331 7.99998 1.33331 7.99998Z"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </svg>
                        </div>
                        <span class="w-full text-brand-default text-xs">
                            Use at least 8 characters, including a letter and a
                            number.
                        </span>
                    </div>

                    <div class="flex flex-col justify-start items-center flex-col gap-4 w-full">
                        <label
                            class="font-ibm-plex-mono text-brand-default w-full font-400 uppercase text-base"
                            for="confirm-new-password"
                        >
                            Confirm New Password
                        </label>
                        <div class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                            <input
                                placeholder="Re-enter new password"
                                id="confirm-new-password"
                                type="text"
                                class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                            />

                            <svg
                                class="text-brand-default mx-4 text-lg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.33331 7.99998C1.33331 7.99998 3.73331 3.33331 7.99998 3.33331C12.2666 3.33331 14.6666 7.99998 14.6666 7.99998C14.6666 7.99998 12.2666 12.6666 7.99998 12.6666C3.73331 12.6666 1.33331 7.99998 1.33331 7.99998Z"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </svg>
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="bg-brand-primary text-white px-4 py-2 font-public-sans font-600 text-base border-0 outline-none rounded-4xl w-fit flex items-center justify-center flex-row gap-2"
                    >
                        <span>Update password</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
