import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import Image from 'next/image';
import { ScrollButton } from '../components/ScrollButton';
import { GithubProjects } from '../components/GithubProjects'

import { LinkedinLogo, GithubLogo, WhatsappLogo, Envelope } from 'phosphor-react'
import Link from 'next/link';

type DataProps = {

}

type HomeProps = {
  data: DataProps
}

const Home: NextPage = ({ data }: any) => {
  console.log(data)
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
          <h2 className="text-xl md:text-3xl  py-12 text-neutral-500"> Some of my projects on Github: </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-12">

            {data?.map((d: any) => {
              return (
                <a key={d.id} href={d.html_url} className="h-96 bg-transparent bg hover:scale-105 transition delay-80 outline-4 outline-gray-800">
                  <div className="h-2/3 overflow-hidden relative rounded-t-lg">
                    <Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
                  </div>
                  <div className="p-4 h-1/3 text-center border-r border-l border-b border-neutral-300">
                    <h2 className="text-neutral-300 font-bold text-xl"> {d.name} </h2>
                    <p className="text-white">
                      {d.description}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/Leonardo334/repos')
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}


/*

<div className=" max-w-[1120px] mx-auto flex flex-col justify-center h-screen">
          <h1 className="text-3xl pb-12"> Some of my projects on github: </h1>
          <div className="flex gap-12 flex-wrap">
            <div className=" bg-transparent bg border-2 border-solid rounded-t-3xl hover:scale-105 transition delay-80">
              <div className="h-2/3 overflow-hidden rounded-t-3xl relative">
                <Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
              </div>
              <div className="p-4 border-t-2 border-solid border-neutral-300 h-1/3 flex items-center justify-center text-center">
                <span className="text-primary brightness-150">
                  um projetinho maneirinho usando next.js e stripe.
                </span>
              </div>
            </div>
            <div className="w-80 h-80 bg-transparent bg border-2 border-solid border-neutral-300 rounded-t-3xl hover:scale-105 transition delay-80">
              <div className="h-2/3 overflow-hidden rounded-t-3xl relative">
                <Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
              </div>
              <div className="p-4 border-t-2 border-solid border-neutral-300 h-1/3 flex items-center justify-center text-center">
                <span className="text-primary brightness-150">
                  um projetinho maneirinho usando next.js e stripe.
                </span>
              </div>
            </div>
            <div className="w-80 h-80 bg-transparent bg border-2 border-solid border-neutral-300 rounded-t-3xl hover:scale-105 transition delay-80">
              <div className="h-2/3 overflow-hidden rounded-t-3xl relative">
                <Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
              </div>
              <div className="p-4 border-t-2 border-solid border-neutral-300 h-1/3 flex items-center justify-center text-center">
                <span className="text-primary brightness-150">
                  um projetinho maneirinho usando next.js e stripe.
                </span>
              </div>
            </div>
            <div className="w-80 h-80 bg-transparent bg border-2 border-solid border-neutral-300 rounded-t-3xl hover:scale-105 transition delay-80">
              <div className="h-2/3 overflow-hidden rounded-t-3xl relative">
                <Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
              </div>
              <div className="p-4 border-t-2 border-solid border-neutral-300 h-1/3 flex items-center justify-center text-center">
                <span className="text-primary brightness-150">
                  um projetinho maneirinho usando next.js e stripe.
                </span>
              </div>
            </div>
          </div>
        </div>

        */
