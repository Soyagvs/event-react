import { useState, useEffect } from 'react';

export const ViewImages = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000'); // Cambia la URL al de tu servidor en producción

        ws.onopen = () => {
            console.log('Conexión WebSocket establecida');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Mensaje recibido del WebSocket:', data);
            if (data.imageUrl) {
                // Asegúrate de que imageUrl sea una URL completa
                const completeImageUrl = `http://localhost:5000${data.imageUrl}`;
                setImageUrl(completeImageUrl);
                setError(null); // Limpia cualquier error previo
            }
        };

        ws.onerror = (error) => {
            console.error('Error en WebSocket:', error);
        };

        ws.onclose = () => {
            console.log('Conexión WebSocket cerrada');
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-slate-900">
            <h2 className="text-white text-2xl text-center">Aquí se visualizará la imagen más reciente</h2>
            <div className="max-sm:w-[350px] max-sm:h-[350px] sm:w-[400px] sm:h-[400px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[800px] bg-slate-900 rounded-lg mt-5 flex justify-center items-center object-cover">
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : imageUrl ? (
                    <img src={imageUrl} alt="Imagen Reciente" className="w-full h-full object-cover rounded-lg" />
                ) : (
                    <p className="text-gray-500">No hay imagen ..</p>
                )}
            </div>
        </main>
    );
};
