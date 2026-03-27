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
  inProgress?: boolean
}

export const githubProjects: IGithubProjects[] = [
	{
		title: {
			pt: 'Criação e autenticação de usuários',
			es: 'Creación y autenticación de usuarios',
			en: 'User creation and authentication'
		},
		description: {
			en: 'Node application for registration and login of users. Made following TDD and DDD development methods.',
			pt: 'Aplicação Node para cadastrar e conectar usúarios. Feita seguindo método de desenvolvimento TDD e DDD.',
			es: 'Aplicación de nodo para registrar y conectar usuarios. Hecho siguiendo el método de desarrollo TDD y DDD',
		},
		tags: ['Node', 'Clean Architecture', 'Typescript'],
		repositoryUrl: 'https://github.com/LeonardoL3/node-clean-api',
		cover: '/assets/user-auth-system.jpg',
	},
	{
		title: {
			pt: 'Portfolio pessoal',
			en: 'Personal Portfolio',
			es: 'cartera personal'
		},
		description: {
			en: 'Code of my personal portfolio.',
			pt: 'Código do meu portifolio pessoal.',
			es: 'Código de mi portafolio personal.',
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
		cover: '/assets/design-system.png'
	},
	{
		title: {
			pt: 'Xadrez',
			en: 'Chess',
			es: 'Ajedrez'
		},
		description: {
			en: 'A chess game built with Next.js and React. Includes move validation, piece logic, and a full test suite with Jest.',
			pt: 'Um jogo de xadrez desenvolvido com Next.js e React. Inclui validação de movimentos, lógica de peças e uma suíte de testes com Jest.',
			es: 'Un juego de ajedrez desarrollado con Next.js y React. Incluye validación de movimientos, lógica de piezas y una suite de pruebas con Jest.',
		},
		repositoryUrl: 'https://github.com/LeonardoL3/chess',
		tags: ['Next', 'React', 'Typescript', 'Jest'],
		cover: '/assets/chess.png',
		inProgress: true,
	},
]
