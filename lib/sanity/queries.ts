import { groq } from "next-sanity";

// Get all restaurants branches
export const getBranches = groq`
  *[_type == "branch"]|order(_createdAt desc)
`;

// Get all categories
export const getCategories = groq`
  *[_type == "category"]|order(_createdAt asc) {
    ...,
    "slug": slug.current
  }
`;

// Get paginated menu items by category ID ($start and $end are GROQ slice bounds)
export const getMenuItemsByCategoryIdPaginated = groq`
  *[_type == "menu_item" && category._ref == $id]|order(_createdAt desc)[$start...$end]
`;

// Search menu items by title (paginated; $pattern uses GROQ match globs e.g. *term*)
export const getMenuItemsSearchPaginated = groq`
  *[_type == "menu_item" && title match $pattern]|order(_createdAt desc)[$start...$end]
`;

// Get random menu items (max 4)
export const getRandomMenuItems = groq`
  *[_type == "menu_item"]|order(_createdAt desc) [0...4] {
    ...,
    category-> {
      ...,
      "slug": slug.current
    }
  }
`;
