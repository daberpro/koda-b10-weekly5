export default function ProfileContent() {
    return (
        <div class="flex className justify-start items-start w-[90%] gap-4">
            <div class="w-full gap-4 items-start justify-center className flex">
                <div class="flex py-6 items-start className justify-center w-full gap-4">
                    <form
                        class="w-full bg-brand-third p-8 rounded-xl border border-brand-border flex flex-col items-start justify-center className gap-2"
                        action=""
                    >
                        <span class="font-fraunces font-bold text-lg">
                            Filer Identity & Preferences
                        </span>
                        <span class="font-public-sans text-brand-default text-base">
                            Used to pre-fill future complaint forms and verify
                            status inquiries.
                        </span>

                        <div class="flex w-full border-b border-b-brand-border py-6 gap-4 items-center justify-center flex-row">
                            <div class="w-fit">
                                <div class="w-24 h-24 bg-brand-secondary rounded-full border border-brand-border p-4 flex items-center justify-center">
                                    <span
                                        render="initialName"
                                        class="text-[2rem] text-brand-primary"
                                    ></span>
                                </div>
                            </div>
                            <div class="grow grid justify-start items-start className gap-2">
                                <span class="text-lg font-public-sans font-600">
                                    Profile photo
                                </span>
                                <span class="text-base text-brand-default">
                                    JPG, PNG, or WebP. Square images work best.
                                </span>
                                <button class="px-4 py-2 border border-brand-border w-fit font-public-sans font-600 cursor-pointer rounded-3xl bg-brand-third outline-none">
                                    Upload photo
                                </button>
                            </div>
                        </div>

                        <div class="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                for="fullname"
                            >
                                Full Legal Name
                            </label>
                            <div class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    render="fullname"
                                    placeholder="e.g. Budi Santoso"
                                    id="fullname"
                                    value="Ari Susanto"
                                    type="text"
                                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                        </div>

                        <div class="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                for="email"
                            >
                                Primary Notification Email
                            </label>
                            <div class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    render="email"
                                    placeholder="Email"
                                    id="email"
                                    value="ari@wargareport.id"
                                    type="text"
                                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                        </div>

                        <div class="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                for="phone"
                            >
                                SMS Contact Number
                            </label>
                            <div class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    render="phone"
                                    placeholder="Phone Number"
                                    id="phone"
                                    value="+62 888-8888-8888"
                                    type="text"
                                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                        </div>

                        <div class="flex flex-col justify-start items-center className gap-4 w-full">
                            <label
                                class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                                for="nik"
                            >
                                nik *
                            </label>
                            <div class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                                <input
                                    render="nik"
                                    placeholder="16 digits for verified resident badge (e.g. 3174...)"
                                    id="nik"
                                    type="text"
                                    value="3174051809900004"
                                    required
                                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default font-ibm-plex-mono text-base font-public-sans font-400 outline-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="bg-brand-primary text-white px-4 py-2 font-public-sans font-600 text-base border-0 outline-none rounded-4xl w-fit flex items-center justify-center flex-row gap-2"
                        >
                            <span>Save profile changes</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
