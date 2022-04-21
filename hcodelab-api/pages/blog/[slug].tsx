import { GetServerSidePropsContext, NextPage } from "next";

type PostProps = {

    slug: string

}

const Post: NextPage<PostProps> = ({ slug }) => {

    return (
        <>
            <h1>Você acessou: {slug}</h1>
        </>
    );

}

export default Post;

type Params = {
    slug: string
}

export function getServerSideProps({ params }: GetServerSidePropsContext<Params>) {

    if (params) {

        const { slug } = params;

        return {
            props: {
                slug
            }
        }

    } else {
        return {
            redirect: {
                destination: '/'
            }
        }
    }



}