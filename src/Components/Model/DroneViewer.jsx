import react from 'react';

export default function Featurespart() {
    const features = [
      {
        number: "03",
        title: "Compact & Portable Design",
        description: "Foldable, lightweight, and perfect for adventures.",
      },
      {
        number: "01",
        title: "Advanced Obstacle Avoidance",
        description: "Fly safely with smart sensors detecting nearby objects.",
      },
      {
        number: "02",
        title: "Intelligent Flight Modes",
        description: "Follow Me, Waypoints, and Gesture Control for effortless operation.",
      },
      {
        number: "04",
        title: "Extended Flight Time",
        description: "3 to 20 minutes on a single charge",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Why DFLY Stands Out</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our users love the simplicity and efficiency of our platform. They've shared stories of
            increased productivity, seamless experiences, and transformative results that make a real
            difference in their daily lives.
          </p>
        </div>
  
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.number} className="flex gap-6">
              <span className="text-2xl font-bold">{feature.number}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Camera Section */}
        <div className="border-t pt-12 mb-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">4K Ultra-HD Camera</h3>
            <p className="text-gray-600">
              Capture stunning aerial footage with incredible clarity.
            </p>
          </div>
        </div>
      </div>
    );
  }