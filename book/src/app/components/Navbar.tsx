import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";



const Navbar = () => {
    return (
        <nav className="h-12 w-full bg-[#171717] border-b border-gray-700 text-white">
            <div className="h-full flex items-center justify-between px-5">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={30}
                        height={30}
                        className="object-contain"
                    />

                    <span className="font-semibold tracking-wide">
                        FITLOG
                    </span>
                </div>

                {/* Menu */}
                <div className="flex items-center h-full gap-1">
                    <button className="relative h-full px-4 text-xs text-white">
                        Workouts

                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-10 bg-lime-400 rounded-t-full" />
                    </button>

                    <button className="h-full px-4 text-xs text-gray-400 hover:text-white">
                        My Plan
                    </button>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5 text-[10px] text-gray-400">
                    <div className="flex items-center gap-1">
                        <span>Plan</span>
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-lime-400 text-black text-[8px] font-bold">
                            0
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>Saved</span>
                        <span className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-600 text-[8px]">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;