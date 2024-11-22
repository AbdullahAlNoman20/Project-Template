
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Nav></Nav>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            
            <div className="">
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default MainLayout;