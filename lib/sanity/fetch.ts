import { client } from "@/lib/sanity/client";
import { SanityDocument } from "next-sanity";

export const options = { next: { revalidate: 30 } };

export const fetchData = async (query: string, params = {}, customOptions = options) => {
    return await client.fetch<SanityDocument[]>(query, params, customOptions);
};
