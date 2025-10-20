import Image from "next/image";
import { getGalleryImages } from "@/lib/gallery";

// Get travel images from file system at build time
function getTravelImages() {
  return getGalleryImages('travel');
}

export default function TravelPage() {
  const travelImages = getTravelImages();

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
            {travelImages.length > 0 ? (
              travelImages.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="relative h-64">
                    <Image
                      src={image.url}
                      alt={image.metadata.title || image.filename}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {image.metadata.title || image.filename}
                    </h3>
                    <p className="text-gray-600">
                      {image.metadata.description || 'A beautiful travel photograph'}
                    </p>
                    {image.metadata.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {image.metadata.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No travel images found. Add some images to the public/gallery/travel/ folder.
                </p>
              </div>
            )}
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
