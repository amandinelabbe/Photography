import SimpleNavbar from './SimpleNavbar'
import SimpleFooter from './SimpleFooter'
import { useRouter } from 'next/router'

export default function SimpleLayout({ children }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SimpleNavbar />
      <main style={{ flexGrow: 1, paddingTop: isHomePage ? '0' : '64px' }}>
        {children}
      </main>
      <SimpleFooter />
    </div>
  )
}