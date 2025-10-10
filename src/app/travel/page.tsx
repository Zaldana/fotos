import Image from "next/image";

// Sample images - in a real app, these would come from a database
const travelImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    alt: "City skyline",
    title: "Urban Skyline",
    description: "The bustling energy of city life captured at golden hour"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Historic architecture",
    title: "Historic Architecture",
    description: "Ancient buildings telling stories of the past"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    alt: "Street market",
    title: "Local Market",
    description: "Vibrant colors and flavors of local culture"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Coastal town",
    title: "Coastal Town",
    description: "Charming seaside village with traditional architecture"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    alt: "Mountain village",
    title: "Mountain Village",
    description: "Peaceful village nestled in the mountains"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Desert landscape",
    title: "Desert Journey",
    description: "Endless horizons and the beauty of vast landscapes"
  }
];

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Photography
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Journey through different cultures, cities, and landscapes captured 
            in moments of adventure, discovery, and human connection.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelImages.map((image) => (
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
            Stories from Around the World
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every journey tells a story. These photographs capture the essence of 
            different places, people, and cultures, inviting you to explore the world 
            through my lens.
          </p>
          <a
            href="/nature"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Nature Gallery
          </a>
        </div>
      </section>
    </div>
  );
}
