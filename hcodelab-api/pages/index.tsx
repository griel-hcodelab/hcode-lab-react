import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'


const Home: NextPage = () => {

  useEffect(()=>{
    console.log(process.env.MYSQL_CONNECT);
  },[]);

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


export function getServerSideProps() {
  console.log(process.env.MYSQL_CONNECT);

  return {
    props: {

    }
  }
}