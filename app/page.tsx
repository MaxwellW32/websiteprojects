import { websiteProjects } from "@/type";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%),1fr))", gap: "1rem" }}>
      {websiteProjects.map(eachWebsiteProject => {
        return (
          <Link key={eachWebsiteProject.slug} href={`${eachWebsiteProject.slug}`} style={{ backgroundColor: "#252628", display: "grid", gridTemplateRows: "1fr auto", aspectRatio: "1/2" }}>
            <div style={{ overflow: "hidden" }}>
              <Image alt={`${eachWebsiteProject.name}'s image`} src={eachWebsiteProject.image} width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>

            <div style={{ padding: "1rem", color: "#fff", display: "grid", gap: ".5rem", whiteSpace: "nowrap" }}>
              <h3>{eachWebsiteProject.name}</h3>
            </div>
          </Link>
        )
      })}
    </div>
  );
}
