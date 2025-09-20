import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function SimpleNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  
  // Vérifier si on est sur la page d'accueil
  const isHomePage = router.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: (isHomePage && !isScrolled) ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: (isHomePage && !isScrolled) ? 'none' : 'blur(10px)',
      borderBottom: (isHomePage && !isScrolled) ? 'none' : '1px solid #e5e5e5',
      fontFamily: 'Lato, sans-serif',
      transform: (isHomePage && !isScrolled) ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        {/* Logo - À gauche */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img
              src="/logo_am.png"
              alt="Alexandra Martin Photography"
              style={{
                height: '40px',
                width: 'auto',
                transition: 'opacity 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            />
          </Link>
        </div>

        {/* Desktop Menu - Centré */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          '@media (max-width: 768px)': { display: 'none' }
        }}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                color: (isHomePage && !isScrolled) ? '#171717' : '#404040',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#e88b66'}
              onMouseOut={(e) => e.target.style.color = (isHomePage && !isScrolled) ? '#171717' : '#404040'}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Icons - À droite */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          '@media (max-width: 768px)': { display: 'none' }
        }}>
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: (isHomePage && !isScrolled) ? '#171717' : '#404040',
                  fontSize: '1.2rem',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => e.target.style.color = '#e88b66'}
                onMouseOut={(e) => e.target.style.color = (isHomePage && !isScrolled) ? '#171717' : '#404040'}
                title={social.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>

        {/* Mobile: Logo et Menu Button */}
        <div style={{
          display: 'none',
          '@media (max-width: 768px)': { 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img
              src="/logo_am.png"
              alt="Alexandra Martin Photography"
              style={{
                height: '35px',
                width: 'auto'
              }}
            />
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#404040'
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          display: 'block',
          '@media (min-width: 769px)': { display: 'none' },
          backgroundColor: 'white',
          borderTop: '1px solid #e5e5e5',
          padding: '1rem'
        }}>
          {/* Navigation Links */}
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                display: 'block',
                padding: '0.75rem',
                color: '#404040',
                fontWeight: '500',
                textDecoration: 'none'
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Social Links Mobile */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #e5e5e5'
          }}>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#404040',
                    fontSize: '1.5rem',
                    transition: 'color 0.2s ease'
                  }}
                  title={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}