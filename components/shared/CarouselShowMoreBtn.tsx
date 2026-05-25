import Link from "next/link";
import { Button } from "../ui/button";
import { CarouselItem } from "../ui/carousel";

function CarouselShowMoreBtn() {
    return (
        <CarouselItem className="basis-auto">
            <div className="h-full p-4 flex items-center justify-center">
                <Button
                    asChild
                    variant="link"
                    className="hover:text-orange-500 text-white"
                >
                    <Link href="/menu">Show More</Link>
                </Button>
            </div>
        </CarouselItem>
    );
}

export default CarouselShowMoreBtn;
