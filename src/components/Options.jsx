import React, { useEffect, useState } from "react";

const Options = ({ setInfoFromOptions }) => {
    const [dishType, setDishType] = useState("");
    const [typeOfFood, setTypeOfFood] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [fastFoodType, setFastFoodType] = useState("");
    const [bonusIngredients, setBonusIngredients] = useState("");
    const [banIngredients, setBanIngredients] = useState("");

    const sendInfoOptions = () => {
        setInfoFromOptions(`dishtype: ${dishType}, type of food: ${typeOfFood}, cuisine: ${cuisine}, fastfood type: ${fastFoodType}`);
    };

    useEffect(() => {
        sendInfoOptions();
    }, [dishType, typeOfFood, cuisine, fastFoodType, banIngredients, bonusIngredients]);

    return (
        <div className="mx-auto p-4 mt-4 bg-sky-300 w-[70%] mb-10 border-2 border-sky-700 h-[400px] rounded-3xl flex flex-col items-center">
            <div className="text-3xl font-bold">Критерий</div>
            <p>Выберай то что тебе совподает.</p>

            <div className="flex gap-10 mt-10">
                <div>
                    <div className="flex flex-col">
                        <label>Области, которые нравятся</label>
                        <select
                            onChange={(e) => setDishType(e.target.value)}
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"
                        >
                            <option value="искусство">искусство</option>
                            <option value="технологии">технологии</option>
                            <option value="медицина">медицина</option>
                            <option value="финансы">финансы</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label>Социальные навыки</label>
                        <select
                            onChange={(e) => setCuisine(e.target.value)}
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"
                        >
                            <option value="общение">общение</option>
                            <option value="командная работа">командная работа</option>
                            
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Образование:</p>
                        <select
                            onChange={(e) => setTypeOfFood(e.target.value)}
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"
                        >
                            <option value="среднее">среднее</option>
                            <option value="высшее">высшее</option>
                            <option value="профессиональные курсы">профессиональные курсы</option>
                        </select>
                    </div>
                    <div>
                        <p>Заработная плата и перспективы</p>
                        <select
                            onChange={(e) => setFastFoodType(e.target.value)}
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"
                        >
                            <option value="Ожидание зарплаты">Ожидание зарплаты</option>
                            <option value="Важность карьерного роста">Важность карьерного роста</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Время роботы</p>
                        <input
                            onChange={(e) => setBonusIngredients(e.target.value)}
                            placeholder="Время роботы"
                            className="pl-3 w-[200px] h-[35px] rounded-3xl border-2 border-black"
                        />
                    </div>

                    <div>
                        <p>Интересы</p>
                        <input
                            onChange={(e) => setBanIngredients(e.target.value)}
                            placeholder="Интересы"
                            className="pl-3 w-[200px] h-[35px] rounded-3xl border-2 border-black"
                        />
                    </div>
                </div>
            </div>
            <button className="p-2" onClick={() => setInfoFromOptions()}></button>
            
        </div>
    );
};

export default Options;
