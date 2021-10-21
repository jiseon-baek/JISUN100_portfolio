import Navbar from './Navbar'
import Head from 'next/head'
import React, { ReactChild, FC } from 'react'

type Props = {
	children: ReactChild
}

const Layout: FC<Props> = ({children} : string) => {
	return (
		<>
		
		<Head>
        		<title>JS | Frontend Portfolio</title>
      		</Head>
		
		
		
		<div key={children.id}>
			{children}
		</div>
		</>
	)
}

export default Layout
