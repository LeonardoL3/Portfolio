interface IGithubProjects {
  title: string
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
    title: "Node soccer api",
    description: {
      en: "",
      pt: "Aplicação node para organizar e marcar encontros de jogos de futebol, feita seguindo protocolo TDD e clean architecture",
      es: ""
    },
    tags: ['Node', 'Clean Architecture', 'Typescript'],
    repositoryUrl: "ttps://github.com/LeonardoL3/Next.js-charts",
    cover: "/assets/soccer-node-api.jpg",
  },
  {
    title: "Next.js Charts Application",
    description: {
      en: "",
      pt: "dashboard em Next usando apexcharts para construção dos graficos",
      es: ""
    },
    repositoryUrl: "https://github.com/LeonardoL3/Next.js-charts",
    tags: ['Next', 'Typescript', 'Charts'],
    cover: "/assets/charts.png",
  },
  {
    title: "Portifolio pessoal",
    description: {
      en: "",
      pt: "Código do meu portifolio pessoal",
      es: ""
    },
    repositoryUrl: "https://github.com/LeonardoL3/Next.js-charts",
    tags: ['Next', 'Typescript', 'tailwind'],
    cover: "/assets/te.jpg",
  },
  
] 
