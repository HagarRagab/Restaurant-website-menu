import { getBranches } from "@/lib/sanity/queries";
import { fetchData } from "@/lib/sanity/fetch";
import { BranchDocument } from "@/types/branch";

import SectionWrapper from "../../shared/SectionWrapper";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselDots from "../../shared/CarouselDots";
import BranchCard from "./BranchCard";

async function Branches() {
    const branches = (await fetchData(getBranches)) as BranchDocument[];

    return (
        <SectionWrapper title="Our Branches">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full px-1"
            >
                <CarouselContent>
                    {branches.map((branch) => (
                        <CarouselItem
                            key={branch._id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <BranchCard branch={branch} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselDots />
            </Carousel>
        </SectionWrapper>
    );
}

export default Branches;
