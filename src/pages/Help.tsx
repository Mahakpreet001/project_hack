import React from 'react';
import { Search, MessageSquare, PhoneCall, FileText, HelpCircle } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Help() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help?</h1>
        <div className="max-w-2xl mx-auto">
          <Input
            icon={Search}
            placeholder="Search for help articles..."
            className="text-lg py-3"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-900 p-8 rounded-xl">
          <MessageSquare className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Chat Support</h3>
          <p className="text-gray-300 mb-4">
            Get instant help from our support team through live chat.
          </p>
          <Button variant="primary" fullWidth>Start Chat</Button>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <PhoneCall className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p className="text-gray-300 mb-4">
            Speak directly with our support team 24/7.
          </p>
          <Button variant="primary" fullWidth>Call Support</Button>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <FileText className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">Submit Ticket</h3>
          <p className="text-gray-300 mb-4">
            Create a support ticket for detailed assistance.
          </p>
          <Button variant="primary" fullWidth>Create Ticket</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
          <div className="space-y-4">
            {[
              "How do I request a ride?",
              "What payment methods are accepted?",
              "How do I become a driver?",
              "What if I lost an item?",
              "How do I update my account?",
              "Can I schedule rides in advance?"
            ].map((question, index) => (
              <button
                key={index}
                className="w-full text-left p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition flex items-center justify-between"
              >
                <span>{question}</span>
                <HelpCircle className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Help Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Account & Payment",
              "Riding with GoCab",
              "Driver Partners",
              "Safety & Security",
              "Pricing & Promotions",
              "Technical Support",
              "Lost & Found",
              "Accessibility"
            ].map((category, index) => (
              <button
                key={index}
                className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition text-center"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Our support team is available 24/7 to assist you with any questions or concerns you may have.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary">Contact Support</Button>
          <Button variant="secondary">Visit FAQ</Button>
        </div>
      </div>
    </div>
  );
}