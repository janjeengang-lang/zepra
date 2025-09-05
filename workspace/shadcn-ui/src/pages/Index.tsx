import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CustomWebSection from '@/components/CustomWebSection';
import PricingSection from '@/components/PricingSection';
import ZebraLogo from '@/components/ZebraLogo';

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Custom Web Section */}
        <CustomWebSection />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Footer */}
        <footer className="py-12 border-t border-green-500/20 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center space-y-6">
              <ZebraLogo size="md" />
              <div className="text-center">
                <h3 
                  className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-2"
                  style={{
                    textShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                  }}
                >
                  Zepra
                </h3>
                <p className="text-gray-400">
                  Own Every Survey with AI-Driven Precision
                </p>
              </div>
              <div className="flex space-x-8 text-sm text-gray-500">
                <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-green-400 transition-colors">Support</a>
                <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
              </div>
              <div className="text-center text-gray-600 text-sm">
                <p>&copy; 2024 Zepra. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}