import { Gasoek_One } from "next/font/google";
import Link from "next/link";

const gasoekOne = Gasoek_One({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

function Logo() {
    return (
        <Link href="/" className={`${gasoekOne.className} text-2xl`}>
            Falafel
        </Link>
    );
}

export default Logo;
