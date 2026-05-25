import {
    getSanityImageDimensions,
    getSanityImageUrl,
} from "@/lib/sanity/image";
import Image from "next/image";

import { MenuItemDocument } from "@/types/menu";
// import AddToCardBtn from "../shared/AddToCardBtn";
import falafelPlaceholder from "@/public/images/falafel-placeholder.jpg";
import { CARD_IMAGE_SIZE } from "@/lib/helper";

type MenuItemCardProps = {
    card: MenuItemDocument;
};

function MenuItemCard({ card }: MenuItemCardProps) {
    const dimensions = getSanityImageDimensions(card.image_src);
    const imageSrc =
        getSanityImageUrl(card.image_src, { width: CARD_IMAGE_SIZE }) ??
        falafelPlaceholder;

    return (
        <div className="glass_background text-white p-4 flex flex-col gap-4 justify-between hover:border-primary! transition-colors!">
            <div
                className="relative mx-auto w-40 h-40"
                style={{
                    aspectRatio: dimensions
                        ? `${dimensions.width} / ${dimensions.height}`
                        : "1 / 1",
                }}
            >
                <Image
                    src={imageSrc}
                    alt={card.title || "menu item"}
                    fill
                    sizes="160px"
                    className="object-contain"
                />
            </div>
            <div className="flex flex-col">
                <h3 className="flex-1 font-semibold text-xl">{card.title}</h3>
                {card.delivery_time_in_minutes && (
                    <p className="text-sm text-gray-300">
                        Delivery: {card.delivery_time_in_minutes} min
                    </p>
                )}
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                        {card.currency || "EGP"} {card.price}
                    </p>
                    {/* <AddToCardBtn /> */}
                </div>
            </div>
        </div>
    );
}

export default MenuItemCard;
