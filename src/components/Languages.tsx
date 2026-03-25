import React from 'react'
import Link from 'next/link'

export const Languages = () => {

	return (
		<div className=" text-black dark:text-white [&>*]:mr-2 text-sm">
			<Link href='/' locale="pt"> [pt] </Link>
			<Link href={'/'} locale="en"> [en] </Link>
			<Link href={'/'} locale="es"> [es] </Link>
		</div>
	)
}

