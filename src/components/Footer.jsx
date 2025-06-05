const Footer = () => {
  return (
    <footer className="bg-[#003049] text-white py-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-4">
          <img
            src="/public/Icone.svg" 
            alt="BeHeart Logo"
            className="h-8"
          />
          <p className="text-sm text-gray-300">© 2025 BeHeart. All rights reserved.</p>
        </div>

        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#how" className="hover:text-white">How It Works</a></li>
          <li><a href="#form" className="hover:text-white">Assessment</a></li>
          <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
