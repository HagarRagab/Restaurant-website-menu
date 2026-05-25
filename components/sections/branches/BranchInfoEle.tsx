import { ReactElement } from "react";

type BranchInfoEleProps = {
    icon: ReactElement;
    title: string;
    info: string;
};

function BranchInfoEle({ icon, title, info }: BranchInfoEleProps) {
    return (
        <p className="text-gray-200 mb-2 flex items-center gap-2">
            <span>{icon}</span>{" "}
            <span className="inline-block w-16">{title}:</span>
            <span> {info}</span>
        </p>
    );
}

export default BranchInfoEle;
