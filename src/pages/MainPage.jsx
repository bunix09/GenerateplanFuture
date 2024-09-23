import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBlock from "../components/InfoBlock";

const MainPage = () => {
    return (
        <div className="bg-blue-500 flex flex-col min-h-[100vh] justify-between">
            <Navbar />
            <InfoBlock />
            <Footer />
        </div>
    );
};

export default MainPage;
