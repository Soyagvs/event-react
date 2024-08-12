import { useState } from 'react';

export const ModalMobile = ({ image, onSend, onClose }) => {
    const [isSent, setIsSent] = useState(false);

    const handleSend = () => {
        onSend();
        setIsSent(true);
        setTimeout(() => {
            setIsSent(false); // También reiniciar el estado para futuras acciones
        }, 2000); // Mostrar el mensaje de confirmación durante 2 segundos
    };

    const handleClose = () => {
        setIsSent(false); // Reiniciar el estado cuando se cierra el modal
        onClose();
    };

    if (isSent) {
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
                <div className="bg-white p-4 rounded-lg relative flex flex-col items-center">
                    <button
                        className="absolute top-2 right-2 text-red-500 text-xl bg-black rounded-full w-7 h-7"
                        onClick={handleClose}
                    >
                        x
                    </button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <p className="text-green-500 text-xl mt-2">Imagen enviada correctamente</p>
                </div>
            </div>
        );
    }

    if (!image) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
            <div className="bg-white p-4 rounded-lg relative">
                <button
                    className="absolute top-2 right-2 text-black"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img src={image} alt="Preview" className="w-64 h-64 object-cover" />
                <div className="flex gap-3 mt-3">
                    <button
                        className="bg-blue-300 text-black px-4 py-2 rounded"
                        onClick={handleSend}
                    >
                        Enviar
                    </button>
                    <button
                        className="bg-red-300 text-black px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};
