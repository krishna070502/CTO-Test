export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SHIVA TRADERS</h3>
            <p className="text-gray-400">
              Your trusted partner in premium poultry trading and distribution.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-2">Follow us on social media for updates.</p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <a href="#" className="text-gray-400 hover:text-white">
                 <span className="sr-only">Facebook</span>
                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                 </svg>
               </a>
               <a href="#" className="text-gray-400 hover:text-white">
                 <span className="sr-only">Instagram</span>
                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm0-2H12.24c-2.665 0-3.001.012-4.053.06-1.096.05-1.84.229-2.512.49A6.908 6.908 0 003.543 2.673 6.908 6.908 0 001.406 4.81c-.261.672-.44 1.416-.49 2.512-.048 1.052-.06 1.388-.06 4.053v.352c0 2.665.012 3.001.06 4.053.05 1.096.229 1.84.49 2.512a6.908 6.908 0 002.137 2.137 6.908 6.908 0 002.137 2.137c.672.261 1.416.44 2.512.49 1.052.048 1.388.06 4.053.06h.352c2.665 0 3.001-.012 4.053-.06 1.096-.05 1.84-.229 2.512-.49a6.908 6.908 0 002.137-2.137 6.908 6.908 0 002.137-2.137c.261-.672.44-1.416.49-2.512.048-1.052.06-1.388.06-4.053v-.352c0-2.665-.012-3.001-.06-4.053-.05-1.096-.229-1.84-.49-2.512a6.908 6.908 0 00-2.137-2.137 6.908 6.908 0 00-2.137-2.137c-.672-.261-1.416-.44-2.512-.49-1.052-.048-1.388-.06-4.053-.06h-.352zm.165 6.406a5.594 5.594 0 100 11.188 5.594 5.594 0 000-11.188zm0 9.188a3.594 3.594 0 110-7.188 3.594 3.594 0 010 7.188zm5.955-8.513a1.33 1.33 0 110 2.66 1.33 1.33 0 010-2.66z" clipRule="evenodd" />
                 </svg>
               </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} SHIVA TRADERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
