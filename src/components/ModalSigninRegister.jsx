import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser, signinUser } from "../lib/util";
import { yupResolver } from "@hookform/resolvers/yup";
import * as YUP from "yup";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usersActions } from "../redux/slices/users.slice.js";

function SignInForm(props) {
    const { users } = useSelector((state) => state.users);
    const reduxDispatch = useDispatch();
    const { parentCallback } = props;
    const [pwType, setPwType] = useState(false);
    const [failed, setFailed] = useState(false);

    const navigate = useNavigate();

    const schemaValidate = YUP.object({
        email: YUP.string().email().required(),
        password: YUP.string()
            .min(8)
            .matches(/[A-Z]/, "password atleast have one capital letter")
            .matches(/[a-z]/, "password atleast have one letter")
            .matches(/[0-9]/, "password atleast have one number")
            .matches(/[@%!%*?&]/, "password atleast have one symbol @%!%*?&")
            .required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schemaValidate),
    });

    return (
        <form
            onSubmit={handleSubmit((data) => {
                const readyToUseUserData = signinUser({...data, allUsers: users});
                setFailed(!readyToUseUserData);
                if (readyToUseUserData) {
                    reduxDispatch(usersActions.loginUser(readyToUseUserData));
                    parentCallback(false);
                    switch (readyToUseUserData.role) {
                        case "admin": {
                            return navigate("/admin");
                        }
                        case "officer":
                        case "user":
                        default:
                            return navigate("/user/profile");
                    }
                }
            })}
            className="flex flex-col justify-center items-center w-full gap-4"
            action=""
        >
            {failed && (
                <div className="p-4 rounded-lg bg-red-50 w-full">
                    <span className="text-red-600">
                        Failed to sign in, email or password is wrong
                    </span>
                </div>
            )}
            <div className="flex flex-col justify-start items-center w-full gap-4">
                <label
                    className="font-ibm-plex-mono w-full text-brand-default font-normal uppercase text-base"
                    htmlFor="email"
                >
                    Email Address
                </label>
                <div className="flex flex-row justify-between items-center w-full bg-brand-third border border-brand-border rounded-xl">
                    <svg
                        className="text-brand-default mx-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.33333 2.33331H11.6667C12.311 2.33331 12.8333 2.85565 12.8333 3.49998V10.5C12.8333 11.1443 12.311 11.6666 11.6667 11.6666H2.33333C1.689 11.6666 1.16667 11.1443 1.16667 10.5V3.49998C1.16667 2.85565 1.689 2.33331 2.33333 2.33331Z"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                        />
                        <path
                            d="M12.8333 4.08331L7 7.58331L1.16667 4.08331"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                        />
                    </svg>
                    <input
                        {...register("email")}
                        placeholder="Enter your email"
                        id="email"
                        type="email"
                        autoComplete="on"
                        className="flex-1 bg-brand-third border-none rounded-xl py-4 text-brand-default text-base font-public-sans font-normal outline-none"
                    />
                </div>
                {errors.email && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.email.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col justify-start items-center w-full gap-4">
                <label
                    className="font-ibm-plex-mono w-full text-brand-default font-normal uppercase text-base"
                    htmlFor="password"
                >
                    Password
                </label>
                <div className="flex flex-row justify-between items-center w-full bg-brand-third border border-brand-border rounded-xl">
                    <svg
                        className="text-brand-default mx-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_199_241)">
                            <path
                                d="M2.91667 6.41669H11.0833C11.7277 6.41669 12.25 6.93902 12.25 7.58335V11.6667C12.25 12.311 11.7277 12.8334 11.0833 12.8334H2.91667C2.27233 12.8334 1.75 12.311 1.75 11.6667V7.58335C1.75 6.93902 2.27233 6.41669 2.91667 6.41669Z"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M4.08333 6.41669V4.08335C4.08333 3.30981 4.39062 2.56794 4.9376 2.02096C5.48459 1.47398 6.22645 1.16669 7 1.16669C7.77355 1.16669 8.51541 1.47398 9.06239 2.02096C9.60937 2.56794 9.91667 3.30981 9.91667 4.08335V6.41669"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_199_241">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <input
                        {...register("password")}
                        placeholder="Enter your password"
                        id="password"
                        autoComplete="on"
                        type={pwType ? "text" : "password"}
                        className="flex-1 bg-brand-third border-none rounded-xl py-4 text-brand-default text-base font-public-sans font-normal outline-none"
                    />

                    <svg
                        onClick={() => setPwType(!pwType)}
                        className="text-brand-default mx-4 text-lg cursor-pointer"
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
                {errors.password && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.password.message}
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="flex flex-row justify-center items-center w-full p-4 bg-brand-primary border-none rounded-full outline-none text-base font-public-sans font-semibold text-white gap-2 cursor-pointer"
            >
                <span>Sign In</span>
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.70834 6.5H10.2917"
                        strokeWidth="1.08333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                    />
                    <path
                        d="M6.5 2.70831L10.2917 6.49998L6.5 10.2916"
                        strokeWidth="1.08333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                    />
                </svg>
            </button>
        </form>
    );
}

