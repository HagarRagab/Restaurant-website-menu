function MenuPageFallback() {
    return (
        <div className="mt-2 space-y-6" aria-busy="true" aria-label="Loading menu">
            <div className="glass_background h-10 rounded-md animate-pulse" />
            <div className="flex gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-6 w-20 rounded bg-white/10 animate-pulse"
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="glass_background h-64 rounded animate-pulse"
                    />
                ))}
            </div>
        </div>
    );
}

export default MenuPageFallback;
