
export const ViewImages = () => {
  return (
      <main className="flex flex-col justify-center items-center min-h-screen bg-slate-900">
          <h2 className="text-white text-2xl text-center">Aquí se visualizará la imagen más reciente</h2>
          <div className="max-sm:w-[350px] max-sm:h-[350px] sm:w-[400px] sm:h-[400px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[800px] bg-slate-300 rounded-lg mt-5 flex justify-center items-center object-cover">
              <p>No hay imagen ..</p>
          </div>
      </main>
  )
}

