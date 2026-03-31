const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'forever',
    description: 'Perfect for individuals just getting started.',
    features: [
      '5 tools access',
      '2GB cloud storage',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'Best for professionals and freelancers.',
    features: [
      'Unlimited tools access',
      '50GB cloud storage',
      'Priority support',
      'Advanced analytics',
      'API access',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For teams and large organizations.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      '24/7 dedicated support',
      'Team collaboration tools',
      'SSO & advanced security',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? 'bg-purple-600 text-white shadow-2xl shadow-purple-200 md:scale-105'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">
                  {plan.badge}
                </div>
              )}

              <h3
                className={`font-bold text-2xl mb-1 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-purple-200' : 'text-gray-500'
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-7">
                <span
                  className={`text-5xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.highlighted ? 'text-purple-200' : 'text-gray-400'
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2.5 text-sm ${
                      plan.highlighted ? 'text-purple-100' : 'text-gray-600'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-purple-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-purple-50 shadow-sm'
                    : 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing