import { Container } from "../components/index"

const Home = () => {
    return (
        <>
            <div className="w-full relative flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-zinc-950 to-zinc-900 text-white ">
                <Container>
                    <div className="flex flex-col items-center font-header gap-4">
                        <span className="font-light uppercase">Junior</span>
                        <h1 className="text-8xl text-center uppercase font-black">Mathias Cianni · Web Developer</h1>
                        <p>Desarrollador web viviendo en Buenos Aires, Argentina. Especializado en Javascript con React.</p>
                    </div>
                </Container>
            </div>

        </>
    );
}

export default Home;
