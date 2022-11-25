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
		repositoryUrl: 'ttps://github.com/LeonardoL3/Next.js-charts',
		cover: '/assets/soccer-node-api.jpg',
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
		repositoryUrl: 'https://github.com/LeonardoL3/Next.js-charts',
		tags: ['Next', 'Typescript', 'tailwind'],
		cover: '/assets/te.jpg',
	},
	{
		title: {
			pt: 'Design System',
			en: 'Design System',
			es: 'Sistema de diseño'
		},
		description: {
			pt: 'Meu design system pessoal para meus projetos. deployado aqui: leonardol3.github.io/Design-System' ,
			en: 'My personal design system for my projects. deployed here: leonardol3.github.io/Design-System',
			es: 'Mi sistema de diseño personal para mis proyectos. desplegado aquí'
		},
		repositoryUrl: 'https://github.com/LeonardoL3/Design-System',
		tags: ['Storybook', 'Turbopack', 'React', 'Github Actions'],
		cover: ''
	}
]
