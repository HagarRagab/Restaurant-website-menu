import { ReactNode } from "react";

type SectionWrapperProps = {
    children: ReactNode;
    title: string;
};

function SectionWrapper({ children, title }: SectionWrapperProps) {
    return (
        <div className="pt-6">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            {children}
        </div>
    );
}

export default SectionWrapper;
