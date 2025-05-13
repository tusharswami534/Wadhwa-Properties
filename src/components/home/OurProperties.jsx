import React, { useState } from 'react';

const OurProperties = () => {
  const tabs = ['Buy', 'Rent', 'Plots', 'Commercial'];
  const filters = [
    { label: 'Area', options: ['Hisar', 'Delhi', 'Gurgaon'] },
    { label: 'Property Type', options: ['Apartment', 'Villa', 'Studio'] },
    { label: 'Budget', options: ['< ₹50L', '₹50L - ₹1Cr', '> ₹1Cr'] },
    { label: 'Bedrooms', options: ['1 BHK', '2 BHK', '3+ BHK'] },
    { label: 'Furnishing', options: ['Furnished', 'Semi-Furnished', 'Unfurnished'] },
    { label: 'Property Age', options: ['New', '1-5 years', '5+ years'] }
  ];

  const [activeTab, setActiveTab] = useState('Buy');

  return (
    <div className="py-[120px] max-lg:py-24 max-md:py-20 max-sm:py-16 px-4">
      <div className="max-w-[1140px] container mx-auto">
        <h2 className="text-[44px] leading-[136%] text-center">
          Explore Our Properties
        </h2>
        <p className="max-w-[792px] leading-[150%] text-gray-500 text-center mx-auto pt-4">
          Strategically located across Hisar’s most sought-after areas, enjoy connectivity, convenience, and luxury where it matters most.
        </p>

        {/* Tabs */}
        <div className="w-full mt-6 space-y-4 bg-white rounded-md">
          <div className="flex border border-solid max-xl:flex-wrap border-orange p-2.5 rounded-full max-xl:rounded-3xl gap-6 max-sm:gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold cursor-pointer max-w-[262px] w-full max-sm:max-w-[148px] 
                  ${activeTab === tab
                    ? 'bg-orange text-white'
                    : 'bg-white de-active-button text-grey  hover:bg-gray-100'}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
          {/*  */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <select
                key={filter.label}
                className="px-4 py-2 rounded-full max-w-[175px] max-sm:max-w-[158px] max-sm:text-sm cursor-pointer w-full border border-blue text-blue bg-white hero-drop-down outline-none"
              >
                <option disabled selected>{filter.label}</option>
                {filter.options.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProperties;
