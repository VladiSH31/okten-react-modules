import {type FC} from 'react';
import type {ICourseAndDuration} from "../../models/ICourseAndDuration.tsx";

type MyCoursePropsType = {
    course: ICourseAndDuration;
}

const MyCoursesAndDuration: FC<MyCoursePropsType> = ({course}) => {
    return (
        <div className='flex flex-col justify-evenly items-center w-100 h-30 border border-solid rounded-xl mt-2'>
            <h2>{course.title}</h2>
            <p>Month Duration: {course.monthDuration}</p>
        </div>
    );
};

export default MyCoursesAndDuration;