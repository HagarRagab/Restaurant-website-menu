"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { SEARCH_MIN_LENGTH } from "@/lib/helper";
import {
    fetchMenuItemsSearchPage,
    hasMoreMenuPages,
} from "@/lib/sanity/menuItems";
import { MenuItemDocument } from "@/types/menu";

import { useInfiniteScroll } from "./useInfiniteScroll";

type UseMenuSearchOptions = {
    searchTerm: string;
    enabled: boolean;
};

export function useMenuSearch({ searchTerm, enabled }: UseMenuSearchOptions) {
    const fetchGenerationRef = useRef(0);
    const loadingMoreRef = useRef(false);

    const [menuItems, setMenuItems] = useState<MenuItemDocument[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const trimmedTerm = searchTerm.trim();
    const isSearchActive =
        enabled && trimmedTerm.length >= SEARCH_MIN_LENGTH;

    const resetLoadingState = () => {
        loadingMoreRef.current = false;
        setLoadingMore(false);
    };

    useEffect(() => {
        if (!isSearchActive) {
            fetchGenerationRef.current += 1;
            loadingMoreRef.current = false;
            return;
        }

        const generation = ++fetchGenerationRef.current;

        const loadSearchResults = async () => {
            setLoading(true);
            setMenuItems([]);
            setHasMore(false);
            resetLoadingState();

            try {
                const items = await fetchMenuItemsSearchPage(
                    trimmedTerm,
                    0,
                );
                if (generation !== fetchGenerationRef.current) return;

                setMenuItems(items);
                setHasMore(hasMoreMenuPages(items.length));
            } catch (error) {
                if (generation !== fetchGenerationRef.current) return;
                console.error("Failed to search menu items:", error);
                setMenuItems([]);
                setHasMore(false);
            } finally {
                if (generation === fetchGenerationRef.current) {
                    setLoading(false);
                }
            }
        };

        loadSearchResults();
    }, [isSearchActive, trimmedTerm]);

    const loadMoreItems = useCallback(async () => {
        if (!isSearchActive || !hasMore || loading || loadingMoreRef.current) {
            return;
        }

        const generation = fetchGenerationRef.current;
        loadingMoreRef.current = true;
        setLoadingMore(true);

        try {
            const items = await fetchMenuItemsSearchPage(
                trimmedTerm,
                menuItems.length,
            );
            if (generation !== fetchGenerationRef.current) return;

            setMenuItems((prev) => [...prev, ...items]);
            setHasMore(hasMoreMenuPages(items.length));
        } catch (error) {
            console.error("Failed to load more search results:", error);
            setHasMore(false);
        } finally {
            loadingMoreRef.current = false;
            setLoadingMore(false);
        }
    }, [isSearchActive, trimmedTerm, hasMore, loading, menuItems.length]);

    const loadMoreRef = useInfiniteScroll({
        enabled: isSearchActive && hasMore && !loading,
        onLoadMore: loadMoreItems,
    });

    return {
        menuItems: isSearchActive ? menuItems : [],
        hasMore: isSearchActive ? hasMore : false,
        loading: isSearchActive ? loading : false,
        loadingMore: isSearchActive ? loadingMore : false,
        loadMoreRef,
        isSearchActive,
    };
}
