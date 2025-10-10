import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Photography Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Capturing the beauty of nature and the adventure of travel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/nature"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                View Nature Gallery
              </Link>
              <Link
                href="/travel"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                View Travel Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore My Work
            </h2>
            <p className="text-lg text-gray-600">
              Two distinct collections showcasing different aspects of photography
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nature Card */}
            <Link href="/nature" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🌿</div>
                    <h3 className="text-2xl font-bold">Nature</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nature Photography
                  </h3>
                  <p className="text-gray-600">
                    Discover the beauty of the natural world through stunning landscapes, 
                    wildlife, and botanical photography.
                  </p>
                </div>
              </div>
            </Link>

            {/* Travel Card */}
            <Link href="/travel" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">✈️</div>
                    <h3 className="text-2xl font-bold">Travel</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Travel Photography
                  </h3>
                  <p className="text-gray-600">
                    Journey through different cultures, cities, and landscapes 
                    captured in moments of adventure and discovery.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About the Photographer
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to my photography portfolio. I'm passionate about capturing the world's 
            natural beauty and the stories of travel and adventure. Each photograph tells a 
            story, whether it's the serene beauty of a mountain landscape or the vibrant 
            energy of a bustling city street. Through my lens, I aim to share these moments 
            and inspire others to explore and appreciate the world around us.
          </p>
        </div>
      </section>
    </div>
  );
}
