import type { NextPage } from 'next'
import { Fragment } from 'react'


const Home: NextPage = () => {
  return (
    <Fragment>


        <div className="column middle" style={{ backgroundColor: '#bbb' }}>
        <h1>Home</h1>
        </div>
        <aside className="column side" style={{ backgroundColor: '#ccc' }}>
        aside
        </aside>



    </Fragment>
  )
}

export default Home
