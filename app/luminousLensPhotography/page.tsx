import Link from "next/link"
import styles from "./page.module.css"
import React from "react"
import SlideShow from "../../components/luminousLensPhotography/slideshow/SlideShow"
import Image from "next/image"
import Gallery from "../../components/luminousLensPhotography/gallery/Gallery"
import Services from "../../components/luminousLensPhotography/services/Services"
import AnimateElements from "../../components/luminousLensPhotography/animateElements/AnimateElements"

export default function Page() {

    return (
        <main className={styles.main}>
            <div className={styles.heroCont}>
                <div className={styles.slideShowCont}>
                    <SlideShow />
                </div>

                <div className={styles.socialsCont}>
                    {[
                        {
                            name: "facebook",
                            link: ""
                        },
                        {
                            name: "twitter",
                            link: ""
                        },
                        {
                            name: "instagram",
                            link: ""
                        },
                    ].map((each, eachIndex) => {
                        return (
                            <React.Fragment key={eachIndex}>
                                <Link className={styles.socials} href={each.link}>{each.name}</Link>

                                {eachIndex !== 2 && <div style={{ height: "2px", width: "4px", borderTop: "1px solid var(--color1)" }}></div>}

                                {eachIndex === 2 && <div style={{ height: "2px", width: "25px", borderTop: "1px solid var(--color1)" }}></div>}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

            <section>
                <AnimateElements animationOption="slideUp" delay={200}>
                    <h2>About Us</h2>
                    <h1>Luminous Lens</h1>

                    <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "center", flexWrap: "wrap", columnGap: "1rem", rowGap: "3rem", maxWidth: "800px", margin: "2rem auto 0rem auto" }}>
                        <div style={{ flex: '0 1 300px', display: "grid", justifyItems: "center" }}>
                            <div className={styles.backdrop} style={{ width: "fit-content", height: "fit-content" }}>
                                <Image alt="about us image" src={"/luminousLensPhotography/about.jpg"} width={500} height={500} priority={true} style={{ objectFit: "contain", width: "100%", height: "350px" }} />
                            </div>
                        </div>

                        <div style={{ flex: "2 1 300px", display: "grid", gap: "1rem", alignContent: "flex-start", color: "var(--gray1)" }}>
                            <p className={styles.highlight} style={{ textTransform: "uppercase", fontFamily: "var(--JuliusSansOne)", fontSize: "var(--fontSizeM)" }}>we believe that every picture tells a story</p>

                            <p>Our passion is capturing the unique moments that make life beautiful, whether it&apos;s a wedding, a family reunion, or a personal portrait.</p>

                            <p>With years of experience and a keen eye for detail, we transform ordinary moments into extraordinary memories. Let us be a part of your journey and help you preserve your most cherished moments with stunning photography.</p>
                        </div>
                    </div>
                </AnimateElements>
            </section>

            <section>
                <AnimateElements animationOption={"fadeIn"} delay={1000}>
                    <h2>Portfolio</h2>
                    <h1>Gallery</h1>
                </AnimateElements>

                <Gallery
                    galleryItems={[
                        {
                            name: "Family Portrait",
                            image: "/luminousLensPhotography/gfamily.jpg",
                        },
                        {
                            name: "Product Photography",
                            image: "/luminousLensPhotography/gwatch.jpg",
                        },
                        {
                            name: "Real Estate",
                            image: "/luminousLensPhotography/ghouse.jpg",
                        },
                        {
                            name: "Wedding Photography",
                            image: "/luminousLensPhotography/gwedding.jpg",
                        },
                        {
                            name: "Portrait",
                            image: "/luminousLensPhotography/gportrait.jpg",
                        },
                        {
                            name: "Lifestyle Photography",
                            image: "/luminousLensPhotography/glifestyle.jpg",
                        },
                        {
                            name: "Event Photography",
                            image: "/luminousLensPhotography/gevent.jpg",
                        },
                        {
                            name: "Food Photography",
                            image: "/luminousLensPhotography/gfood.jpg",
                        },
                    ]} />
            </section>

            <section style={{ overflow: "hidden" }}>
                <AnimateElements animationOption={"fadeIn"} delay={1000}>
                    <h2>What We Do</h2>
                    <h1>Services</h1>
                </AnimateElements>

                <Services
                    services={[
                        {
                            name: "Family Photography",
                            image: "/luminousLensPhotography/sfamily.jpg",
                        },
                        {
                            name: "Personal Photography",
                            image: "/luminousLensPhotography/sportrait.jpg",
                        },
                        {
                            name: "Wedding Photography",
                            image: "/luminousLensPhotography/swedding.jpg",
                        },
                        {
                            name: "Product Photography",
                            image: "/luminousLensPhotography/sproduct.jpg",
                        },
                        {
                            name: "Travel Photography",
                            image: "/luminousLensPhotography/stravel.jpg",
                        },
                        {
                            name: "Real-Estate Photography",
                            image: "/luminousLensPhotography/sluxury.jpg",
                        },
                    ]} />
            </section>
        </main>
    )
}
