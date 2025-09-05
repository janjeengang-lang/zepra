import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Eye, Globe, Keyboard, Mail, FileText, UserCheck, Users, Languages, MessageSquare, Shield, Cloud, History } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Answers',
      description: 'Crafts context-aware survey responses using Google Gemini and OpenRouter models.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'OCR Scanner',
      description: 'Pull text from any on-screen image in a click.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'IP Information',
      description: 'Reveal precise IP details—location, ISP, and more.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'IP Qualification',
      description: 'Score your IP\u2019s trustworthiness\u2014risk, blacklist, and anonymity\u2014before you launch a task.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Cloud,
      title: 'Zebra VPS',
      description: 'Spin up virtual Windows or Android machines inside the extension for isolated testing and privacy.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: History,
      title: 'Activity Log',
      description: 'Audit every visit with a searchable history and one-click Custom Web add.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Keyboard,
      title: 'Human-like Typing',
      description: 'Fills forms with natural cadence to stay under the radar.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Mail,
      title: 'Permanent Email',
      description: 'Generate long-lived burner inboxes that persist until you wipe them.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'Notepad',
      description: 'Store snippets and notes inside the extension for instant recall.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: UserCheck,
      title: 'AI Humanizer',
      description: 'Rewrite AI output into undetectable human-sounding text.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'User Info Generator',
      description: 'Spin up plausible personas\u2014names, addresses, phones\u2014for any form.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Languages,
      title: 'Translation',
      description: 'Translate anything on the fly to reach any audience.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Custom Prompt',
      description: 'Inject your own prompts for tailored automation.',
      color: 'from-yellow-400 to-orange-500'
    }
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
              Power Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              An arsenal built to dominate any workflow
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-black/50 border-green-500/20 hover:border-green-500/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)',
              }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-0.5 animate-pulse group-hover:animate-spin`}>
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-yellow-400/20 animate-ping group-hover:animate-pulse" />
                </div>
                <CardTitle 
                  className="text-xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                  }}
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Chat Animation */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-black/70 rounded-2xl p-8 border border-green-500/20" style={{
            boxShadow: '0 0 40px rgba(0, 255, 0, 0.1)',
          }}>
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">AI in Action</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">AI</span>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 max-w-md">
                    <p className="text-green-300 typing-animation">Parsing prompt and profile...</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">AI</span>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 max-w-md">
                    <p className="text-green-300">Profile locked. Responding with answers that stay true to your persona for qualification.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">AI</span>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 max-w-md">
                    <p className="text-green-300">Write All engaged—typing multiple answers with smart delays.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}