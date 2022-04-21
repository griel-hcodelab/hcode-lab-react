import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <hr />

      <Link href="/blog/criando-um-curso">
        <a >Link para Post</a>
      </Link>
    </>
  )
}

export default Home
