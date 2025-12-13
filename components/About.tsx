export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Dedicated to excellence in the poultry industry.
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative mb-8 lg:mb-0">
             <div className="bg-blue-100 rounded-lg p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To supply the highest quality poultry products while maintaining the highest standards of food safety, animal welfare, and customer satisfaction.
                </p>
             </div>
          </div>
          
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p className="mb-6">
              <strong className="text-gray-900">SHIVA TRADERS</strong> is a premier poultry trading and distribution company serving the region with pride. We specialize in sourcing and supplying fresh, high-quality poultry products to a diverse clientele including retailers, restaurants, hotels, and wholesalers.
            </p>
            <p className="mb-6">
              With deep roots in the agricultural sector, we understand the importance of quality and reliability. Our supply chain is optimized to ensure that our products reach you in the freshest condition possible, adhering to strict hygiene and safety standards.
            </p>
            <p>
              Whether you are a small local business or a large-scale operation, we have the capacity and expertise to meet your poultry requirements efficiently and affordably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
