import React from 'react';
const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

const Stats = () => {
  return (
    <section className="bg-purple-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="py-2">
              <div className="text-white text-3xl md:text-4xl font-bold mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-purple-200 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;