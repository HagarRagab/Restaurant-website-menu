"use client";

import QRCode from "react-qr-code";

function SiteQRCode() {
    return (
        <QRCode
            value={process.env.SITE_UR || ""}
            size={160}
            bgColor="#ffffff"
            fgColor="#0f3d1e"
            level="M"
            aria-label="QR code linking to the Falafel Restaurant website"
        />
    );
}

export default SiteQRCode;
