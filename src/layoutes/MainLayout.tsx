import PaginationComponent from "../components/PaginationComponent.tsx";
import SomeComponent from "../components/SomeComponent.tsx";


const MainLayout = () => {
    return (
        <div>
            <SomeComponent/>
            Main Layout
            <PaginationComponent/>
        </div>
    );
};

export default MainLayout;