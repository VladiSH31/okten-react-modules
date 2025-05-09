import {simpsons} from "../../../data/simpsonsList.tsx";
import MyCharacterComponent from "../character-component/MyCharacterComponent.tsx";
import type {ISimps} from "../../../models/ISimps.tsx";

const MyFamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value: ISimps, index: number) => <MyCharacterComponent key={index} value={value}>
                    {value.info}
                    </MyCharacterComponent>)
            }
        </div>
    );
};

export default MyFamilyComponent;