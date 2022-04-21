import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import {Button} from '../components/Button'

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
        <Button color="primary" type="button">Clique Aui</Button>
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