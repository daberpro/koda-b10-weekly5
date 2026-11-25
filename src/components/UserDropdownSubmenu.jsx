import { useNavigate } from "react-router";
import { removeData, storageKeys } from "../lib/util";
import { useDispatch } from "react-redux";
import { usersActions } from "../redux/slices/users.slice";

export default function UserDropdownSubmenu({
    fullname = "User Name",
    email = "user@example.com",
    isOpen = false,
}) {

    const reduxDispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = () => {
        removeData(storageKeys.ID);
        removeData(storageKeys.CREDENTIAL);
        reduxDispatch(usersActions.logoutUser());
        navigate("/");
    };

    return (
        <div
            className={`
        absolute w-80 left-0 bg-brand-third border-brand-border border rounded-xl h-fit
        top-[calc(100%+1rem)] flex-col items-center justify-center z-50
        ${isOpen ? "flex" : "hidden"}
      `}
        >
            <div className="w-full p-4 flex flex-col justify-between items-start gap-2">
                <span className="font-public-sans font-semibold text-base text-brand-default">
                    {fullname}
                </span>
                <span className="font-ibm-plex-mono font-normal text-sm text-brand-light-default">
                    {email}
                </span>
            </div>

            <div className="w-full flex items-center border-t border-brand-border justify-center">
                <button
                    type="button"
                    className="w-full p-4 flex items-center justify-start gap-2 border-none bg-transparent text-brand-default font-public-sans text-base font-normal outline-none cursor-pointer hover:bg-brand-secondary hover:text-brand-primary transition-colors duration-200"
                    onClick={() => console.log("Navigate to My Filed Reports")}
                >
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_601_272)">
                            <path
                                d="M10 10.5V9.5C10 8.96957 9.78929 8.46086 9.41421 8.08579C9.03914 7.71071 8.53043 7.5 8 7.5H4C3.46957 7.5 2.96086 7.71071 2.58579 8.08579C2.21071 8.46086 2 8.96957 2 9.5V10.5"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M8 3.5C8 4.60457 7.10457 5.5 6 5.5C4.89543 5.5 4 4.60457 4 3.5C4 2.39543 4.89543 1.5 6 1.5C7.10457 1.5 8 2.39543 8 3.5Z"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_601_272">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>My Filed Reports</span>
                </button>
            </div>

            <div className="w-full flex items-center justify-center border-t border-brand-border">
                <button
                    type="button"
                    className="w-full p-4 flex items-center justify-start gap-2 border-none bg-transparent text-brand-red font-public-sans text-base font-normal outline-none cursor-pointer rounded-b-lg hover:bg-brand-red-secondary transition-colors duration-200"
                    onClick={handleSignOut}
                >
                    <svg
                        className="text-brand-red"
                        width="1em"
                        height="1em"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_601_279)">
                            <path
                                d="M4.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V2.5C1.5 2.23478 1.60536 1.98043 1.79289 1.79289C1.98043 1.60536 2.23478 1.5 2.5 1.5H4.5"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M8 8.5L10.5 6L8 3.5"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                            <path
                                d="M10.5 6H4.5"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_601_279">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    );
}
