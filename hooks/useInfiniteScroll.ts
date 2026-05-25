"use client";

import { useEffect, useRef } from "react";

type UseInfiniteScrollOptions = {
    enabled: boolean;
    onLoadMore: () => void;
    rootMargin?: string;
};

export function useInfiniteScroll({
    enabled,
    onLoadMore,
    rootMargin = "120px",
}: UseInfiniteScrollOptions) {
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel || !enabled) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    onLoadMore();
                }
            },
            { rootMargin },
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [enabled, onLoadMore, rootMargin]);

    return sentinelRef;
}
