import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Copy, Edit3, Globe } from 'lucide-react';

export default function CustomWebSection() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-white bg-clip-text text-transparent mb-6"
              style={{
                textShadow: '0 0 30px rgba(0, 255, 0, 0.5)',
              }}
            >
              'Write Here' & Custom Web
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Shift text between windows instantly with our 'Write Here' bridge and persistent in-extension browser
            </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Demo */}
            <div className="space-y-6">
              <Card className="bg-black/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Custom Web Browser</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Built-in browser that never forgets your session
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-400 mb-2">Selected text</div>
                    <div className="bg-green-500/10 p-2 rounded border-l-4 border-green-500 animate-pulse">
                      "This is the perfect solution for our automation needs."
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-full px-6 py-3">
                  <Copy className="w-6 h-6 text-green-400 animate-bounce" />
                  <ArrowRight className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <Edit3 className="w-6 h-6 text-purple-400 animate-bounce" />
                </div>
              </div>

              <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-yellow-400 flex items-center space-x-2">
                    <Edit3 className="w-5 h-5" />
                    <span>Main Page Text Field</span>
                  </CardTitle>
                    <CardDescription className="text-gray-400">
                      Auto-filled with your chosen text
                    </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="border border-yellow-500/30 rounded p-3 bg-yellow-500/5">
                      <div className="text-yellow-400 text-sm mb-1">Auto-typing in progress...</div>
                      <div className="font-mono text-white typing-animation">
                        This is the perfect solution for our automation needs.
                      </div>
                      <div className="w-2 h-5 bg-yellow-400 inline-block animate-blink ml-1"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Description */}
            <div className="space-y-8">
              <div>
                <h3 
                  className="text-3xl font-bold text-cyan-400 mb-4"
                  style={{
                    textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                  }}
                >
                    Revolutionary Text Transfer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The 'Write Here' system now speaks in JSON with the AI for 100% accurate address and answer parsing.
                  Select any text in the Custom Web window and watch it appear in your active field instantly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                      <h4 className="text-xl font-semibold text-purple-400 mb-2">Persistent Web Browser</h4>
                      <p className="text-gray-400">
                        Built-in browser that keeps sessions and data alive across uses.
                      </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                      <h4 className="text-xl font-semibold text-green-400 mb-2">Select & Copy</h4>
                      <p className="text-gray-400">
                        Highlight text in the Custom Web window and it's ready to send.
                      </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                      <h4 className="text-xl font-semibold text-yellow-400 mb-2">Auto-Type</h4>
                      <p className="text-gray-400">
                        Watch the text auto-type into your active field with human pacing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-red-400 mb-2">Remove Cookies</h4>
                      <p className="text-gray-400">
                        One tap clears site cookies for a clean session reset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}