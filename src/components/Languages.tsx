import React from 'react'
import Link from 'next/link'

export const Languages = () => {

	return (
		<div className=" text-black dark:text-white [&>*]:mr-2 text-sm">
			<Link href='/' locale="pt">
				<a> [pt] </a>
			</Link>
			<Link href={'/'} locale="en">
				<a> [en] </a>
			</Link>
			<Link href={'/'} locale="es">
				<a> [es] </a>
			</Link>
		</div>
	)
}

