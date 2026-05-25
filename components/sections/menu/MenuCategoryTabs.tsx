import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryDocument } from "@/types/category";

type MenuCategoryTabsProps = {
    categories: CategoryDocument[];
};

function MenuCategoryTabs({ categories }: MenuCategoryTabsProps) {
    return (
        <TabsList variant="line" className="my-6">
            {categories.map((category) => (
                <TabsTrigger
                    key={category._id}
                    value={category.slug || ""}
                    className="text-white! data-[state=active]:text-primary! data-[state=active]:after:bg-primary! hover:text-primary/80! cursor-pointer! text-base"
                >
                    {category.title}
                </TabsTrigger>
            ))}
        </TabsList>
    );
}

export default MenuCategoryTabs;
