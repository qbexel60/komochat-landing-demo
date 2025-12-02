import { Target, Eye, Heart, Lightbulb, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Human-AI Synergy',
      description:
        'We believe the best results come from combining human creativity, empathy, and intuition with AI efficiency, memory, and scalability.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Pushing the boundaries of AI technology to create solutions that feel genuinely human and make a meaningful difference.',
    },
    {
      icon: Users,
      title: 'Customer-Centricity',
      description:
        "Every feature we build is designed with our customers' success in mind, ensuring their customers feel heard and valued.",
    },
    {
      icon: Shield,
      title: 'Transparency',
      description:
        'Open communication about how our AI works, honest practices, and clear value delivery in everything we do.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story: The Vision Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}
              komoChat
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in amplifying human potential through AI that feels
            genuinely human, making every social media conversation meaningful
            and natural.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To amplify human potential by creating AI agents that feel
              genuinely human. We empower businesses to provide exceptional
              customer experiences through intelligent automation that enhances
              rather than replaces human creativity, empathy, and connection.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To create a world where every social media conversation feels
              human, natural, and meaningful. We envision businesses of all
              sizes having access to AI that remembers, understands, and
              responds with the warmth and intelligence of human interaction,
              available 24/7.
            </p>
          </div>
        </div>

        {/* Human-AI Synergy Philosophy Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Human Creativity Meets AI Efficiency
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The magic happens when human insight combines with artificial
              intelligence. We don't replace the human touch—we amplify it.
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Human Creativity Side */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 md:p-12">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-blue-900">
                    Human Creativity
                  </h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-blue-800">
                      Empathy and emotional intelligence in every interaction
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-blue-800">
                      Creative problem-solving for unique customer needs
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-blue-800">
                      Intuitive understanding of context and nuance
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-blue-800">
                      Authentic relationship building and trust
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Efficiency Side */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 sm:p-8 md:p-12">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-teal-900">
                    AI Efficiency
                  </h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-teal-800">
                      24/7 availability without fatigue or breaks
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-teal-800">
                      Perfect memory of every customer interaction
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-teal-800">
                      Instant access to product knowledge and history
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-teal-800">
                      Scalable to handle thousands of conversations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section with quote */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 sm:p-8 text-center">
              <p className="text-lg sm:text-xl text-white italic leading-relaxed">
                "The future belongs to businesses that seamlessly blend human
                insight with artificial intelligence, creating experiences that
                feel both personal and perfectly efficient."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 interactive">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Human-Like AI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join forward-thinking businesses using komoChat by Qbexel to
              create meaningful customer connections that feel genuinely human.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="https://www.youtube.com/shorts/E8cqkUPk8-c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation smooth-hover w-full sm:w-auto">
                  Watch Demo
                </button>
              </a>
              <a
                href="mailto:qbexel@gmail.com?subject=Sales Inquiry - komoChat by Qbexel"
                className="w-full sm:w-auto"
              >
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 min-h-[48px] touch-manipulation smooth-hover w-full">
                  Contact Sales
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
