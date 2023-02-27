import { ProjectPageProps } from './types'

export const projects: { [key: string]: ProjectPageProps } = {
  mercadogame: {
    projectName: 'Mercado Game',
    description: 'Mini-juego utilizando la API de MercadoLibre.',
    urls: {
      page: '/work/mercadogame',
      next: '/work/giphyclone'
    },
    tech: ['typescript', 'react', 'tailwind'],
    links: [
      {
        caption: 'Repositorio',
        link: 'https://github.com/lucadard/question-game-mercadolibre'
      },
      {
        caption: 'Sitio web',
        link: 'https://question-game-ml-lucadard.vercel.app/'
      }
    ]
  },
  giphyclone: {
    projectName: 'Giphy Clone',
    description: 'Clon de la web app de GIPHY.',

    urls: {
      page: '/work/giphyclone',

      prev: '/work/mercadogame',
      next: '/work/wheretowatch'
    },
    tech: ['typescript', 'react'],
    links: [
      {
        caption: 'Repositorio',
        link: 'https://github.com/lucadard/GIPHY_Clone'
      },
      {
        caption: 'Sitio web',
        link: 'https://react-ts-02.netlify.app/'
      }
    ]
  },
  wheretowatch: {
    projectName: 'Where to Watch',
    description: 'Te muestra donde podés encontrar tu show favorito.',
    urls: {
      page: '/work/wheretowatch',
      prev: '/work/giphyclone',
      next: '/work/ecommerce'
    },
    tech: ['javascript', 'react', 'tailwind'],
    links: [
      {
        caption: 'Repositorio',
        link: 'https://github.com/lucadard/where-to-whatch-app'
      },
      {
        caption: 'Sitio web',
        link: 'https://where-to-watch-lucadard.vercel.app/'
      }
    ]
  },
  ecommerce: {
    projectName: 'Fullstack Ecommerce',
    description: 'Un simple ecommerce. Tanto backend como frontend.',
    urls: {
      page: '/work/ecommerce',
      prev: '/work/wheretowatch',
      next: '/work/portfolio'
    },
    tech: ['javascript', 'typescript', 'node', 'react', 'tailwind', 'mongodb'],
    links: [
      {
        caption: 'Repositorio Backend',
        link: 'https://github.com/lucadard/ecommerce-coderhouse_server'
      },
      {
        caption: 'Repositorio Frontend',
        link: 'https://github.com/lucadard/ecommerce-coderhouse_frontend'
      },
      {
        caption: 'Sitio web',
        link: 'https://ecommerce-coderhouse-frontend.vercel.app/'
      },
      {
        caption: 'API',
        link: 'https://ecommerce-coderhouse-server.onrender.com/'
      }
    ]
  },
  portfolio: {
    projectName: 'Portfolio',
    description: 'La pagina que estas viendo ahora mismo.',

    urls: {
      page: '/work/portfolio',
      prev: '/work/ecommerce',
      next: '/work/simplifia'
    },
    tech: ['typescript', 'react', 'nextjs', 'tailwind'],
    links: [
      //   {
      //     caption: 'Repositorio',
      //     link: 'https://portfolio-next-lucadard.vercel.app/'
      //   },
      {
        caption: 'Sitio web',
        link: 'https://portfolio-next-lucadard.vercel.app/'
      }
    ]
  },
  simplifia: {
    projectName: 'Simplif-IA',
    description: 'Clon de ChatGPT con su propia funcionalidad.',
    urls: {
      page: '/work/simplifia',
      prev: '/work/portfolio',
      next: '/work/todo'
    },
    tech: ['typescript', 'react', 'nextjs', 'tailwind'],
    links: [
      // {
      //   caption: 'Repositorio',
      //   link: ''
      // },
      {
        caption: 'Sitio web',
        link: 'https://simplif-ia.vercel.app/'
      }
    ]
  },
  todo: {
    projectName: 'Todo App',
    description: 'Una lista de tareas.',
    urls: {
      page: '/work/todo',
      prev: '/work/simplifia',
      next: '/work/mercadogame'
    },
    tech: ['javascript', 'react'],
    links: [
      {
        caption: 'Repositorio',
        link: 'https://github.com/lucadard/frontendmentor-todo-app'
      },
      {
        caption: 'Sitio web',
        link: 'https://frontendmentor-todoapp.netlify.app/'
      }
    ]
  }
}
