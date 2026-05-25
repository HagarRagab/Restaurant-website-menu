import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { BranchDocument } from "@/types/branch";
import BranchInfoEle from "./BranchInfoEle";

type BranchCardProps = {
    branch: BranchDocument;
};

function BranchCard({ branch }: BranchCardProps) {
    return (
        <div className="glass_background p-4">
            <h3 className="text-xl font-semibold mb-4">
                {branch.title || "Branch"}
            </h3>
            {branch.address && (
                <BranchInfoEle
                    title="Address"
                    info={branch.address}
                    icon={<MapPin />}
                />
            )}
            {branch.phone && (
                <BranchInfoEle
                    title="Phone"
                    info={branch.phone}
                    icon={<Phone />}
                />
            )}
            {branch.email && (
                <BranchInfoEle
                    title="Email"
                    info={branch.email}
                    icon={<Mail />}
                />
            )}
            {branch.hours && (
                <BranchInfoEle
                    title="Hours"
                    info={`${branch.hours.openingTime} - ${branch.hours.closingTime}`}
                    icon={<Clock />}
                />
            )}
        </div>
    );
}

export default BranchCard;
