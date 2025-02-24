import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, Shield, Star } from 'lucide-react';
import { Button } from '../components/Button';

export function Tracking() {
  const [eta, setEta] = useState(12);
  const [distance, setDistance] = useState(2.4);
  
  // Simulate ETA updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEta(prev => Math.max(0, prev - 1));
      setDistance(prev => Math.max(0, prev - 0.2));
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Map Placeholder */}
        <div className="bg-gray-900 rounded-xl h-[400px] mb-6 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Navigation className="w-12 h-12 text-white animate-pulse" />
          </div>
          
          {/* Route Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 h-2">
            <div 
              className="bg-white h-full transition-all duration-1000"
              style={{ width: `${(12 - eta) * 8.33}%` }}
            />
          </div>
        </div>

        {/* Driver Info */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Michael Chen</h2>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.92</span>
                  <span className="text-gray-400">• Toyota Camry • ABC 123</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="p-3">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="secondary" className="p-3">
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{eta} min</div>
              <div className="text-sm text-gray-400">Arrival Time</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <Navigation className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{distance.toFixed(1)} km</div>
              <div className="text-sm text-gray-400">Distance</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <Shield className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">$12.50</div>
              <div className="text-sm text-gray-400">Fare</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <div className="text-sm text-gray-400">Pickup</div>
                <div>123 Main Street, Downtown</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <div className="text-sm text-gray-400">Dropoff</div>
                <div>456 Park Avenue, Uptown</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Options */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Emergency Options</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Emergency Help
            </Button>
            <Button variant="secondary" className="flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}