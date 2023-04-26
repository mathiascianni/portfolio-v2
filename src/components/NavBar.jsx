import IonIcon from "@reacticons/ionicons";
import { useState, useEffect } from "react";


const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${isScrolled ? "bg-zinc-900" : "bg-transparent"} transition-color duration-200 font-header flex justify-between items-center fixed w-full px-8 md:px-32 py-4 md:py-8 text-white z-[2]`}>
            <a href="#" onClick={() => setMenu(false)} className="max-w-[30px]"><img src="/media/matna-logo.svg" alt="Logo personal de Mathias Cianni" /></a>
            <button onClick={() => setMenu(!menu)} className="block md:hidden text-4xl flex items-center justify-center"><IonIcon name="menu-outline" /></button>
            <ul className="hidden md:flex gap-4">
                <li>
                    <a href="#about" className="relative group">
                        <span className="font-normal flex items-center gap-1">Sobre mí</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="#projects" className="relative group">
                        <span className="font-normal flex items-center gap-1">Proyectos</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="#skills" className="relative group">
                        <span className="font-normal flex items-center gap-1">Habilidades</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="#contact" className="relative group">
                        <span className="font-normal flex items-center gap-1">Contacto</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                    </a>
                </li>
            </ul>
            <ul className={`bg-zinc-900 w-full z-[-1] fixed h-screen top-0 flex flex-col items-center justify-center gap-4 text-2xl transition-all duration-500 md:hidden ${menu ? "left-0" : "left-[-100%]"}`}>
                <li><a href="#about" onClick={() => setMenu(false)}>Sobre mí</a></li>
                <li><a href="#projects" onClick={() => setMenu(false)}>Proyectos</a></li>
                <li><a href="#skills" onClick={() => setMenu(false)}>Habilidades</a></li>
                <li><a href="#contact" onClick={() => setMenu(false)}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
