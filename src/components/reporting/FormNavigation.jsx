export function FormNavigation(props) {
    return (
        <div className="w-full items-center justify-between flex-row flex py-8">
            <button className="bg-transparent border-0 outline-none text-brand-primary text-base font-public-sans font-600">
                {props.backBtnContent}
            </button>
            <button
                type="submit"
                className="bg-brand-primary no-underline text-white font-public-sans font-600 text-base rounded-4xl px-4 py-2 border-0 outline-none cursor-pointer flex items-center justify-center gap-2"
            >
                {props.nextBtnContent}
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_214_614)">
                        <path
                            d="M2.70831 6.5H10.2916"
                            strokeWidth="1.08333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                        />
                        <path
                            d="M6.5 2.70825L10.2917 6.49992L6.5 10.2916"
                            strokeWidth="1.08333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="currentColor"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_214_614">
                            <rect width="13" height="13" fill="currentColor" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    );
}
