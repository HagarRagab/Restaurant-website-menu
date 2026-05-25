import { fetchData } from "@/lib/sanity/fetch";
import {
    getMenuItemsByCategoryIdPaginated,
    getMenuItemsSearchPaginated,
} from "@/lib/sanity/queries";
import { MenuItemDocument } from "@/types/menu";
import { MENU_PAGE_SIZE } from "../helper";

export async function fetchMenuItemsPage(categoryId: string, offset: number) {
    return (await fetchData(getMenuItemsByCategoryIdPaginated, {
        id: categoryId,
        start: offset,
        end: offset + MENU_PAGE_SIZE,
    })) as MenuItemDocument[];
}

export async function fetchMenuItemsSearchPage(term: string, offset: number) {
    const pattern = `*${term}*`;

    return (await fetchData(getMenuItemsSearchPaginated, {
        pattern,
        start: offset,
        end: offset + MENU_PAGE_SIZE,
    })) as MenuItemDocument[];
}

export function hasMoreMenuPages(itemCount: number) {
    return itemCount === MENU_PAGE_SIZE;
}
