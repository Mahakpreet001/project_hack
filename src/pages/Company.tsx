import React from 'react';
import { Building2, Users, Globe2, Award, Briefcase, TrendingUp } from 'lucide-react';

export function Company() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About GoCab</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We're transforming transportation across the globe, making cities more accessible and creating opportunities for all.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-900 p-8 rounded-xl">
          <Building2 className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-300">
            To provide reliable, affordable, and safe transportation for everyone, everywhere.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <Users className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Team</h3>
          <p className="text-gray-300">
            A diverse group of problem-solvers working together to revolutionize urban mobility.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <Globe2 className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Global Presence</h3>
          <p className="text-gray-300">
            Operating in over 100 cities worldwide, connecting millions of riders with drivers.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold mb-8">Company Stats</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10M+</div>
            <div className="text-gray-300">Daily Rides</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500K+</div>
            <div className="text-gray-300">Active Drivers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-300">Cities</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Engineering</h3>
                <p className="text-gray-300">Build the technology that powers millions of rides daily.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Operations</h3>
                <p className="text-gray-300">Scale our business and improve efficiency across markets.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Marketing</h3>
                <p className="text-gray-300">Drive growth and build the GoCab brand globally.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Latest News</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">March 15, 2025</p>
              <h3 className="font-semibold mb-1">GoCab Expands to 20 New Cities</h3>
              <p className="text-gray-300">Bringing reliable transportation to more communities worldwide.</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">March 1, 2025</p>
              <h3 className="font-semibold mb-1">Introducing Green Rides Initiative</h3>
              <p className="text-gray-300">Committed to reducing our carbon footprint with electric vehicles.</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">February 20, 2025</p>
              <h3 className="font-semibold mb-1">New Safety Features Launch</h3>
              <p className="text-gray-300">Enhanced rider and driver protection with advanced safety tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}