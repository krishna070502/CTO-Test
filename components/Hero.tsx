export default function Hero() {
  return (
    <section id="hero" className="relative bg-blue-900 text-white pt-24 pb-12 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span className="block">Welcome to</span>
          <span className="block text-blue-200 mt-2">SHIVA TRADERS</span>
        </h1>
        <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Your trusted partner in premium poultry trading and distribution. We deliver quality, reliability, and excellence to your doorstep.
        </p>
        <div className="mt-8 flex gap-4 flex-col sm:flex-row justify-center">
          <a href="#contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 md:py-4 md:text-lg transition-colors">
            Get in Touch
          </a>
          <a href="#services" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 md:py-4 md:text-lg transition-colors">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
