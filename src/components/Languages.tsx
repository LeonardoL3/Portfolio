import React from 'react'
import Link from 'next/link'

export const Languages = () => {

	//absolute right-0 m-8
	return (
		<div className=" text-black dark:text-white [&>*]:mr-2 text-sm">
			<Link href={'/pt-br'} locale="pt-br">
				<a> [pt] </a>
			</Link>
			<Link href={'/en-us'} locale="en-us">
				<a> [en] </a>
			</Link>
			<Link href={'/es-es'} locale="es-es">
				<a> [es] </a>
			</Link>
		</div>
	)
}

