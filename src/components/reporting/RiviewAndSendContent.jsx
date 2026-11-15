export default function RiviewAndSendContent() {

    return (
        <>
        <div class="flex mt-8 justify-start items-center flex-col gap-4 w-full">
            <label
                class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                for="title">Concise Title *</label>
            <div
                class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                <input placeholder="Title"
                    value="Pohon tumbang di depan Kebun Binatang samping Kampus ITB" id="title"
                    type="text"
                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
            </div>
        </div>

        <div class="flex mt-8 justify-start items-center flex-col gap-4 w-full">
            <div class="w-full flex items-center justify-between">
                <label
                    class="font-ibm-plex-mono text-brand-default font-400 uppercase text-base"
                    for="title">Incident Observation Details *</label>
                <span class="text-brand-default font-ibm-plex-mono text-base">100 chars (min
                    15)</span>
            </div>
            <div
                class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                <textarea placeholder="Title"
                    value="Pohon tumbang di depan Kebun Binatang samping Kampus ITB" id="title"
                    type="text"
                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none">Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan</textarea>
            </div>
        </div>

        <div
            class="rounded-xl my-4 bg-brand-secondary border border-brand-border p-4 w-full flex items-center justify-center gap-4 flex-row">
            <div class="flex items-center justify-center flex-col">
                <svg class="text-brand-primary text-lg" width="1em" height="1em"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_214_1162)">
                        <g clipPath="url(#clip1_214_1162)">
                            <path
                                d="M3.33333 7.33325H12.6667C13.403 7.33325 14 7.93021 14 8.66659V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V8.66659C2 7.93021 2.59695 7.33325 3.33333 7.33325Z"
                                strokeWidth="1.33333" strokeLinecap="round"
                                strokeLinejoin="round" stroke="currentColor" />
                            <path
                                d="M4.6665 7.33325V4.66659C4.6665 3.78253 5.01769 2.93468 5.64281 2.30956C6.26794 1.68444 7.11578 1.33325 7.99984 1.33325C8.88389 1.33325 9.73174 1.68444 10.3569 2.30956C10.982 2.93468 11.3332 3.78253 11.3332 4.66659V7.33325"
                                strokeWidth="1.33333" strokeLinecap="round"
                                strokeLinejoin="round" stroke="currentColor" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_214_1162">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_214_1162">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div class="flex items-start justify-center flex-col gap-2">
                <span class="font-public-sans font-600">Post anonymously on public feed</span>
                <span class="font-public-sans text-brand-default">Your name will be masked as Warga
                    Anonim on open records.</span>
            </div>
            <div class="grow flex items-center justify-end flex-row">
                <input type="checkbox"/>
            </div>
        </div>

        <div class="flex max-md:flex-col items-center justify-between flex-row gap-4 w-full">
            <div class="flex justify-start items-center flex-col gap-4 w-full">
                <label
                    class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                    for="filler">Filer Name *</label>
                <div
                    class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                    <svg class="text-brand-default mx-4" width="1em" height="1em"
                        viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.33333 2.33331H11.6667C12.311 2.33331 12.8333 2.85565 12.8333 3.49998V10.5C12.8333 11.1443 12.311 11.6666 11.6667 11.6666H2.33333C1.689 11.6666 1.16667 11.1443 1.16667 10.5V3.49998C1.16667 2.85565 1.689 2.33331 2.33333 2.33331Z"
                            strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"
                            stroke="currentColor" />
                        <path d="M12.8333 4.08331L7 7.58331L1.16667 4.08331" strokeWidth="1.16667"
                            strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                    </svg>

                    <input placeholder="nama anda" value="Ari Susanto" id="filler" type="text"
                        required
                        class="bg-brand-third grow border-0 rounded-xl py-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
                </div>
            </div>
            <div class="flex justify-start items-center flex-col gap-4 w-full">
                <label
                    class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                    for="phone">Email for Status Alerts *</label>
                <div
                    class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                    <input placeholder="email" value="ari@wargareport.id" id="phone" type="email"
                        required
                        class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
                </div>
            </div>
        </div>

        <div class="flex max-md:flex-col items-center justify-between flex-row gap-4 w-full">
            <div class="flex justify-start items-center flex-col gap-4 w-full">
                <label
                    class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                    for="phone">Phone / Whatsapp *</label>
                <div
                    class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                    <input placeholder="+62 812-..." id="phone" type="phone" required
                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
                </div>
            </div>
            <div class="flex justify-start items-center flex-col gap-4 w-full">
                <label
                    class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                    for="email">Status alert channels</label>
                <div
                    class="w-full flex items-center justify-start gap-4 flex-row bg-brand-third rounded-xl">
                    <div class="w-fit flex items-center justify-start gap-4">
                        <input id="email-status" type="checkbox"/>
                        <label for="email-status">Email</label>
                    </div>
                    <div class="w-fit flex items-center justify-start gap-4">
                        <input id="sms-status" type="checkbox" />
                        <label for="sms-status">SMS</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex border-b border-b-brand-default py-4 w-full items-center justify-start gap-4 flex-row">
            <input id="confirm" type="checkbox"/>
            <label class="font-public-sans text-brand-default" for="confirm">I confirm this incident was authentically observed on-site under
                Law No. 25/2009.</label>
        </div>
        </>
    );

}
