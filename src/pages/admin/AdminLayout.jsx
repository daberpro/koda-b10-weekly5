import { NavLink, Outlet} from "react-router";

export default function AdminLayout() {
    return (
        <div className="flex flex-col justify-start items-start w-[90%] gap-4">
            <div className="w-full h-fit flex flex-row items-start justify-center">
                <div className="w-full p-6 gap-4 items-start justify-center flex-col flex">
                    <span className="uppercase text-brand-default text-base">
                        System Governance
                    </span>
                    <div className="w-full flex flex-col gap-4">
                        <h1 className="font-fraunces font-bold text-[3.5rem]">
                            Civic Administration & Policies
                        </h1>
                        <p>
                            Verify incoming citizen reports, route them to the responsible bureau, and
                            configure statutory SLA benchmarks, taxonomy, and agency contacts.
                        </p>
                    </div>

                    <div className="w-full border-b border-b-brand-border pb-4 flex items-center justify-start gap-2">
                        <NavLink
                            to="/admin/escalation"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Escalation Desk
                        </NavLink>
                        <NavLink
                            to="/admin/sla"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            SLA Benchmarks
                        </NavLink>
                        <NavLink
                            to="/admin/categories"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Categories
                        </NavLink>
                        <NavLink
                            to="/admin/agencies"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Agencies
                        </NavLink>
                        <NavLink
                            to="/admin/officer-accounts"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Officer Accounts
                        </NavLink>
                        <NavLink
                            to="/admin/moderation"
                            className={({isActive}) => {
                                return "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }}
                        >
                            Moderation
                        </NavLink>
                    </div>
                    <Outlet/>
                    {/* <UserFlow flow={currentStep} />*/}
                </div>
            </div>
        </div>
    );
}
