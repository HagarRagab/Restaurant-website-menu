"use client";

// import { ShoppingCart } from "lucide-react";
import { Gasoek_One } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const gasoekOne = Gasoek_One({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

function Header() {
    const pathname = usePathname();

    const getLinkClass = (href: string) => {
        const isActive = pathname === href;
        return isActive
            ? "text-primary font-semibold"
            : "hover:text-primary transition-colors";
    };

    return (
        <header className="flex items-center justify-between">
            <Link href="/" className={`${gasoekOne.className} text-2xl`}>
                Falafel
            </Link>
            <nav>
                <ul className="flex items-center justify-between gap-4">
                    <li>
                        <Link href="/" className={getLinkClass("/")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu" className={getLinkClass("/menu")}>
                            Find food
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/cart" className={getLinkClass("/cart")}>
                            <ShoppingCart />
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
