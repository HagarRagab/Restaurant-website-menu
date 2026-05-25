import { SanityDocument } from "next-sanity";

export interface BranchDocument extends SanityDocument {
    title?: string;
    address?: string;
    phone?: string;
    email?: string;
    hours?: { openingTime: string; closingTime: string };
}
