import Link from 'next/link'

export default function SimpleFooter() {
  const socialLinks = [
    { name: 'Instagram', href: '#', symbol: '📷' },
    { name: 'Facebook', href: '#', symbol: '📘' },
    { name: 'Twitter', href: '#', symbol: '🐦' },
    { name: 'LinkedIn', href: '#', symbol: '💼' },
  ]

  return (
    <footer style={{
      backgroundColor: '#171717',
      color: 'white',
      fontFamily: 'Lato, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {/* Contact Info */}
        <div>
          <h3 style={{
            fontSize: '1.25rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Contact
          </h3>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ color: '#e88b66', marginRight: '0.75rem' }}>✉️</span>
            <span>alexandra.martin@photographe.com</span>
          </div>
          <div>
            <span style={{ color: '#e88b66', marginRight: '0.75rem' }}>📞</span>
            <span>+33 6 12 34 56 78</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 style={{
            fontSize: '1.25rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Navigation
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
              Accueil
            </Link>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
              À propos
            </Link>
            <Link href="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>
              Portfolio
            </Link>
            <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
              Contact
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 style={{
            fontSize: '1.25rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Suivez-moi
          </h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease'
                }}
                title={social.name}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                {social.symbol}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid #404040',
        padding: '2rem 1rem',
        textAlign: 'center',
        color: '#a3a3a3'
      }}>
        <p>© 2025 Alexandra Martin. Tous droits réservés.</p>
      </div>
    </footer>
  )
}