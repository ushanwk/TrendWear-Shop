import './App.css';
import {Header} from "./Components/Header";
import {UpperSection} from "./Components/UpperSection";
import {MainSection} from "./Components/MainSection";

function App() {
    return (
        <div className="App">
            <Header/>
            <UpperSection />
            <MainSection />
        </div>
    );
}

export default App;
