import '../styles/globals.css'
import SimpleLayout from '../components/SimpleLayout'

export default function App({ Component, pageProps }) {
  return (
    <SimpleLayout>
      <Component {...pageProps} />
    </SimpleLayout>
  )
}