import PaginationComponent from "../components/PaginationComponent.tsx";
import UsersComponent from "../components/UsersComponent.tsx";


const MainLayout = () => {
    return (
        <div>
            <UsersComponent/>
            Main Layout
            <PaginationComponent/>
        </div>
    );
};

export default MainLayout;