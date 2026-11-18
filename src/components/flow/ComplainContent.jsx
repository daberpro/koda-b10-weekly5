import { useLocalStorage } from "../../lib/hooks/localStorageHook";
import { storageKeys } from "../../lib/util";
import StatusBadge from "../StatusBadge";

function ComplainCard(props) {
    return (
        <tr className="p-4 flex w-full bg-brand-third items-center justify-between">
            <td className="font-ibm-plex-mono text-base flex items-center justify-center w-1/6 text-brand-primary font-600">
                {props.id}
            </td>
            <td className="flex w-1/3 items-start justify-center flex-col gap-2">
                <span className="font-public-sans text-base font-600">
                    {props.title}
                </span>
                <span className="text-brand-default text-base font-public-sans font-400">
                    {props.location?.address}
                </span>
            </td>
            <td className="text-brand-default flex text-base items-center justify-center w-1/6 font-public-sans font-400">
                Belum ada dinas yang terkait
            </td>
            <td className="w-1/6 flex items-center justify-center">
                <StatusBadge status={props.status} />
            </td>
            <td className="w-1/6 font-ibm-plex-mono flex items-center justify-center">
                Awaiting verification
            </td>
            <td className="w-1/6 font-ibm-plex-mono text-brand-default flex items-center justify-center">
                {props.lastUpdate?.month?.substring(0,3)} {props.lastUpdate?.date}
            </td>
        </tr>
    );
}

export default function ComplainContent() {
    const [storage, setStorage] = useLocalStorage(storageKeys.REPORTS, []);

    return (
        <div className="flex py-6 items-start flex-col justify-center w-full gap-4">
            <div className="w-full flex items-center justify-between flex-row">
                <span className="text-brand-default font-public-sans text-base uppercase">
                    Your tracked records (2)
                </span>
                <button className="bg-brand-primary text-base rounded-4xl px-4 py-2 text-white font-public-sans font-600 border-0 outline-none cursor-pointer">
                    + File new complaint
                </button>
            </div>

            <table className="bg-brand-main-color rounded-xl border border-brand-border w-full flex items-center justify-center flex-col">
                <thead className="flex w-full items-center justify-start flex-col">
                    <tr className="w-full flex items-center justify-between flex-row">
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            CASE ID
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/3">
                            TITLE / LOCATION
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            AGENCY
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            STATUS
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            SLA TARGET
                        </th>
                        <th className="font-ibm-plex-mono font-400 text-brand-default text-base uppercase p-4 w-1/6">
                            LAST UPDATE
                        </th>
                    </tr>
                </thead>
                <tbody className="flex w-full [&>tr:last-child]:rounded-b-xl items-center justify-center flex-col">
                    {storage.map((data) => {
                        return <ComplainCard key={data.id} {...data} />
                    })}
                </tbody>
            </table>
        </div>
    );
}
