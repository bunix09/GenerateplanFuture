import React from 'react';

const Ingredient = ({ imageSrc, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="w-[120px] h-[120px] rounded-full flex items-center border-4 border-blue-300 justify-center cursor-pointer m-[10px]"
        >
            <img src={imageSrc} alt="ingredient" style={{ width: '70%', height: '70%' }} />
        </div>
    );
};

export default Ingredient;
