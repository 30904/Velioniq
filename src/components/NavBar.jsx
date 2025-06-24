import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Flowgenix', description: 'Document Automation', href: '/flowgenix' },
    { name: 'AutoRecon', description: 'Product Matching', href: '/autorecon' },
    { name: 'PriceGuard', description: 'Rate Anomaly Detection', href: '/priceguard' },
    { name: 'SmartSpec', description: 'Product Specification', href: '/smartspec' },
    { name: 'InboxIntelli', description: 'Email-to-ERP Bridge', href: '/inboxintelli' },
    { name: 'ClaimWise', description: 'Warranty Claim Validation', href: '/claimwise' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface/95 backdrop-blur-lg shadow-elegant border-b border-secondary-100' 
        : 'bg-surface/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="VelionIQ Logo" 
              className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Industries Link */}
            <Link 
              to="/industries" 
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <span>Product Suite</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-surface rounded-2xl shadow-dreamy border border-secondary-100 transition-all duration-300 ${
                  isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <div className="p-6 space-y-4">
                  <h3 className="text-sm font-semibold text-secondary-900 mb-4">AI-Powered Solutions</h3>
                  {products.map((product, index) => (
                    <Link
                      key={index}
                      to={product.href}
                      className="block p-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 group"
                    >
                      <div className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                        {product.name}
                      </div>
                      <div className="text-sm text-secondary-600 mt-1">
                        {product.description}
                      </div>
                    </Link>
                  ))}
                  {isHome && (
                    <div className="pt-4 border-t border-secondary-100">
                      <ScrollLink
                        to="products"
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="block p-3 rounded-xl hover:bg-accent-50 transition-colors duration-200 cursor-pointer text-accent-600 font-semibold"
                        onClick={() => setIsProductsDropdownOpen(false)}
                      >
                        View All Products →
                      </ScrollLink>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Resources Link */}
            <Link 
              to="/resources" 
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* About Link */}
            <Link 
              to="/about" 
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Contact Button */}
            {isHome ? (
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                Contact
              </ScrollLink>
            ) : (
              <Link
                to="/#contact"
                className="btn-primary"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-secondary-100">
            <Link 
              to="/industries" 
              className="block py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industries
            </Link>

            {/* Mobile Products Section */}
            <div className="space-y-2">
              <div className="py-2 text-secondary-900 font-semibold">Products</div>
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.href}
                  className="block py-2 pl-4 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/resources" 
              className="block py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>

            <Link 
              to="/about" 
              className="block py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Contact Button */}
            <div className="pt-4">
              {isHome ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="btn-primary w-full text-center cursor-pointer inline-block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </ScrollLink>
              ) : (
                <Link
                  to="/#contact"
                  className="btn-primary w-full text-center inline-block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
