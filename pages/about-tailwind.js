import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>À propos - Alexandra Martin</title>
        <meta name="description" content="Découvrez l'histoire et la passion d'Alexandra Martin, photographe professionnelle" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-64 bg-neutral-100">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-neutral-900/30" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white">
              À propos
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo du photographe */}
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Alexandra Martin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-300 rounded-full opacity-30" />
            </div>

            {/* Contenu textuel */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-neutral-900 mb-4">
                  Bonjour, je suis Alexandra
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Photographe passionnée depuis plus de 10 ans, j'ai développé un style unique 
                  qui mélange modernité et intemporalité. Chaque projet est pour moi une nouvelle 
                  aventure créative.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-montserrat font-semibold text-neutral-900 mb-3">
                  Mon parcours
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Diplômée de l'École Nationale Supérieure de la Photographie d'Arles, 
                  j'ai commencé ma carrière en tant qu'assistante auprès de grands noms 
                  de la photographie française. Cette expérience m'a permis d'affiner ma 
                  technique et de développer mon œil artistique.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Aujourd'hui, je travaille en freelance et collabore avec des magazines, 
                  des agences de publicité et des particuliers qui cherchent à immortaliser 
                  leurs moments les plus précieux.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-montserrat font-semibold text-neutral-900 mb-3">
                  Ma vision artistique
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Je crois que chaque image doit raconter une histoire. Mon approche se base 
                  sur l'authenticité des émotions et la beauté des détails souvent négligés. 
                  J'aime jouer avec la lumière naturelle et créer des compositions qui 
                  révèlent la personnalité de mes sujets.
                </p>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary-500 mb-2">
                500+
              </div>
              <div className="text-neutral-600 font-medium">
                Projets réalisés
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary-500 mb-2">
                10
              </div>
              <div className="text-neutral-600 font-medium">
                Années d'expérience
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary-500 mb-2">
                200+
              </div>
              <div className="text-neutral-600 font-medium">
                Clients satisfaits
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary-500 mb-2">
                15
              </div>
              <div className="text-neutral-600 font-medium">
                Prix remportés
              </div>
            </div>
          </div>

          {/* Spécialités */}
          <div className="mt-20">
            <h3 className="text-3xl font-montserrat font-bold text-neutral-900 text-center mb-12">
              Mes spécialités
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-neutral-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-montserrat font-semibold text-neutral-900 mb-2">
                  Portraits
                </h4>
                <p className="text-neutral-600">
                  Révéler la personnalité unique de chaque individu
                </p>
              </div>
              <div className="text-center p-6 border border-neutral-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-montserrat font-semibold text-neutral-900 mb-2">
                  Mariages
                </h4>
                <p className="text-neutral-600">
                  Immortaliser les plus beaux moments d'amour
                </p>
              </div>
              <div className="text-center p-6 border border-neutral-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-montserrat font-semibold text-neutral-900 mb-2">
                  Corporate
                </h4>
                <p className="text-neutral-600">
                  Valoriser l'image de marque des entreprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}