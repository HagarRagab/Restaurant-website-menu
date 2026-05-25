"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { SEARCH_MIN_LENGTH } from "@/lib/helper";
import { CategoryDocument } from "@/types/category";
import { useActiveCategory } from "@/hooks/useActiveCategory";
import { useMenuItems } from "@/hooks/useMenuItems";
import { useMenuSearch } from "@/hooks/useMenuSearch";

import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuItemsPanel from "./MenuItemsPanel";

type MenuProps = {
    categories: CategoryDocument[];
    searchTerm?: string;
    isSearchPending?: boolean;
    onValueChange?: (value: string) => void;
};

function Menu({
    categories,
    searchTerm = "",
    isSearchPending = false,
    onValueChange,
}: MenuProps) {
    const { activeCategory, getActiveCategory, handleCategoryChange } =
        useActiveCategory({ categories, onValueChange });

    const trimmedSearch = searchTerm.trim();
    const isSearchActive = trimmedSearch.length >= SEARCH_MIN_LENGTH;

    const categoryMenu = useMenuItems({
        getActiveCategory,
        activeCategory,
        enabled: !isSearchActive && !isSearchPending,
    });

    const searchMenu = useMenuSearch({
        searchTerm: trimmedSearch,
        enabled: isSearchActive && !isSearchPending,
    });

    const showSearchResults = isSearchActive || isSearchPending;
    const panelProps = showSearchResults
        ? {
              loading: isSearchPending || searchMenu.loading,
              loadingMore: searchMenu.loadingMore,
              menuItems: searchMenu.menuItems,
              hasMore: searchMenu.hasMore,
              loadMoreRef: searchMenu.loadMoreRef,
              emptyMessage: `No menu items found for "${trimmedSearch}".`,
          }
        : {
              loading: categoryMenu.loading,
              loadingMore: categoryMenu.loadingMore,
              menuItems: categoryMenu.menuItems,
              hasMore: categoryMenu.hasMore,
              loadMoreRef: categoryMenu.loadMoreRef,
              emptyMessage: "No menu items found in this category.",
          };

    if (showSearchResults) {
        return (
            <div className="text-primary mt-6">
                <MenuItemsPanel {...panelProps} />
            </div>
        );
    }

    return (
        <Tabs
            defaultValue={activeCategory}
            onValueChange={handleCategoryChange}
            className="text-primary"
        >
            <MenuCategoryTabs categories={categories} />

            {categories.map((category) => (
                <TabsContent key={category._id} value={category.slug || ""}>
                    {category.slug === activeCategory && (
                        <MenuItemsPanel {...panelProps} />
                    )}
                </TabsContent>
            ))}
        </Tabs>
    );
}

export default Menu;
