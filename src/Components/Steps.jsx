const steps = [
  {
    icon: '👤',
    title: 'Create Account',
    description:
      'Sign up in seconds and instantly access your personal dashboard with all your digital tools in one place.',
  },
  {
    icon: '🛍️',
    title: 'Choose Products',
    description:
      'Browse our premium collection and pick the tools that best match your workflow and creative needs.',
  },
  {
    icon: '🚀',
    title: 'Start Creating',
    description:
      'Dive in immediately and supercharge your productivity with powerful, easy-to-use digital tools.',
  },
]

const Steps = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Everything you need to get up and running in minutes. No technical skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Dashed connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[30%] right-[30%] h-px border-t-2 border-dashed border-purple-200 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="text-center relative z-10">
              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-purple-50 rounded-2xl mb-6 mx-auto group-hover:bg-purple-100">
                <span className="text-4xl">{step.icon}</span>
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-md shadow-purple-200">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-xl mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps