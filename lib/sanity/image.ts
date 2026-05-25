import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/lib/sanity/client";
import { DEFAULT_SANITY_IMG_WIDTH } from "../helper";

const builder = createImageUrlBuilder(client);

export interface SanityImageAsset {
    _ref: string;
    _type?: string;
}

export interface SanityImageSource {
    asset?: SanityImageAsset;
    _type?: string;
}

export type ImageInput = SanityImageSource | string | null | undefined;

export type SanityImageOptions = {
    width?: number;
    /** Omit height to preserve the image aspect ratio (avoids CDN cropping). */
    height?: number;
};

/** Parses `image-{hash}-{width}x{height}-{format}` from a Sanity asset ref. */
export function getSanityImageDimensions(
    image: ImageInput,
): { width: number; height: number } | null {
    if (!image || typeof image === "string") return null;

    const ref = image.asset?._ref;
    if (!ref) return null;

    const match = ref.match(/-(\d+)x(\d+)-/);
    if (!match) return null;

    return { width: Number(match[1]), height: Number(match[2]) };
}

/**
 * Builds an optimized CDN URL for a Sanity image.
 * Resizes large assets so Next.js image optimization does not fail (500).
 */
export function getSanityImageUrl(
    image: ImageInput,
    {
        width = DEFAULT_SANITY_IMG_WIDTH,
        height,
    }: SanityImageOptions = {},
): string | null {
    if (!image) return null;

    if (typeof image === "string") {
        return image;
    }

    if (!image.asset?._ref) return null;

    try {
        let imageBuilder = builder
            .image(image)
            .width(width)
            .fit("max")
            .auto("format")
            .quality(80);

        if (height !== undefined) {
            imageBuilder = imageBuilder.height(height);
        }

        return imageBuilder.url();
    } catch {
        return null;
    }
}
