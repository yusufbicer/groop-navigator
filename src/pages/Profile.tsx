
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Edit3 } from "lucide-react";
import Container from "@/components/ui/Container";
import CustomButton from "@/components/ui/CustomButton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Profile: React.FC = () => {
  const { user, profile, isLoading, refreshProfile } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/auth");
      return;
    }

    if (profile) {
      setFirstName(profile.first_name || "");
      setLastName(profile.last_name || "");
    }
  }, [user, profile, isLoading, navigate]);

  const handleSaveProfile = async () => {
    if (!user) return;
    
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: firstName,
          last_name: lastName,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) {
        toast({
          title: "Error updating profile",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated",
      });
      
      setIsEditMode(false);
      refreshProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error updating profile",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-groop-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-groop-black flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-10">
        <Container className="mt-10">
          <div className="glass-panel rounded-xl p-8 backdrop-blur-xl max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-white">Your Profile</h1>
              {!isEditMode && (
                <CustomButton 
                  size="sm" 
                  onClick={() => setIsEditMode(true)}
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </CustomButton>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-groop-purple/20 rounded-full flex items-center justify-center mr-4">
                  {profile?.avatar_url ? (
                    <img 
                      src={profile.avatar_url} 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-groop-purple" />
                  )}
                </div>
                <div>
                  {isEditMode ? (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-white/70 text-sm mb-1">First Name</label>
                        <input 
                          type="text" 
                          value={firstName} 
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm mb-1">Last Name</label>
                        <input 
                          type="text" 
                          value={lastName} 
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white"
                        />
                      </div>
                    </div>
                  ) : (
                    <h2 className="text-xl font-medium text-white">
                      {profile?.first_name || ""} {profile?.last_name || ""}
                    </h2>
                  )}
                  <p className="text-white/70 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {user?.email}
                  </p>
                </div>
              </div>
              
              {isEditMode && (
                <div className="flex space-x-3 justify-end mt-6">
                  <button
                    onClick={() => setIsEditMode(false)}
                    className="px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <CustomButton 
                    onClick={handleSaveProfile} 
                    isLoading={isSaving}
                  >
                    Save Changes
                  </CustomButton>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
