import { Container } from "../components/index";
import { motion } from "framer-motion";

const Home = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: "-100px"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: "-100px"
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }

    const fade = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

    return (
        <>
            <div className="w-full relative flex flex-col justify-center items-center h-screen bg-[#0C0A0E] text-white ">
                <Container>
                    <motion.div className="flex flex-col items-center font-header gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.span variants={itemVariants} className="font-light uppercase z-[1] text-md md:text-lg lg:text-xl">Junior FrontEnd</motion.span>
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-8xl text-center uppercase font-black z-[1]">Mathias Cianni · Web Developer</motion.h1>
                        <motion.p variants={itemVariants} className="z-[1] text-md md:text-lg lg:text-xl text-center">Desarrollador web FrontEnd viviendo en Buenos Aires, Argentina. Especializado en Javascript con React.</motion.p>
                        <motion.div variants={fade} className="absolute top-0 left-0 md:left-[50%] md:-translate-x-1/2 h-full overflow-hidden flex shadow-neutral-950 overflow-hidden z-0">
                            <video autoPlay loop muted className="h-full object-cover">
                                <source src="/media/hero-banner.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    </motion.div>
                </Container>
            </div>

        </>
    );
}

export default Home;
