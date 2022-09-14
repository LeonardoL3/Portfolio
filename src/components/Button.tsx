import { ReactNode, HTMLProps } from "react"

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({children}: Props) => {
    return (
      <button> {children} </button>
    )
}