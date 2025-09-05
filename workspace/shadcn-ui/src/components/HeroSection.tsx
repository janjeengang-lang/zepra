import { Button } from '@/components/ui/button';
import ZebraLogo from './ZebraLogo';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Own Every Survey';

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (isTyping && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100 + Math.random() * 100); // Variable typing speed
      } else if (isTyping && currentIndex >= fullText.length) {
        // Pause at the end before clearing
        timeoutId = setTimeout(() => {
          isTyping = false;
          clearText();
        }, 2000);
      }
    };

    const clearText = () => {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
        timeoutId = setTimeout(clearText, 50);
      } else {
        // Reset and start typing again
        currentIndex = 0;
        isTyping = true;
        timeoutId = setTimeout(typeText, 500);
      }
    };

    // Start the typing effect
    typeText();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [displayText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <ZebraLogo size="xl" className="mx-auto" />
          
          <div className="space-y-4">
            <h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 min-h-[1.2em] flex items-center justify-center"
              style={{
                textShadow: '0 0 30px rgba(0, 255, 0, 0.5), 0 0 60px rgba(255, 255, 0, 0.3)',
              }}
            >
              <span className="font-mono">
                {displayText}
                <span 
                  className={`inline-block w-1 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    height: '1em',
                    animation: 'none',
                  }}
                >
                  |
                </span>
              </span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
              }}
            >
              Zepra is the hacker-grade AI sidekick that obliterates survey work with ruthless precision.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-400 hover:to-yellow-400 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              style={{
                boxShadow: '0 0 30px rgba(0, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.2)',
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}