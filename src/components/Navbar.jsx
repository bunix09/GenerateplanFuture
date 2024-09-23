import React from "react";
import { Link } from "react-router-dom";
import pt from "../../public/images/prooo.png";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center pr-5 pl-5 h-[90px] fixed bg-blue-700" style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to='/'>
                <img src={pt} alt="logo" width={110} height={110} />
            </Link>
            <div className="hidden md:flex gap-4 left-9 ">
                <Link to="/">Главная</Link>
                <Link to="/generate">Генерация плана</Link>
            </div>
            <div className="md:hidden">burger button</div>
        </div>
    );
};

export default Navbar;
