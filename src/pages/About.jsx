import React from 'react'
import { motion } from 'framer-motion'
//import "../../src/assets/pets/car.jpg"
function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6 md:px-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-green-600">PetShopPak</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Your one-stop destination for premium pet supplies, healthy food,
          and adorable accessories. We believe every pet deserves love,
          comfort, and care — and we’re here to make that happen.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 w-full max-w-6xl"
      >
        <img
              src="../../src/assets/pets/cat.jpg"
          alt="Happy Pets"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Mission Section */}
      <div className="mt-16 max-w-6xl text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              At PetShopPak, we aim to bring happiness to both pets and their
              owners. From nutritious food and grooming products to toys and
              accessories — every item is chosen with love and quality in mind.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We partner with trusted brands and local suppliers to ensure your
              pets get the best. Whether you’re a dog lover, cat parent, or bird
              enthusiast, we’ve got something special for every pet.
            </p>
          </div>
          <div className="flex justify-center">
            
            <img
              src="../../src/assets/pets/cat.jpg"
              alt="Pet Supplies"
              className="w-80 h-80 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-green-100 rounded-full">
              🐾
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Pet Lovers
            </h3>
            <p className="text-gray-600 text-sm">
              Our team loves animals and understands what they truly need.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-green-100 rounded-full">
              ❤
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Quality Care
            </h3>
            <p className="text-gray-600 text-sm">
              Every product is handpicked with love and tested for quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-green-100 rounded-full">
              🏪
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Local & Online
            </h3>
            <p className="text-gray-600 text-sm">
              Visit our Karachi store or shop online anywhere in Pakistan.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-green-100 rounded-full">
              🌿
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Eco Friendly
            </h3>
            <p className="text-gray-600 text-sm">
              We support sustainable packaging and environmentally safe products.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 bg-green-600 text-white rounded-2xl py-10 px-6 md:px-20 text-center shadow-lg max-w-5xl"
      >
        <h2 className="text-3xl font-semibold mb-4">Join Our Pet Family</h2>
        <p className="text-white/90 mb-6">
          Subscribe to our newsletter and stay updated with new arrivals,
          exclusive discounts, and pet care tips!
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-gray-800 w-full sm:w-80 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default About