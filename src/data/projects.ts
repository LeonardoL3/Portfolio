interface IGithubProjects {
  title: {
    pt: string,
    es: string,
    en: string
  }
  description: {
    pt: string,
    es: string,
    en: string
  }
  tags: string[],
  repositoryUrl: string,
  cover: string
  deploy?: string
}

export const githubProjects: IGithubProjects[] = [
	{
		title: {
			pt: 'Aplicação Node de usúarios',
			es: 'Aplicación de Node para usuarios',
			en: 'Node Application for users'
		},
		description: { 
			en: 'Node application for registration and login of users. Made following TDD and DDD development methods.',
			pt: 'Aplicação Node para cadastrar e conectar usúarios. Feita seguindo método de desenvolvimento TDD e DDD.',
			es: 'Aplicación de nodo para registrar y conectar usuarios. Hecho siguiendo el método de desarrollo TDD y DDD',
		},
		tags: ['Node', 'Clean Architecture', 'Typescript'],
		repositoryUrl: 'https://github.com/LeonardoL3/node-clean-api',
		cover: '/assets/node_express.png',
	},
	{
		title: {
			pt: 'Portfolio pessoal',
			en: 'Personal Portfolio',
			es: 'cartera personal'
		},
		description: {
			en: 'Code of my personal portfolio. Made with ❤️ and Next.js.',
			pt: 'Código do meu portifolio pessoal. Feito com ❤️ e Next.js.',
			es: 'Código de mi portafolio personal. Hecho con ❤️ y Next.js.',
		},
		repositoryUrl: 'https://github.com/LeonardoL3/Portfolio',
		tags: ['Next', 'Typescript', 'tailwind'],
		cover: '/assets/portfolio.jpg',
	},
	{
		title: {
			pt: 'Design System',
			en: 'Design System',
			es: 'Sistema de diseño'
		},
		description: {
			pt: 'Meu design system pessoal para meus projetos.' ,
			en: 'My personal design system for my projects.',
			es: 'Mi sistema de diseño personal para mis proyectos.'
		},
		deploy: 'https://leonardol3.github.io/Design-System',
		repositoryUrl: 'https://github.com/LeonardoL3/Design-System',
		tags: ['Storybook', 'Turbopack', 'React', 'Github Actions'],
		cover: '/assets/design_system.png'
	},
	{
		title: {
			pt: 'React Blog',
			en: 'React Blog',
			es: 'React Blog'
		},
		description: {
			pt: 'Uma aplicação react using webhooks.',
			en: 'A react blog application using webhooks.',
			es: 'Una aplicación de blog de reacción que utiliza webhooks.'
		},
		repositoryUrl: 'https://github.com/LeonardoL3/React-Blog',
		tags: ['React', 'Stripe', 'Typescript'],
		cover: '/assets/react-blog.jpeg'
	}
]
