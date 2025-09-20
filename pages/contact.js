import { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message envoyé ! Je vous recontacterai bientôt.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/alexandramartin', symbol: '📷', color: '#E4405F' },
    { name: 'Facebook', href: 'https://facebook.com/alexandramartin', symbol: '📘', color: '#1877F2' },
    { name: 'Twitter', href: 'https://twitter.com/alexandramartin', symbol: '🐦', color: '#1DA1F2' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/alexandramartin', symbol: '💼', color: '#0A66C2' },
  ]

  return (
    <>
      <Head>
        <title>Contact - Alexandra Martin</title>
        <meta name="description" content="Contactez Alexandra Martin pour vos projets photographiques" />
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
              Contact
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
              Discutons de votre projet ensemble
            </p>
          </div>
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem'
        }}>
          {/* Formulaire de contact */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              color: '#171717',
              marginBottom: '1.5rem'
            }}>
              Envoyez-moi un message
            </h2>
            <p style={{
              color: '#737373',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Que ce soit pour un projet professionnel, personnel ou pour toute question, 
              n&apos;hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#404040',
                  marginBottom: '0.5rem'
                }}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d4d4d4',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    fontFamily: 'Lato, sans-serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e88b66'
                    e.target.style.boxShadow = '0 0 0 3px rgba(232, 139, 102, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d4d4d4'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#404040',
                  marginBottom: '0.5rem'
                }}>
                  Adresse e-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre@email.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d4d4d4',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    fontFamily: 'Lato, sans-serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e88b66'
                    e.target.style.boxShadow = '0 0 0 3px rgba(232, 139, 102, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d4d4d4'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#404040',
                  marginBottom: '0.5rem'
                }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Décrivez votre projet ou votre demande..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d4d4d4',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    resize: 'none',
                    fontFamily: 'Lato, sans-serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e88b66'
                    e.target.style.boxShadow = '0 0 0 3px rgba(232, 139, 102, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d4d4d4'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#e88b66',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'Lato, sans-serif'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#d97149'
                  e.target.style.transform = 'scale(1.02)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#e88b66'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              color: '#171717',
              marginBottom: '1.5rem'
            }}>
              Informations de contact
            </h2>
            
            <div style={{ marginBottom: '2.5rem' }}>
              {[
                { icon: '✉️', title: 'E-mail', content: 'alexandra.martin@photographe.com' },
                { icon: '📞', title: 'Téléphone', content: '+33 6 12 34 56 78' },
                { icon: '📍', title: 'Localisation', content: 'Paris, France\nDéplacements possibles' }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#fae6db',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontWeight: '600',
                      color: '#171717',
                      marginBottom: '0.25rem',
                      fontSize: '1rem'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: '#737373',
                      margin: 0,
                      whiteSpace: 'pre-line'
                    }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section réseaux sociaux */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#171717',
                marginBottom: '1rem'
              }}>
                Suivez-moi
              </h3>
              <p style={{
                color: '#737373',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Découvrez mes dernières créations et coulisses sur les réseaux sociaux.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      fontSize: '1.25rem',
                      transition: 'all 0.2s ease',
                      color: '#737373'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = social.color
                      e.target.style.transform = 'scale(1.1)'
                      e.target.style.color = 'white'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#f5f5f5'
                      e.target.style.transform = 'scale(1)'
                      e.target.style.color = '#737373'
                    }}
                  >
                    {social.symbol}
                  </a>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#fafafa',
              borderRadius: '8px'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#171717',
                marginBottom: '1rem'
              }}>
                Horaires de disponibilité
              </h3>
              <div style={{ fontSize: '0.875rem', color: '#737373' }}>
                {[
                  { day: 'Lundi - Vendredi', hours: '9h00 - 18h00' },
                  { day: 'Samedi', hours: '10h00 - 16h00' },
                  { day: 'Dimanche', hours: 'Sur rendez-vous' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
              <p style={{
                fontSize: '0.75rem',
                color: '#a3a3a3',
                marginTop: '1rem',
                margin: '1rem 0 0 0'
              }}>
                * Séances photo possibles en dehors de ces horaires sur demande
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}