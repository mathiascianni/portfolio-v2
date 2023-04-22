import { useState } from "react"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
        {
            src: "/media/gpt.jpg",
            alt: "",
            to: "",
            desc: "asd",
        },

        {
            src: "/media/todo.jpg",
            alt: "",
            to: "",
            desc: "sad",
        },
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (currentIndex === 0){
            setCurrentIndex(images.length - 1);
        }
    }

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if( currentIndex == images.length - 1){
            setCurrentIndex(0);
        }
    }

    return (
        <>
            <div className="flex relative">
                <button onClick={handlePrev} className="absolute top-0 left-0 z-[1] w-[50%] h-full"></button>
                <div className="relative overflow-hidden rounded-md flex md:mx-24">
                    {images.map((image, index) =>
                        <div className={` duration-700 ease-in-out min-w-full translate-x-[-${100 * currentIndex}%]`} key={index} >
                            <img src={image.src} className="w-full" alt={image.alt} />
                        </div>
                    )}
                </div>
                <button onClick={handleNext} className="absolute top-0 right-0 z-[1] w-[50%] h-full"></button>
            </div>
            <div className="flex gap-2 justify-center p-4 ">
                {images.map((image, index) => <div key={index} className={`${index === currentIndex ? "bg-slate-600" : "bg-slate-200"} transition-all h-[2px] aspect-[15/1] `}></div>)}
            </div>
        </>
    );
}

export default Carousel;
