import { useState, useEffect } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [click, setClick] = useState(false);
    const [linkHover, setLinkHover] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', mMove);
            document.addEventListener('mouseenter', mEnter);
            document.addEventListener('mouseleave', mLeave);
            document.addEventListener('mousedown', mDown);
            document.addEventListener('mouseup', mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', mMove);
            document.removeEventListener('mouseenter', mEnter);
            document.removeEventListener('mouseleave', mLeave);
            document.removeEventListener('mousedown', mDown);
            document.removeEventListener('mouseup', mUp);
        };

        const mDown = () => {
            setClick(true);
        };

        const mUp = () => {
            setClick(false);
        };

        const mMove = (el) => {
            setPosition({ x: el.clientX, y: el.clientY });
        };

        const mLeave = () => {
            setHidden(true);
        };

        const mEnter = () => {
            setHidden(false);
        };

        const addLinkEvents = () => {
            document.querySelectorAll('a').forEach((el) => {
                el.addEventListener('mouseover', () => setLinkHover(true));
                el.addEventListener('mouseout', () => setLinkHover(false));
            });
            document.querySelectorAll('button').forEach((el) => {
                el.addEventListener('mouseover', () => setLinkHover(true));
                el.addEventListener('mouseout', () => setLinkHover(false));
            });
        };

        addEventListeners();
        addLinkEvents();
        return () => removeEventListeners();
    }, []);

    return (
        <div className={`w-4 h-4 backdrop-invert transition-[transform] duration-500 bg-transparent rounded-full fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[999] ${hidden ? "opacity-0" : ""} ${click ? "scale-[1.5]" : ""} ${linkHover ? "scale-[4]" : ""}`} style={{
            left: `${position.x}px`, top: `${position.y}px`,
        }}></div>
    );
}

export default Cursor;
