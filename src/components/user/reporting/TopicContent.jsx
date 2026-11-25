import { useState } from "react";
import Building from "../../icon/Building";
import Lighting from "../../icon/Lighting";
import Sound from "../../icon/Sound";
import Trash from "../../icon/Trash";
import Tree from "../../icon/Tree";
import Warning from "../../icon/Warning";
import Water from "../../icon/Water";
import { useContext } from "react";
import { TempReportContext } from "../../../lib/contexts";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ScrollRestoration, useOutletContext } from "react-router";
import { FormNavigation } from "./FormNavigation";
import { enumTopic } from "../../../lib/enums.js";
import { useSelector } from "react-redux";
// import { allTopics } from "../../../lib/constants.js";


function Icon({ topic }) {
    switch (topic) {
        case enumTopic.BUILDING:
            return <Building />;
        case enumTopic.LIGHTING:
            return <Lighting />;
        case enumTopic.SOUND:
            return <Sound />;
        case enumTopic.TRASH:
            return <Trash />;
        case enumTopic.TREE:
            return <Tree />;
        case enumTopic.WARNING:
            return <Warning />;
        case enumTopic.WATER:
            return <Water />;
    }
}

function TopicCard({
    data,
    selected,
    clickFn,
}) {
    return (
        <div
            onClick={clickFn}
            className={
                "border p-6 cursor-pointer rounded-xl flex items-center justify-start gap-4 h-full flex-col " +
                (selected
                    ? "bg-brand-secondary border-brand-primary"
                    : "bg-brand-third border-brand-border")
            }
        >
            <div className="w-full flex items-center justify-start gap-4">
                <Icon topic={data.icon} />
                <span className="font-public-sans font-600 text-lg">
                    {data.name}
                </span>
            </div>

            <span className="w-full font-public-sans font-400">
                {data.citizenFacingLabel}
            </span>

            <p className="w-full font-public-sans font-400 text-brand-default">
                {data.citizenHint}
            </p>
        </div>
    );
}

export default function TopicContent() {
    const { categories } = useSelector((state) => state.categories);
    const { nextStepConfirm } = useOutletContext();
    const [report, setReport] = useContext(TempReportContext);
    const [selectedTopic, setSelectedTopic] = useState(
        report.topic || enumTopic.WARNING,
    );

    function updateTopic() {
        const copyReportData = { ...report };
        copyReportData.topic = selectedTopic;
        setReport(copyReportData);
    }

    useEffect(() => updateTopic(), [selectedTopic]);

    const { handleSubmit } = useForm();
    function nextStep() {
        nextStepConfirm();
    }

    return (
        <>
            <ScrollRestoration />
            <div className="flex mb-4 w-full items-start justify-start flex-col gap-2">
                <span className="font-ibm-plex-mono font-400 text-brand-default text-lg">
                    Step 01 of 04
                </span>
                <span className="font-fraunces font-600 text-[2rem] font-bold">
                    What needs fixing?
                </span>
                <span className="font-public-sans font-400 text-brand-default">
                    Select the municipal service category that best matches the
                    issue observed.
                </span>
            </div>
            <form action={""} onSubmit={handleSubmit(nextStep)}>
                <div className="grid gap-4 border-b border-b-brand-border pb-4 items-center justify-center w-full grid-cols-2 mt-8">
                    {categories.map((data) => {
                        return (
                            <TopicCard
                                clickFn={() => {
                                    setSelectedTopic(data.name);
                                }}
                                selected={data.name === selectedTopic}
                                data={data}
                                key={data.name}
                            />
                        );
                    })}
                </div>
                <FormNavigation
                    backBtnContent="Cancel"
                    nextBtnContent="Continue"
                />
            </form>
        </>
    );
}
