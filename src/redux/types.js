export const userType = {
    id: "", // user uuid
    fullname: "",
    email: "",
    phone: "",
    nik: "",
    password: "",
    role: "", // admin or user or officer
};

export const reportType = {
    alertChannels: [],
    anonymus: "",
    confirm: "",
    dateCreation: {
        month: "",
        date: 0,
        year: 0,
        time: ""
    },
    details: "",
    evidence: {
        files: []
    },
    fillerName: "",
    id: "", // use uuid
    lastUpdate: {
        month: "",
        date: 0,
        year: 0,
        time: ""
    },
    location: {
        area: "",
        address: "",
    },
    coordinate: "",
    phone: "",
    status: "",
    title: "",
    topic: "",
    upvote: 0,
};


export const SLAType = {
    id: "", // use uuid
    serviceDomain: "",
    responsibleBoreau: "",
    target: 0,
    escalationTreshold: 0,
    status: ""
}

export const categoryType = {
    id: "", // use uuid
    name: "",
    icon: "",
    citizenFacingLabel: "",
    citizenHint: "",
    agencyId: "", // reference by AgencyType.id
    SLAId: "" // reference by SLAType.id
}

export const agencyType = {
    id: "", // use uuid,
    agencyName: "",
    jurisdictionStatement: "",
    supportHotline: "",
    dispatchEmail: "",
    officeAddress: "",
    averageReponse: 0,
    openCases: 0,
}

export const officerType = {
    id: "", // badgeId
    agencyId: "", // reference AgencyType
    userId: "", // reference by userType.id
}
