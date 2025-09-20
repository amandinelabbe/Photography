import { useState } from 'react'
import Head from 'next/head'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

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
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
    alert('Message envoyé ! Je vous recontacterai bientôt.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/alexandramartin', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/alexandramartin', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/alexandramartin', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/alexandramartin', color: 'hover:text-blue-700' },
  ]

  return (
    <>
      <Head>
        <title>Contact - Alexandra Martin</title>
        <meta name="description" content="Contactez Alexandra Martin pour vos projets photographiques" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-64 bg-neutral-100">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-neutral-900/30" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                Contact
              </h1>
              <p className="text-xl opacity-90">
                Discutons de votre projet ensemble
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-neutral-900 mb-6">
                Envoyez-moi un message
              </h2>
              <p className="text-neutral-600 mb-8">
                Que ce soit pour un projet professionnel, personnel ou pour toute question, 
                n'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-neutral-900 mb-6">
                Informations de contact
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">E-mail</h3>
                    <p className="text-neutral-600">alexandra.martin@photographe.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Téléphone</h3>
                    <p className="text-neutral-600">+33 6 12 34 56 78</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Localisation</h3>
                    <p className="text-neutral-600">Paris, France<br />Déplacements possibles</p>
                  </div>
                </div>
              </div>

              {/* Section réseaux sociaux */}
              <div>
                <h3 className="text-2xl font-montserrat font-semibold text-neutral-900 mb-6">
                  Suivez-moi
                </h3>
                <p className="text-neutral-600 mb-6">
                  Découvrez mes dernières créations et coulisses sur les réseaux sociaux.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 ${social.color} transition-all duration-200 transform hover:scale-110`}
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-10 p-6 bg-neutral-50 rounded-lg">
                <h3 className="text-xl font-montserrat font-semibold text-neutral-900 mb-4">
                  Horaires de disponibilité
                </h3>
                <div className="space-y-2 text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Sur rendez-vous</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 mt-4">
                  * Séances photo possibles en dehors de ces horaires sur demande
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}