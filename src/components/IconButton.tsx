import React, { ReactNode, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement> {
	icon: ReactNode
}

export const IconButton = ({name, onClick, icon, ...rest}: Props) => {
	return (
		<button {...rest} type="button" name={name} onClick={onClick}> {icon} </button>
	)
}