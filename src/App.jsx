import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Talents from "./views/Talents";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>  
            <Cursor />
            <NavBar />
            <main>
                <Home />
                <About />
                <Projects />
                <Talents />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;