
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/CustomButton";
import { Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-groop-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-gradient">Groop</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-white/80 hover:text-white transition-colors"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-groop-purple flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90 text-sm">
                    {user.email?.split('@')[0]}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  icon={<LogOut className="h-4 w-4" />}
                  onClick={handleSignOut}
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate("/auth")}
                >
                  Log in
                </Button>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => navigate("/auth")}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-groop-dark-blue/95 backdrop-blur-md shadow-lg py-4 animate-fade-in">
          <Container>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                {user ? (
                  <>
                    <div className="flex items-center px-4 py-2 space-x-2">
                      <div className="w-8 h-8 rounded-full bg-groop-purple flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/90">
                        {user.email?.split('@')[0]}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      fullWidth
                      icon={<LogOut className="h-4 w-4" />}
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      fullWidth
                      onClick={() => {
                        navigate("/auth");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Log in
                    </Button>
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => {
                        navigate("/auth");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
