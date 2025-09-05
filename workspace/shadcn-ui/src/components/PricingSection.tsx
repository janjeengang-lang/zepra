import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap } from 'lucide-react';

export default function PricingSection() {
  const features = [
    'Advanced IP Qualification',
    'Integrated Zebra VPS Access',
    'Full Activity Log & History',
    'Unlimited AI-powered survey automation',
    'Stealthy human-style typing',
    'Instant OCR text extraction',
    'IP information lookup',
    'Persistent Custom Web browser',
    "'Write Here' text bridge",
    'Priority customer support',
    'Regular feature updates'
  ];

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
              Straightforward Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get every pro feature for one flat monthly rate
            </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card 
            className="bg-gradient-to-br from-black/80 to-gray-900/80 border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
            style={{
              boxShadow: '0 0 50px rgba(0, 255, 0, 0.2), 0 0 100px rgba(255, 255, 0, 0.1)',
            }}
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-yellow-500/5 to-purple-500/5 animate-pulse" />
            
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500 to-yellow-500 text-black px-6 py-1 rounded-full font-bold text-sm flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span>MOST POPULAR</span>
              </div>
            </div>

            <CardHeader className="text-center pt-8 relative z-10">
                <CardTitle className="text-3xl font-bold text-white mb-2">Pro Plan</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Full power toolkit for serious operators
                </CardDescription>
              <div className="mt-6">
                <div className="flex items-center justify-center space-x-2">
                  <span 
                    className="text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 0 30px rgba(0, 255, 0, 0.5)',
                    }}
                  >
                    $5
                  </span>
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">per</div>
                    <div className="text-gray-400 text-sm">month</div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-400 hover:to-yellow-400 text-black font-bold py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                style={{
                  boxShadow: '0 0 30px rgba(0, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.2)',
                }}
              >
                <span className="relative z-10">Subscribe Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Cancel anytime • No hidden fees • Instant activation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 rounded-full px-6 py-3 border border-green-500/20">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span className="text-green-400 font-semibold">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}