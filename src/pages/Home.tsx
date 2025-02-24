import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Home() {
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);

  const handleBookNow = () => {
    setIsBooking(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      navigate('/tracking');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Get in the driver's seat and get paid
          </h1>
          <p className="text-xl mb-8">
            Drive on the platform with the largest network of active riders.
          </p>
          <Link 
            to="/signup"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            Sign up to drive
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Pickup Location"
              icon={MapPin}
              placeholder="Enter pickup location"
            />
            <Input
              label="Dropoff Location"
              icon={MapPin}
              placeholder="Enter destination"
            />

            <div>
              <label className="block text-black text-sm font-medium mb-2">
                Payment Method
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio h-4 w-4 text-black"
                    defaultChecked
                  />
                  <span className="ml-2 text-black">Credit Card</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio h-4 w-4 text-black"
                  />
                  <span className="ml-2 text-black">Cash</span>
                </label>
              </div>
            </div>

            <Button 
              variant="secondary" 
              fullWidth 
              onClick={handleBookNow}
              disabled={isBooking}
            >
              {isBooking ? 'Finding your ride...' : 'Book Now'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}