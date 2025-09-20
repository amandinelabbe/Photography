export default function TestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#e88b66',
          marginBottom: '1rem'
        }}>
          Test du Site de Photographe
        </h1>
        <p style={{
          color: '#666',
          marginBottom: '1.5rem'
        }}>
          Si vous voyez ce message avec du style, l'application fonctionne !
        </p>
        <button style={{
          backgroundColor: '#e88b66',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Bouton Test
        </button>
      </div>
    </div>
  )
}