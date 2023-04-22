import MatnaLogo from "/media/matna-logo.svg";

const NavBar = () => {
    return (
        <nav className="bg-zinc-900 font-header flex z-[2] justify-between items-center fixed w-full px-32 py-8 text-white z-[1]">
            <a href="#" className="max-w-[35px]"><img src={MatnaLogo} alt="Logo personal de Mathias Cianni" /></a>
            <ul className="flex gap-4">
                <li><a href="#">Sobre mí</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Habilidades</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
