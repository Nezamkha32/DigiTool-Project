const CTA = () => {
  return (
    <section className="bg-linear-to-br from-purple-600 to-violet-700 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
          Join 50,000+ professionals who trust DigiTools to power their digital projects every day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-50 active:scale-95 text-purple-700 px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg">
            Explore Tools
          </button>
          <button className="border-2 border-white/40 hover:border-white text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:bg-white/10">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA