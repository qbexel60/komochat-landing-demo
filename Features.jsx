import {
  MessageCircle,
  Image,
  ShoppingCart,
  Clock,
  BarChart3,
  Users,
  Zap,
  Brain,
  Globe,
  Search,
  Database,
  Eye,
} from 'lucide-react';

const Features = () => {
  // Three AI Agents - the core of komoChat by Qbexel
  const aiAgents = [
    {
      name: 'Chat Agent',
      description: 'Smart context-aware conversations with perfect memory',
      icon: MessageCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-blue-700',
      capabilities: [
        {
          icon: Brain,
          title: 'Intent Recognition',
          description: 'Understands customer needs from natural language',
        },
        {
          icon: Database,
          title: 'Conversation Memory',
          description: 'Remembers customer history and preferences',
        },
        {
          icon: Search,
          title: 'Smart RAG',
          description: 'Context-aware product recommendations',
        },
      ],
    },
    {
      name: 'Image Agent',
      description: 'Visual intelligence for product recognition and matching',
      icon: Image,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      gradientFrom: 'from-purple-600',
      gradientTo: 'to-purple-700',
      capabilities: [
        {
          icon: Eye,
          title: 'Image Recognition',
          description: 'Identifies products from customer photos',
        },
        {
          icon: Search,
          title: 'Product Similarity',
          description: 'Finds matching or similar items in inventory',
        },
        {
          icon: ShoppingCart,
          title: 'Visual Commerce',
          description: 'Converts images to purchase opportunities',
        },
      ],
    },
    {
      name: 'Order Agent',
      description: 'Order confirmation and customer data management',
      icon: ShoppingCart,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      gradientFrom: 'from-teal-600',
      gradientTo: 'to-teal-700',
      capabilities: [
        {
          icon: Database,
          title: 'Order Confirmation',
          description: 'Confirms orders and records in database',
        },
        {
          icon: Users,
          title: 'Customer Data Management',
          description: 'Captures phone, address, and order details',
        },
        {
          icon: BarChart3,
          title: 'Order Tracking',
          description: 'Tracks order status and delivery updates',
        },
      ],
    },
  ];

  const technicalCapabilities = [
    {
      icon: Globe,
      title: 'Enterprise Scalability',
      description:
        'Handle 100,000+ concurrent users across multiple businesses simultaneously',
      details: [
        'Auto-scaling infrastructure',
        'Sub-second response times at scale',
        '99.9% uptime guarantee',
        'Global CDN distribution',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Zap,
      title: 'Multi-Modal Processing',
      description:
        'Seamlessly handle text, images, and voice in one unified conversation flow',
      details: [
        'Real-time image recognition',
        'Natural language processing',
        'Voice-to-text conversion',
        'Cross-modal context retention',
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: Brain,
      title: 'Smart Context-Aware RAG',
      description:
        'Intelligent retrieval that understands conversation history and business context',
      details: [
        'Dynamic knowledge base updates',
        'Conversation memory integration',
        'Business-specific data training',
        'Contextual response generation',
      ],
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
    {
      icon: Users,
      title: 'Multi-Business Support',
      description: `Personalized to align with brand's tone, language, and visual style`,
      details: [
        'Isolated business environments',
        'Custom brand Messages Trainning',
        'Cross-client analytics dashboard',
        ,
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}
              Smart AI Agents
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each agent specializes in different types of customer interactions,
            working together to create the most human-like AI experience
            possible.
          </p>
        </div>

        {/* AI Agents Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {aiAgents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 card-hover bg-white md:col-span-1 lg:col-span-1"
                style={{
                  ...(index === 2 && {
                    gridColumn: 'md:col-span-2 lg:col-span-1',
                  }),
                }}
              >
                {/* Agent Header */}
                <div
                  className={`bg-gradient-to-br ${agent.gradientFrom} ${agent.gradientTo} p-6 sm:p-8 text-white relative`}
                >
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20">
                    <IconComponent className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${agent.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 interactive`}
                  >
                    <IconComponent
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${agent.color}`}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    {agent.description}
                  </p>
                </div>

                {/* Agent Capabilities */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                    Key Capabilities
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {agent.capabilities.map((capability, capIndex) => {
                      const CapabilityIcon = capability.icon;
                      return (
                        <div
                          key={capIndex}
                          className="flex items-start space-x-3 group/capability"
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/capability:bg-gray-200 transition-colors duration-200">
                            <CapabilityIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                              {capability.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-gray-600">
                              {capability.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Technical Capabilities Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Enterprise-Grade Technical Capabilities
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Built for scale, designed for performance, optimized for results.
              Our platform handles enterprise demands while maintaining the
              human touch that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {technicalCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${capability.borderColor} card-hover`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${capability.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 interactive`}
                    >
                      <IconComponent
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${capability.color}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {capability.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {capability.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-3"
                      >
                        <div
                          className={`w-2 h-2 ${capability.color.replace(
                            'text-',
                            'bg-',
                          )} rounded-full flex-shrink-0`}
                        ></div>
                        <p className="text-xs sm:text-sm text-gray-700">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Performance Stats */}
          <div className="mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
              Platform Performance at Scale
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  100K+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Concurrent Users
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                  &lt;10s
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Smart Reply Timing
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                  99.9%
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Uptime SLA</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Database className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                  50+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Languages Supported
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Use Cases Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See komoChat by Qbexel in Action
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real business scenarios where our AI agents transform customer
              interactions into sales opportunities
            </p>
          </div>

          <div className="space-y-12">
            {/* E-commerce Product Inquiry Use Case */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Image className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                      E-commerce Product Inquiry
                    </h4>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-blue-500">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">
                        Customer Action
                      </p>
                      <p className="text-sm sm:text-base text-gray-900 font-medium">
                        "Hi! I saw this dress on Instagram. Do you have it in
                        size M and what colors are available?"
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        📸 Sends product image
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 text-white">
                      <p className="text-sm text-blue-100 mb-1">
                        AI Response Flow
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>✓ ImageBot recognizes the specific dress model</p>
                        <p>✓ Checks real-time inventory across all sizes</p>
                        <p>✓ Identifies available colors and similar styles</p>
                        <p>✓ Generates personalized product recommendations</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
                      <p className="text-sm text-gray-500 mb-1">
                        AI Agent Reply
                      </p>
                      <p className="text-gray-900">
                        "Perfect choice! That's our bestselling summer dress. I
                        have it in size M in navy blue and coral pink. The coral
                        would look amazing with your skin tone based on your
                        profile. Would you like me to reserve one while you
                        decide? I can also show you our matching accessories
                        that other customers love with this dress."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">
                    Performance Metrics
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-blue-600">
                        &lt;10s
                      </p>
                      <p className="text-sm text-gray-600">
                        Smart Reply Timing
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-green-600">+65%</p>
                      <p className="text-sm text-gray-600">Conversion Rate</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <ShoppingCart className="w-5 h-5 text-purple-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-purple-600">+40%</p>
                      <p className="text-sm text-gray-600">
                        Average Order Value
                      </p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 text-orange-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-orange-600">95%</p>
                      <p className="text-sm text-gray-600">
                        Customer Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Booking Use Case */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-teal-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Service Booking with Voice
                    </h4>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="text-sm text-gray-500 mb-1">
                        Customer Voice Message
                      </p>
                      <p className="text-gray-900 font-medium">
                        "Hey, I need a plumber urgently! My kitchen sink is
                        completely blocked and water is everywhere. Can someone
                        come today? I'm available after 2 PM."
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        🎤 45-second voice message
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-4 text-white">
                      <p className="text-sm text-teal-100 mb-1">
                        AI Processing Flow
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>
                          ✓ AudioBot converts speech to text with 99% accuracy
                        </p>
                        <p>
                          ✓ Identifies urgency level and service type needed
                        </p>
                        <p>
                          ✓ Checks technician availability for same-day service
                        </p>
                        <p>
                          ✓ Accesses customer history and location preferences
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
                      <p className="text-sm text-gray-500 mb-1">
                        AI Agent Reply
                      </p>
                      <p className="text-gray-900">
                        "I understand this is urgent! I've found Mike, our
                        senior plumber who's available at 3:30 PM today. He's
                        familiar with your building from previous visits. I've
                        already sent him photos of your kitchen layout from our
                        records. The emergency call-out fee is $150, and I can
                        confirm your booking right now. Should I reserve this
                        slot for you?"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">
                    Performance Metrics
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-teal-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-5 h-5 text-teal-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-teal-600">&lt;3s</p>
                      <p className="text-sm text-gray-600">Processing Time</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-green-600">+55%</p>
                      <p className="text-sm text-gray-600">Booking Rate</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <Zap className="w-5 h-5 text-blue-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-blue-600">24/7</p>
                      <p className="text-sm text-gray-600">Availability</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 text-orange-600 mr-2" />
                      </div>
                      <p className="text-2xl font-bold text-orange-600">98%</p>
                      <p className="text-sm text-gray-600">
                        Customer Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Business Agency Use Case */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    Multi-Business Agency Management
                  </h4>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See how marketing agencies use komoChat by Qbexel to manage
                  multiple client accounts with consistent, brand-appropriate
                  responses across different industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Fashion Retailer
                  </h5>
                  <p className="text-sm text-gray-600 mb-4">
                    AI maintains trendy, fashion-forward tone while handling
                    size inquiries and style recommendations.
                  </p>
                  <div className="text-xs text-gray-500">
                    <p>• Brand voice: Trendy & Enthusiastic</p>
                    <p>• Avg response: 1.8s</p>
                    <p>• Conversion: +72%</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-teal-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Home Services
                  </h5>
                  <p className="text-sm text-gray-600 mb-4">
                    Professional, reassuring tone for emergency calls and
                    service bookings with technical expertise.
                  </p>
                  <div className="text-xs text-gray-500">
                    <p>• Brand voice: Professional & Reliable</p>
                    <p>• Avg response: 2.1s</p>
                    <p>• Booking rate: +58%</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-orange-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Restaurant Chain
                  </h5>
                  <p className="text-sm text-gray-600 mb-4">
                    Friendly, appetizing language for menu questions and
                    reservations across multiple locations.
                  </p>
                  <div className="text-xs text-gray-500">
                    <p>• Brand voice: Friendly & Appetizing</p>
                    <p>• Avg response: 1.5s</p>
                    <p>• Order value: +45%</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 text-center">
                <h5 className="font-semibold text-gray-900 mb-2">
                  Agency Dashboard Metrics
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">12</p>
                    <p className="text-sm text-gray-600">Active Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">50K+</p>
                    <p className="text-sm text-gray-600">
                      Monthly Conversations
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">+60%</p>
                    <p className="text-sm text-gray-600">Avg Conversion Lift</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">97%</p>
                    <p className="text-sm text-gray-600">Client Retention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Agent Capabilities */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Agent Capabilities
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our agents go beyond basic responses with intelligent product
              suggestions, visual content sharing, and proactive customer
              engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Product Suggestion Agent */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200 card-hover">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Smart Product Suggestions
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Chat agents analyze customer preferences and conversation
                history to suggest relevant products with personalized
                recommendations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Context-aware recommendations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Cross-selling opportunities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Seasonal product matching
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Content Agent */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-200 card-hover">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Image className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Visual Content Sharing
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Agents automatically send product images, size charts, and
                visual guides when customers ask for specific information or
                comparisons.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Automatic image sharing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Size and color comparisons
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Product lifestyle images
                  </span>
                </div>
              </div>
            </div>

            {/* Proactive Engagement Agent */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-teal-200 card-hover">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Proactive Engagement
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Agents initiate conversations based on customer behavior,
                abandoned carts, and personalized follow-ups to drive engagement
                and sales.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Abandoned cart recovery
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Personalized follow-ups
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Seasonal promotions
                  </span>
                </div>
              </div>
            </div>

            {/* Inventory Management Agent */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-orange-200 card-hover">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Real-time Inventory
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Agents provide real-time stock information, alternative
                suggestions, and restock notifications to ensure accurate
                customer expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Live stock checking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Alternative suggestions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Restock notifications
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Support Agent */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200 card-hover">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Customer Support
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Agents handle complex customer inquiries, return requests, and
                technical support with detailed explanations and step-by-step
                guidance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Return & exchange handling
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Technical troubleshooting
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Escalation to human agents
                  </span>
                </div>
              </div>
            </div>

            {/* Analytics & Insights Agent */}
            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200 card-hover">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Analytics & Insights
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Agents provide business insights, sales analytics, and customer
                behavior patterns to help optimize marketing strategies and
                inventory decisions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Sales performance tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Customer behavior analysis
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Inventory optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
