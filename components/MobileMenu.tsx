import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="bg-stone-200 w-56 absolute top-14 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">

                <div className="px-3 text-center text-black hover:underline">
                    Home
                </div>
                <div className="px-3 text-center text-black hover:underline">
                    Series
                </div>
                <div className="px-3 text-center text-black hover:underline">
                    Films
                </div>
                <div className="px-3 text-center text-black hover:underline">
                    New & Popular
                </div>
                <div className="px-3 text-center text-black hover:underline">
                    My List
                </div>
                <div className="px-3 text-center text-black hover:underline">
                    Browse by Languages
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;