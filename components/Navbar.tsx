import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItems"
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
   const [showMobileMenu, setShowMobieMenu] = useState(false);
   const [showAccountMenu, setShowAccountMenu] = useState(false);
   const [showBackground, setShowBackground] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= TOP_OFFSET) {
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
   }, []);

   const toggleMobileMenu = useCallback(() => {
    setShowMobieMenu((current) => !current);
   }, []);

   const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
   }, []);

    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 opacity-90' : ''}`}>
                <img className="h-6 lg:h-9" src="/images/logo.png" alt="Logo" />
                <div className="pl-2 lg:text-3xl text-xl mt-2 text-rose-500">NexStream</div>
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Films"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by language"/>
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-stone-200 text-sm mt-3">Browse</p>
                    <BsChevronDown className={`text-stone-200 transition mt-3 ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-stone-200 hover:text-black cursor-pointer transition lg:text-xl mt-4">
                        <BsSearch />
                    </div>
                    <div className="text-stone-200 hover:text-black cursor-pointer transition lg:text-xl mt-4">
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 mt-4 rounded-md overflow-hidden">
                            <img src="/images/profile.png" alt="" />
                        </div>
                        <BsChevronDown className={`text-stone-200 transition mt-4 ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />

                    </div>
                </div>
            </div>
        </nav>
    )
} 

export default Navbar