import { Qr } from "../ui/Qr"

export const ScannerQr = () => {
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-slate-900">

            <div className="flex flex-col justify-center items-center gap-5   ">
                <h2 className="text-3xl text-white font-semibold text-center">Escane el codigo QR con el dispositivo movil</h2>
                <div>
                    <Qr />
                </div>
            </div>
        </main>
    )
}

