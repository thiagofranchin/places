import client from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

// Generates Page
export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // Retorna um loading
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

// Generates the urls in build time
export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

// Generates page data at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`,
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html,
    },
  }
}

// getStaticPaths => Serve para gerar as urls em build time /aout, trip/campinas
// getStaticProps => Serve para busar dados da página (props) - build time - estático
// getServerSideProps => Serve para buscar dados da página (props) - runtiime - toda requisição (bundle fica no server)
// getInitialProps => Serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o cliente) - hydrate
