import SectionWrapper from "../../shared/SectionWrapper";
import { Carousel, CarouselContent } from "../../ui/carousel";
import { getRandomMenuItems } from "@/lib/sanity/queries";
import { fetchData } from "@/lib/sanity/fetch";
import { MenuItemDocument } from "@/types/menu";
import CarouselDots from "../../shared/CarouselDots";
import CarouselShowMoreBtn from "../../shared/CarouselShowMoreBtn";
import HeroMenuItemCard from "./HeroMenuItemCard";

async function HeroMenuItems() {
    const menuItems = (await fetchData(
        getRandomMenuItems
    )) as MenuItemDocument[];

    return (
        <SectionWrapper title="">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full px-1"
            >
                <CarouselContent className="pb-4">
                    {menuItems.map((item) => (
                        <HeroMenuItemCard key={item._id} item={item} />
                    ))}
                    {menuItems.length > 0 && <CarouselShowMoreBtn />}
                </CarouselContent>
                <CarouselDots />
            </Carousel>
        </SectionWrapper>
    );
}

export default HeroMenuItems;
