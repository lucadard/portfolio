export type TechStackItems =
  | 'javascript'
  | 'typescript'
  | 'nextjs'
  | 'react'
  | 'tailwind'
  | 'node'
  | 'mongodb'

export type ProjectPageProps = {
  projectName: string
  description?: string
  urls: {
    page: string
    prev?: string
    next?: string
  }
  links: { caption: string; link: string }[]
  children?: React.ReactNode
  tech: TechStackItems[]
}


