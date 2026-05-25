import HeroMenuItems from "@/components/sections/hero/HeroMenuItems";
import Branches from "@/components/sections/branches/Branches";
import Hero from "@/components/sections/hero/Hero";

export default async function Home() {
    return (
        <main>
            <Hero />
            <HeroMenuItems />
            <Branches />
        </main>
    );
}
