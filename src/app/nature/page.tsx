import Image from "next/image";
import { getGalleryImages } from "@/lib/gallery";

// Get nature images from file system at build time
function getNatureImages() {
  return getGalleryImages('nature');
}

export default function NaturePage() {
  const natureImages = getNatureImages();

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
            {natureImages.length > 0 ? (
              natureImages.map((image) => (
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
                      {image.metadata.description || 'A beautiful nature photograph'}
                    </p>
                    {image.metadata.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {image.metadata.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full"
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
                  No nature images found. Add some images to the public/gallery/nature/ folder.
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
