"use client";

import { useState } from "react";

import SearchBar from "@/components/shared/SearchBar";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { SEARCH_DEBOUNCE_MS, SEARCH_MIN_LENGTH } from "@/lib/helper";
import { CategoryDocument } from "@/types/category";

import Menu from "./Menu";

type MenuPageContentProps = {
    categories: CategoryDocument[];
};

function MenuPageContent({ categories }: MenuPageContentProps) {
    const [searchInput, setSearchInput] = useState("");
    const debouncedSearch = useDebouncedValue(searchInput, SEARCH_DEBOUNCE_MS);

    const trimmedInput = searchInput.trim();
    const trimmedDebounced = debouncedSearch.trim();
    const isDebouncing =
        trimmedInput.length >= SEARCH_MIN_LENGTH &&
        trimmedInput !== trimmedDebounced;

    return (
        <>
            <SearchBar
                value={searchInput}
                onChange={setSearchInput}
                isDebouncing={isDebouncing}
            />
            <Menu
                categories={categories}
                searchTerm={debouncedSearch}
                isSearchPending={isDebouncing}
            />
        </>
    );
}

export default MenuPageContent;
