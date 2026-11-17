import { useState } from "react";
import UserDropdownSubmenu from "./UserDropdownSubmenu"; // Sesuaikan path import

export default function UserDropdownMenu(props) {
    const { fullname = "User Name", email = "user@example.com", parentCallback = () => { } } = props;
    const [isOpen, setIsOpen] = useState(false);

    const initials =
        fullname
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase() || "U";

    return (
        <div
            className="relative select-none bg-brand-third border border-brand-border rounded-full p-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-secondary transition-colors duration-200"
            onClick={() => {
                setIsOpen(!isOpen);
                parentCallback(!isOpen);
            }}
        >
            <div className="w-10 h-10 flex items-center justify-center bg-brand-secondary text-brand-primary font-public-sans font-semibold text-base rounded-2xl">
                {initials}
            </div>

            <div className="flex flex-col items-start justify-center">
                <span className="font-public-sans font-semibold text-base text-brand-default">
                    {fullname}
                </span>
                <span className="font-ibm-plex-mono text-brand-primary text-xs">
                    Citizen
                </span>
            </div>

            <div className="flex items-center justify-center">
                <svg
                    className={`w-4 h-4 text-brand-light-default transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_214_711)">
                        <path
                            d="M3 4.5L6 7.5L9 4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_214_711">
                            <rect width="12" height="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <UserDropdownSubmenu
                fullname={fullname}
                email={email}
                isOpen={isOpen}
            />
        </div>
    );
}
