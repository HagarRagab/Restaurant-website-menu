"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { fetchMenuItemsPage, hasMoreMenuPages } from "@/lib/sanity/menuItems";
import { CategoryDocument } from "@/types/category";
import { MenuItemDocument } from "@/types/menu";

import { useInfiniteScroll } from "./useInfiniteScroll";

type UseMenuItemsOptions = {
    getActiveCategory: () => CategoryDocument | undefined;
    activeCategory: string;
    enabled?: boolean;
};

export function useMenuItems({
    getActiveCategory,
    activeCategory,
    enabled = true,
}: UseMenuItemsOptions) {
    const fetchGenerationRef = useRef(0);
    const loadingMoreRef = useRef(false);

    const [menuItems, setMenuItems] = useState<MenuItemDocument[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const resetLoadingState = () => {
        loadingMoreRef.current = false;
        setLoadingMore(false);
    };

    useEffect(() => {
        if (!enabled) {
            fetchGenerationRef.current += 1;
            loadingMoreRef.current = false;
            return;
        }

        const category = getActiveCategory();
        if (!category) return;

        const generation = ++fetchGenerationRef.current;

        const loadInitialPage = async () => {
            setLoading(true);
            setMenuItems([]);
            setHasMore(false);
            resetLoadingState();

            try {
                const items = await fetchMenuItemsPage(category._id, 0);
                if (generation !== fetchGenerationRef.current) return;

                setMenuItems(items);
                setHasMore(hasMoreMenuPages(items.length));
            } catch (error) {
                if (generation !== fetchGenerationRef.current) return;
                console.error("Failed to load menu items:", error);
                setMenuItems([]);
                setHasMore(false);
            } finally {
                if (generation === fetchGenerationRef.current) {
                    setLoading(false);
                }
            }
        };

        loadInitialPage();
    }, [activeCategory, getActiveCategory, enabled]);

    const loadMoreItems = useCallback(async () => {
        const category = getActiveCategory();
        if (!category || !hasMore || loading || loadingMoreRef.current) {
            return;
        }

        const generation = fetchGenerationRef.current;
        loadingMoreRef.current = true;
        setLoadingMore(true);

        try {
            const items = await fetchMenuItemsPage(
                category._id,
                menuItems.length
            );
            if (generation !== fetchGenerationRef.current) return;

            setMenuItems((prev) => [...prev, ...items]);
            setHasMore(hasMoreMenuPages(items.length));
        } catch (error) {
            console.error("Failed to load more menu items:", error);
            setHasMore(false);
        } finally {
            loadingMoreRef.current = false;
            setLoadingMore(false);
        }
    }, [getActiveCategory, hasMore, loading, menuItems.length]);

    const loadMoreRef = useInfiniteScroll({
        enabled: enabled && hasMore && !loading,
        onLoadMore: loadMoreItems,
    });

    return {
        menuItems: enabled ? menuItems : [],
        hasMore: enabled ? hasMore : false,
        loading: enabled ? loading : false,
        loadingMore: enabled ? loadingMore : false,
        loadMoreRef,
    };
}
