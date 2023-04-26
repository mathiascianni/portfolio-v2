import { Container, HoverButton } from "../components";
import IonIcon from "@reacticons/ionicons";
import { motion } from "framer-motion";

const Contact = () => {
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
        <Container id="contact">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="border-y py-8 my-8">
                <motion.p variants={itemVariants} className="uppercase font-header mb-4 text-center">¿Tenés un proyecto en mente?</motion.p>
                <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl mb-8 font-header uppercase text-center">Ponete en <span className="font-bold">contacto</span></motion.h2>
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-center gap-8">
                    <HoverButton to="mailto:mncianni@hotmail.com" >
                        <IonIcon name="at-sharp" className="text-xl" />
                        <span>mncianni@hotmail.com</span>
                    </HoverButton>

                    <HoverButton to="https://wa.me/+5491137008113" >
                        <IonIcon name="logo-whatsapp" className="text-xl" />
                        <span>1137008113</span>
                    </HoverButton>

                    <HoverButton to="https://www.linkedin.com/in/mathias-cianni-92a727195/" >
                        <IonIcon name="logo-linkedin" className="text-xl" />
                        <span>Mathias Cianni</span>
                    </HoverButton>
                </motion.div>
            </motion.div>
        </Container>
    );
}

export default Contact;
