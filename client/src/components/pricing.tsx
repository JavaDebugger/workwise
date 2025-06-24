import React from 'react';

const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${isPopular ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white'}`}>
      {isPopular && (
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full py-2 px-4 rounded-lg font-medium ${isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-800 text-white hover:bg-gray-900'}`}>
        Get Started
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: 29,
      features: ['1 User', '10 Projects', 'Basic Support', '2GB Storage'],
      isPopular: false
    },
    {
      title: 'Professional',
      price: 99,
      features: ['5 Users', 'Unlimited Projects', 'Priority Support', '10GB Storage'],
      isPopular: true
    },
    {
      title: 'Enterprise',
      price: 199,
      features: ['Unlimited Users', 'Unlimited Projects', '24/7 Support', 'Unlimited Storage'],
      isPopular: false
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that best suits your needs
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
