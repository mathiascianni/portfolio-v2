import Container from "../components/Container";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";

const Projects = () => {
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

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: "-100px"
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <Container id="projects">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="border-y my-8 p-8 font-header text-center uppercase">
                <motion.p variants={itemVariants} className="mb-4">Explorá</motion.p>
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 text-2xl md:text-4xl">
                    <motion.h2 variants={itemVariants} className="font-bold text-neutral-900">Mis proyectos</motion.h2>
                    <motion.span variants={itemVariants} className="hidden md:inline-block">&mdash;</motion.span>
                    <motion.p variants={itemVariants}>Web development</motion.p>
                </div>
            </motion.div>
            <Carousel />
        </Container>
    );
}

export default Projects;
