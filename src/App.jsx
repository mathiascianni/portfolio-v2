import { Home, Projects } from "./views/index";
import { NavBar, Cursor } from "./components";

const App = () => {
    return (
        <>  
            <Cursor />
            <NavBar />
            <main>
                <Home />
                <Projects />
            </main>
        </>
    );
}

export default App;