import { ScrollRestoration } from "react-router";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
import * as YUP from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoriesActions } from "../../redux/slices/categories.slice";
import { useSelector } from "react-redux";

function PlusIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 2.5V9.5M2.5 6H9.5"
                stroke="currentColor"
                strokeLinecap="round"
            />
        </svg>
    );
}

function PencilIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.5 1.8L10.2 3.5L4 9.7L1.8 10.2L2.3 8L8.5 1.8Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Categories() {

    const { categories } = useSelector((state) => state.categories);

    const schema = YUP.object({
        category: YUP.string().required(),
        agency: YUP.string().required(),
        sla: YUP.number().min(1).required(),
        icon: YUP.string().required(),
        "citizen-facing-label": YUP.string().required(),
        "citizen-hint": YUP.string().optional(),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    function handleAddOrEdit(data) {
        reduxDispatch(categoriesActions.addCategory({
            id: crypto.randomUUID(),
            name: data.category,
            agencyId: "", // reference agencyType
            SLAId: "", // reference to SLAType
            citizenFacingLabel: data["citizen-facing-label"],
            citizenHint: data["citizen-hint"],
            icon: data.icon
        }));
        reset();
    }

    return (
        <>
            <ScrollRestoration />
            <section className="w-full flex flex-col gap-4">
                <div className="flex py-4 items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-ibm-plex-mono text-lg uppercase tracking-widest text-gray-500">
                            Routing taxonomy ({categories.length})
                        </span>
                        <p className="font-public-sans text-lg text-gray-500">
                            Categories route new reports to an agency and define
                            their SLA window.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 font-public-sans font-medium text-white cursor-pointer"
                    >
                        <PlusIcon />
                        Add category
                    </button>
                </div>

                <ul className="overflow-hidden rounded-2xl border border-brand-border bg-brand-third">
                    {categories.map((c) => (
                        <li
                            key={c.name}
                            className="flex items-center justify-between gap-4 px-5 py-4 border-b border-brand-border last:border-b-0"
                        >
                            <div className="flex flex-col gap-0.5 font-public-sans">
                                <span className="text-lg font-semibold text-brand-default">
                                    {c.name}
                                </span>
                                <span className=" text-gray-500">{c.sub}</span>
                                <span className=" text-gray-500">
                                    Assigned to: {c.agency}
                                </span>
                            </div>

                            <div className="flex shrink-0 items-center gap-6 font-ibm-plex-mono text-brand-default">
                                <span>{c.sla}h SLA</span>
                                <span className="w-fit text-right">
                                    {c.reports}{" "}
                                    {c.reports === 1 ? "report" : "reports"}
                                </span>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="flex items-center gap-1.5 font-semibold text-emerald-800 cursor-pointer"
                                >
                                    <PencilIcon />
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <ModalContainer
                title={isEdit ? "Edit Category" : "New Category"}
                show={showModal}
                showModalFn={setShowModal}
                subtitle={"Create routing category"}
            >
                <form
                    onSubmit={handleSubmit(handleAddOrEdit)}
                    className="flex overflow-y-auto scrollbar-thin flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="category"
                        >
                            Category Name
                        </label>
                        <input
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("category")}
                            type="text"
                            id="category"
                        />
                        {errors.category && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.category.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="agency"
                        >
                            Responsible Agency
                        </label>
                        <select
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("agency")}
                            id="agency"
                        >
                            <option>
                                Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
                            </option>
                        </select>
                        {errors.agency && (
                            <span className="text-red-500 w-full text-sm">
                                {errors.agency.message}
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                        <div className="flex flex-col gap-2">
                            <label
                                className="uppercase text-brand-default text-sm"
                                htmlFor="sla"
                            >
                                SLA Window (Hours)
                            </label>
                            <input
                                className="p-4 border border-brand-border rounded-2xl outline-0"
                                {...register("sla")}
                                type="number"
                                id="sla"
                            />
                            {errors.sla && (
                                <span className="text-red-500 w-full text-sm">
                                    {errors.sla.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="uppercase text-brand-default text-sm"
                                htmlFor="icon"
                            >
                                Icon
                            </label>
                            <select
                                className="p-4 border border-brand-border rounded-2xl outline-0"
                                {...register("icon")}
                                id="icon"
                            >
                                <option>General</option>
                            </select>
                            {errors.icon && (
                                <span className="text-red-500 w-full text-sm">
                                    {errors.icon.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="citizen-facing-label"
                        >
                            Citizen-Facing Label
                        </label>
                        <input
                            placeholder="e.g. Pothole / Sidewalk"
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("citizen-facing-label")}
                            type="citizen-facing-label"
                            id="citizen-facing-label"
                        />
                        {errors["citizen-facing-label"] && (
                            <span className="text-red-500 w-full text-sm">
                                {errors["citizen-facing-label"].message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="uppercase text-brand-default text-sm"
                            htmlFor="citizen-hint"
                        >
                            Citizen Hint
                        </label>
                        <textarea
                            className="p-4 border border-brand-border rounded-2xl outline-0"
                            {...register("citizen-hint")}
                            id="citizen-hint"
                        ></textarea>
                        {errors["citizen-hint"] && (
                            <span className="text-red-500 w-full text-sm">
                                {errors["citizen-hint"].message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-row justify-end gap-4 py-4 border-t border-t-brand-border flex-wrap">
                        <button
                            className="px-4 py-2 cursor-pointer rounded-4xl border border-brand-border"
                            type="reset"
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 cursor-pointer py-2 bg-brand-primary text-white rounded-4xl"
                            name="action"
                            value="verified"
                            type="submit"
                        >
                            Create Category
                        </button>
                    </div>
                </form>
            </ModalContainer>
        </>
    );
}
