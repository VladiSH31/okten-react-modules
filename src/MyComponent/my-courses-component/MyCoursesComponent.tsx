import "./MyCoursesComponent.css"
import {coursesArray} from "../../data/arrays-2.tsx";
import MyCourseComponent from "../my-course-component/MyCourseComponent.tsx";


const MyCoursesComponent = () => {
    return (
        <div className="w-full">
            {
                coursesArray.map((course, index) => <MyCourseComponent key={index} course={course}/>)
            }
        </div>
    );
};

export default MyCoursesComponent;