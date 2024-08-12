import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <main className="flex justify-center items-center min-h-screen bg-slate-900">
            <section className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-8xl text-slate-200 font-semibold">Bienvenidos a <mark className="rounded-md">Evento Foto</mark></h1>
                <p className="text-2xl text-slate-500 font-semibold">En este sitio podras compartir imagenes en tiempo real o de tu galeria.</p>
                <div className="flex justify-center items-center gap-3">
                    <Link className="bg-orange-300 h-14 w-44 flex justify-center items-center rounded-md text-lg text-black" to="/view-images" target='_blank'>Ver las imagenes</Link>
                    <Link className="bg-blue-300 h-14 w-36 flex justify-center items-center rounded-md text-lg text-black" to="/scanner-qr" target='_blank' >Escanear QR</Link>
                </div>
            </section>
        </main>
    )
}

