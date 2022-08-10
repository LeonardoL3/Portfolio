import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Image from 'next/image';
import { ScrollButton } from '../components/ScrollButton';


const Home: NextPage = (props) => {
  return (
    <>
      <div>
        <div id="home" className="flex h-screen items-center justify-center flex-col">
          <div className="pb-6 overflow-hidden">
            <Image
              src={'https://github.com/Leonardo334.png'}
              width="222px"
              height="222px"
              className="rounded-full border-2 border-solid border-stone-500"
              //layout="fill"
              objectFit="cover"
              style={{ border: '2px solid red' }}
              quality={100}
            />
          </div>
          <h1 className="text-neutral-500 text-5xl"> Leonardo Lazzaretti </h1>
        </div>
      </div>

      <div id="projetos" className="flex h-screen items-center justify-center flex-col">
        <div className="pb-6 overflow-hidden">
          <Image
            src={'https://github.com/Leonardo334.png'}
            width="222px"
            height="222px"
            className="rounded-full border-2 border-solid border-stone-500"
            objectFit="cover"
            style={{ border: '2px solid red' }}
            quality={100}
          />
        </div>
        <h1 className="text-neutral-500 text-5xl"> Projetos </h1>
      </div>
    </>
  );
};

export default Home;
