import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link href={`/blog/criando-slug-de-pagina`}>
        <a>Link para o Post</a></Link>
    </>
  )
}

export default Home
