import React from 'react'
import { motion } from 'framer-motion';

function services() {
    const services = [
    {
      id: 1,
      icon: "🦴",
      title: "Pet Grooming",
      desc: "Our professional groomers will pamper your pets with gentle care, trimming, and cleaning to keep them healthy and beautiful.",
      image:
        "https://plus.unsplash.com/premium_photo-1663012822996-ba7e04f3627a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwZ3Jvb21pbmd8ZW58MHx8MHx8fDA%3D ",
    },
    {
      id: 2,
      icon: "🍖",
      title: "Pet Nutrition",
      desc: "We offer top-quality pet food and supplements to ensure your furry friends stay strong, energetic, and well-nourished.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycd7HpkWO_CVzXH7XG5R7xX-Y8wtsQi_oLQ&s ",
    },
    {
      id: 3,
      icon: "🐾",
      title: "Pet Adoption",
      desc: "Find your perfect companion! We help connect loving families with pets looking for their forever homes.",
      image:
        "https://media.istockphoto.com/id/1516239450/photo/love-portrait-and-family-with-dog-at-animal-shelter-for-adoption-at-kennel.jpg?s=612x612&w=0&k=20&c=ZvxsrI5wTlCCRd1nwhDPiSxTIAZOmQdU-UPFZdGSAO8= ",
    },
    {
      id: 4,
      icon: "💊",
      title: "Pet Health Care",
      desc: "Partnered with trusted veterinarians to provide guidance, basic checkups, and pet health support.",
      image:
        "https://www.shutterstock.com/image-photo/vet-examining-dog-cat-puppy-600nw-1479238910.jpg ",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-green-600">Services</span>
        </h1>
        <p className="text-gray-600 text-lg">
          At PetShopPak, we provide complete care for your pets — from grooming
          and nutrition to adoption and health support.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <div className="text-5xl mb-3">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 bg-green-600 text-white rounded-2xl py-12 px-6 md:px-20 text-center shadow-lg max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Need a Personalized Pet Service?
        </h2>
        <p className="text-white/90 mb-6">
          Contact our support team to book a grooming session, ask about our
          adoption program, or request home delivery.
        </p>
        <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </motion.div>
    </div>
  
    
  )
}

export default services