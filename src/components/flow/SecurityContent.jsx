import { useForm } from "react-hook-form";
import { storageKeys } from "../../lib/util";
import { useLocalStorage } from "../../lib/hooks/localStorageHook";
import * as YUP from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export default function SecurityContent() {

    const [failed, setFailed] = useState("");
    const [storage, setStorage] = useLocalStorage(storageKeys.PROFILE, {});

    const schemaValidation = YUP.object({
        "current-password": YUP.string().min(8).required(),
        "new-password": YUP.string()
            .min(8)
            .matches(/[A-Z]/, "password atleast have one capital letter")
            .matches(/[a-z]/, "password atleast have one letter")
            .matches(/[0-9]/, "password atleast have one number")
            .matches(/[@%!%*?&]/, "password atleast have one symbol @%!%*?&")
            .required(),
        "confirm-new-password": YUP.string().min(8)
    });
    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemaValidation)
    });

    function resetPassword(data) {
        const user = Object.values(storage).find((profile) => {
            return profile.password == btoa(data["current-password"]);
        });
        if (user && data["new-password"] === data["confirm-new-password"]) {
            setStorage({
                ...storage,
                [user.id]: {
                    ...storage[user.id],
                    password: btoa(data["new-password"])
                }
            });
            setFailed("");
            reset();
            return;
        }
        setFailed("Password salah atau password baru tidak cocok denngan konfirmasi");
    }

    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <div className="flex py-6 items-start flex-col justify-center w-full gap-4">
                <form
                    onSubmit={handleSubmit(resetPassword)}
                    className="w-full bg-brand-third p-8 rounded-xl border border-brand-border flex-col flex items-start justify-center gap-4"
                    action=""
                >

                    {failed.length > 0 && (
                        <div className="p-4 rounded-lg border border-red-600 bg-red-100 text-red-600">
                            {failed}
                        </div>
                    )}

                    <span className="font-fraunces font-600 text-lg">Security</span>
                    <span className="font-public-sans text-brand-default text-base">
                        Change the password used to sign in to your WargaReport
                        account.
                    </span>

                    <div className="flex flex-col justify-start items-center gap-4 w-full">
                        <label
                            className="font-ibm-plex-mono text-brand-default w-full font-400 uppercase text-base"
                            htmlFor="current-password"
                        >
                            Current Password
                        </label>
                        <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                            <input
                                placeholder="Enter current password"
                                id="current-password"
                                type="text"
                                {...register("current-password")}
                                className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                            />

                            <svg
                                className="text-brand-default mx-4 text-lg"
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
                        {errors["current-password"] && (
                            <span className="text-red-500 w-full text-sm">
                                {errors["current-password"].message}
                            </span>
                        )}
                        <span className="w-full text-brand-default text-xs">
                            Required to confirm any password change.
                        </span>
                    </div>

                    <div className="flex flex-col justify-start items-center gap-4 w-full">
                        <label
                            className="font-ibm-plex-mono text-brand-default w-full font-400 uppercase text-base"
                            htmlFor="new-password"
                        >
                            New Password
                        </label>
                        <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                            <input
                                placeholder="At least 8 characters"
                                id="new-password"
                                type="text"
                                {...register("new-password")}
                                className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                            />

                            <svg
                                className="text-brand-default mx-4 text-lg"
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
                        {errors["new-password"] && (
                            <span className="text-red-500 w-full text-sm">
                                {errors["new-password"].message}
                            </span>
                        )}
                        <span className="w-full text-brand-default text-xs">
                            Use at least 8 characters, including a letter and a
                            number.
                        </span>
                    </div>

                    <div className="flex flex-col justify-start items-center gap-4 w-full">
                        <label
                            className="font-ibm-plex-mono text-brand-default w-full font-400 uppercase text-base"
                            htmlFor="confirm-new-password"
                        >
                            Confirm New Password
                        </label>
                        <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                            <input
                                placeholder="Re-enter new password"
                                id="confirm-new-password"
                                type="text"
                                {...register("confirm-new-password")}
                                className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                            />

                            <svg
                                className="text-brand-default mx-4 text-lg"
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
                        {errors["confirm-new-password"] && (
                            <span className="text-red-500 w-full text-sm">
                                {errors["confirm-new-password"].message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-brand-primary text-white px-4 py-2 font-public-sans font-600 text-base border-0 outline-none rounded-4xl w-fit flex items-center justify-center flex-row gap-2"
                    >
                        <span>Update password</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
