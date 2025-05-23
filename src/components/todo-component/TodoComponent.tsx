import {type FC} from 'react';
import type {IToDoComponent} from "../../models/IToDoComponent.ts";
import './TodoComponent.css'

type todoPropsType = {
    item: IToDoComponent
};

const TodoComponent: FC<todoPropsType> = ({item}) => {
    return (
        <div className="m-5 border border-gray-300 rounded-lg p-4 mb-4 shadow bg-white">
            <div className="text-lg font-bold">User ID: {item.userId}</div>
            <div className="text-sm text-gray-600">ID: {item.id}</div>
            <div className="text-base">Title: {item.todo}</div>
            <div className="text-sm">Complete:
                <span className={item.completed ? 'text-green-500' : 'text-red-500'}>
                    {item.completed ? '✔ Completed' : '✘ Not Completed'}
                </span>
            </div>
        </div>
    );
};


export default TodoComponent;