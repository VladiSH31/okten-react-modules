// import "./MyCourseComponent.css"
import type {FC} from "react";
import type {ICourse} from "../../models/ICourse.tsx";
import MyModulesComponent from "../my-modules-component/MyModulesComponent.tsx";

type MyCourseProps = {
    course: ICourse
}

const MyCourseComponent: FC<MyCourseProps> = ({course}) => {
    return (
        <div className='bg-gray-300 border border-solid m-1'>
            <h2 className='pl-2'>{course.title}</h2>
            <div className="duration-block p-2 pl-4">
                <p>Month Duration: {course.monthDuration}</p>
                <p>Hour Duration: {course.hourDuration}</p>
            </div>
            <div className="pl-2 modules">
                <MyModulesComponent module={course.modules}/>
            </div>
        </div>
    );
};

export default MyCourseComponent;