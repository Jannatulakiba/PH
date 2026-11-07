import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-800 bg-black text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt="FitLog"
                        width={30}
                        height={30}
                        className="object-contain"
                    />

                    <span className="font-semibold tracking-wide">
                        FITLOG
                    </span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-800 px-6 py-5">

  

    <p className="text-xs text-gray-500">
        © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>

</div>
            </div>
        </footer>
    );
};

export default Footer;
