import dish from '../../public/images/people.png';

const InfoBlock = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly bg-lightblue-200 h-96 p-5">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold mb-2">Выберай провессию и получи план действие</h1>
                <p className="mb-4">Ты можешь выбрать лубую профессию и Chat GPT все зделает за тебя.</p>
                <button className="hover:bg-blue-500 border-2 border-blue-800 px-5 py-3 bg-blue-800 rounded-full text-white text-lg mr-2">dosik</button>
                <button className="px-5 py-3 hover:bg-blue-800 rounded-full border-2 border-blue-800 text-white text-lg">beka</button>
            </div>
            <div>
                <img src={dish} className='w-80 hidden sm:block' alt="dish" />
            </div>
        </div>
    );
};


export default InfoBlock;
