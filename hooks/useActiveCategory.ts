"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { CategoryDocument } from "@/types/category";

type UseActiveCategoryOptions = {
    categories: CategoryDocument[];
    onValueChange?: (value: string) => void;
};

export function useActiveCategory({
    categories,
    onValueChange,
}: UseActiveCategoryOptions) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [activeCategory, setActiveCategory] = useState(
        () => searchParams.get("category") || categories[0]?.slug || "",
    );

    const getActiveCategory = useCallback(
        () => categories.find((cat) => cat.slug === activeCategory),
        [categories, activeCategory],
    );

    const handleCategoryChange = (value: string) => {
        setActiveCategory(value);

        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("category", value);
        } else {
            params.delete("category");
        }

        router.push(`?${params.toString()}`, { scroll: false });
        onValueChange?.(value);
    };

    return { activeCategory, getActiveCategory, handleCategoryChange };
}
