export type languages = 'es' | 'en'

export type projectKeys =
  | 'mercadogame'
  | 'giphyclone'
  | 'wheretowatch'
  | 'ecommerce'
  | 'simplifia'
  | 'todo'
  | 'gitcord'

export type TechStackItems =
  | 'javascript'
  | 'typescript'
  | 'nextjs'
  | 'react'
  | 'tailwind'
  | 'node'
  | 'mongodb'
  | 'firebase'

export type ProjectPageProps = {
  projectName: string
  description: { [key in languages]: string }
  urls: {
    page: string
    prev?: string
    next?: string
  }
  links: Array<{ caption: string, link: string }>
  children?: React.ReactNode
  tech: TechStackItems[]
  locale?: string
  // hover: { image: string }
}
