export default function LocationContent() {
    return (
        <>
        <div class="flex mt-8 justify-start items-center flex-col gap-4 w-full">
            <label
                class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                for="area">Kelurahan / Kecamatan & Wilayah</label>
            <div
                class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                <input placeholder="kecamatan & wilayah" value="Coblong" id="area" type="text"
                class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
            </div>
        </div>

        <div class="flex items-start justify-center flex-col w-full py-4">
            <span class="font-ibm-plex-mono font-400 uppercase text-brand-default">Common areas
                in Coblong &dot; Kota Bandung</span>
            <div class="flex items-center justify-center flex-row max-lg:justify-start max-lg:w-full flex-wrap gap-2 py-2">
                <span class="bg-brand-third p-4 rounded-2xl border border-brand-border">Jl. Dago</span>
                <span class="bg-brand-third p-4 rounded-2xl border border-brand-border">Institut Teknologi Bandung
                    (ITB)</span>
                <span class="bg-brand-third p-4 rounded-2xl border border-brand-border">Simpang Dago</span>
                <span class="bg-brand-third p-4 rounded-2xl border border-brand-border">Pasar Dago</span>
                <span class="bg-brand-third p-4 rounded-2xl border border-brand-border">Jl. Ir. H. Juanda</span>
            </div>
        </div>

        <div class="flex justify-start items-center flex-col gap-4 w-full">
            <label
                class="font-ibm-plex-mono w-full text-brand-default font-400 uppercase text-base"
                for="address">Street Address, RT/RW, or Landmark *</label>
            <div
                class="w-full flex items-center justify-between flex-row bg-brand-third border border-brand-border rounded-xl">
                <input placeholder="Alamat anda" value="Jl. Tamansari depan Kebun Binatang"
                    id="address" type="text"
                    class="bg-brand-third grow border-0 rounded-xl p-4 text-brand-default text-base font-public-sans font-400 outline-none"/>
            </div>
        </div>

        <div
            class="w-full mt-4 bg-brand-main-color border border-brand-border rounded-xl p-4 flex items-center justify-between">
            <svg class="text-brand-primary text-lg" width="1em" height="1em"
                viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_214_751)">
                    <g clipPath="url(#clip1_214_751)">
                        <path
                            d="M12.25 5.83325C12.25 9.91658 7 13.4166 7 13.4166C7 13.4166 1.75 9.91658 1.75 5.83325C1.75 4.44087 2.30312 3.10551 3.28769 2.12094C4.27226 1.13638 5.60761 0.583252 7 0.583252C8.39239 0.583252 9.72774 1.13638 10.7123 2.12094C11.6969 3.10551 12.25 4.44087 12.25 5.83325Z"
                            strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"
                            stroke="currentColor" />
                        <path
                            d="M8.75 5.83325C8.75 6.79975 7.9665 7.58325 7 7.58325C6.0335 7.58325 5.25 6.79975 5.25 5.83325C5.25 4.86675 6.0335 4.08325 7 4.08325C7.9665 4.08325 8.75 4.86675 8.75 5.83325Z"
                            strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"
                            stroke="currentColor" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_214_751">
                        <rect width="14" height="14" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_214_751">
                        <rect width="14" height="14" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <span class="font-public-sans font-600 text-base">
                Coordinates auto-pinned
            </span>

            <span class="font-public-sans text-base text-brand-default">
                6.2088° S, 106.8456° E (WIB)
            </span>
        </div>

        </>
    );
}
