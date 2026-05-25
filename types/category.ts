import { SanityDocument } from "next-sanity";

export interface CategoryDocument extends SanityDocument {
    slug?: string;
    title?: string;
}
