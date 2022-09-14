import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import Image from 'next/image';
import { ScrollButton } from '../components/ScrollButton';
import { GithubProjects } from '../components/GithubProjects'
import { githubProjects } from '../mock/github-projects'

import { LinkedinLogo, GithubLogo, WhatsappLogo, Envelope } from 'phosphor-react'


interface IProjects {
  name: string
  description: {
    pt: string,
    es: string,
    en: string
  }
  tags: string[],
  repositoryUrl: string,
  cover: string
}

const Home: NextPage = () => {

  const teste = '10'

  return (
    <main>

      <section id="home">
        <div className="flex h-screen items-center justify-center flex-col">

          <div className="rounded-full overflow-hidden border-2 border-solid border-neutral-300 w-[222px] h-[222px]">
            <Image
              src={'https://github.com/Leonardo334.png'}
              width="222px"
              height="222px"
              className="rounded-full border-2 border-solid border-stone-500"
              quality={100}
            />
          </div>
          <div className="text-center mx-8">
            <h1 className="text-neutral-500 text-5xl py-8"> Leonardo Lazzaretti </h1>
            <p className="text-neutral-300"> I'm a fullstack developer currently working with React and Node. </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="max-w-[1189px] mx-auto mb-24 px-6">
          <h2 className="text-xl md:text-3xl py-12 text-neutral-500"> Some of my projects on Github: </h2>
          <div className="grid grid-cols-projects auto-rows-fr gap-3">
            {githubProjects.map((project: any) => {
              return (
                <a href={project.repositoryUrl} key={project.name} className="bg-orange-400 text-center">
                  <div>
                    <img src={project.cover} className="h-60 w-full object-cover" />
                  </div>
                  <div>
                    <h2> {project.name} </h2>
                    <p>
                      {project.description.pt}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <footer>
        <div className="flex justify-center h-24 items-center gap-12">
          <LinkedinLogo size={24} className="hover:text-orange-400" />
          <GithubLogo size={24} className="hover:text-orange-400" />
          <Envelope size={24} className="hover:text-orange-400" />
          <WhatsappLogo size={24} className="hover:text-orange-400" />
        </div>
      </footer>

    </main>
  );
};

export default Home;
