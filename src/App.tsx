import './App.css'
// import Header from './compontents/Header'

function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Header /> */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img src="https://via.placeholder.com/50" alt="Logo" className="h-12 w-12" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Concierge Spine</h1>
                <p className="text-sm text-gray-500">Your trusted care partner</p>
              </div>
            </div>
            <div>
              <a href="#schedule" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </header>

      <main className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Concierge Spine</h1>
          <p className="mt-2 text-lg text-gray-600">You're not just another patient.</p>
        </div>

        <div className="mt-10">
          <div className="relative w-full max-w-3xl mx-auto aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow">
          <iframe width="768" height="432" src="https://www.youtube.com/embed/6MYLvWphADk?si=QyKYdTuVVIspeqyE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>

        <div className="mt-12">
          <a href="#schedule" className="px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Schedule Consultation</a>
        </div>
      </main>
    </>
  )
}

export default App
