import { RefObject } from "react";

import { MenuItemDocument } from "@/types/menu";
import MenuItemCard from "./MenuItemCard";
import MenuLoadMoreTrigger from "./MenuLoadMoreTrigger";
import { Loader2 } from "lucide-react";

type MenuItemsPanelProps = {
    loading: boolean;
    loadingMore: boolean;
    menuItems: MenuItemDocument[];
    hasMore: boolean;
    loadMoreRef: RefObject<HTMLDivElement | null>;
    emptyMessage?: string;
};

function MenuItemsPanel({
    loading,
    loadingMore,
    menuItems,
    hasMore,
    loadMoreRef,
    emptyMessage = "No menu items found in this category.",
}: MenuItemsPanelProps) {
    if (loading) {
        return (
            <div className="w-24 aspect-square mx-auto py-8">
                <Loader2 className="w-full h-full animate-spin text-white" />
            </div>
        );
    }

    if (!loading && menuItems.length === 0) {
        return (
            <div className="text-center py-8 text-white text-lg">
                {emptyMessage}
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {menuItems.map((item) => (
                    <MenuItemCard card={item} key={item._id} />
                ))}
            </div>
            {hasMore && (
                <MenuLoadMoreTrigger
                    loadMoreRef={loadMoreRef}
                    loadingMore={loadingMore}
                />
            )}
        </>
    );
}

export default MenuItemsPanel;
