import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="bg-white text-primary px-6 py-4 shadow sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="VelionIQ Logo" className="h-16 w-auto max-h-20 object-contain" />
        </Link>

        {/* Navigation */}
        <div className="space-x-6 flex items-center font-medium">
          <Link to="/industries" className="hover:underline">Industries</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
          <Link to="/about" className="hover:underline">About</Link>

          {isHome ? (
            <>
              <ScrollLink
                to="products"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                Product Suite
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="ml-4 bg-primary text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition cursor-pointer"
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <Link
              to="/#contact"
              className="ml-4 bg-primary text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition"
            >
              Contact
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
