import { useNavigate } from 'react-router-dom';
function PageError() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Realizar la redirección a la ruta deseada
        navigate('/');
    };
    return (<div className=" text-white w-full min-h-screen bg-black flex flex-col justify-center items-center">
        <p className="text-4xl font-mono mb-8">Error Al entrontrar la pagina</p>
        <p className="text-xl font-sans mb-4">Intentelo de nuevo por favor 🤭</p>
        <button onClick={handleClick} className="bg-blue-500 p-2 px-6 rounded-lg"> regresar </button>
    </div>);
}

export default PageError;