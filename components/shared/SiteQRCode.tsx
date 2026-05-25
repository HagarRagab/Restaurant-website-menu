"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

function SiteQRCode() {
    const [siteUrl, setSiteUrl] = useState<string | null>(null);

    useEffect(() => {
        setSiteUrl(`${window.location.origin}/`);
    }, []);

    if (!siteUrl) {
        return (
            <div
                className="size-[160px] bg-white/80 animate-pulse rounded"
                aria-hidden
            />
        );
    }

    return (
        <QRCode
            value={siteUrl}
            size={160}
            bgColor="#ffffff"
            fgColor="#0f3d1e"
            level="M"
            aria-label="QR code linking to the Falafel Restaurant website"
        />
    );
}

export default SiteQRCode;
