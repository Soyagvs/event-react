export const ModalMobile = ({ image, onSend, onClose }) => {
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
                        onClick={onSend}
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