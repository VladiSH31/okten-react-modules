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
        <div className="flex items-center justify-center gap-4 py-8 bg-white mb-8">
            <button
                onClick={onButtonPreviousClick}
                disabled={currentPage <= 1}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
            >
                ← Previous
            </button>

            <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-md">
                Page {currentPage}
            </div>

            <button
                onClick={onButtonNextClick}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
                Next →
            </button>
        </div>
    );
};

export default PaginationComponent;