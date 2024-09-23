const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-purple-400 text-white">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl">Страница не найдена</p>
            <a href="/" className="mt-4 text-lg underline">
                Вернуться на главную
            </a>
        </div>
    );
};

export default PageNotFound;
