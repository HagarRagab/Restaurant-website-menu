import { Loader2 } from "lucide-react";
import { RefObject } from "react";

type MenuLoadMoreTriggerProps = {
    loadMoreRef: RefObject<HTMLDivElement | null>;
    loadingMore: boolean;
};

function MenuLoadMoreTrigger({
    loadMoreRef,
    loadingMore,
}: MenuLoadMoreTriggerProps) {
    return (
        <div
            ref={loadMoreRef}
            className="flex justify-center py-6 min-h-12"
            aria-live="polite"
        >
            {loadingMore && (
                <div className="flex items-center gap-2 text-white">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <span>Loading more items...</span>
                </div>
            )}
        </div>
    );
}

export default MenuLoadMoreTrigger;
