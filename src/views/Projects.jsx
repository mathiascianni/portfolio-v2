import { Container, Carousel } from "../components/index"

const Projects = () => {
    return (
        <Container>
            <div className="border-y my-8 p-8 font-header text-center uppercase">
                <p className="text-light mb-4">Explorá</p>
                <div className="flex items-center justify-center gap-4 text-4xl">
                    <h2 className="text-4xl font-bold">Mis proyectos</h2>
                    <p>- Web development</p>
                </div>
            </div>
            <Carousel />
        </Container>
    );
}

export default Projects;
