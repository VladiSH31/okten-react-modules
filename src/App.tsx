import './App.css'
import {coursesTitleArray} from "./data/coursesTitleArray.tsx";

function App() {
    return (
        <>
            {
                coursesTitleArray.map((title: string, index) =>
                    <div  key={index}>
                        <h2 key={index} className="text-4xl text-cyan-800 border-2 border-solid border-cyan-400 mt-1 text-center">{title}</h2>
                    </div>
                )

            }
        </>
    )
}

export default App
