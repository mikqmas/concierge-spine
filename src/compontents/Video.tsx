import background from '/background.webm'
import bgpreview from '/bgpreview.jpg'

export default function Video() {
    return (
        <div className="relative h-screen w-full">
            <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={bgpreview}
            className="absolute top-0 left-0 w-full h-full object-cover"
            >
          <source src={background} type="video/webm" />

          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full select-none">
          <h1 className="text-white text-7xl font-bold mb-4 poppins-semibold">Concierge Spine</h1>
          <p className="text-white text-2xl">You're not just another patient.</p>
        </div>
      </div>
    )
}
