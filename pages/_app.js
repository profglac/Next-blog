/*Esse componente é o top-level component que irá ser comum a todas as páginas*/
/*Use esse componente para manter state quando navegando entre páginas*/

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
