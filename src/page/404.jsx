import { useNavigate } from 'react-router-dom';
function Error() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Realizar la redirección a la ruta deseada
        navigate('/');
    };
    return (<div className=" text-white w-full min-h-screen bg-black flex flex-col justify-center items-center">
        <p className="text-4xl font-mono mb-8">ERROR: ESTA PÁGINA NO EXISTE </p>
        <p className="text-xl font-sans mb-4">Dirijase al home, por favor 🤭</p>
        <button onClick={handleClick} className="bg-blue-500 p-2 px-6 rounded-lg"> HOME </button>
    </div>);
}

export default Error;