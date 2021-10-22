import Navbar from './Navbar'
import Head from 'next/head';
import React, { ReactChild, FC } from 'react';
import "tailwindcss/tailwind.css";

type Props = {
	children: any,
	
}

const Layout: React.FC<Props> = ({children}) => {
	return (
		<>
		
		<Head>
        		<title>JS | Frontend Portfolio</title>
      		</Head>
		
		
		
		<div>
			{children}
		</div>
		</>
	)
}

export default Layout
