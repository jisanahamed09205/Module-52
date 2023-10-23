import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">This is Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2 border-red-400">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 border-2 border-red-400">
                    <h2 className="text-4xl">News Coming</h2>
                </div>
                <div className="border-2 border-red-400">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;