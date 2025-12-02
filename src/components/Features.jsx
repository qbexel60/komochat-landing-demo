import AIAgents from './features/AIAgents';
import TechnicalCapabilities from './features/TechnicalCapabilities';
import UseCases from './features/UseCases';
import AdvancedCapabilities from './features/AdvancedCapabilities';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIAgents />
        <TechnicalCapabilities />
        <UseCases />
        <AdvancedCapabilities />
      </div>
    </section>
  );
};

export default Features;
