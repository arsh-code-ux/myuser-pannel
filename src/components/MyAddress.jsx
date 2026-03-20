import React, { useState } from 'react';
import { ChevronRight, Home, Plus, MapPin, Phone, Edit2, Trash2 } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Video Background - Right Side */}
      <video 
        style={{
          position: 'fixed',
          top: 0,
          right: -100,
          width: '60%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.9
        }}
        autoPlay 
        loop 
        muted
        playsInline
        disablePictureInPicture
      >
        <source src={videoFile} type="video/mp4" />
      </video>

      {/* Content - Left Side */}
      <div className="relative z-10 max-w-2xl">
        {/* Breadcrumb */}
        <div className="px-6 md:px-12 py-4 flex items-center gap-2 text-sm text-gray-700">
          <Home className="w-4 h-4" />
          <span>My Account</span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium">My addresses</span>
        </div>

        {/* Hero Section */}
        <div className="px-6 md:px-12 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Manage Your <br/> Delivery Addresses
          </h1>
          <p className="text-gray-700 text-base mb-8 max-w-lg">
            Our team of registered nurses and skilled healthcare professionals provide in-home nursing
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {!showForm && (
              <>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
                >
                  Add Address
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-semibold transition duration-300 border-2 border-gray-300">
                  Save Details
                </button>
              </>
            )}
          </div>
        </div>

        {/* Top List / Addresses Section */}
        {addresses.length > 0 && (
          <div className="px-6 md:px-12 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Your Addresses
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-orange-400"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{address.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{address.street}</p>
                        <p className="text-xs">{address.city}, {address.state} {address.zipCode}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <p>{address.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-gray-200">
                    <button className="flex-1 p-2 hover:bg-gray-100 rounded transition flex items-center justify-center gap-1 text-sm">
                      <Edit2 className="w-4 h-4 text-gray-600" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteAddress(address.id)}
                      className="flex-1 p-2 hover:bg-red-100 rounded transition flex items-center justify-center gap-1 text-sm"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Address Form */}
        {showForm && (
          <div className="px-6 md:px-12 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Add New Address
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter street address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter state"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleAddAddress}
                  className="flex-1 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-full font-semibold transition"
                >
                  Save Address
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full font-semibold transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Best Address For Info Section */}
        {!showForm && addresses.length === 0 && (
          <div className="px-6 md:px-12 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Addresses Added Yet
            </h2>
            <p className="text-gray-700 mb-6 max-w-lg">
              Add your delivery addresses to get started. You can manage multiple addresses for different locations.
            </p>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-orange-400">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                ✓ Save time with saved addresses
              </h3>
              <p className="text-gray-600 text-sm">
                Store your home, office, and other frequent delivery locations for quick checkout.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
