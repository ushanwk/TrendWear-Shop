import './App.css';
import {Header} from "./Components/Header";
import {UpperSection} from "./Components/UpperSection";
import {MainSection} from "./Components/MainSection";
import {useState} from "react";

function App() {

    const [tabs, setTabs] = useState('SNEAKER');

    return (
        <div className="App">
            <Header/>
            <UpperSection tabs={tabs} />
            <MainSection tabs={tabs} setTabs={setTabs} />
        </div>
    );
}

export default App;
