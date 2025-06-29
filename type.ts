
export type wpcategoryStyles = "traditional" | "modern" | "fun"
export type wbCategory = "restaurants"

export type websiteProjectType = {
    name: string,
    slug: string,
    image: string,
}

export const websiteProjects: websiteProjectType[] = [
    {
        name: "Luminous Lens Photography",
        slug: "luminousLensPhotography",
        image: `/luminousLensPhotography/luminous.jpg`,
    },
    {
        name: "Folliblanc Music",
        slug: "folliblancMusic",
        image: `/folliblancMusic/titleimage.jpg`,
    },
    {
        name: "Burger Bliss",
        slug: "burgerBliss",
        image: `/burgerBliss/cover.jpg`,
    }
    // {
    //     name: "",
    //     slug: "",
    //     image: "",
    // }
]