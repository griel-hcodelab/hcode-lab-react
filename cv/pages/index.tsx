import type { NextPage } from 'next'
import Layout from '../components/Layout'


const Home: NextPage = () => {
  return (
    <Layout />
  )
}

export default Home



export function getServerSideProps() {
  return {
    props: {
      person: {
        displayName: 'Roberto Griel Filho',
        profession: 'Developer',
        address: 'Nova Serrana, MG',
        email: 'roberto@griel.com.br',
        phone: '(31) 9 9999-9999',
        photo: 'https://i.pravatar.cc/300'
      },
      skills: [
        {
          title: 'ReacJS',
          level: 100
        },

        {
          title: 'PHP',
          level: 100
        },

      ],
      languages: [
        {
          title: 'Português',
          level: 100
        }
      ],
      experiences: [
        {
          title: 'Desenvolvedor',
          startAt: 2020,
          endAt: null,
          description: 'lorem'
        },
        
        {
          title: 'Programador',
          startAt: 2019,
          endAt: 2020,
          description: 'lirem'
        },

      ],
      educations: [
        {
          title: 'Ensino Médio',
          startAt: 2010,
          endAt: 2014,
          description: 'lorem'
        }
      ]
    },
  }
}