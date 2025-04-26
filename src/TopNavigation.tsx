import { useState } from "react";
import { Button } from "./components/ui/button";

// New Navigation component
export const TopNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="inline-block">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stunning
            </span>
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Showcase</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Resources</a>
        </div>
        <div className="flex items-center">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-4 py-2 shadow-md hidden md:block">
            Sign Up
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2 p-2 rounded-md text-gray-600 hover:text-purple-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {!isMobileMenuOpen ? (
                // Hamburger icon
                <>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              ) : (
                // Close icon
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg absolute w-full left-0 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100">Features</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100">Showcase</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100">Resources</a>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-4 py-2 shadow-md w-full">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
