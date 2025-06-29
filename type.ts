
export type wpcategoryStyles = "traditional" | "modern" | "fun"
export type wbCategory = "restaurants"

export type websiteProjectType = {
    name: string,
    slug: string,
    image: string,
    type: "landing page" | "website",
    forCategory: wbCategory[]
    categoryStyles: wpcategoryStyles[],
    inspiration?: string
}

export const websiteProjects: websiteProjectType[] = [
    {
        name: "Luminous Lens Photography",
        slug: "luminousLensPhotography",
        image: `/luminousLens/luminous.jpg`,
        type: "landing page",
        forCategory: [],
        categoryStyles: ["modern"],
        inspiration: "https://shtheme.org/demosd/jopho/?page_id=385"
    },
    {
        name: "Folliblanc Music",
        slug: "FolliblancMusic",
        image: `/folliblancMusic/titleimage.jpg`,
        type: "landing page",
        forCategory: [],
        categoryStyles: ["fun"],
        inspiration: "https://www.imreallyatrex.com"
    },
    {
        name: "Burger Bliss",
        slug: "burgerBliss",
        image: `/burgerBliss/cover.jpg`,
        type: "landing page",
        forCategory: ["restaurants"],
        categoryStyles: ["modern"],
        inspiration: "https://themes.themegoods.com/grandrestaurantv6/demo9/"
    }
    // {
    //     name: "",
    //     slug: "",
    //     image: "",
    //     component: <></>,
    //     type: "landing page",
    //     categoryStyles: [],
    // }
]