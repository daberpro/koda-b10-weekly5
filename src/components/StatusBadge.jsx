
/**
 *
 * @param {{status: "submitted"|"received"|"in riview"|"assigned"|"awaiting info"|"resolved"|"closed"}} param
 * @returns
 */
export default function StatusBadge({ status }) {
  switch (status) {
    case "submitted":
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-border bg-brand-light-orange-secondary p-2 text-brand-default">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_833)">
              <path d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z" strokeLinecap="round" strokeLinejoin="round" stroke="#4C5B52" />
              <path d="M6 3.5V6L7.75 7" strokeLinecap="round" strokeLinejoin="round" stroke="#4C5B52" />
            </g>
            <defs>
              <clipPath id="clip0_2_833">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="font-public-sans text-base font-semibold">Submitted</span>
        </div>
      );

    case "received":
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-primary bg-brand-secondary p-2 text-brand-primary">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_840)">
              <g clipPath="url(#clip1_2_840)">
                <path d="M11 6H8L7 7.5H5L4 6H1" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                <path d="M2.725 2.555L1 6V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V6L9.275 2.555C9.19221 2.38839 9.06459 2.24819 8.90648 2.15014C8.74837 2.05209 8.56604 2.0001 8.38 2H3.62C3.43396 2.0001 3.25163 2.05209 3.09352 2.15014C2.93541 2.24819 2.80779 2.38839 2.725 2.555Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2_840">
                <rect width="12" height="12" fill="white" />
              </clipPath>
              <clipPath id="clip1_2_840">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="font-public-sans text-base font-semibold">Received</span>
        </div>
      );

    case "in riview":
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-orange bg-brand-orange-secondary p-2 text-brand-orange">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
            <path d="M10.5 10.5L8.35 8.34998" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
          </svg>
          <span className="font-public-sans text-base font-semibold">In review</span>
        </div>
      );

    case "assigned":
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-blue bg-brand-blue-secondary p-2 text-brand-blue">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_854)">
              <g clipPath="url(#clip1_2_854)">
                <path d="M8 10.5V9.5C8 8.96957 7.78929 8.46086 7.41421 8.08579C7.03914 7.71071 6.53043 7.5 6 7.5H3C2.46957 7.5 1.96086 7.71071 1.58579 8.08579C1.21071 8.46086 1 8.96957 1 9.5V10.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                <path d="M6.5 3.5C6.5 4.60457 5.60457 5.5 4.5 5.5C3.39543 5.5 2.5 4.60457 2.5 3.5C2.5 2.39543 3.39543 1.5 4.5 1.5C5.60457 1.5 6.5 2.39543 6.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                <path d="M8 5.5L9 6.5L11 4.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2_854">
                <rect width="12" height="12" fill="white" />
              </clipPath>
              <clipPath id="clip1_2_854">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="font-public-sans text-base font-semibold">Assigned</span>
        </div>
      );

    case "awaiting info":
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-orange bg-brand-orange-secondary p-2 text-brand-orange">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_862)">
              <path d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
              <path d="M6 4V6" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
              <path d="M6 8H6.005" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_2_862">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="font-public-sans text-base font-semibold">Awaiting your info</span>
        </div>
      );

    case "resolved":
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-primary bg-brand-secondary p-2 text-brand-primary">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_870)">
              <g clipPath="url(#clip1_2_870)">
                <path d="M11 5.54005V6.00005C10.9994 7.07827 10.6503 8.12739 10.0047 8.99097C9.35908 9.85454 8.45164 10.4863 7.41768 10.792C6.38372 11.0977 5.27863 11.061 4.26724 10.6873C3.25584 10.3137 2.39233 9.6231 1.80548 8.71859C1.21863 7.81407 0.939896 6.74409 1.01084 5.66821C1.08178 4.59234 1.4986 3.56822 2.19914 2.74859C2.89968 1.92896 3.84639 1.35775 4.89809 1.12013C5.9498 0.882509 7.05013 0.991223 8.035 1.43005" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                <path d="M4.5 5.5L6 7L11 2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2_870">
                <rect width="12" height="12" fill="white" />
              </clipPath>
              <clipPath id="clip1_2_870">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="font-public-sans text-base font-semibold">Resolved</span>
        </div>
      );

    case "closed":
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-border bg-brand-light-orange-secondary p-2 text-brand-default">
          <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_877)">
              <path d="M2 2H10C10.2761 2 10.5 2.22386 10.5 2.5V3.5C10.5 3.77614 10.2761 4 10 4H2C1.72386 4 1.5 3.77614 1.5 3.5V2.5C1.5 2.22386 1.72386 2 2 2Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
              <path d="M2.5 4V9.5C2.5 9.76522 2.60536 10.0196 2.79289 10.2071C2.98043 10.3946 3.23478 10.5 3.5 10.5H8.5C8.76522 10.5 9.01957 10.3946 9.20711 10.2071C9.39464 10.0196 9.5 9.76522 9.5 9.5V4" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
              <path d="M5 6H7" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_2_877">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="font-public-sans text-base font-semibold">Closed</span>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center gap-2 rounded-4xl border border-brand-border bg-brand-third p-2 text-brand-default">
          <span className="font-public-sans text-base font-semibold capitalize">{status || "Unknown"}</span>
        </div>
      );
  }
}
