import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams();

    const onButtonNextClick = () => {

    };
    const onButtonPreviousClick = () => {

    };


    return (
        <div>
            <button onClick={onButtonNextClick}>Next</button>
            <button onClick={onButtonPreviousClick}>Previous</button>
        </div>
    );
};

export default PaginationComponent;