import { useState, useRef } from 'react'

import { ArrowDown, ArrowUp } from 'phosphor-react'
import { Button } from './Button'

const PATHS = ['#home', "#projects"]


export const ScrollButton = () => {

  const [pathCounter, setPathCounter] = useState(0)
  const containerRef = useRef(null)

  const isCounterEqualToPathsQuantity = pathCounter === PATHS.length - 1



  console.log(containerRef)

  return (
    <div ref={containerRef} className="w-12 h-12 bg-orange-400 rounded-full hover:-translate-y-2 transition delay-50 fixed bottom-10 right-10">
      <a href={PATHS[pathCounter]} className="flex justify-center items-center h-full">
        {isCounterEqualToPathsQuantity ? <ArrowUp size={32} /> : <ArrowDown size={32} />}
      </a>
    </div>
  )
}