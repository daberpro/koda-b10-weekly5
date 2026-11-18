
export default function MediaCard(props) {
  return (
      <div className="flex items-center flex-col justify-center w-full gap-2 bg-brand-third border border-brand-border rounded-xl">
          <img
              className="w-full object-cover rounded-tl-xl rounded-tr-xl h-46"
              src="/placeholder.svg"
              alt="placeholder image"
          />
          <div className="flex px-4 py-2 items-center justify-between flex-row w-full">
              <div className="flex items-start justify-center flex-col grow gap-2">
                  <span className="font-public-sans font-600">
                      {props.name}
                  </span>
                  <span className="font-ibm-plex-mono font-400 text-brand-default">
                      {props.type} {(props.size / (1024*1024)).toFixed(2)} MB
                  </span>
              </div>
              <button className="bg-transparent border-0 outline-none">
                  <svg
                      className="text-lg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          d="M1.875 3.75H13.125"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="currentColor"
                      />
                      <path
                          d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="currentColor"
                      />
                      <path
                          d="M6.25 6.875V10.625"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="currentColor"
                      />
                      <path
                          d="M8.75 6.875V10.625"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="currentColor"
                      />
                      <path
                          d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="currentColor"
                      />
                  </svg>
              </button>
          </div>
          <div className="w-full flex pb-4 px-4 items-center justify-start">
              <span className="text-brand-default font-public-sans">
                  take live on-site by resident
                  camera.
              </span>
          </div>
      </div>
  );
}
