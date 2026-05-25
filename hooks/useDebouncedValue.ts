"use client";

import { useEffect, useState } from "react";

/**
 * Debounces value updates. Returns the live value immediately when cleared;
 * otherwise updates after `delay` via an async timeout (no sync setState in effects).
 */
export function useDebouncedValue(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutMs = value.trim() ? delay : 0;

        const timer = window.setTimeout(() => {
            setDebouncedValue(value);
        }, timeoutMs);

        return () => window.clearTimeout(timer);
    }, [value, delay]);

    if (!value.trim()) {
        return value;
    }

    return debouncedValue;
}
