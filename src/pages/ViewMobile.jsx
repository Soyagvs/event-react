import { useState, useRef, useEffect } from 'react';
import { ModalMobile } from '../components/ModalMobile';

export const ViewMobile = () => {
    const [image, setImage] = useState(null);
    const [isCamera, setIsCamera] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (isCamera) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                })
                .catch((err) => {
                    console.error("Error accessing the camera: ", err);
                });
        } else if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    }, [isCamera]);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setShowModal(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTakePhoto = () => {
        setIsCamera(true);
    };

    const handleUploadPhoto = () => {
        if (isCamera) {
            // Asegurarse de que la cámara esté apagada antes de seleccionar una imagen de la galería
            setIsCamera(false);
        }
        document.getElementById('file-input').click();
    };

    const handleFileSelect = (event) => {
        handleImageChange(event);
    };

    const handleSend = () => {
        // Lógica para enviar la foto
        console.log('Foto enviada');
        setShowModal(false);
    };

    const handleTakeSnapshot = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setImage(canvas.toDataURL('image/png'));
        setIsCamera(false);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setImage(null);
    };

    return (
        <main className="min-h-screen flex justify-center items-center bg-slate-900">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-center text-lg text-white font-semibold">
                    Elige qué herramienta quieres utilizar
                </h1>

                <button
                    className="flex justify-center items-center w-32 h-16 bg-green-300 rounded-lg text-black"
                    onClick={handleUploadPhoto}
                >
                    Subir foto
                </button>
                <button
                    className="flex justify-center items-center w-32 h-16 bg-blue-300 rounded-lg text-black"
                    onClick={handleTakePhoto}
                >
                    Tomar foto
                </button>

                <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                />

                {isCamera && (
                    <div className="camera-container">
                        <video ref={videoRef} width="320" height="240" autoPlay></video>
                        <button onClick={handleTakeSnapshot} className='bg-blue-300 text-black px-4 py-2 rounded'>Tomar foto</button>
                        <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }}></canvas>
                    </div>
                )}

                <ModalMobile
                    image={image}
                    onSend={handleSend}
                    onClose={handleCloseModal}
                />
            </div>
        </main>
    );
};
