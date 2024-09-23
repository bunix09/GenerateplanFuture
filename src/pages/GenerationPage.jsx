import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Choose from "../components/Choose";

const GenerationPage = () => {
    return (
        <div className="bg-blue-500 flex flex-col min-h-[100vh] ">
            <Navbar />
            <Choose />
            <div className="text-black pt-20"></div>
            <Footer />
        </div>
    );
};

export default GenerationPage;
