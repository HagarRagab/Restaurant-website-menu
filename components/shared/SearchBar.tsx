"use client";

import { Loader2, Search } from "lucide-react";

import { Input } from "../ui/input";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    isDebouncing?: boolean;
};

function SearchBar({ value, onChange, isDebouncing = false }: SearchBarProps) {
    return (
        <div className="glass_background flex items-center gap-1 px-3 py-1 rounded-md! mt-2">
            {isDebouncing ? (
                <Loader2 className="h-5 w-5 shrink-0 animate-spin text-primary" />
            ) : (
                <Search className="text-gray-300 shrink-0" />
            )}
            <Input
                id="search-menu-item"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="search for food here"
                className="bg-transparent placeholder:text-gray-300 text-white text-base! border-none! focus-visible:ring-0"
                aria-busy={isDebouncing}
                autoComplete="off"
            />
        </div>
    );
}

export default SearchBar;
