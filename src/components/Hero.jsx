import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Brain, Clock, MessageSquare, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionizing Social Media Business Automation
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              The AI Agent
            </span>
            <span className="block">That Feels Human</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            24/7 intelligent automation that remembers, understands, and
            responds naturally.
            <span className="text-teal-600 font-semibold">
              {' '}
              Never miss a customer again with AI that feels genuinely human.
            </span>
          </p>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-200/50 shadow-sm card-hover animate-fade-in-up">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3 md:mb-4 interactive">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                Remembers Everything
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Customer history, preferences, past orders
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-200/50 shadow-sm card-hover animate-fade-in-up animate-delay-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-3 md:mb-4 interactive">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                Waits & Responds Naturally
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                No robotic instant replies
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-200/50 shadow-sm card-hover animate-fade-in-up animate-delay-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-3 md:mb-4 interactive">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                Understands Context
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Follows conversation flow intelligently
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href="https://www.youtube.com/shorts/E8cqkUPk8-c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] touch-manipulation smooth-hover"
              >
                Watch Demo
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </a>
            <a
              href="https://wa.me/+8801982780739?text=Hi! I'm interested in komoChat by Qbexel. Can you tell me more about it?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 min-h-[48px] touch-manipulation smooth-hover"
              >
                Try komoChat
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-900 text-sm mb-4">
              Supported Platforms For komoChat
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-60">
              <div className="text-lg md:text-2xl font-bold text-gray-900">
                Facebook
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">
                Instagram
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">
                WhatsApp
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">
                Messenger
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
