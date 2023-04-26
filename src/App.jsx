import { About, Contact, Home, Projects, Talents } from "./views/index";
import { NavBar, Cursor, Footer } from "./components";

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