import React, { useState } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import addressBg from '../address.jpg';
import cardImage from '../dfj.jpg';
import birds from '../birds.jpg';
import bird1 from '../bird1.jpg';

// Add CSS for pulsing animation
const styles = `
  @keyframes pulse-pop {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  .pulse-animation {
    animation: pulse-pop 2s ease-in-out infinite;
  }
`;

// Custom Dropdown Component
function CustomSelect({ options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black bg-white cursor-pointer text-left flex justify-between items-center"
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none">
          <path d="M6 9L1 4h10z" fill="currentColor"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-64 overflow-y-auto z-50">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer hover:bg-blue-500 hover:text-white ${
                value === option.value ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Add CSS for dropdown to open downwards
const dropdownStyles = `
  select.dropdown-down {
    position: relative;
  }
  
  select.dropdown-down::after {
    content: '';
  }
`;

// Countries data with flags and phone codes
const countries = [
  { name: 'United States', code: 'US', flag: '🇺🇸', phoneCode: '+1' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', phoneCode: '+44' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', phoneCode: '+1' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', phoneCode: '+61' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', phoneCode: '+49' },
  { name: 'France', code: 'FR', flag: '🇫🇷', phoneCode: '+33' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹', phoneCode: '+39' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸', phoneCode: '+34' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', phoneCode: '+81' },
  { name: 'China', code: 'CN', flag: '🇨🇳', phoneCode: '+86' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷', phoneCode: '+55' },
  { name: 'Mexico', code: 'MX', flag: '🇲🇽', phoneCode: '+52' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', phoneCode: '+65' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', phoneCode: '+971' },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰', phoneCode: '+92' },
  { name: 'Bangladesh', code: 'BD', flag: '🇧🇩', phoneCode: '+880' },
  { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰', phoneCode: '+94' },
  { name: 'Thailand', code: 'TH', flag: '🇹🇭', phoneCode: '+66' },
  { name: 'Indonesia', code: 'ID', flag: '🇮🇩', phoneCode: '+62' },
];

export function MyAddress() {
  const [addresses, setAddresses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    company: '',
    phone: '',
    country: '',
    selectedCountry: null,
    addressLine1: '',
    addressLine2: '',
    postcode: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddAddress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleValidate = () => {
    // Handle validate logic here
    console.log('Validating address:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{styles}</style>
      {/* Breadcrumb */}
      <div className="luxury-container py-6 flex items-center gap-2 text-sm text-gray-600">
        <Home className="w-4 h-4" />
        <span>My Account</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">My Address</span>
      </div>

      {/* Hero Header Section with Address Background */}
      <div className="relative w-full py-24 md:py-40 overflow-hidden" style={{
        backgroundImage: `url(${addressBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'none'
      }}>
        {/* Content */}
        <div className="luxury-container relative z-10 text-center">
          <div className="flex-1">
            <h1 className="text-6xl md:text-8xl font-serif font-black text-black mb-4 drop-shadow-lg" style={{ letterSpacing: '-0.02em' }}>
              MY ADDRESS
            </h1>
            <div className="w-40 h-2 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 mx-auto mb-8"></div>
            <p className="text-black text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-md font-black">
              Manage your address details and delivery information. Keep your address updated to ensure smooth transactions on our platform.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Address Card Section */}
      <div className="luxury-container py-12 md:py-20">
        <div className="flex justify-center">
          {/* Card with Image */}
          <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden max-w-2xl w-full relative">
            <div className="relative">
              <img 
                src={cardImage}
                alt="Address Card"
                className="w-full h-96 object-cover"
              />
              {/* Circle with Plus Sign */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer" onClick={handleAddAddress}>
                <div className="relative flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-4 border-black flex items-center justify-center hover:bg-black/10 transition-colors">
                    <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none">
                      <path d="M 50 20 L 50 80 M 20 50 L 80 50" stroke="black" strokeWidth="12" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-2xl md:text-3xl text-gray-900 text-center font-bold pulse-animation">Add your address</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for New Address */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center overflow-hidden">
          <div className="bg-white rounded-t-lg w-full max-w-4xl max-h-[85vh] overflow-y-auto">
            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">NEW ADDRESS</h2>
              
              <p className="text-red-600 text-sm mb-8">* Mandatory fields</p>

              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">First name*</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Last name*</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    placeholder="Company"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number*</label>
                  <div className="flex gap-2">
                    <div className="w-32">
                      <CustomSelect
                        options={countries.map((country, index) => ({
                          value: index.toString(),
                          label: `${country.flag} ${country.phoneCode}`
                        }))}
                        value={formData.selectedCountry ? countries.findIndex(c => c.code === formData.selectedCountry).toString() : ''}
                        onChange={(value) => {
                          const index = parseInt(value);
                          if (index >= 0) {
                            setFormData(prev => ({
                              ...prev,
                              selectedCountry: countries[index].code
                            }));
                          }
                        }}
                        placeholder="🇮🇳 +91"
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                {/* Country and Address Line 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Country*</label>
                    <CustomSelect
                      options={[
                        { value: '', label: '-- Please choose a country --' },
                        ...countries.map((country) => ({
                          value: country.code,
                          label: `${country.flag} ${country.name}`
                        }))
                      ]}
                      value={formData.country}
                      onChange={(value) => {
                        setFormData(prev => ({
                          ...prev,
                          country: value
                        }));
                      }}
                      placeholder="-- Please choose a country --"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Address Line 1*</label>
                    <input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                      placeholder="Address Line 1"
                    />
                  </div>
                </div>

                {/* Address Line 2 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Address Line 2 (Optional)</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    placeholder="Address Line 2 (Optional)"
                  />
                </div>

                {/* Postcode and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Postcode*</label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                      placeholder="Postcode"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">City*</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                      placeholder="City"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-center pt-8">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-12 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black/10 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleValidate}
                    className="px-12 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition"
                  >
                    Validate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