function RegisterForm() {
    const [pwType, setPwType] = useState(false);
    const [failed, setFailed] = useState(false);
    const { users } = useSelector((state) => state.users);
    const reduxDispatch = useDispatch();

    const schemaValidate = YUP.object({
        email: YUP.string().email().required(),
        password: YUP.string()
            .min(8)
            .matches(/[A-Z]/, "password atleast have one capital letter")
            .matches(/[a-z]/, "password atleast have one letter")
            .matches(/[0-9]/, "password atleast have one number")
            .matches(/[@%!%*?&]/, "password atleast have one symbol @%!%*?&")
            .required(),
        nik: YUP.string()
            .required()
            .min(16)
            .max(16)
            .matches(/[0-9]/, "nik can only contains number"),
        fullname: YUP.string().required().min(2),
        phone: YUP.string().required().min(14),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            fullname: "",
            phone: "",
            nik: "",
            password: "",
        },
        resolver: yupResolver(schemaValidate),
    });

    function handleRegister(data) {
        const readyToDataData = registerUser({
            ...data,
            allUsers: users,
        });
        if (readyToDataData) {
            reduxDispatch(usersActions.registerUser(readyToDataData));
            reset();
            return;
        }
        setFailed(!readyToDataData);
    }

    return (
        <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col justify-center items-center w-full gap-4"
            action=""
        >
            {failed && (
                <div className="p-4 rounded-lg bg-red-50 w-full">
                    <span className="text-red-600">
                        Failed to register, email already registered
                    </span>
                </div>
            )}
            <div className="flex flex-col justify-start items-center w-full gap-4">
                <label
                    className="font-ibm-plex-mono w-full text-brand-default font-normal uppercase text-base"
                    htmlFor="fullname"
                >
                    Full name (nama lengkap) *
                </label>
                <div className="flex flex-row justify-between items-center w-full bg-brand-third border border-brand-border rounded-xl">
                    <svg
                        className="text-brand-default mx-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.6667 12.25V11.0833C11.6667 10.4645 11.4209 9.871 10.9833 9.43342C10.5457 8.99583 9.95221 8.75 9.33337 8.75H4.66671C4.04787 8.75 3.45438 8.99583 3.01679 9.43342C2.57921 9.871 2.33337 10.4645 2.33337 11.0833V12.25"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                        />
                        <path
                            d="M9.33329 4.08333C9.33329 5.372 8.28862 6.41667 6.99996 6.41667C5.71129 6.41667 4.66663 5.372 4.66663 4.08333C4.66663 2.79467 5.71129 1.75 6.99996 1.75C8.28862 1.75 9.33329 2.79467 9.33329 4.08333Z"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                        />
                    </svg>
                    <input
                        {...register("fullname")}
                        placeholder="e.g. Budi Santoso"
                        id="fullname"
                        type="text"
                        autoComplete="on"
                        className="flex-1 bg-brand-third border-none rounded-xl py-4 text-brand-default text-base font-public-sans font-normal outline-none"
                    />
                </div>
                {errors.fullname && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.fullname.message}
                    </span>
                )}
            </div>

            <div className="flex max-md:flex-col justify-between items-center w-full gap-4">
                <div className="flex flex-col justify-start items-center w-full gap-4">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-normal uppercase text-base"
                        htmlFor="email"
                    >
                        Email address *
                    </label>
                    <div className="flex flex-row justify-between items-center w-full bg-brand-third border border-brand-border rounded-xl">
                        <svg
                            className="text-brand-default mx-4"
                            width="1em"
                            height="1em"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.33333 2.33331H11.6667C12.311 2.33331 12.8333 2.85565 12.8333 3.49998V10.5C12.8333 11.1443 12.311 11.6666 11.6667 11.6666H2.33333C1.689 11.6666 1.16667 11.1443 1.16667 10.5V3.49998C1.16667 2.85565 1.689 2.33331 2.33333 2.33331Z"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M12.8333 4.08331L7 7.58331L1.16667 4.08331"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </svg>
                        <input
                            placeholder="e.g. budi@wargareport.id"
                            id="email"
                            type="email"
                            {...register("email")}
                            autoComplete="on"
                            className="flex-1 bg-brand-third border-none rounded-xl py-4 text-brand-default text-base font-public-sans font-normal outline-none"
                        />
                    </div>
                    {errors.email && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col justify-start items-center w-full gap-4">
                    <label
                        className="font-ibm-plex-mono w-full text-brand-default font-normal uppercase text-base"
                        htmlFor="phone"
                    >
                        Phone / Whatsapp *
                    </label>
                    <div className="flex flex-row justify-between items-center w-full bg-brand-third border border-brand-border rounded-xl">
                        <input
                            placeholder="+62 812-..."
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            autoComplete="on"
                            className="flex-1 bg-brand-third border-none rounded-xl p-4 text-brand-default text-base font-public-sans font-normal outline-none"
                        />
                    </div>
                    {errors.phone && (
                        <span className="text-red-500 w-full text-sm">
                            {errors.phone.message}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex flex-col justify-start items-center w-full gap-4">
                <label
                    className="font-ibm-plex-mono w-full text-brand-default font-normal uppercase text-base"
                    htmlFor="nik"
                >
                    NIK *
                </label>
                <div className="flex flex-row justify-between items-center w-full bg-brand-third border border-brand-border rounded-xl">
                    <input
                        placeholder="16 digits for verified resident badge (e.g. 3174...)"
                        id="nik"
                        type="text"
                        {...register("nik")}
                        autoComplete="on"
                        className="flex-1 bg-brand-third border-none rounded-xl p-4 text-brand-default font-ibm-plex-mono text-base font-normal outline-none"
                    />
                </div>
                {errors.nik && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.nik.message}
                    </span>
                )}
                <span className="w-full text-brand-default text-xs">
                    Used exclusively for verification under UU PDP and never
                    shown to the public.
                </span>
            </div>

            <div className="flex flex-col justify-start items-center w-full gap-4">
                <label
                    className="font-ibm-plex-mono w-full text-brand-default font-normal uppercase text-base"
                    htmlFor="password"
                >
                    Password
                </label>
                <div className="flex flex-row justify-between items-center w-full bg-brand-third border border-brand-border rounded-xl">
                    <svg
                        className="text-brand-default mx-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_199_241)">
                            <path
                                d="M2.91667 6.41669H11.0833C11.7277 6.41669 12.25 6.93902 12.25 7.58335V11.6667C12.25 12.311 11.7277 12.8334 11.0833 12.8334H2.91667C2.27233 12.8334 1.75 12.311 1.75 11.6667V7.58335C1.75 6.93902 2.27233 6.41669 2.91667 6.41669Z"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M4.08333 6.41669V4.08335C4.08333 3.30981 4.39062 2.56794 4.9376 2.02096C5.48459 1.47398 6.22645 1.16669 7 1.16669C7.77355 1.16669 8.51541 1.47398 9.06239 2.02096C9.60937 2.56794 9.91667 3.30981 9.91667 4.08335V6.41669"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_199_241">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <input
                        {...register("password")}
                        placeholder="Enter your password"
                        id="password"
                        type={pwType ? "text" : "password"}
                        autoComplete="on"
                        className="flex-1 bg-brand-third border-none rounded-xl py-4 text-brand-default text-base font-public-sans font-normal outline-none"
                    />
                    <svg
                        onClick={() => setPwType(!pwType)}
                        className="text-brand-default mx-4 text-lg cursor-pointer"
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
                {errors.password && (
                    <span className="text-red-500 w-full text-sm">
                        {errors.password.message}
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="flex flex-row justify-center items-center w-full p-4 bg-brand-primary border-none rounded-full outline-none text-base font-public-sans font-semibold text-white gap-2 cursor-pointer"
            >
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_199_513)">
                        <path
                            d="M11.9167 6.0017V6.50003C11.916 7.66809 11.5378 8.80464 10.8384 9.74018C10.139 10.6757 9.15599 11.3601 8.03586 11.6913C6.91573 12.0225 5.71856 11.9827 4.62288 11.5779C3.5272 11.1731 2.59173 10.425 1.95598 9.44511C1.32023 8.46521 1.01826 7.30606 1.09512 6.14053C1.17197 4.975 1.62353 3.86554 2.38244 2.97761C3.14136 2.08968 4.16697 1.47086 5.30631 1.21344C6.44565 0.956021 7.63769 1.07379 8.70463 1.5492"
                            strokeWidth="1.08333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="white"
                        />
                        <path
                            d="M4.875 5.95835L6.5 7.58335L11.9167 2.16669"
                            strokeWidth="1.08333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_199_513">
                            <rect width="13" height="13" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span>Create Account & Continue</span>
            </button>
        </form>
    );
}

