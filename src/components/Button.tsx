import React, { ReactNode, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({name, onClick, children, ...rest}: Props) => {
	return (
		<button {...rest} type="button" name={name} onClick={onClick}> {children} </button>
	)
}