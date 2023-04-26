import Container from "../components/Container";
import { motion } from "framer-motion";

const Talents = () => {
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
        <Container id="skills">
            <div className="border-t my-8"></div>
            <motion.h2 className="font-header text-center text-2xl md:text-4xl uppercase mb-8">Mi Stack de <span className="font-bold text-neutral-900">tecnologías</span></motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-neutral-900 gap-4 font-header">
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-html5-plain"></i>
                    <p className="mx-auto">HTML5</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-css3-plain"></i>
                    <p className="mx-auto">CSS3</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-javascript-plain"></i>
                    <p className="mx-auto">JavaScript</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-react-plain"></i>
                    <p className="mx-auto">React</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-tailwindcss-plain"></i>
                    <p className="mx-auto">TailwindCSS</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-bootstrap-plain"></i>
                    <p className="mx-auto">Bootstrap</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-figma-plain"></i>
                    <p className="mx-auto">Figma</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-photoshop-plain"></i>
                    <p className="mx-auto">Photoshop</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-illustrator-plain"></i>
                    <p className="mx-auto">Illustrator</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-nodejs-plain"></i>
                    <p className="mx-auto">NodeJS</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-express-original"></i>
                    <p className="mx-auto">Express</p>
                </motion.div>
                <motion.div variants={itemVariants} className="border shadow-md border-neutral-300 aspect-square rounded-lg flex items-center justify-center flex-col">
                    <i className="text-6xl devicon-mongodb-plain"></i>
                    <p className="mx-auto">MongoDB</p>
                </motion.div>
            </motion.div>
        </Container>
    );
}

export default Talents;
