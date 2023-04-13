import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div className=" text-stone-200 text-xl cursor-pointer hover:text-black transition mt-4">
            {label}
        </div>
    )
}

export default NavbarItem;