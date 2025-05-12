import type {FC} from "react";

type ModuleProps = {
    module: string[]
}

const MyModulesComponent: FC<ModuleProps> = ({module}) => {

    return (
        <div className='modules-block'>
            <h3>Modules:</h3>
            <ul>
                {
                    module.map((module:string,index:number) => (
                        <li key={index} className='p-1 pl-4'>{module}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default MyModulesComponent;