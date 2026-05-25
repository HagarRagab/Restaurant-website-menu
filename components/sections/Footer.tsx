import SiteQRCode from "@/components/shared/SiteQRCode";
import Logo from "../shared/Logo";

function Footer() {
    return (
        <footer className="glass_background p-6 flex flex-col md:flex-row items-center gap-6 justify-center rounded-none!">
            <div className="md:w-1/2 max-w-md text-center sm:text-left">
                <Logo />
                <p className="mt-3 text-gray-200 leading-relaxed">
                    Falafel serves authentic, plant-forward meals made with
                    fresh ingredients every day. Eat clean, taste something new,
                    and fuel your day with balanced dishes you will love.
                </p>
            </div>
            <div className="w-full md:w-1/2 max-w-md flex flex-col sm:flex-row items-center gap-6 justify-between">
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-semibold mb-2">
                        Scan to visit our menu on phone
                    </h2>
                    <p className="text-sm opacity-90 mb-3">
                        Point your camera at the QR code to open our website.
                    </p>
                </div>
                <div className="bg-white p-3 rounded-lg shrink-0">
                    <SiteQRCode />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
