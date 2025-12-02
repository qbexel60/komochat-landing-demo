import {
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const Story = () => {
  const storySteps = [
    {
      icon: AlertTriangle,
      title: 'The Challenge',
      subtitle: 'Traditional chatbots feel robotic and frustrate customers',
      description:
        'Businesses were losing customers to instant, generic responses that felt cold and impersonal. Customers wanted real conversations, not robotic interactions.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-red-600',
    },
    {
      icon: Lightbulb,
      title: 'The Innovation',
      subtitle: 'AI that waits, listens, and responds like a human',
      description:
        'We developed AI that understands context, remembers conversations, and responds naturally. No more instant robotic replies—just genuine, thoughtful interactions.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-yellow-600',
    },
    {
      icon: CheckCircle,
      title: 'The Result',
      subtitle: '24/7 sales and support that customers actually enjoy',
      description:
        'Businesses now provide round-the-clock service that feels personal and engaging. Customers get the human touch they crave, available whenever they need it.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -right-32 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              The Problem
            </span>{' '}
            We Solved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The journey from frustrating chatbots to AI that feels genuinely
            human
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-full">
              <div className="absolute left-0 w-8 h-8 bg-red-500 rounded-full transform -translate-y-3.5 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full transform -translate-y-3.5 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute right-0 w-8 h-8 bg-green-500 rounded-full transform -translate-y-3.5 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Story Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16">
            {storySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className={`group relative animate-fade-in-up animate-delay-${
                    (index + 1) * 100
                  }`}
                >
                  {/* Mobile Timeline Connector */}
                  {index < storySteps.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-20 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                  )}

                  {/* Card */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg card-hover border border-gray-100 group-hover:border-gray-200">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${step.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 interactive`}
                    >
                      <IconComponent
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${step.color}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <h4
                        className={`text-base sm:text-lg font-semibold ${step.color}`}
                      >
                        {step.subtitle}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Gradient Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} rounded-b-xl sm:rounded-b-2xl`}
                    ></div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < storySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 font-medium">
            <CheckCircle className="w-5 h-5 mr-2" />
            Experience the difference human-like AI makes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
