"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";

// Custom dot indicator component — snap count comes from Embla so dots
// match scroll positions when multiple slides are visible per viewport.
function CarouselDots() {
    const { api } = useCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [snapCount, setSnapCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateSnapCount = () => {
            setSnapCount(api.scrollSnapList().length);
        };

        const onSelect = () => {
            setSelectedIndex(api.selectedScrollSnap());
        };

        updateSnapCount();
        onSelect();

        api.on("reInit", updateSnapCount);
        api.on("select", onSelect);

        return () => {
            api.off("reInit", updateSnapCount);
            api.off("select", onSelect);
        };
    }, [api]);

    if (snapCount <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: snapCount }).map((_, index) => (
                <Button
                    key={index}
                    variant={index === selectedIndex ? "default" : "outline"}
                    className={`w-3 h-3 rounded-full p-0 cursor-pointer ${
                        index === selectedIndex
                            ? "bg-gray-400 border-gray-400"
                            : "glass_background border-gray-100 hover:bg-gray-400!"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                />
            ))}
        </div>
    );
}

export default CarouselDots;
