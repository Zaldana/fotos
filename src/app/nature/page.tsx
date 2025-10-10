import Image from "next/image";

// Sample images - in a real app, these would come from a database
const natureImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Mountain landscape",
    title: "Mountain Vista",
    description: "A breathtaking view of mountain peaks at sunrise"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    alt: "Forest path",
    title: "Forest Path",
    description: "A peaceful walk through the ancient forest"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Lake reflection",
    title: "Lake Reflection",
    description: "Perfect mirror reflection on a calm lake"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    alt: "Wildflower meadow",
    title: "Wildflower Meadow",
    description: "Colorful wildflowers dancing in the breeze"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Waterfall",
    title: "Cascading Waterfall",
    description: "Powerful waterfall surrounded by lush greenery"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    alt: "Sunset sky",
    title: "Golden Sunset",
    description: "Dramatic sunset painting the sky in warm colors"
  }
];

export default function NaturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nature Photography
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Immerse yourself in the beauty of the natural world through these 
            carefully captured moments of landscapes, wildlife, and botanical wonders.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {natureImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Connect with Nature
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Each photograph is a window into the natural world, inviting you to 
            pause, reflect, and appreciate the beauty that surrounds us.
          </p>
          <a
            href="/travel"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Travel Gallery
          </a>
        </div>
      </section>
    </div>
  );
}
