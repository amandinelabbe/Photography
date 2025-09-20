import { useState } from 'react'
import Head from 'next/head'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Images factices pour le portfolio
  const portfolioImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Paysage Doré',
      category: 'Nature'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Portrait Intimiste',
      category: 'Portrait'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mariage Romantique',
      category: 'Mariage'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Architecture Moderne',
      category: 'Architecture'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1554048612-b6a482b224b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Portrait Corporate',
      category: 'Corporate'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Montagne Mystique',
      category: 'Nature'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Élégance Urbaine',
      category: 'Portrait'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Cérémonie Émotion',
      category: 'Mariage'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Lignes Épurées',
      category: 'Architecture'
    }
  ]

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setLightboxIndex(0)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % portfolioImages.length
    setLightboxIndex(nextIndex)
    setSelectedImage(portfolioImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? portfolioImages.length - 1 : lightboxIndex - 1
    setLightboxIndex(prevIndex)
    setSelectedImage(portfolioImages[prevIndex])
  }

  return (
    <>
      <Head>
        <title>Portfolio - Alexandra Martin</title>
        <meta name="description" content="Découvrez les créations photographiques d'Alexandra Martin" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-64 bg-neutral-100">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-neutral-900/30" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                Portfolio
              </h1>
              <p className="text-xl opacity-90">
                Une sélection de mes créations photographiques
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-montserrat font-semibold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-primary-300 font-medium">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-primary-500 transition-colors duration-200"
              >
                <FiX size={32} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary-500 transition-colors duration-200"
              >
                <FiChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary-500 transition-colors duration-200"
              >
                <FiChevronRight size={32} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-montserrat font-semibold mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-primary-300 font-medium">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}