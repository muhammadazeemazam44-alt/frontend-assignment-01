import React from 'react'
import {Link} from 'react-router-dom'
import Servicecard from '../componets/Servicecard'
import bannerimg from "../assets/banner.jpg";

function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-8">
        <h1 className="text-3xl font-bold">Welcome to PetShopPak</h1>
        <p className="mt-2 text-gray-600">Shop supplies and use helpful services to care for your pet.</p>
        <div className="mt-4">
          <Link to="/shop" className="px-4 py-2 bg-pink-500 text-white rounded">Shop Now</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Servicecard title="Age Calculator" desc="Compute human-equivalent age" to="/services/age-calculator" />
          <Servicecard title="Breed Identifier" desc="Upload a photo to detect breed" to="/services/breed-identifier" />
          <Servicecard title="Food Recipe Generator" desc="Generate home-made food suggestions" to="/services/food-recipes" />
          <Servicecard
            title="Pet Care Guides"
            desc="Download expert guides for grooming, training, feeding, and health care."
            to="/services/care-guides"
          />
          <Servicecard
            title="Printable Charts"
            desc="Create feeding schedules and vaccination charts — printable and shareable."
            to="/services/printable-charts"
          />
          <Servicecard
            title="Name Generator"
            desc="Find the perfect name for your pet based on style, gender, or theme."
            to="/services/name-generator"
          />
          <Servicecard
            title="Weight Checker"
            desc="Find the perfect weight for your pet based on style, gender, or theme."
            to="/services/weight-Checker"
          />
        </div>
      </section>
      <section className="my-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Featured Brand Partner
          </h2>
          <p className="text-gray-600 mb-10">
            Proudly offering top-quality food from trusted brands — because your
            pets deserve the best 🐶🐱
          </p>

          {/* Image Banner */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src="https://petsone.pk/wp-content/uploads/2025/08/1.avif"
              alt="Taste of the Wild and Diamond Pet Foods Banner"
              className="w-full object-cover"
              style={{ maxHeight: "630px" }}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      Welcome to <span className="font-semibold text-pink-500">PetZone</span> — your one-stop shop for pet care, nutrition, and accessories. 
      We’re passionate about keeping tails wagging and whiskers twitching with our premium-quality products and expert guidance.
    </p>
    <a
      href="/about"
      className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-md transition-colors"
    >
      Learn More
    </a>
  </div>
</section>
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-10">
      Shop by Pet Category
    </h2>

    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
      {/* 🐶 Dog Category */}
      <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s"
          alt="Dog"
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dogs</h3>
          <p className="text-gray-600 text-sm mb-4">Food, toys, and grooming essentials.</p>
          <a
            href="/shop/dogs"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* 🐱 Cat Category */}
      <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        <img
          src="https://www.cats.org.uk/media/13139/220325case013.jpg"
          alt="Cat"
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Cats</h3>
          <p className="text-gray-600 text-sm mb-4">Tasty treats, litter, and health care.</p>
          <a
            href="/shop/cats"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* 🐦 Bird Category */}
      <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIm9LZOMIeJ_sDPWkQuuOXQ1eatPidcRkWwg&s"
          alt="Bird"
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Parrot</h3>
          <p className="text-gray-600 text-sm mb-4">Feed, cages, and accessories.</p>
          <a
            href="/shop/birds"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* 🐠 Fish Category */}
      <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        <img
          src="https://t4.ftcdn.net/jpg/02/97/20/37/360_F_297203796_C8dL0cnQEsQ7Z3NuWR4cBpvBj09vgmPj.jpg"
          alt="Fish"
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fish</h3>
          <p className="text-gray-600 text-sm mb-4">Aquariums, filters, and decor.</p>
          <a
            href="/shop/fish"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    
  )
}

export default Home