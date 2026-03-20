import React, { useState } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import back2 from '../back2.jpg';
import birds from '../birds.jpg';
import bird1 from '../bird1.jpg';

export function MyInformation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    month: '',
    day: '',
    year: '',
    email: 'arshdeepkaur24@navgurukul.org',
    phone: '',
    country: 'India',
    language: 'English',
    currency: 'USD ($)',
    measure: 'Cm',
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    budget: 'No budget',
    notifications: {
      promotions: true,
      favoriteArtists: true,
      favoriteGalleries: true,
      favoriteArtworks: true,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked
      }
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="luxury-container py-6 flex items-center gap-2 text-sm text-gray-600">
        <Home className="w-4 h-4" />
        <span>My Account</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">My information</span>
      </div>

      {/* Hero Header Section with Bird Background */}
      <div className="relative w-full py-24 md:py-40 overflow-hidden" style={{
        backgroundImage: `url(${birds})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'none'
      }}>
        {/* Content */}
        <div className="luxury-container relative z-10 text-center flex items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-6xl md:text-8xl font-serif font-black text-black mb-4 drop-shadow-lg" style={{ letterSpacing: '-0.02em' }}>
              MY INFORMATION
            </h1>
            <div className="w-40 h-2 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 mx-auto mb-8"></div>
            <p className="text-black text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-md font-black">
              Manage your personal details, preferences, and account settings. Keep your information updated to enhance your experience on our platform.
            </p>
          </div>
          {/* Circular Artist Image */}
          <div className="flex-shrink-0 hidden md:block">
            <img 
              src={bird1} 
              alt="Artist" 
              className="rounded-full w-80 h-80 object-cover shadow-lg border-4 border-white"
              style={{ filter: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="luxury-container py-12 md:py-20">

        {/* Personal Information Section */}
        <div className="mb-20 px-4 md:px-8 lg:px-12 py-8 bg-white rounded-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-8 pb-4 border-b-2 border-gray-200">
            PERSONAL INFORMATION
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                  placeholder="Enter your first name"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Month</label>
                  <input
                    type="text"
                    name="month"
                    value={formData.month}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                    placeholder="MM"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Day</label>
                  <input
                    type="text"
                    name="day"
                    value={formData.day}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                    placeholder="DD"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                    placeholder="YYYY"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition bg-gray-50 text-sm"
                disabled
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone number *</label>
              <div className="flex gap-2">
                <div className="w-20">
                  <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-sm">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-gray-700">+91</span>
                  </div>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                  placeholder="Enter phone number"
                />
              </div>
              {!formData.phone && <p className="text-red-500 text-sm mt-2">This value should not be blank.</p>}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center mt-10">
            <button className="px-12 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition duration-300">
              Save my information
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mb-20 px-4 md:px-8 lg:px-12 py-8 bg-white rounded-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-8 pb-4 border-b-2 border-gray-200">
            CHOOSE YOUR PREFERENCES
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition bg-gray-50 text-sm"
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language *</label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition bg-gray-50 text-sm"
              />
            </div>

            {/* Currency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency *</label>
              <input
                type="text"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition bg-gray-50 text-sm"
              />
            </div>

            {/* Measure */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Measure *</label>
              <input
                type="text"
                name="measure"
                value={formData.measure}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition bg-gray-50 text-sm"
              />
            </div>
          </div>

          {/* Update Preferences Button */}
          <div className="flex justify-center mt-10">
            <button className="px-12 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition duration-300">
              Update preferences
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="mb-20 px-4 md:px-8 lg:px-12 py-8 bg-white rounded-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-8 pb-4 border-b-2 border-gray-200">
            NEW PASSWORD
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current password *</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                placeholder="Enter current password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New password *</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Repeat new password *</label>
              <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-sm"
                placeholder="Repeat new password"
              />
              {formData.repeatPassword && !formData.newPassword && (
                <p className="text-gray-600 text-sm mt-2">Please fill out this field.</p>
              )}
            </div>
          </div>

          {/* Change Password Button */}
          <div className="flex justify-center mt-10">
            <button className="px-12 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition duration-300">
              Change password
            </button>
          </div>
        </div>

        {/* Budget Section */}
        <div className="mb-20 px-4 md:px-8 lg:px-12 py-8 bg-white rounded-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-8 pb-4 border-b-2 border-gray-200">
            MY BUDGET
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Under $ 500',
              '$ 500 - $ 1,000',
              '$ 1,000 - $ 2,500',
              '$ 2,500 - $ 5,000',
              '$ 5,000 - $ 10,000',
              '$ 10,000 - $ 25,000',
              '$ 25,000 - $ 50,000',
              'Over $ 50,000',
            ].map((budget) => (
              <label key={budget} className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-gray-200 hover:border-amber-500 transition">
                <input
                  type="radio"
                  name="budget"
                  value={budget}
                  checked={formData.budget === budget}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-amber-500"
                />
                <span className="ml-2 text-sm text-gray-700">{budget}</span>
              </label>
            ))}
            
            <label className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-gray-200 hover:border-amber-500 transition">
              <input
                type="radio"
                name="budget"
                value="No budget"
                checked={formData.budget === 'No budget'}
                onChange={handleInputChange}
                className="w-4 h-4 accent-amber-500"
              />
              <span className="ml-2 text-sm text-gray-700">No budget</span>
            </label>
          </div>
        </div>

        {/* Email Notifications Section */}
        <div className="mb-20 px-4 md:px-8 lg:px-12 py-12 bg-gradient-to-br from-white via-amber-50 to-white rounded-lg border border-amber-100 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-2 text-center">
              MY EMAIL NOTIFICATIONS
            </h2>
            <p className="text-center text-gray-600 text-sm mb-10">
              Choose which notifications you'd like to receive to stay updated
            </p>

            <div className="space-y-3">
              {[
                { key: 'promotions', label: 'Notifications concerning promotions', icon: '🎁' },
                { key: 'favoriteArtists', label: 'Notifications concerning your favorite artists', icon: '🎨' },
                { key: 'favoriteGalleries', label: 'Notifications concerning your favorite galleries', icon: '🏛️' },
                { key: 'favoriteArtworks', label: 'Notifications concerning your favorite artworks', icon: '✨' },
              ].map((notification) => (
                <label 
                  key={notification.key} 
                  className="flex items-center cursor-pointer p-4 rounded-xl border-2 border-gray-200 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300 group"
                >
                  <input
                    type="checkbox"
                    name={notification.key}
                    checked={formData.notifications[notification.key]}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                  />
                  <span className="ml-3 text-lg mr-2 group-hover:scale-110 transition-transform">{notification.icon}</span>
                  <span className="text-sm text-gray-800 font-medium group-hover:text-amber-700 transition">{notification.label}</span>
                </label>
              ))}
            </div>

            <p className="text-gray-600 text-xs mt-10 text-center italic">
              If you no longer wish to receive email notifications, simply uncheck the boxes above.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            TRY THE ARTWORK OUT AT HOME FOR FREE FOR 14 DAYS
          </h2>
          <p className="text-lg text-gray-200">
            If you change your mind, you can send it back free of charge, and we'll reimburse you.
          </p>
        </div>
      </div>
    </div>
  );
}
