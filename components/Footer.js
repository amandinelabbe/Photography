import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500" />
                <span>alexandra.martin@photographe.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-500" />
                <span>+33 6 12 34 56 78</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-primary-500 transition-colors duration-200">
                Accueil
              </Link>
              <Link href="/about" className="block hover:text-primary-500 transition-colors duration-200">
                À propos
              </Link>
              <Link href="/portfolio" className="block hover:text-primary-500 transition-colors duration-200">
                Portfolio
              </Link>
              <Link href="/contact" className="block hover:text-primary-500 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-neutral-400 hover:text-primary-500 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © 2025 Alexandra Martin. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}