export default function ModalSigninRegister({ showModalFn }) {
    const [selectedKind, setKind] = useState("signin");

    return (
        <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex items-center justify-center">
            <div className="w-175 bg-white max-md:w-[90%] max-md:h-[90%] max-md:overflow-y-scroll max-md:items-start flex flex-col items-center max-md:justify-start justify-center rounded-xl border border-brand-border">
                <div className="flex flex-row justify-between items-start w-full p-6 bg-brand-main rounded-tl-xl rounded-tr-xl">
                    <div className="flex flex-col justify-center items-start w-[70%] gap-2">
                        <span className="font-fraunces font-semibold text-lg">
                            Sign In to WargaReport
                        </span>
                        <span className="font-public-sans font-normal text-brand-default">
                            Sign in to lodge a complaint or upvote issues.
                        </span>
                    </div>
                    <div className="w-[30%] flex flex-row justify-end items-start">
                        <button
                            onClick={() => showModalFn(false)}
                            className="bg-transparent border-none outline-none text-lg text-brand-default cursor-pointer"
                        >
                            <svg
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
                                    stroke="currentColor"
                                />
                                <path
                                    d="M4.25 4.25L12.75 12.75"
                                    strokeWidth="1.41667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col max-md:h-full max-md:justify-start justify-center items-center w-full p-6 bg-brand-third rounded-bl-xl rounded-br-xl gap-4">
                    <div className="flex flex-row justify-between items-center w-full gap-4">
                        <button
                            onClick={() => setKind("signin")}
                            className={
                                "flex justify-center items-center w-1/2 p-4 rounded-4xl outline-none text-base font-public-sans font-normal cursor-pointer no-underline " +
                                (selectedKind === "signin"
                                    ? "bg-brand-primary text-white border-none"
                                    : "text-brand-default border-brand-border bg-brand-main")
                            }
                        >
                            Sign In Existing Account
                        </button>
                        <button
                            onClick={() => setKind("register")}
                            className={
                                "flex justify-center items-center w-1/2 p-4 rounded-4xl outline-none text-base font-public-sans font-normal cursor-pointer no-underline " +
                                (selectedKind === "register"
                                    ? "bg-brand-primary text-white border-none"
                                    : "text-brand-default border-brand-border bg-brand-main")
                            }
                        >
                            Register as Citizen
                        </button>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full overflow-y-auto max-h-120">
                        {selectedKind === "signin" && (
                            <SignInForm
                                parentCallback={(value) => showModalFn(value)}
                            />
                        )}
                        {selectedKind === "register" && <RegisterForm />}
                    </div>
                </div>
            </div>
        </div>
    );
}
