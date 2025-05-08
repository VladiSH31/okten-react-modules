import './App.css'
import {coursesAndDurationArray} from "./data/coursesAndDuration.tsx";
import MyCoursesAndDuration from "./components/my-courses/MyCoursesAndDuration.tsx";

function App() {
    return (

        <>

            <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-2 gap-10 justify-center items-center">
                    {
                        coursesAndDurationArray.map((value, index) =>

                            <MyCoursesAndDuration key={index} course={value}/>
                        )

                    }
                </div>
            </div>
            </>
            )
            }

            export default App
