import { useState } from 'react'
import Head from 'next/head'

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
      id: 20,
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Symétrie Parfaite',
      category: 'Architecture'
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
      id: 9,
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Lignes Épurées',
      category: 'Architecture'
    },
        {
      id: 8,
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Cérémonie Émotion',
      category: 'Mariage'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Solitude Contemplative',
      category: 'Portrait'
    },
    {
      id: 11,
      src: 'https://www.flarkenadventure.com/wp-content/uploads/2021/07/aurore-boreales-suede-laponie-flarken-adventure-1920x1200.jpg',
      title: 'Aurore Magique',
      category: 'Nature'
    },
    {
      id: 12,
      src: 'https://www.decodujardin.fr/4647-large_default/cerisier-a-fleurs-nigra.jpg',
      title: 'Fleurs de Cerisier',
      category: 'Nature'
    },
    {
      id: 13,
      src: 'https://cdn0.mariages.net/article-vendor/0375/original/1280/jpg/mariage-domaine-monte-verdi-provence-lv-lora-barra-photography-527_3_180375-164012099583935.jpeg',
      title: 'Bonheur Partagé',
      category: 'Mariage'
    },
    {
      id: 16,
      src: 'https://media.istockphoto.com/id/1473666403/fr/photo/cascade-foresti%C3%A8re-profonde-en-tha%C3%AFlande-parc-national-de-la-cascade-derawan-kanjanaburi.jpg?s=612x612&w=0&k=20&c=wxrpY780qioChaqy2GszFdqxj1GLlXqXr3tqjrJ4di8=',
      title: 'Cascade Secrète',
      category: 'Nature'
    },
    {
      id: 17,
      src: 'https://samsonsurmesure.fr/wp-content/uploads/2025/03/M6_0066764_0360-scaled.jpg',
      title: 'Premier Regard',
      category: 'Mariage'
    },
    {
      id: 18,
      src: 'https://www.travelrealfrance.com/wp-content/uploads/2022/04/lavender-field-luberon-guided-tour-1920x987.jpeg',
      title: 'Champ de Lavande',
      category: 'Nature'
    },
    {
      id: 19,
      src: 'https://cdn0.mariages.net/vendor/6827/3_2/1280/jpg/mariages-net-mk-photo-principale_3_176827-172535334011203.jpeg',
      title: 'Émotion Pure',
      category: 'Mariage'
    },
    {
      id: 21,
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Tendresse Éternelle',
      category: 'Mariage'
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

      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Hero Section */}
        <div style={{
          height: '250px',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(23, 23, 23, 0.5), rgba(23, 23, 23, 0.3))'
          }} />
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Portfolio
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
              Une sélection de mes créations photographiques
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '4rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image, index)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '250px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                color: 'white',
                textAlign: 'center'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              onMouseOut={(e) => e.currentTarget.style.opacity = 0}
              >
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {image.title}
                  </h3>
                  <p style={{ color: '#e88b66', fontWeight: '500' }}>
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
            onClick={closeLightbox}
          >
            <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
              {/* Close button */}
              <button
                onClick={closeLightbox}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#e88b66'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                ✕
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#e88b66'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#e88b66'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                ›
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image info */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                color: 'white'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  {selectedImage.title}
                </h3>
                <p style={{ color: '#e88b66', fontWeight: '500' }}>
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