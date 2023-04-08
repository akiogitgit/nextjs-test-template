import { GetStaticProps, NextPage } from 'next'

import { Layout } from '../components/Layout'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type Props = {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  console.log(posts)

  return (
    <Layout title='Blog'>
      <h1 className='text-4xl'>blog page</h1>
      <ul className='mt-4'>
        {posts.map(post => (
          <li key={post.id}>
            <div className='flex gap-3'>
              <p>{post.id}</p>:
              <p className='border-b cursor-pointer border-gray-500 hover:bg-gray-300'>
                {post.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch(
    'https://jsonplaceholder.typicode.com/posts/?_limit=10',
  ).then(res => res.json())

  return {
    props: {
      posts,
    },
  }
}

export default Blog
