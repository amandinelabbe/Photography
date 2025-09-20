import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>À propos - Alexandra Martin</title>
        <meta name="description" content="Découvrez l'histoire et la passion d'Alexandra Martin, photographe professionnelle" />
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
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center'
            }}>
              À propos
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Photo du photographe */}
          <div style={{ 
            position: 'relative',
            maxWidth: '350px',
            margin: '0 auto'
          }}>
            <div style={{
              aspectRatio: '3/4',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <img
                src="/autoportrait.jpg"
                alt="Alexandra Martin"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Contenu textuel */}
          <div style={{ fontFamily: 'Lato, sans-serif' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                color: '#171717',
                marginBottom: '1rem'
              }}>
                Bonjour, je suis Alexandra
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#737373',
                lineHeight: '1.7'
              }}>
                Photographe passionnée depuis plus de 10 ans, j'ai développé un style unique 
                qui mélange modernité et intemporalité. Chaque projet est pour moi une nouvelle 
                aventure créative.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#171717',
                marginBottom: '0.75rem'
              }}>
                Mon parcours
              </h3>
              <p style={{
                color: '#737373',
                lineHeight: '1.7',
                marginBottom: '1rem'
              }}>
                Diplômée de l'École Nationale Supérieure de la Photographie d'Arles, 
                j'ai commencé ma carrière en tant qu'assistante auprès de grands noms 
                de la photographie française. Cette expérience m'a permis d'affiner ma 
                technique et de développer mon œil artistique.
              </p>
              <p style={{
                color: '#737373',
                lineHeight: '1.7'
              }}>
                Aujourd'hui, je travaille en freelance et collabore avec des magazines, 
                des agences de publicité et des particuliers qui cherchent à immortaliser 
                leurs moments les plus précieux.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                color: '#171717',
                marginBottom: '0.75rem'
              }}>
                Ma vision artistique
              </h3>
              <p style={{
                color: '#737373',
                lineHeight: '1.7'
              }}>
                Je crois que chaque image doit raconter une histoire. Mon approche se base 
                sur l'authenticité des émotions et la beauté des détails souvent négligés. 
                J'aime jouer avec la lumière naturelle et créer des compositions qui 
                révèlent la personnalité de mes sujets.
              </p>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div style={{
          padding: '3rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              color: '#e88b66',
              marginBottom: '0.5rem'
            }}>
              500+
            </div>
            <div style={{ color: '#737373', fontWeight: '500' }}>
              Projets réalisés
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              color: '#e88b66',
              marginBottom: '0.5rem'
            }}>
              10
            </div>
            <div style={{ color: '#737373', fontWeight: '500' }}>
              Années d'expérience
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              color: '#e88b66',
              marginBottom: '0.5rem'
            }}>
              200+
            </div>
            <div style={{ color: '#737373', fontWeight: '500' }}>
              Clients satisfaits
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              color: '#e88b66',
              marginBottom: '0.5rem'
            }}>
              15
            </div>
            <div style={{ color: '#737373', fontWeight: '500' }}>
              Prix remportés
            </div>
          </div>
        </div>
      </div>
    </>
  )
}