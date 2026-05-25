import { Suspense } from "react";

import MenuPageContent from "@/components/sections/menu/MenuPageContent";
import { fetchData } from "@/lib/sanity/fetch";
import { getCategories } from "@/lib/sanity/queries";
import { CategoryDocument } from "@/types/category";
import MenuPageFallback from "@/components/sections/menu/MenuPageFallback";

async function Page() {
    const categories = (await fetchData(getCategories)) as CategoryDocument[];

    return (
        <main className="py-6">
            <h1 className="text-2xl font-bold">Find your food in menu</h1>
            <Suspense fallback={<MenuPageFallback />}>
                <MenuPageContent categories={categories} />
            </Suspense>
        </main>
    );
}

export default Page;
