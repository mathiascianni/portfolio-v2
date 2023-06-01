import { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { motion } from "framer-motion";

const Carousel = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: "-100px"
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }


    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: "/media/pokedb.jpg",
            alt: "screenshot de la web PokeDB",
            to: "https://pokedb-self.vercel.app/",
            usedTechs: [
                <i className="text-4xl devicon-html5-plain"></i>,
                <i className="text-4xl devicon-javascript-plain"></i>,
                <i className="text-4xl devicon-tailwindcss-plain"></i>,
                <i className="text-4xl devicon-react-plain"></i>,
            ],
            title: "PokeDB"
        },
        {
            src: "/media/gpt.jpg",
            alt: "screenshot de la landing page de ChatGPT",
            to: "https://chatgpt-landing.vercel.app/",
            usedTechs: [
                <i className="text-4xl devicon-html5-plain"></i>,
                <i className="text-4xl devicon-css3-plain"></i>,
                <i className="text-4xl devicon-javascript-plain"></i>,
                <i className="text-4xl devicon-react-plain"></i>,
            ],
            title: "ChatGPT - Landing Page"
        },
        {
            src: "/media/todo.jpg",
            alt: "screenshot del proyecto de anotador de tareas",
            to: "https://todolist-ten-beta.vercel.app/",
            usedTechs: [
                <i className="text-4xl devicon-html5-plain"></i>,
                <i className="text-4xl devicon-javascript-plain"></i>,
                <i className="text-4xl devicon-tailwindcss-plain"></i>,
                <i className="text-4xl devicon-react-plain"></i>,
            ],
            title: "Anotador de tareas"
        },
        {
            src: "/media/inko.jpg",
            alt: "screenshot de ecommerce de ropa japonesa",
            to: "https://inko-remake.vercel.app/",
            usedTechs: [
                <i className="text-4xl devicon-html5-plain"></i>,
                <i className="text-4xl devicon-javascript-plain"></i>,
                <i className="text-4xl devicon-react-plain"></i>,
                <i className="text-4xl devicon-tailwindcss-plain"></i>,
                <i className="text-4xl devicon-figma-plain"></i>,
            ],
            title: "Inko - Japanese Ecommerce"
        },
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        }
    }

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex == images.length - 1) {
            setCurrentIndex(0);
        }
    }

    return (
        <>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <div className="flex relative">
                <button onClick={handlePrev} className="absolute top-0 left-0 z-[1] w-[50%] h-full btnL text-6xl flex items-center justify-start"><span className="md:hidden text-white"><IonIcon name="chevron-back-circle-sharp" /></span></button>
                <div className="relative overflow-hidden rounded-md flex md:mx-24">
                    {images.map((image, index) =>
                        <div className={`duration-700 ease-in-out min-w-full`} style={{ transform: `translateX(-${100 * currentIndex}%)` }} key={index} >
                            <img src={image.src} className="w-full" alt={image.alt} />
                        </div>
                    )}
                </div>
                <button onClick={handleNext} className="absolute top-0 right-0 z-[1] w-[50%] h-full btnR text-6xl flex items-center justify-end"><span className="md:hidden text-white"><IonIcon name="chevron-forward-circle-sharp" /></span></button>
            </div>

            <div className="flex flex-col items-center gap-4 justify-center p-4 font-header">
                <div className="flex gap-2">
                    {images.map((image, index) => <div key={index} className={`${index === currentIndex ? "bg-slate-600" : "bg-slate-300"} transition-all h-[2px] aspect-[15/1] `}></div>)}
                </div>
                <motion.h3 className="font-bold text-xl text-center uppercase">{images[currentIndex].title}</motion.h3>
                <motion.div className="flex text-4xl gap-2 text-neutral-900">
                    {images[currentIndex].usedTechs.map((image, index) => <div key={index}>{image}</div>)}
                </motion.div>
                <motion.a href={images[currentIndex].to} className="relative group overflow-hidden rounded-full font-bold uppercase text-neutral-950  transition-colors duration-300 " rel="noreferrer" target="_blank">
                    <span className="block border-2 border-neutral-950 py-2 px-8 rounded-full group-hover:text-white text-sm">Ver demo</span>
                    <span className="absolute w-full transition transition-all bg-neutral-950 duration-200 h-full bottom-[-100%] group-hover:-translate-y-full left-0 z-[-1]"></span>
                </motion.a>
            </div>
        </motion.div>
        </>
    );
}

export default Carousel;
