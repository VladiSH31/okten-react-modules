import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: '1'});

    const onButtonPaginationPreviousClick = () => {
        const pg = query.get('pg')

        if (pg) {
            let currentPage = +pg;

            setQuery({pg: (--currentPage).toString()})
        }
    };
    
    const onButtonPaginationNextClick = () => {
        const pg = query.get('pg');

        if (pg) {
            let currentPage = +pg;
            setQuery({pg: (++currentPage).toString()})
        }
    };

    return (
        <div>
            Pagination Component
            <button className={'border-2'} onClick={onButtonPaginationPreviousClick}>Previous</button>
            <button className={'border-2'} onClick={onButtonPaginationNextClick}>Next</button>
        </div>
    );
};

export default PaginationComponent;