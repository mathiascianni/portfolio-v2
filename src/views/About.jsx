import { Container, HoverButton } from "../components";
import { motion } from "framer-motion";

const About = () => {
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
    return (
        <Container id="about">
            <div className="font-header my-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="flex flex-col-reverse md:flex-row justify-around items-center gap-8">
                    <div>
                        <motion.p variants={itemVariants}>&mdash; ¡Hola!</motion.p>
                        <motion.h2 variants={itemVariants} className="text-4xl uppercase mb-8">Soy <span className="font-bold">Mathias</span></motion.h2>
                        <div className="max-w-xl mb-8">
                            <motion.p variants={itemVariants} className="mb-2">Soy un desarrollador web FronEnd, especializado en React. Vivo en Buenos Aires, Argentina y actualmente estoy trabajando de manera Freelance, abierto a nuevas propuestas y desafíos.</motion.p>
                            <motion.p variants={itemVariants}>Mi objetivo como desarrollador es crear productos de software de alta calidad tanto visualmente como técnicamente.</motion.p>
                        </div>
                        <motion.div variants={itemVariants} className="flex flex-col items-center">
                            <HoverButton to="/media/Cianni_Mathias_Curriculum.pdf">Descargá mi CV</HoverButton>
                            <span>o</span>
                            <a href="#contact" className="relative group inline-block">
                                <span className="font-medium flex items-center gap-1">¡Contactame!</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-700 transition-all group-hover:w-full"></span>
                            </a>
                        </motion.div>
                    </div>
                    <img src="/media/pfp.jpg" alt="" className=" w-full rounded-full max-w-[400px]" />
                </motion.div>
            </div>
        </Container >
    );
}

export default About;
