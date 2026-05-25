import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import heroImage from "@/public/images/vegan-falafel-dish-with-crunchy-lettuce.png";

function Hero() {
    return (
        <section className="min-h-96 sm:h-[calc(100vh-96px)] grid grid-cols-5 grid-rows-[repeat(4,auto)_1fr] justify-start gap-4 pt-4">
            <Badge
                variant="secondary"
                className="bg-white/30 backdrop-blur-sm uppercase px-6 py-3 text-base text-inherit col-start-1 col-end-6 sm:col-end-3"
            >
                eat clean
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold col-start-1 col-end-6 sm:col-end-3">
                Taste Something You’ve Never Tried Before
            </h1>
            <p className="text-gray-200 col-start-1 col-end-6 sm:col-end-3">
                Nutritious, balanced meals made with fresh ingredients to fuel
                your day.
            </p>
            <p className="text-2xl font-bold col-start-1 col-end-3">60 EGP</p>
            <Link
                href="/menu"
                className="col-start-1 col-end-2 h-fit w-fit px-8 py-2 text-center cursor-pointer hover:-translate-y-0.5 transition-transform shadow-lg capitalize rounded-full bg-primary"
            >
                start eating
            </Link>
            <div className="relative col-start-3 col-end-6 row-start-4 sm:row-start-1 row-end-11">
                <Image
                    src={heroImage}
                    alt="Vegan falafel dish with crunchy lettuce"
                    className="absolute object-contain w-full h-full"
                    placeholder="blur"
                />
            </div>
        </section>
    );
}

export default Hero;
