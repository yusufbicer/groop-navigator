import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/CustomButton";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";

const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  
  // If user is already logged in, redirect to home
  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isSignIn) {
        const { error } = await signIn(email, password);
        if (!error) {
          navigate("/");
        }
      } else {
        const { error } = await signUp(email, password, { first_name: firstName, last_name: lastName });
        if (!error) {
          // Keep on the same page so they can sign in after registration
          setIsSignIn(true);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleView = () => {
    setIsSignIn(!isSignIn);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="min-h-screen bg-groop-black py-12 flex items-center">
      <Container className="max-w-md mx-auto">
        <div className="glass-panel rounded-xl p-8 backdrop-blur-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isSignIn ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-white/70">
              {isSignIn 
                ? "Sign in to access your Groop account" 
                : "Join Groop and simplify your import business"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isSignIn && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-1">
                      First Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                        <User className="h-5 w-5" />
                      </span>
                      <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-groop-purple/50 focus:border-transparent"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-1">
                      Last Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                        <User className="h-5 w-5" />
                      </span>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-groop-purple/50 focus:border-transparent"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                  <Mail className="h-5 w-5" />
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-groop-purple/50 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-white/80">
                  Password
                </label>
                {isSignIn && (
                  <a href="#" className="text-xs text-groop-purple hover:text-groop-accent">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                  <Lock className="h-5 w-5" />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-groop-purple/50 focus:border-transparent"
                  placeholder="••••••••"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              fullWidth
              isLoading={isLoading}
              className="mt-6"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="ml-2 text-groop-purple hover:text-groop-accent"
                onClick={toggleView}
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
