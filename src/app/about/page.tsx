export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About the Photographer
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to my photography portfolio. I&apos;m passionate about capturing the world&apos;s 
            natural beauty and the stories of travel and adventure. Each photograph tells a 
            story, whether it&apos;s the serene beauty of a mountain landscape or the vibrant
            energy of a bustling city street. Through my lens, I aim to share these moments 
            and inspire others to explore and appreciate the world around us.
          </p>
        </div>
      </section>
    </div>
  );
}