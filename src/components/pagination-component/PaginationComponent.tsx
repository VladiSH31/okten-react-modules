import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    let currentPage = Number(query.get('page') || '1')

    const onButtonPreviousClick = () => {
        if (currentPage>1) {
            setQuery({page: (--currentPage).toString()});
        }
    };
    const onButtonNextClick = () => {
        setQuery({page: (++currentPage).toString()});
    };

    return (
        <div>
            <button onClick={onButtonPreviousClick}>Previous</button>
            <button onClick={onButtonNextClick}>Next</button>
        </div>
    );
};

export default PaginationComponent;