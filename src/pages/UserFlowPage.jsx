import { NavLink, Outlet} from "react-router";

export default function UserFlowPage() {
    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <div className="w-full h-fit flex flex-row items-start justify-center">
                <div className="w-full p-6 gap-4 items-start justify-center flex-col flex">
                    <span className="uppercase text-brand-default text-base">
                        Citizen Management
                    </span>
                    <div className="w-full flex items-center justify-between">
                        <h1 className="font-fraunces font-bold text-[3.5rem]">
                            Account & Case History
                        </h1>
                    </div>

                    <div className="w-full border-b border-b-brand-border pb-4 flex items-center justify-start gap-2">
                        <NavLink
                            to="/user/complaints"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            My complaints
                        </NavLink>
                        <NavLink
                            to="/user/profile"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            to="/user/notifications"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Notifications
                        </NavLink>
                        <NavLink
                            to="/user/privacy-data"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Privacy & data
                        </NavLink>
                        <NavLink
                            to="/user/security"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Security
                        </NavLink>
                    </div>
                    <Outlet/>
                    {/* <UserFlow flow={currentStep} />*/}
                </div>
            </div>
        </div>
    );
}
