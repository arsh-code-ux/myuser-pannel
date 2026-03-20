import React, { useState } from 'react';
import { ChevronRight, Home, Plus } from 'lucide-react';
import videoFile from '../WhatsApp Video 2026-03-19 at 7.35.50 PM.mp4';

export function MyAddress() {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddAddress = () => {
    if (formData.name && formData.street && formData.city) {
      setAddresses([...addresses, { ...formData, id: Date.now() }]);
      setFormData({
        name: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: '',
      });
      setShowForm(false);
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Video Background */}
      <video 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'none'
        }}
        autoPlay 
        loop 
        muted
        playsInline
        disablePictureInPicture
      >
        <source src={videoFile} type="video/mp4" />
      </video>

      {/* Content Overlay - No blur, just content */}
      <div className="relative z-10 h-screen overflow-y-auto flex flex-col bg-transparent">
      {/* Breadcrumb */}
      <div className="py-2 flex items-center gap-2 text-sm text-gray-600 justify-start pl-6 md:pl-12">
        <Home className="w-4 h-4" />
        <span>My Account</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">My addresses</span>
      </div>

      {/* Hero Header Section */}
      <div className="relative w-full py-3 overflow-hidden bg-transparent">
        {/* Content */}
        <div className="luxury-container relative z-10 text-center">
          <h1 className="text-7xl md:text-8xl font-serif font-black text-black mb-3 drop-shadow-2xl tracking-tighter" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            MY ADDRESSES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="luxury-container py-4 md:py-6 flex-1 overflow-y-auto">
        
        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {/* Add Address Card */}
          <div
            onClick={() => setShowForm(!showForm)}
            className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition duration-300 min-h-60"
          >
            <Plus className="w-10 h-10 text-gray-700 mb-3" />
            <h3 className="text-lg font-bold text-gray-800">Add an address</h3>
          </div>

          {/* Existing Addresses */}
          {addresses.map((address) => (
            <div key={address.id} className="border-2 border-gray-300 rounded-lg p-6 hover:border-amber-500 transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{address.name}</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.zipCode}</p>
                <p>{address.country}</p>
                <p className="text-gray-600">{address.phone}</p>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition text-sm font-medium">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  className="flex-1 px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Address Form */}
        {showForm && (
          <div className="mb-6 px-2 md:px-4 lg:px-6 py-4 bg-white rounded-lg border border-gray-100">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-black mb-4 pb-2 border-b-2 border-gray-200">
              ADD NEW ADDRESS
            </h2>

            <div className="max-w-2xl mx-auto space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                  placeholder="Enter street address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                    placeholder="Enter state"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                    placeholder="Enter zip code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                    placeholder="Enter country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={handleAddAddress}
                className="px-8 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition duration-300 text-sm"
              >
                Save Address
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-8 py-2 bg-gray-300 text-gray-800 rounded-full font-medium hover:bg-gray-400 transition duration-300 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
