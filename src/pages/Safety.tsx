import React from 'react';
import { Shield, Bell, Phone, MapPin, UserCheck, Car, AlertTriangle, Heart } from 'lucide-react';

export function Safety() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Safety is Our Priority</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We've built our platform with your security in mind, implementing comprehensive safety measures for both riders and drivers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">For Riders</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Verified Drivers</h3>
                <p className="text-gray-300">All drivers undergo thorough background checks and vehicle inspections.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Bell className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Share Trip Details</h3>
                <p className="text-gray-300">Easily share your ride status with trusted contacts.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-300">Our support team is always available to assist you.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Real-time GPS Tracking</h3>
                <p className="text-gray-300">Monitor your trip progress in real-time.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">For Drivers</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <UserCheck className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Rider Verification</h3>
                <p className="text-gray-300">All riders must verify their identity when creating an account.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Safe Pickup Zones</h3>
                <p className="text-gray-300">Designated safe areas for passenger pickup and dropoff.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Emergency Assistance</h3>
                <p className="text-gray-300">Quick access to emergency services when needed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Insurance Coverage</h3>
                <p className="text-gray-300">Comprehensive insurance protection while on trips.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8">Safety Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Before the Ride</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Verify driver and vehicle details</li>
              <li>• Wait in a safe location</li>
              <li>• Share trip details with friends</li>
              <li>• Check driver ratings and reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">During the Ride</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Follow trip progress on your app</li>
              <li>• Keep personal items secure</li>
              <li>• Stay alert and aware</li>
              <li>• Use in-app communication</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">After the Ride</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Check for belongings</li>
              <li>• Rate your experience</li>
              <li>• Report any concerns</li>
              <li>• Provide detailed feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}