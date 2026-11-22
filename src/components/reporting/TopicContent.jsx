import { useState } from "react";
import Building from "../icon/Building";
import Lighting from "../icon/Lighting";
import Sound from "../icon/Sound";
import Trash from "../icon/Trash";
import Tree from "../icon/Tree";
import Warning from "../icon/Warning";
import Water from "../icon/Water";
import { useContext } from "react";
import { TempReportContext } from "../../lib/contexts";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ScrollRestoration, useOutletContext } from "react-router";
import { FormNavigation } from "./FormNavigation";

const enumTopic = {
    BUILDING: "building",
    LIGHTING: "lighting",
    SOUND: "sound",
    TRASH: "trash",
    TREE: "tree",
    WARNING: "warning",
    WATER: "water",
};

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
    topic,
    title,
    subtitle,
    totalHours,
    description,
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
            <div className="w-full flex items-center justify-center gap-4">
                <Icon topic={topic} />
                <span className="font-public-sans font-600 text-lg">
                    {title}
                </span>
                <div className="grow flex items-center justify-end flex-row">
                    <span className="px-4 py-2 bg-brand-secondary text-brand-primary rounded-4xl">
                        {totalHours}h SLA
                    </span>
                </div>
            </div>

            <span className="w-full font-public-sans font-400">{subtitle}</span>
            <p className="w-full font-public-sans font-400 text-brand-default">
                {description}
            </p>
        </div>
    );
}

export default function TopicContent(props) {
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

    const allTopics = [
        {
            topic: enumTopic.WATER,
            title: "Water & Sewage",
            totalHours: 24,
            subtitle: "Water Burst / Pipa Bocor",
            description: "Pipeline bursts, flooding tap leaks, dry taps",
        },
        {
            topic: enumTopic.WARNING,
            title: "Roads & Transit",
            totalHours: 48,
            subtitle: "Pothole / Sidewalk (Trotoar)",
            description:
                "Potholes, broken sidewalk slabs, damaged drainage grates",
        },
        {
            topic: enumTopic.LIGHTING,
            title: " Street Lighting",
            totalHours: 72,
            subtitle: "Dark Street / PJU Padam",
            description:
                "Dark street lamps (PJU), damaged base poles, broken traffic signals",
        },
        {
            topic: enumTopic.TRASH,
            title: "Sanitation & Waste",
            totalHours: 36,
            subtitle: "Trash Pile / Sampah Liar",
            description:
                "Illegal dump spots in alleys, overflowing TPS bins, river refuse",
        },
        {
            topic: enumTopic.TREE,
            title: "Public Parks & Trees",
            totalHours: 48,
            subtitle: "Hazardous Tree / Rawan Tumbang",
            description:
                "Falling branches (pohon rawan tumbang), RPTRA playground hazards",
        },
        {
            topic: enumTopic.SOUND,
            title: "Noise & Disturbance",
            totalHours: 48,
            subtitle: "Late-night Noise / Ketertiban",
            description:
                "Nocturnal construction past 22:00 WIB, sidewalk encroachment",
        },
        {
            topic: enumTopic.BUILDING,
            title: "Building & Zoning",
            totalHours: 72,
            subtitle: "Unsafe Construction / Bangunan",
            description:
                "Unsafe scaffolding, structural hazards, building boundary violations",
        },
    ];

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
                    {allTopics.map((data) => {
                        return (
                            <TopicCard
                                clickFn={() => {
                                    setSelectedTopic(data.topic);
                                }}
                                selected={data.topic === selectedTopic}
                                {...data}
                                key={data.topic}
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
