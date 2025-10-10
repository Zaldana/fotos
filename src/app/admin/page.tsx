'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ImageUpload from "@/components/ImageUpload"
import ImageGallery from "@/components/ImageGallery"

// Sample data - in a real app, this would come from a database
const sampleImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    alt: "Sample nature image",
    title: "Mountain Vista",
    category: "nature",
    description: "A breathtaking view of mountain peaks at sunrise"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    alt: "Sample travel image",
    title: "City Skyline",
    category: "travel",
    description: "The bustling energy of city life captured at golden hour"
  }
];

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [images, setImages] = useState(sampleImages)
  const [activeTab, setActiveTab] = useState<'upload' | 'manage'>('upload')

  useEffect(() => {
    if (status === 'loading') return // Still loading
    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleImageUpload = (newImage: any) => {
    setImages(prev => [...prev, { ...newImage, id: Date.now() }])
  }

  const handleImageDelete = (imageId: number) => {
    setImages(prev => prev.filter(img => img.id !== imageId))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {session.user?.name || session.user?.email}
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Manage your photography portfolio
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('upload')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upload'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upload Images
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'manage'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Manage Images
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'upload' ? (
            <ImageUpload onImageUpload={handleImageUpload} />
          ) : (
            <ImageGallery 
              images={images} 
              onImageDelete={handleImageDelete}
              isAdmin={true}
            />
          )}
        </div>
      </section>
    </div>
  )
}
