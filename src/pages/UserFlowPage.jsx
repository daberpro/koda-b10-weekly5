import { useState } from "react";
import ComplainContent from "../components/flow/ComplainContent";
import NotificationsContent from "../components/flow/NotificationsContent";
import ProfileContent from "../components/flow/ProfileContent";
import PrivacyAndDataContent from "../components/flow/PrivacyAndDataContent";
import SecurityContent from "../components/flow/SecurityContent";

const enumStep = {
    COMPLAINTS: "complaints",
    PROFILE: "profile",
    NOTIFICATIONS: "notifications",
    PRIVACY_AND_DATA: "privacy-and-data",
    SECURITY: "security",
};

function UserFlow({ flow }) {
    switch (flow) {
        case enumStep.COMPLAINTS:
            return <ComplainContent />;
        case enumStep.NOTIFICATIONS:
            return <NotificationsContent />;
        case enumStep.PROFILE:
            return <ProfileContent />;
        case enumStep.PRIVACY_AND_DATA:
            return <PrivacyAndDataContent />;
        case enumStep.SECURITY:
            return <SecurityContent />;
    }
}

export default function UserFlowPage() {
    const [currentStep, setCurrentStep] = useState(enumStep.COMPLAINTS);

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
                        <button
                            onClick={() => setCurrentStep(enumStep.COMPLAINTS)}
                            className={
                                "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (currentStep === enumStep.COMPLAINTS
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }
                        >
                            My complaints
                        </button>
                        <button
                            onClick={() => setCurrentStep(enumStep.PROFILE)}
                            className={
                                "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (currentStep === enumStep.PROFILE
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }
                        >
                            Profile
                        </button>
                        <button
                            onClick={() =>
                                setCurrentStep(enumStep.NOTIFICATIONS)
                            }
                            className={
                                "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (currentStep === enumStep.NOTIFICATIONS
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }
                        >
                            Notifications
                        </button>
                        <button
                            onClick={() =>
                                setCurrentStep(enumStep.PRIVACY_AND_DATA)
                            }
                            className={
                                "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (currentStep === enumStep.PRIVACY_AND_DATA
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }
                        >
                            Privacy & data
                        </button>
                        <button
                            onClick={() => setCurrentStep(enumStep.SECURITY)}
                            className={
                                "border-0 px-4 py-2 cursor-pointer rounded-4xl font-public-sans font-400 text-base " +
                                (currentStep === enumStep.SECURITY
                                    ? "bg-brand-primary text-white"
                                    : "text-brand-default")
                            }
                        >
                            Security
                        </button>
                    </div>
                    <UserFlow flow={currentStep} />
                </div>
            </div>
        </div>
    );
}
