import {enumTopic} from "./enums.js";
export const allTopics = [
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
