import { ProjectPageProps, projectKeys } from './types'

export const projects: { [key in projectKeys]: ProjectPageProps } = {
  mercadogame: {
    projectName: 'Mercado Game',
    description: {
      es: 'Mini-juego utilizando la API de MercadoLibre.',
      en: ''
    },
    urls: {
      page: '/work/mercadogame',
      next: '/work/wheretowatch'
    },
    tech: ['typescript', 'react', 'tailwind'],
    links: [
      {
        caption: 'Repo',
        link: 'https://github.com/lucadard/question-game-mercadolibre'
      },
      {
        caption: 'Website',
        link: 'https://mercadogame.vercel.app/'
      }
    ]
  },
  wheretowatch: {
    projectName: 'Where to Watch',
    description: {
      es: 'Te muestra donde podés encontrar tu show favorito.',
      en: ''
    },
    urls: {
      page: '/work/wheretowatch',
      prev: '/work/mercadogame',
      next: '/work/ecommerce'
    },
    tech: ['javascript', 'react', 'tailwind'],
    links: [
      {
        caption: 'Repo',
        link: 'https://github.com/lucadard/where-to-whatch'
      },
      {
        caption: 'Website',
        link: 'https://where-to-watch-lucadard.vercel.app/'
      }
    ]
  },
  ecommerce: {
    projectName: 'Ecommerce',
    description: {
      es: 'Un simple ecommerce. Tanto backend como frontend.',
      en: ''
    },
    urls: {
      page: '/work/ecommerce',
      prev: '/work/wheretowatch',
      next: '/work/giphyclone'
    },
    tech: ['javascript', 'typescript', 'node', 'react', 'tailwind', 'mongodb'],
    links: [
      {
        caption: 'Backend repo',
        link: 'https://github.com/lucadard/codershop_backend'
      },
      {
        caption: 'Frontend repo',
        link: 'https://github.com/lucadard/codershop_frontend'
      },
      {
        caption: 'Website',
        link: 'https://ecommerce-coderhouse-frontend.vercel.app/'
      },
      {
        caption: 'API',
        link: 'https://ecommerce-coderhouse-server.onrender.com/api/'
      }
    ]
  },
  giphyclone: {
    projectName: 'Giphy Clone',
    description: {
      es: 'Clon de la web app de GIPHY.',
      en: ''
    },
    urls: {
      page: '/work/giphyclone',
      prev: '/work/ecommerce',
      next: '/work/simplifia'
    },
    tech: ['typescript', 'react'],
    links: [
      {
        caption: 'Repo',
        link: 'https://github.com/lucadard/GIPHY_Clone'
      },
      {
        caption: 'Website',
        link: 'https://react-ts-02.netlify.app/'
      }
    ]
  },
  simplifia: {
    projectName: 'Simplif-IA',
    description: {
      es: 'Clon de ChatGPT con su propia funcionalidad.',
      en: ''
    },
    urls: {
      page: '/work/simplifia',
      prev: '/work/giphyclone',
      next: '/work/todo'
    },
    tech: ['typescript', 'react', 'nextjs', 'tailwind'],
    links: [
      // {
      //   caption: 'Repo',
      //   link: 'https://github.com/lucadard/portfolio-next'
      // },
      {
        caption: 'Website',
        link: 'https://simplif-ia.vercel.app/'
      }
    ]
  },
  todo: {
    projectName: 'Todo App',
    description: {
      es: 'Una lista de tareas.',
      en: ''
    },
    urls: {
      page: '/work/todo',
      prev: '/work/simplifia',
      next: '/work/mercadogame'
    },
    tech: ['javascript', 'react'],
    links: [
      {
        caption: 'Repo',
        link: 'https://github.com/lucadard/frontendmentor-todo-app'
      },
      {
        caption: 'Website',
        link: 'https://frontendmentor-todoapp.netlify.app/'
      }
    ]
  }
}
