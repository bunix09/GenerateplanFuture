import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {
    const apikey = import.meta.env.VITE_API_KEY;

    const [infoFromOptions, setInfoFromOptions] = useState();
    const [gptPromptText, setGptPromptText] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    const ingredientsData = [
        { name: "Програмист", imageSrc: "/images/programer.png" },
        { name: "Доктор", imageSrc: "/images/doctor2.png" },
        { name: "Повар", imageSrc: "/images/chef.png" },
        { name: "Дизайнер", imageSrc: "/images/designer.png" },
    ];

    const createPromptText = () => {
        let text = `Generate breakfast using these ingredients: ${gptPromptText.join(", ")}. Other settings: ${infoFromOptions}`;
        console.log('Prompt text: ', text);
        return text;
    };

    const handleIngredientClick = (ingredient) => {
        setGptPromptText(prev => [...prev, ingredient.name]);
    };

    const generateImage = async (promptText) => {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apikey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: promptText,
                n: 1,
                size: "512x512",
            }),
        };

        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", options);
            const data = await response.json();
            setImageUrl(data.data[0].url);
        } catch (error) {
            console.error(error);
        }
    };
    const Choose = () => {
        // ваш код...
    
        return (
            <div className="flex flex-col items-center bg-lightblue-100 p-5">
                <div className="flex flex-wrap pt-10">
                    {ingredientsData.map((ingredient, index) => (
                        <Ingredient
                            key={index}
                            imageSrc={ingredient.imageSrc}
                            onClick={() => handleIngredientClick(ingredient)}
                        />
                    ))}
                    <div className="mt-5">
                        <h3 className="text-xl font-bold">Выбрать повессию:</h3>
                        <ul className="list-disc pl-5">
                            {gptPromptText.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => generateImage(createPromptText())}
                        className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-500 transition"
                    >
                        Составить план
                    </button>
                </div>
                <div className="w-full mt-10">
                    <Options setInfoFromOptions={setInfoFromOptions} />
                    <div className="mt-5">
                        <p>Картинка плана тут:</p>
                        <img src={imageUrl} width={300} height={300} className="bg-sky-300 rounded-2xl border-2 border-black" alt="generated image" />
                    </div>
                </div>
            </div>
        );
    };
    

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap pt-[120px]">
                {ingredientsData.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        imageSrc={ingredient.imageSrc}
                        onClick={() => handleIngredientClick(ingredient)}
                    />
                ))}
                <div>
                    <h3>Selected Ingredients:</h3>
                    <ul>
                        {gptPromptText.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={() => generateImage(createPromptText())}
                    className="mt-4 px-6 h-14 py-3 bg-indigo-600 text-white rounded-xl text-lg hover:bg-indigo-500 transition duration-200"
                >
                    Generate Dish
                </button>
            </div>
            <div className="w-full">
                <Options setInfoFromOptions={setInfoFromOptions} />
                <div className="text-center flex justify-center ">
                    <img src={imageUrl} width={200} height={200} className="bg-sky-300 rounded-2xl border-2 border-blue-800 w-[300px] h-[300px] mr-10 mb-10" alt="Картинка плана тут" />
                </div>
            </div>
        </div>
    );
};

export default Choose;
