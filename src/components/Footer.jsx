import Container from "./Container";
import HoverButton from "./HoverButton";
import IonIcon from "@reacticons/ionicons";

const Footer = () => {
    return (
        <footer className="bg-neutral-950 py-8">
            <Container>
                <div className="text-white font-header flex gap-4 flex-col text-center md:text-left md:flex-row justify-between border-b border-neutral-600 pb-4">
                    <div>
                        <p className="mb-4"><span className="font-bold uppercase">Mathias Cianni</span> &mdash; Desarrollador web FrontEnd. Buenos Aires, Argentina.</p>
                        <div className="invert">
                            <HoverButton to="/media/Cianni_Mathias_Curriculum.pdf">
                                <span>Descargar CV</span>
                            </HoverButton>
                        </div>
                    </div>
                    <div>
                        <p className="uppercase mb-4">Encontrame en</p>
                        <ul className="flex justify-center text-4xl gap-4">
                            <li>
                                <a href="https://github.com/mathiascianni" rel="noreferrer" target="_blank">
                                    <IonIcon name="logo-github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mathias-cianni-92a727195/" rel="noreferrer" target="_blank">
                                    <IonIcon name="logo-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-white font-header text-center mt-8">Mathias Cianni &copy; 2023</p>
            </Container>
        </footer>
    );
}

export default Footer;
