import Image from "next/image";

import { MenuItemDocument } from "@/types/menu";
import { getSanityImageUrl } from "@/lib/sanity/image";
import { CarouselItem } from "../../ui/carousel";
// import AddToCardBtn from "../shared/AddToCardBtn";

interface BestSellerCardProps {
    item: MenuItemDocument;
}

function HeroMenuItemCard({ item }: BestSellerCardProps) {
    const imageUrl = getSanityImageUrl(item.image_src, { width: 240 });

    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="relative glass_background p-4 h-full flex flex-col gap-1">
                <h3 className="text-xl font-semibold capitalize max-w-1/2 xl:max-w-full flex-1">
                    {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                    {item.delivery_time_in_minutes || "20 min"} delivery
                </p>
                <p className="text-lg font-semibold">
                    {item.price} {item.currency || "EGP"}
                </p>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={item.title || "menu item"}
                        width={120}
                        height={120}
                        className="absolute top-0 right-6 -translate-y-1/2 object-contain"
                    />
                )}
                {/* <AddToCardBtn className="absolute bottom-0 right-6 translate-y-1/2 hover:translate-y-[calc(50%-5px)]!" /> */}
            </div>
        </CarouselItem>
    );
}

export default HeroMenuItemCard;
