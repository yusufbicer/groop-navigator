
import React from "react";
import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Container from "../ui/Container";
import CustomButton from "../ui/CustomButton";

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
  };

  return (
    <header className="py-4 bg-groop-black/90 border-b border-white/10 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Groop</span>
            <span className="text-sm text-groop-purple ml-1">zero</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center">
                <div className="hidden md:block mr-4">
                  <p className="text-white text-sm">
                    Welcome, {user.user_metadata.first_name || 'User'}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Link to="/profile">
                    <button className="p-2 rounded-full bg-groop-purple/10 text-white/80 hover:text-white hover:bg-groop-purple/20 transition-colors">
                      <User size={18} />
                    </button>
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="p-2 rounded-full bg-groop-purple/10 text-white/80 hover:text-white hover:bg-groop-purple/20 transition-colors"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/auth">
                <CustomButton size="sm">
                  Sign In
                </CustomButton>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
