// pages/index.tsx
import React from 'react';

export default function Home() {
  return (
    <main style={{ height: "90vh" }} className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Hero Section */}
      <section className="text-center pt-12 mt-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover amazing content and join our community.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow-md"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-4">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Feature One</h3>
            <p className="text-gray-400">
              Description of feature one. Highlight the benefits and key points.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
            <p className="text-gray-400">
              Description of feature two. Highlight the benefits and key points.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
            <p className="text-gray-400">
              Description of feature three. Highlight the benefits and key points.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
