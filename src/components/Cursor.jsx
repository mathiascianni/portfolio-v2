import { useState, useEffect } from "react";
import IonIcon from '@reacticons/ionicons';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [click, setClick] = useState(false);
    const [linkHover, setLinkHover] = useState(false);
    const [icon, setIcon] = useState("");
    const [cursor, setCursor] = useState(null);
    
    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)');
        if (!isMobile.matches) {
            setCursor(false);

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
                document.querySelectorAll('.btnR').forEach((el) => {
                    el.addEventListener('mouseover', () => setIcon("chevron-forward-circle-sharp"));
                    el.addEventListener('mouseout', () => setIcon(""));
                });
                document.querySelectorAll('.btnL').forEach((el) => {
                    el.addEventListener('mouseover', () => setIcon("chevron-back-circle-sharp"));
                    el.addEventListener('mouseout', () => setIcon(""));
                });
            };

            addEventListeners();
            addLinkEvents();
            return () => removeEventListeners();
        } else {
            setCursor(true);
        }
    }, []);

    return (
        <div className={`w-4 h-4 backdrop-invert ${cursor? "hidden" : "flex"} transition-[transform] items-center justify-center text-xs duration-500 bg-transparent rounded-full fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[999] ${hidden ? "opacity-0" : ""} ${click ? "scale-[1.5]" : ""} ${linkHover ? "scale-[4]" : ""}`} style={{
            left: `${position.x}px`, top: `${position.y}px`,
        }}><div className=" flex items-center justify-center text-black"><IonIcon name={icon} /></div></div>
    );
}

export default Cursor;
