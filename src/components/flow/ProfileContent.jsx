import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as YUP from "yup";
import { getUserCredentialWithId, storageKeys } from "../../lib/util";
import { useLocalStorage } from "../../lib/hooks/localStorageHook";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../lib/contexts";
export default function ProfileContent() {
    const schemaValidate = YUP.object({
        fullname: YUP.string().min(4).required(),
        email: YUP.string().email().required(),
        phone: YUP.string().required(),
        nik: YUP.string().min(16).required(),
    });

    const [userData, setUserData] = useContext(UserContext);
    const [storage, setStorage] = useLocalStorage(storageKeys.PROFILE, []);
    const { id } = getUserCredentialWithId();
    const profile = storage?.[id] || {};

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullname: profile.fullname || "",
            email: profile.email || "",
            phone: profile.phone || "",
            nik: profile.nik || "",
        },
        resolver: yupResolver(schemaValidate),
    });

    function updateUserData(data) {
        setUserData({
            ...storage[id],
            ...data,
        });
        setStorage({
            ...storage,
            [id]: {
                ...storage[id],
                ...data,
            },
        });
    }

    return (
        <div className="flex className justify-start items-start w-[90%] gap-4">
            <div className="w-full gap-4 items-start justify-center className flex">
                <div className="flex py-6 items-start className justify-center w-full gap-4">
                    <form
                        onSubmit={handleSubmit(updateUserData)}
                        className="w-full bg-brand-third p-8 rounded-xl border border-brand-border flex flex-col items-start justify-center className gap-2"
                        action=""
                    >
                        <span className="font-fraunces font-bold text-lg">
                            Filer Identity & Preferences
                        </span>
                        <span className="font-public-sans text-brand-default text-base">
                            Used to pre-fill future complaint forms and verify
                            status inquiries.
                        </span>

                        <div className="flex w-full border-b border-b-brand-border py-6 gap-4 items-center justify-center flex-row">
                            <div className="w-fit">
                                <div className="w-24 h-24 bg-brand-secondary rounded-full border border-brand-border p-4 flex items-center justify-center">
                                    <span
                                        render="initialName"
                                        className="text-[2rem] text-brand-primary"
                                    ></span>
                                </div>
                            </div>
                            <div className="grow grid justify-start items-start className gap-2">
                                <span className="text-lg font-public-sans font-600">
                                    Profile photo
                                </span>
                                <span className="text-base text-brand-default">
                                    JPG, PNG, or WebP. Square images work best.
                                </span>
                                <button className="px-4 py-2 border border-brand-border w-fit font-public-sans font-600 cursor-pointer rounded-3xl bg-brand-third outline-none">
                                    Upload photo
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                htmlFor="fullname"
                            >
                                Full Legal Name
                            </label>
                            <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    {...register("fullname")}
                                    placeholder="e.g. Budi Santoso"
                                    id="fullname"
                                    type="text"
                                    className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                            {errors.fullname && (
                                <span className="text-red-500 w-full text-sm">
                                    {errors.fullname.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                htmlFor="email"
                            >
                                Primary Notification Email
                            </label>
                            <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    readOnly={true}
                                    disabled={true}
                                    {...register("email")}
                                    placeholder="Email"
                                    id="email"
                                    type="text"
                                    className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                            {errors.email && (
                                <span className="text-red-500 w-full text-sm">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                htmlFor="phone"
                            >
                                SMS Contact Number
                            </label>
                            <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    {...register("phone")}
                                    placeholder="Phone Number"
                                    id="phone"
                                    type="text"
                                    className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                            {errors.phone && (
                                <span className="text-red-500 w-full text-sm">
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                className="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                htmlFor="nik"
                            >
                                nik *
                            </label>
                            <div className="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    {...register("nik")}
                                    placeholder="16 digits for verified resident badge (e.g. 3174...)"
                                    id="nik"
                                    type="text"
                                    required
                                    className="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default font-ibm-plex-mono text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                            {errors.nik && (
                                <span className="text-red-500 w-full text-sm">
                                    {errors.nik.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-brand-primary text-white px-4 py-2 font-public-sans font-600 text-base border-0 outline-none rounded-4xl w-fit flex items-center justify-center flex-row gap-2"
                        >
                            <span>Save profile changes</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
