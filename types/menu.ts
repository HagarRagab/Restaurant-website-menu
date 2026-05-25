import { SanityDocument } from "next-sanity";

import { SanityImageSource } from "@/lib/sanity/image";

export interface MenuItemDocument extends SanityDocument {
    title?: string;
    price?: number;
    currency?: string;
    image_src?: SanityImageSource;
    delivery_time_in_minutes?: string;
    slug?: {
        current?: string;
    };
    category?: {
        _id?: string;
        name?: string;
        slug?: {
            current?: string;
        };
    };
}
