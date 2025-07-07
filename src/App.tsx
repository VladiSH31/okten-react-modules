import './App.css'
import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState<number>(0)

    return (
        <div>
            <MyContext.Provider value={{
                counterValue: counter,
                increment: (obj) => {
                    obj++;
                    setCounter(obj)
                    console.log(obj)
                }
            }}>
                <LeftBranch/>
                <RightBranch/>
            </MyContext.Provider>
        </div>
    )
}

export default App
