const HoverButton = ({ children, to }) => {
    return (
        <a href={to} rel="noreferrer" target="_blank" className="relative group flex items-center w-full overflow-hidden rounded-full font-header font-medium uppercase text-neutral-950 transition-colors duration-300">
            <span className="block border-2 border-neutral-950 py-2 px-8 rounded-full group-hover:text-white text-sm w-full flex justify-center items-center gap-1 z-[1]">
                {children}
            </span>
            <span className="absolute w-full transition transition-all bg-neutral-950 duration-200 h-full bottom-[-100%] group-hover:-translate-y-full left-0 z-[0]"></span>
        </a>
    );
}

export default HoverButton;
