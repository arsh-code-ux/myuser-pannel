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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      {/* Video Background - Fixed */}
      <video 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.8
        }}
        autoPlay 
        loop 
        muted
        playsInline
        disablePictureInPicture
      >
        <source src={videoFile} type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="py-4 px-6 md:px-12 flex items-center gap-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <span>My Account</span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium">My addresses</span>
        </div>

        {/* Hero Section */}
        <div className="px-6 md:px-12 py-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Manage Your Addresses
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Keep your delivery addresses updated for a seamless experience
          </p>
          
          {/* Add Address Button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add New Address
            </button>
          )}
        </div>

        {/* Add Address Form */}
        {showForm && (
          <div className="px-6 md:px-12 py-8 max-w-2xl bg-white/90 backdrop-blur rounded-2xl shadow-xl mb-8 ml-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Add New Address
            </h2>

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
                className="flex-1 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition"
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
        )}

        {/* Addresses Grid */}
        <div className="px-6 md:px-12 py-8 max-w-2xl">
          {addresses.length > 0 && (
            <div className="space-y-4">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-orange-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{address.name}</h3>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition">
                        <Edit2 className="w-5 h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(address.id)}
                        className="p-2 hover:bg-red-100 rounded-full transition"
                      >
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p className="text-sm">{address.country}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <p>{address.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {addresses.length === 0 && !showForm && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No addresses added yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

      {/* Content Overlay - No blur, just content */}
      <div className="relative z-10 h-screen overflow-y-auto flex flex-col">
      {/* Breadcrumb */}
      <div className="py-2 flex items-center gap-2 text-sm text-gray-800 justify-start pl-6 md:pl-12" style={{ textShadow: '1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white' }}>
        <Home className="w-4 h-4" />
        <span>My Account</span>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium">My addresses</span>
      </div>

      {/* Hero Header Section */}
      <div className="relative w-full py-3 overflow-hidden bg-transparent">
        {/* Content */}
        <div className="luxury-container relative z-10 text-center">
          <h1 className="text-7xl md:text-8xl font-serif font-black text-black mb-3 tracking-tighter" style={{ fontWeight: 900, letterSpacing: '-0.02em', textShadow: '2px 2px 4px white, -2px -2px 4px white' }}>
            MY ADDRESSES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="luxury-container py-4 md:py-6 flex-1 overflow-y-auto flex flex-col items-center justify-start">
        
        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 w-full max-w-6xl mx-auto">
          {/* Add Address Card */}
          <div
            onClick={() => setShowForm(!showForm)}
            className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition duration-300 min-h-60"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
          >
            <Plus className="w-20 h-20 text-gray-700 mb-4 font-black" strokeWidth={4} />
            <h3 className="text-3xl font-black text-gray-800 text-center continuous-pop" style={{ display: 'inline-block' }}>Add an address</h3>
          </div>

          {/* Existing Addresses */}
          {addresses.map((address) => (
            <div key={address.id} className="border-2 border-gray-300 rounded-lg p-6 hover:border-amber-500 transition" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
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
          <div className="mb-6 px-2 md:px-4 lg:px-6 py-4 rounded-lg border border-gray-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
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
