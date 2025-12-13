export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Premium Quality",
      description: "We source only the healthiest birds and ensure rigorous quality checks at every stage."
    },
    {
      title: "Reliable Delivery",
      description: "Our efficient logistics network ensures your orders arrive on time, every time."
    },
    {
      title: "Competitive Pricing",
      description: "Direct sourcing and efficient operations allow us to offer the best market rates."
    },
    {
      title: "Hygiene Standards",
      description: "We adhere to strict food safety and hygiene protocols for your peace of mind."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Why Choose SHIVA TRADERS?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              In a competitive market, we stand out by prioritizing our customers and the quality of our products. Here is why businesses trust us for their poultry needs.
            </p>
            <div className="mt-8">
               <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors">
                  Contact Us Today
               </a>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-6 shadow-sm border border-blue-700">
                <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
