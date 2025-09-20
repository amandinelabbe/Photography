import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexandra Martin - Photographe</title>
        <meta name="description" content="Photographe professionnelle spécialisée dans la photographie artistique et moderne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        height: '100vh',
        background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("/home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat, sans-serif'
      }}>
        <div style={{ padding: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Alexandra Martin
          </h1>
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            fontWeight: '300',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Capturer l&apos;essence de l&apos;instant avec un regard artistique et moderne
          </p>
          <Link 
            href="/portfolio"
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontWeight: '600',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
            }}
          >
            Voir le Portfolio
          </Link>
        </div>
      </div>

      {/* Section d'introduction */}
      <section style={{
        padding: '5rem 2rem',
        backgroundColor: 'white',
        textAlign: 'center',
        fontFamily: 'Lato, sans-serif'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            color: '#171717',
            marginBottom: '1.5rem'
          }}>
            Bienvenue dans mon univers
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#737373',
            lineHeight: '1.7',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Photographe passionnée, je crée des images qui racontent des histoires. 
            Chaque clic capture un moment unique, une émotion, une beauté éphémère 
            que je transforme en art intemporel.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fae6db',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#e88b66'
              }}>
                📷
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#171717',
                marginBottom: '0.5rem'
              }}>
                Créativité
              </h3>
              <p style={{ color: '#737373' }}>
                Chaque photo est une œuvre d&apos;art unique
              </p>
            </div>
            
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fae6db',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#e88b66'
              }}>
                ❤️
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#171717',
                marginBottom: '0.5rem'
              }}>
                Passion
              </h3>
              <p style={{ color: '#737373' }}>
                L&apos;amour de la photographie guide chaque projet
              </p>
            </div>
            
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fae6db',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#e88b66'
              }}>
                ✓
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#171717',
                marginBottom: '0.5rem'
              }}>
                Excellence
              </h3>
              <p style={{ color: '#737373' }}>
                Qualité professionnelle garantie
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}